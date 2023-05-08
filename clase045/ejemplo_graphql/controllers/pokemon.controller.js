// Resolutions para los querys
export function getPokemon({id}) {
  if (!pokemonsDB[id]) {
    throw new Error(`No existe un pokemon con el id ${id}`);
  }
  return new Pokemon(id, pokemonsDB[id]);
}

export function getPokemons({campo, valor}) {
  const pokemons = Object.values(pokemonsDB);
  if (campo && valor) {
    return pokemons.filter(pokemon => pokemon[campo] === valor);
  } else return pokemons;
}

// Resolutions para los mutations
export function addPokemon({data}) {
  // db0fb82fdd3b78666f5d
  const id = crypto.randomBytes(10).toString("hex");
  const pokemon = new Pokemon(id, data);
  pokemonsDB[id] = pokemon;
  return pokemon;
}

export function updatePokemon({id, data}) {
  if (!pokemonsDB[id]) {
    throw new Error(`No existe un pokemon con el id ${id}`);
  }
  const pokemon = new Pokemon(id, data);
  pokemonsDB[id] = pokemon;
  return pokemon;
}

export function deletePokemon({id}) {
  if (!pokemonsDB[id]) {
    throw new Error(`No existe un pokemon con el id ${id}`);
  }
  const deletedPokemon = pokemonsDB[id];
  delete pokemonsDB[id];
  return deletedPokemon;
}