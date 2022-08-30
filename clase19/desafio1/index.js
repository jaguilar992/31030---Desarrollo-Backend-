const connection = require("./database");
const { Estudiante } = require("./schema");
connection();


//  CRUD
// CREATE

// Estudiante.insertMany([
//   {"nombre":"Giacomo","apellido":"Jaxon","edad":42,"dni":"600-27-1057","curso":"Malayalam","nota":2},
//   {"nombre":"Shandra","apellido":"Clarycott","edad":18,"dni":"510-94-1948","curso":"Thai","nota":2},
//   {"nombre":"Jolene","apellido":"Longbothom","edad":50,"dni":"287-46-2366","curso":"Greek","nota":6},
//   {"nombre":"Nye","apellido":"Dorot","edad":28,"dni":"344-23-1959","curso":"Maltese","nota":2},
//   {"nombre":"Hillard","apellido":"Coo","edad":47,"dni":"280-22-4052","curso":"Sotho","nota":2},
//   {"nombre":"Elwyn","apellido":"Elcum","edad":27,"dni":"784-23-0053","curso":"Greek","nota":5},
// ]);


// READ
// (async () => {
//   const estudiantes = await Estudiante.find();
//   console.log(estudiantes);
// })();

// UPDATE
(async () => {
  const resultado = await  Estudiante.updateOne({
    nombre: "Hillard", apellido: "Coo"
  }, {
    $set: {"dni": "20555875"}
  });
  console.log(resultado);
})();

// (async () => {
//   await Estudiante.updateMany({}, {
//     $set: {"ingreso": false}
//   });
// })();


// (async () => {
//   const filtrados = await Estudiante.find({"nota" : {"$gte": 4}}, {
//     _id: 0, __v: 0
//   });
//   console.log(filtrados);
// })();

// (async () => {
//   const filtrados = await Estudiante.find({"ingreso" : true}, {
//     _id: 0, __v: 0
//   });
//   console.log(filtrados);
// })();


// // DELETE
// (async () => {
//   const resultado = await Estudiante.deleteMany({ingreso: true});
//   console.log(resultado);
// })();