import express from "express";
const app = express();
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

import crypto from "crypto";

const schema = buildSchema(`
  type Trainer {
    id: ID!
    name: String,
    city: String
  }
  input TrainerInput {
    name: String,
    city: String,
  }
  type Query {
    getTrainer(id: ID!): Trainer,
    getTrainers(campo: String, valor: String): [Trainer],
  }
  type Mutation {
    createTrainer(datos: TrainerInput): Trainer,
    updateTrainer(id: ID!, datos: TrainerInput): Trainer,
    deleteTrainer(id: ID!): Trainer,
  }
`);

class Trainer {
  constructor(id, {name, city}) {
    this.id = id;
    this.name = name;
    this.city = city;
  }
}

const trainersMap = {}

function getTrainers({campo, valor}) {
  const trainers = Object.values(trainersMap);
  if (campo && valor) {
    return trainers.filter(p => p[campo] === valor);
  } else return trainers;
}

function getTrainer({id}) {
  if (!trainersMap[id]) {
    throw new Error('Trainer not found')
  }
  return trainersMap[id];
}

function createTrainer({datos}) {
  const id = crypto.randomBytes(10).toString('hex');
  const newTrainer = new Trainer(id, datos);
  trainersMap[id] = newTrainer;
  return newTrainer;
}

function updateTrainer ({id, datos}) {
  if (!trainersMap[id]) {
    throw new Error('Trainer not found')
  }
  const updatedTrainer = new Trainer(id, datos);
  trainersMap[id] = updateTrainer;
  return updatedTrainer
}

function deleteTrainer({id}) {
  if (!trainersMap[id]) {
    throw new Error('Trainer not found')
  }
  const deletedTrainer = trainersMap[id];
  delete trainersMap[id];
  return deletedTrainer;
}

app.use("/graph", graphqlHTTP({
  schema,
  rootValue: {
    getTrainer,
    getTrainers,
    createTrainer,
    updateTrainer,
    deleteTrainer
  },
  graphiql: true,
}));

const PORT = 4000;
app.listen(PORT, () => {
  const msg = `Running on ${PORT}`;
  console.log(msg);
})