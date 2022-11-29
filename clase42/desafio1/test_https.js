const https = require("https");
const fs = require("fs");

const options = {
  hostname: "jsonplaceholder.typicode.com",
  path: "/posts",
  port: 443,
  method: "GET",
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', data => {
    fs.writeFileSync("./postHttps.json", data.toString());
  });
});

req.on('error', error => {
  console.log(error);
});

req.end();