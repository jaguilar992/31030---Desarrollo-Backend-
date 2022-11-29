const axios = require("axios")

function peticion1() {
  return axios.get("http://localhost:4000/pokemon/768");
}

function peticion2() {
  return axios.get("http://localhost:4000/pokemon/405");
}

Promise.all([
  peticion1(),
  peticion2()
]).then( results => {
  results.forEach(pokemon => {
    console.log(pokemon.data);
  })
});