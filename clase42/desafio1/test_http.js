const http = require("http");
const fs = require("fs");

const options = {
  hostname: "jsonplaceholder.typicode.com",
  path: "/posts",
  port: 80,
  method: "GET",
}

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', data => {
    process.stdout.write(data);
    fs.writeFileSync("./postHttp.json", data);
  });
});

req.on('error', error => {
  console.log(error);
});

req.end();