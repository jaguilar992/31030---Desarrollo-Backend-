const TrainerService = require("../services/trainer");

function addTrainer(req, res) {
  const {nombre, edad, ciudad} = req.body;
  if (!nombre || !edad || !ciudad) {
    res.status(400).json({
      mensaje: "name, edad, ciudad requeridos"
    })
    return 
  }
  const _result = TrainerService.save({nombre, edad, ciudad})
  res.json(_result);
}
function getTrainerInfo(req, res) {
  const id = parseInt(req.params.id);
  if (!id ){
    res.status(400).json({
      mensaje: "id es requerido"
    })
    return 
  }
  const _result = TrainerService.getInfo(id)
  res.json(_result);
}

function addPokemon(req, res) {
  const id = parseInt(req.params.id);
  const {pokemonId} = req.body;

  if (!id || !pokemonId){
    res.status(400).json({
      mensaje: "Id del trainer y pokemon es requerido"
    })
    return 
  }

  const _result = TrainerService.addPokemon(id, pokemonId);
  res.json(_result);
}


module.exports = {
  addTrainer,
  getTrainerInfo,
  addPokemon
}