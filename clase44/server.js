import express from "express";
const app = express();
import cors from "cors";

import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

import crypto from "crypto";

const schema = buildSchema(`
  type Trainer {
    id: ID!
    name: String
    city: String
  }

  input TrainerInput {
    name: String
    city: String
  }

  type Query {
    getTrainer(id: ID!): Trainer
    getTrainers(campo: String, valor: String): [Trainer]
  }

  type Mutation {
    createTrainer(datos: TrainerInput): Trainer
    updateTrainer(id: ID!, datos: TrainerInput): Trainer
    deleteTrainer(id: ID!): Trainer
  }
`);

class Trainer {
  constructor (id, {name, city}) {
    this.id = id;
    this.name = name;
    this.city = city;
  }
}

const trainersContainer = {};
/**
 *  {
 *    "1" : {name, id, city},
 *    "2" : {name2, id2, city2},
 *  }
 * 
 * */


// Resolutions
function getTrainer({ id }) {
   if (!trainersContainer[id]) {
    throw new Error('Trainer not found');
   }
   return trainersContainer[id];
}

/** 
 * [
 * {name, id, city},
 * {name2, id2, city2},
 * ]
 * 
 * 
*/

/***{ city:'Barcelona'}*/
function getTrainers({ campo, valor }) {
  const trainers = Object.values(trainersContainer);
  if (campo && valor) {
    return trainers.filter( p => p[campo] === valor);
  } else return trainers;
}

function createTrainer({datos}) {
  const id = crypto.randomBytes(10).toString('hex');
  const newTrainer = new Trainer(id, datos);
  trainersContainer[id] = newTrainer;
  return newTrainer;
}

function updateTrainer ({id, datos}) {
  if (!trainersContainer[id]) {
    throw new Error('Trainer not found')
  }
  const updatedTrainer = new Trainer(id, datos);
  trainersContainer[id] = updatedTrainer;
  return updatedTrainer
}

function deleteTrainer({id}) {
  if (!trainersContainer[id]) {
    throw new Error('Trainer not found')
  }
  const deletedTrainer = trainersContainer[id];
  delete trainersContainer[id];
  return deletedTrainer;
}

app.use(cors());
app.use("/graphql", graphqlHTTP({
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
  console.log(`Ejecuntando servidor en puerto: ${PORT}`);
});