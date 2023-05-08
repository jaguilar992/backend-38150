import express  from "express";
import cors from "cors";
import crypto from "crypto";
import { pokemonGraphqlRouter } from "./routers/pokemon.router";

class Pokemon {
  constructor(id, {name, type, number}) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.number = number;
  }
}

const pokemons = [
  {name: 'Pikachu', type: 'Electrico', number: 25},
  {name: 'Charmander', type: 'Fuego', number: 4},
  {name: 'Squirtle', type: 'Agua', number: 7},
  {name: 'Bulbasaur', type: 'Planta', number: 1},
  {name: 'Charizard', type: 'Fuego', number: 6},
]

// Objeto para almacenar los pokemons
// Diccionario de pokemons
const pokemonsDB = {}; 

// Prepopulando la base de datos
pokemons.forEach((pokemon, index) => {
  const id = crypto.randomBytes(10).toString("hex");
  pokemonsDB[id] = new Pokemon(id, pokemon);
});

const app = express();
app.use(cors());

app.use('/graphql', pokemonGraphqlRouter);

const PORT = 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})