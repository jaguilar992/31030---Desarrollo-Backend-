import { useEffect, useState } from "react";
import { deletePokemonById, getAllPokemons, updatePokemon } from "../api/services";
import styled from "styled-components";

const PokemonItem = styled.div`
  height: 100px;
  width: 100%;
  border: 1px solid gray;
  margin-bottom: 10px;
`

const Form = styled.div`
  width: 100%;
  margin-bottom: 20px;
  & input {
    width: 100%;
    height: 25px;
  }
`

const ListaPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState ("");
  const [id, setId] = useState("");

  // EDICION INSERCION
  const [tipoOperacion, setTipoOperacion] = useState("EDICION")
  
  const requestPokemon = async () => {
    const pokemons = await getAllPokemons();
    setPokemons(pokemons);
  }

  const onClickBorrar = async (id) => {
    const {data} = await deletePokemonById(id);
    requestPokemon();
    console.log(data);
  }

  const onSend = async () => {
    const {data} = updatePokemon(id, {
      id, name, type
    });
    requestPokemon();
    console.log(data)
  }

  const onClickEdit = (id, name, type) => {
    console.log(id, type,name);
    setId(id);
    setType(type);
    setName(name);
  }

  useEffect(()=> {
    requestPokemon();
  }, []);

  return (
    <div>
      <h2>Agregar o Editar Pokemon</h2>
      <Form action="#">
        <label htmlFor="name">name</label>
        <input type="text" value={name} name="name" id="name" onChange={e => setName(e.target.value)}/>
        <label htmlFor="id">id</label>
        <input type="text" value={id} name="id" id="id" onChange={e => setId(e.target.value) }/>
        <label htmlFor="type">type</label>
        <input type="text" value={type} name="type" id="type" onChange={ e => setType(e.target.value) }/>
        <button>Reset</button>
        <button onClick={() => onSend()}>Enviar</button>
      </Form>

      <h2>Pokemons</h2>
      { pokemons.map( pokemon => 
      <PokemonItem style={{color: "blue"}} key={pokemon.id}>
        {pokemon.id}.- {pokemon.name} :: {pokemon.type}
        <button onClick ={() => onClickEdit(pokemon.id, pokemon.name, pokemon.type)} >Editar</button>
        <button onClick={ ()=>onClickBorrar(pokemon.id) }>Borrar</button>
      </PokemonItem>)}
    </div>
  );  
}


export default ListaPokemon;