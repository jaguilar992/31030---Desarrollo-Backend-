const {normalize, schema, denormalize} = require("normalizr");
const fs = require("fs");

const data = require("./data/holding.json");

const employee = new schema.Entity("employees", {});

const company = new schema.Entity("company", {
  CEO: employee,
  manager: employee,
  employees: [employee]
});

const holding = new schema.Entity("holding", {
  companies: [company]
});

// Ejemplo cuando el id (referencia entre entidades) a usar tiene otro
// const holding = new schema.Entity("holding", {
//   companies: [company]
// }, {
//   idAttribute: "email"
// })

const normalizedData = normalize(data, holding);
const denormalizedData = denormalize(normalizedData.result, holding, normalizedData.entities);

const filename = "./data_normalized/holding.json";

try {
  fs.writeFileSync(filename, JSON.stringify(normalizedData, null, 2), "utf-8")
} catch (err) {
  console.log("🚀 ~ file: index.js ~ line 29 ~ err", err)
}

console.log({
  original: JSON.stringify(data).length / 1024, 
  normalized: JSON.stringify(normalizedData).length / 1024,
  denormalize: JSON.stringify(denormalizedData).length / 1024, 
})