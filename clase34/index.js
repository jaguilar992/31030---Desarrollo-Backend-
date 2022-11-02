const express = require("express");
const app = express();
const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-2",
});

const sns = new AWS.SNS();
const SNS_TOPIC_ARN = "arn:aws:sns:us-east-2:560173732205:notificaciones";
const dynamodb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "productos";
const PORT = process.env.PORT || 8080;
app.use(express.json());

async function scanDynamoRecords(scanParams) {
  try {
    let dynamoData = await dynamodb.scan(scanParams).promise();
    const items = dynamoData.Items;
    while (dynamoData.LastEvaluatedKey) {
      scanParams.ExclusiveStartKey = dynamoData.LastEvaluatedKey;
      dynamoData = await dynamodb.scan(scanParams).promise();
      items.push(...dynamoData.Items);
    }
    return items;
  } catch (error) {
    throw new Error(error);
  }
}

app.get("/", (req, res) => {
  res.send("Test API");
});

app.get("/products", async (req, res) => {
  const params = {
    TableName: TABLE_NAME,
  };
  try {
    const productos = await scanDynamoRecords(params);
    res.json(productos);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.post("/products", (req, res) => {
  const params = {
    TableName: TABLE_NAME,
    Item: req.body,
  };

  dynamodb
    .put(params)
    .promise()
    .then(() => {
      console.log("Registro Guardado");
      const prod = JSON.stringify(req.body);
      return sns
        .publish({
          Message: `Nuevo producto agregado ${prod}`,
          Subject: "Nuevo Producto",
          TopicArn: SNS_TOPIC_ARN,
        })
        .promise()
        .then((data) => {
          console.log("Notificacion enviada");
          console.log(data);
          const response = {
            Operation: "SAVE",
            Message: "SUCCESS",
            Item: req.body,
          };
          res.json(response);
        });
    });
});

const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

server.on("error", (err) => console.log(err));
