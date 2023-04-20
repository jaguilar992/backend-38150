import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { getPokemons } from '../services/pokemon.service';
import '../styles/pokedex.style.css';

export const PokedexScreen = () => {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPokemonsFromApi = async () => {
      const pokemons = await getPokemons();
      setPokemons(pokemons.data)
    };
    getPokemonsFromApi();
  }, []);

  const onClickAddNewPokemonButton = () => {
    navigate('/pokemon/new');
  }

  return (
    <React.Fragment>
      <h1>Pokedex</h1>
      <button onClick={onClickAddNewPokemonButton}>Add New Pokemon</button>
      <div className='pokemon-container'>
      {pokemons.map((pokemon) => {
        return (
          <div key={pokemon.id} className='pokemon-card'>
            <span className='pokemon-number'>{pokemon.id}</span>
            <img className='pokemon-image' src={pokemon.image} alt={pokemon.name} />
            <div className='pokemon-name'>{pokemon.name}</div>
            <div className='pokemon-types'>
              <span className='pokemon-type'>{pokemon.type}</span>
            </div>

          </div>
        )
      })}
    </div>
    </React.Fragment>
  )
}
