const { faker } = require("@faker-js/faker");
const fs = require("fs");

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
  const employees = generateEmployees(n);
  return {
    id: faker.datatype.number({min: 1, max: 10000}),
    company_name: faker.company.name(),
    CEO: employees[0],
    manager: employees[1],
    employees: employees.slice(2)
  }
};

const company = generateCompany();
try {
  fs.writeFileSync(__dirname +"/../data/company.json", JSON.stringify(company, null, 2), "utf-8");
} catch (err) {
  console.log("🚀 ~ file: generateCompany.js ~ line 30 ~ err", err)
}