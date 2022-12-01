import PokemonService from "../services/pokemon";

export async function getAllPokemons(req, res) {
  const _result = await PokemonService.readAll();
  res.json(_result);
}

export async function addNewPokemon(req, res) {
  const { id, name, type = "Normal", HP = 10 } = req.body;
  if (!id || !name) {
    res.status(400).json({ mensaje: "Name, Id son requeridos" });
    return;
  }
  const _result = await PokemonService.save({ id, name, type, HP });
  res.status(201).json(_result);
}

export async function getPokemonById(req, res) {
  const id = parseInt(req.params.id) || 0;
  if (!id) {
    res.status(400).json({ mensaje: "Numero es requerido" });
    return;
  }
  const _result = await PokemonService.getById(id);
  if (!_result) {
    res.status(404).json({ mensaje: "Pokemon no encontrado" });
  }
  res.json(_result);
}

export async function updatePokemonById(req, res) {
  const id = parseInt(req.params.id) || 0;
  const { name, type = "Normal", HP = 10 } = req.body;

  if (!id || !name) {
    res.status(400).json({ mensaje: "Nombre y numero son requeridos" });
    return;
  }
  const _result = await PokemonService.updateById(id, {
    name,
    type,
    HP,
    id,
  });
  res.json(_result);
}

export async function deletePokemonById(req, res) {
  const id = parseInt(req.params.id) || 0;
  if (!id) {
    res.status(400).json({ mensaje: "Numero es requerido" });
    return;
  }
  const _result = await PokemonService.deleteById(id);
  res.json(_result);
}

export async function showPokemonView(req, res) {
  const pokemons = await PokemonService.readAll();
  res.render("pokemon", { pokemons });
}
