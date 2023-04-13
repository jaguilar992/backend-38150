import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "http://localhost:8080/api/pokemon",
  headers: {},
};

function App() {
  // Request
  const [pokemons, setPokemons] = useState([]);

  axios
    .request(config)
    .then((response) => {
      const _pokemons = response.data.data;
      setPokemons(_pokemons);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <h1>Pokedex</h1>
      <div className="pokemon-container">
        <br />
        {pokemons.map((pokemon) => {
          return (
            <div className="pokemon-card" key={pokemon.id}>
              <img
                className="pokemon-image"
                src={pokemon.image}
                alt={pokemon.name}
              />
              <div className="pokemon-name">
                {" "}
                {pokemon.id} {pokemon.name}
              </div>
              <div className="pokemon-types">
                <span className="pokemon-type">{pokemon.type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
