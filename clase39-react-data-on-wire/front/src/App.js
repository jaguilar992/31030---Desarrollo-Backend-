import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(()=> {
    const requestPokemon = async () => {
      const url = "http://localhost:3000/pokemon/"
      const { data } = await axios.get(url)
      setPokemons(data);
    }
    requestPokemon();
  }, []) 
  return (
    <div className="App">
      <h1>Pokemons</h1>
      {pokemons.map( pokemon => <div style={{color: "blue"}}>
        {pokemon.id}.- {pokemon.nombre} :: {pokemon.tipo}
      </div>)}
    </div>
  );
}

export default App;
