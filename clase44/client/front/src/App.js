import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";

function App() {
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    const sync = async () => {
      const data = JSON.stringify({
        query: `query {
          getTrainers{name, city}
      }`,
        variables: {}
      });
      const config = {
        method: 'post',
        url: 'http://localhost:4000/graphql',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      const resp = await axios(config);
      console.log(resp.data);
      setTrainers(resp.data)
    }
    sync();
  }, []);
  return (
    "Hola"
  );
}

export default App;
