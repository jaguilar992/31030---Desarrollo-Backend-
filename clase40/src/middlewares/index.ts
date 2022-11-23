const jwt = require("jsonwebtoken");
import {JWT_KEY} from "../config";

export function isAuth (req, res, next ) {
  const headers = req.headers;
  if(!headers.authorization) {
    res.status(401).json({
      mensaje: "Token requerido"
    });
    return ;
  }
  const token = headers.authorization.split(" ")[1];
  try {
    const verified = jwt.verify(token, JWT_KEY || "");
  } catch (err) {
    res.status(400).json({
      mensaje: "Token invalido"
    });
    return;
  }
  next();
}