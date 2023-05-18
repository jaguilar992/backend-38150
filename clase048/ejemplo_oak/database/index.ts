import { MongoClient } from "../deps.ts";
import { Pokemon } from "../schemas/index.ts";
import { config } from "../configuration.ts";
const URI = config.MONGO_URI;

const client = new MongoClient();
// Connecting to a Local Database
try {
  await client.connect(URI);
} catch (e) {
  console.error(e);
}

export default client;
export const database = client.database("pokemon");

// Collections
export const PokemonCollection = database.collection<Pokemon>("pokemons");