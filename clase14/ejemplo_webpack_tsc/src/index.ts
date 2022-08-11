import express from 'express';
const app = express();
import Persona from './models/Persona';

import { getTime } from './utils/time';

const persona = new Persona('Juan', 'Perez');

app.get("/", (req, res) => {
  res.send(
    {
      message: `Hola ${persona.getFullName()}`,
      time: getTime()
    }
  );
});

app.listen(8080, () => {
  console.log('Servidor corriendo en el puerto 8080');
});