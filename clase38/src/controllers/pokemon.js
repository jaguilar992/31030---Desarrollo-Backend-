const PokemonService = require("../services/pokemon");

function getAllPokemons(req, res){
  const _result = PokemonService.readAll();
  res.json(_result);
}

function addNewPokemon(req, res){
  const {id, nombre, tipo = "Normal", HP = 10} = req.body;
  if (!id || !nombre){
    res.status(400).json({mensaje: "Nombre y numero son requeridos"});
    return;
  }
  const _result = PokemonService.save({id, nombre, tipo, HP});
  res.json(_result)
}

function getPokemonById(req, res){
  const id = parseInt(req.params.id) || 0;
  if (!id) {
    res.status(400).json({mensaje: "Numero es requerido"});
    return;
  }
  const _result = PokemonService.getById(id)
  if (!_result) {
    res.status(404).json({mensaje: "Pokemon no encontrado"})
  }
  res.json(_result);
}

function updatePokemonById(req, res){
  const id = parseInt(req.params.id) || 0;
  const {nombre, tipo = "Normal", HP = 10} = req.body;
  
  if (!id || !nombre){
    res.status(400).json({mensaje: "Nombre y numero son requeridos"});
    return;
  }
  const _result = PokemonService.updatePokemonById(id, {nombre, tipo, HP, id})
  res.json(_result);
}

function deletePokemonById(req, res){
  const id = parseInt(req.params.id) || 0;
  if (!id) {
    res.status(400).json({mensaje: "Numero es requerido"});
    return;
  }
  const _result = PokemonService.deleteById(id)
  res.json(_result);
}


module.exports = {
  getAllPokemons,
  addNewPokemon,
  getPokemonById,
  updatePokemonById,
  deletePokemonById
}