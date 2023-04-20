import axios from "axios";

const baseUrl = "http://localhost:8080/api/pokemon";

async function getPokemons() {
  try{
    const {data} = await axios.get(baseUrl + "/");
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getPokemonById(id) {
  try{
    const {data} = await axios.get(baseUrl + "/" + id);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function createPokemon(
  id, name, type
) {
  try{
    const {data} = await axios.post(baseUrl + "/", 
    {
      id,
      name,
      type,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { getPokemons, getPokemonById, createPokemon };