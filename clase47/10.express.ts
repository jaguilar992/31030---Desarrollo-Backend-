import express from "npm:express";

const app = express();

app.get("/", (_: any, res: any) => {
  res.send("Hola mundo desde Express usando deno")
});

app.get("/html", (_: any, res: any) => {
  res.send(`<!DOCTYPE html>
  <html>
    <head><title>Hello oak!</title><head>
    <body>
      <h1>Hola metodo get</h1>
      <p style="color: blue">Hola coder</p>
    </body>
  </html>
`);
});

app.listen(3000, () => {
  console.log("Express usando Deno")
})

// deno run --allow-net --allow-env --allow-read 10.express.ts