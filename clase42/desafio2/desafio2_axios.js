const axios = require("axios");


async function crearPokemon () {
  const pokemon = {
    name: "Mew",
    type: "Pyscho",
    id: 149
  }
  try {
    const response = await axios.post("http://localhost:4000/pokemon", pokemon);
    console.log(response.data);
  } catch (err) {
    console.log(err)
  }
}

crearPokemon();