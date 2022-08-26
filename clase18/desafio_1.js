// Crear una collection en la base empresa

use empresa;

db.createCollection("clientes");

show collections;

db.clientes.insertMany([
    {"name" : "Lorena",
    "age" : 20},
    {"name" : "Jonh",
    "age" : 20},
    {"name" : "Luke",
    "age" : 22}
]);

// 1. Crear la coleccion articulos en caso de que no exista
// 2. Insertar un conjunto de 4 documentos
db.articulos.insertMany([
 {nombre: "Hojas", precio: 40, stock: 100},
 {nombre: "Lapices", precio: 10, stock: 50},
 {nombre: "Borrador", precio: 20, stock: 200},
 {nombre: "Calculadora", precio: 500, stock: 5},
]);


show collections;

db.clientes.find(); // Listar los documentos en la coleccion clientes
db.articulos.find(); // Listar los documentos en la coleccion articulos

// Convertir Object Id a timestamp
// https://nddapp.com/object-id-to-timestamp-converter.html

db.clientes.estimatedDocumentCount(); // Conteo de documentos
db.articulos.estimatedDocumentCount(); // Conteo de documentos

// Filtros

// Usuarios - cuya age >=25
use plataforma;
db.users.find({age: {$gte: 25} }); // gte greater than and equal

db.users.find({age: {$in: [22, 26, 30, 44]}});

db.users.find({age: {$nin: [22, 26, 30, 44]}});


db.users.find({age: 20});

db.users.find({age: {$ne: 20}});


// AND implicito
// movies que tengan como escritor exactamente a "Quentin Tarantino" Y el año sea mayor que 2000
db.movies.find({ writer: "Quentin Tarantino", year: {$gt: 2000} }); 

// OR
// movies que tengan como escritor exactamente a "Quentin Tarantino" O que el año sea mayor que 2000
db.movies.find({
    $or: [
     {writer: "Quentin Tarantino"},
     {year: {$gt: 2000}}
    ]
});

// La primera ocurrencia en la coleccion cuyo año sea mayor o igual que 2002
db.movies.findOne({year: {$gte: 2002}}); 


db.movies.find({franchise: {$exists: true}}); // Documentos que tienen el campo franchise

db.movies.find({franchise: {$exists: false}});


// Usuarios cuya es 20. Pero solo necesito listar el nombre (Proyeccion)
// Especificamos un objeto despues del filtro {<campo>: <valor 1,0>}
// 1 indico que si devuelva el campo, con 0 indico que el campo no debe ser mostrado
db.users.find({age: 20}, {name: 1}); 
db.users.find({age: 20}, {name: 0});

// Buscar dentro de un array un elemento
// y devuelve el documento en cuestion
db.movies.find({actors: {$elemMatch: {$eq: "Edward Norton"}}});

// Ordenar por año en forma DESC
db.movies.find({}, {title: 1, year: 1}).sort({year: -1});

// Lo mismo pero aplicando filtros
db.movies.find({year: {$gt: 2000}}, {title: 1, year: 1}).sort({year: -1});


// Update 

// PRECAUCION, colocar el contenido exacto
db.users.update({_id: ObjectId("63053cac0a4bce7bcf0ad92c")}, {name: "Maria", edad: 15});

db.users.updateMany({age: {$gte: 15}}, {$inc: {age: 1}});

// Agregar un nuevo campo o modificar en caso de que exista
db.users.updateMany({}, {$set: {created: new ISODate()}});

// Eliminar el campo created de todos los documentos
db.users.updateMany({}, {$unset: {created: 1}});


// Delete
db.users.deleteOne({age: 10});

// DELETE ALL - PRECAUCIOM
// db.users.deleteMany({});


