import TrainerService from "../services/trainer";
const objectIdRegex = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/ig

export async function addTrainer(req, res) {
  const {name, age, city} = req.body;
  if (!name || !age || !city) {
    res.status(400).json({
      mensaje: "name, age, city requeridos"
    })
    return 
  }
  const _result = await TrainerService.save({name, age, city})
  res.json(_result);
}

export async function getTrainerInfo(req, res) {
  const id = req.params.id;
  if (!id){
    res.status(400).json({
      mensaje: "id es requerido"
    })
    return 
  }
  const _result = await TrainerService.getInfo(id)
  res.json(_result);
}

export async function addPokemon(req, res) {
  const id = req.params.id;
  const {pokemonId} = req.body;

  if (!id || !pokemonId){
    res.status(400).json({
      mensaje: "Id del trainer y pokemon es requerido"
    })
    return 
  }

  const _result = await TrainerService.addPokemon(id, pokemonId);
  res.json(_result);
}
