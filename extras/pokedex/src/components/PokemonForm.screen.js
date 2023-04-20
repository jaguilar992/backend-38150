import React, {useState} from 'react'
import { createPokemon } from '../services/pokemon.service';
import { useNavigate } from 'react-router-dom';

export const PokemonForm = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  
  const navigate = useNavigate();

  const onClickAddNewPokemonButton = async () => {
    console.log(id, name, type);
    try {
      const response = await createPokemon(id, name, type);
      console.log(response)
      navigate('/pokedex');
      // if (response.status === 201) {
        // alert('Pokemon created successfully');
      // }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <React.Fragment>
      <div>Add a new Pokemon</div>
      <input type="text" value={id} onChange={(e)=>setId(e.target.value)} placeholder='ID'/>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='NAME'/>
      <input type="text" value={type} onChange={(e)=>setType(e.target.value)} placeholder='TYPE'/>
      <button onClick={onClickAddNewPokemonButton}> Enviar </button>
    </React.Fragment>
  )
}
