const { faker } = require("@faker-js/faker");
const fs = require("fs");

Array.prototype.sample = function(num){ return this.map(a => [a,Math.random()]).sort((a,b) => {return a[1] < b[1] ? -1 : 1;}).slice(0,num).map(a => a[0]); };

const employees = generateEmployees();

function generateEmployees(n=10) {
  return Array(n).fill(null).map((employee, i) => ({
    id: i + 1,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    ssn: faker.datatype.hexadecimal({length: 9, prefix: '', case: 'upper'}),
    address: faker.address.streetAddress(),
    phone: faker.phone.number('+1-###-###-###')
  }));
}

function generateCompany(n=100) {
  return {
    id: faker.datatype.number({min: 1, max: 10000}),
    company_name: faker.company.name(),
    CEO: employees.sample(1)[0],
    manager: employees.sample(1)[0],
    employees: employees.sample(n-2)
  }
};

// const company = generateCompany();
function generateHolding(n=20) {
  return {
    id: faker.datatype.number({min: 1, max: 10000}),
    companies: Array(n).fill(null)
      .map((_, i) => generateCompany(faker.datatype.number({min: 3, max: 100})))
  }
}
const holding = generateHolding()
try {
  fs.writeFileSync(__dirname +"/../data/holding.json", JSON.stringify(holding, null, 2), "utf-8");
} catch (err) {
  console.log("🚀 ~ file: generateCompany.js ~ line 30 ~ err", err)
}