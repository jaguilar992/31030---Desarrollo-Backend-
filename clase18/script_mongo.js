show dbs;

use plataforma;

db.createCollection("blogs"); // crear una colección

show collections;

db.blogs.drop();

db.users.stats(); // Mostrar información de una colección.

// CRUD CON MONGODB

// CREATE

db.movies.insertOne({
    title: "Fight Club",
    writer: "Chuck Palahniuk",
    year: 1999,
    actors: [
      "Brad Pitt",
      "Edward Norton"
    ]
}); // Crear un único registro

db.movies.insertOne({title : "Pulp Fiction", writer : "Quentin Tarantino", year : 1994, actors : ["John Travolta", "Uma Thurman"]}); // Crear un único registro

db.movies.insertMany([
{title : "Inglorious Basterds",
writer : "Quentin Tarantino",
year : 2009,
actors : ["Brad Pitt","Diane Kruger","Eli Roth"]},

{title : "The Hobbit: An Unexpected Journey",
writer : "J.R.R. Tolkein",
year : 2012,
franchise : "The Hobbit"}
]); // Insertar varios registros

// READ
db.movies.find();

db.movies.findOne();


// Conteo de documentos
db.movies.estimatedDocumentCount(); // O(1) -- No es preciso

db.movies.countDocuments({year: 2012}); // O(N) -- Mas preciso pero lento // CountDocuments recibe un objeto para filtrar


db.movies.countDocuments({title: "Fight Club"}); // Utilidad para encontrar duplicados en la base




