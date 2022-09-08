const {normalize, schema, denormalize} = require("normalizr");
const fs = require("fs");

const data = require("./data/company.json");

const employee = new schema.Entity("employees", {});

const company = new schema.Entity("company", {
  CEO: employee,
  manager: employee,
  employees: [employee]
});

const normalizedData = normalize(data, company);
// const denormalizedData = denormalize(normalizedData.result, post, normalizedData.entities);

const filename = "./data_normalized/company.json";

try {
  fs.writeFileSync(filename, JSON.stringify(normalizedData, null, 2), "utf-8")
} catch (err) {
  console.log("🚀 ~ file: index.js ~ line 29 ~ err", err)
}

// try {
//   fs.writeFileSync("./data.json", JSON.stringify(denormalizedData, null, 2), "utf-8")
// } catch (err) {
//   console.log("🚀 ~ file: index.js ~ line 29 ~ err", err)
// }

console.log({
  original: JSON.stringify(data).length / 1024, 
  normalized: JSON.stringify(normalizedData).length / 1024,
  // denormalize: JSON.stringify(denormalizedData).length / 1024, 
})