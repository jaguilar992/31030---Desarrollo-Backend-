const express = require("express");
const cookieParser = require("cookie-parser")
const app = express();

app.use(cookieParser("STRING_SECRETA"));

app.get("/", (req, res) => {
  const expiration = req.query.expiration; 
  res.cookie("cookie", "cookie-value", 
    expiration ? {maxAge: expiration} : null,
  ).send({
    message: "Cookie creada",
    expiration
  });
});

app.get("/read", (req, res) => {
  res.send({
    cookies: req.cookies
  })
});

// Signed Cookies

app.get("/signed", (req, res) => {
  const expiration = req.query.expiration; 
  res.cookie("cookie-signed", "cookie-signed-value", 
    expiration ? {maxAge: expiration, signed: true} : {signed: true},
  ).send({
    message: "Signed cookie cread",
    expiration
  });
});

app.get("/readSigned", (req, res) => {
  res.send({
    cookies: req.signedCookies
  })
});

app.get("/delete", (req, res) => {
  res.clearCookie("cookie").clearCookie("cookie-signed").send("OK")
})

app.listen(8080, () => {
  console.log("Running server")
});