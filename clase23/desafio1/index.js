const express = require("express");
const cookieParser = require("cookie-parser")
const app = express();

app.use(cookieParser("STRING_SECRETA"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.post("/cookie", (req,res)=> {
  const key = req.body.key;
  const value = req.body.value;
  const exp = Number(req.body.exp);
  const signed = req.body.signed === true;
  if (!key || ! value) {
    res.status(400).json({
      error: "Para agregar una cookie, agregue los campos key & value"
    });
    return 
  }
  res.cookie(key, value, {
    maxAge: exp ? exp : null,
    signed
  }).json({
    key, value
  })
});

app.get("/cookie", (req, res) => {
  const signed = req.query.signed === "true";
  res.json({
    cookies: signed ? req.signedCookies : req.cookies,
    type: signed ? "signed" : "non-signed"
  });
});

app.delete("/cookie/:key", (req, res) => {
  const key = req.params.key;
  const exist = key in req.cookies || key in req.signedCookies;
  if (!exist) {
    res.json({err: `Error: ${key} no existe`})
    return
  }
  res.clearCookie(key).json({ok: "ok"});
})

app.listen(8080, () => {
  console.log("Running server")
});