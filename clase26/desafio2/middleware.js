const jwt = require("jsonwebtoken");
const SECRET = "LasBaleadasSonDeliciosas"; // Agregar al .env

module.exports = function validateJWT(req, res, next) {
  const tokenHeader = req.headers?.authorization;
  console.log(tokenHeader);
  if (!tokenHeader) {
    res.status(401).send({message: "No autorizado"});
    return ;
  }
  // nota: Si estamos implementadn Authorization: Bearer <JWT>
  const token = tokenHeader?.split(" ")[1];
  console.log(token);
  try {  
    const validate = jwt.verify(token, SECRET);
    console.log("🚀 ~ file: middleware.js ~ line 16 ~ validateJWT ~ validate", validate)
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send({message: "No autorizado"})
  }
}