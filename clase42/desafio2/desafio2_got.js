const got = require("got");


async function crearPokemon () {
  const pokemon = {
    name: "Mew",
    type: "Pyscho",
    id: 149
  }
  try {
    const response = await got.post("http://localhost:4000/pokemon", {
      json: pokemon,
      responseType: 'json'
    });
    console.log(response.body);
  } catch (err) {
    console.log(err)
  }
}

crearPokemon();