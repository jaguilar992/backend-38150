import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import { PokedexScreen } from "./components/Pokedex.screen";
import { PokemonForm } from "./components/PokemonForm.screen";
import { TrainerScreen } from "./components/trainer.screen";

const config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "http://localhost:8080/api/pokemon",
  headers: {},
};

function App() {
  // Request
  const [pokemons, setPokemons] = useState([]);

  const router = createBrowserRouter([
    {path: "/", element: <h1>Welcome to Pokedex</h1>},
    {path: "/pokedex", element: <PokedexScreen /> },
    {path: '/trainer/:dni' , element: <TrainerScreen />  },
    {path: "/pokemon/new", element: <PokemonForm /> },
  ])

  return <RouterProvider router={router}/>
}

export default App;
