const moment = require("moment");

const actualDate = moment();
const birthDate = moment("2000-01-01"); // O1 Jan 2020

const deltaDays = actualDate.diff(birthDate, "days");
const deltaYears = actualDate.diff(birthDate, "years");

console.log(`1. La fecha actual es ${actualDate.format("DD/MM/YYYY")}`)
console.log(`2. La fecha de nacimiento es ${birthDate.format("DD/MM/YYYY")}`)
console.log(`3. Han pasado ${deltaDays} días desde mi fecha de nacimiento`);
console.log(`4. Han pasado ${deltaYears} años desde mi fecha de nacimiento`);
