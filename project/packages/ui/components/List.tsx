import React from 'react'
import { useDispatch } from "react-redux";
import { removePokemon } from '../../../apps/app/src/redux/slices/pokemonSlice';


type Pokemon = {
  name: string;
  url: string;
};

type PokemonList ={
  data:Pokemon[];
}


export const List:React.FC<PokemonList> = ({
  data
}:PokemonList) => {

  const dispatch = useDispatch();


  const handleRemovePokemon = (name: string) => {
    dispatch(removePokemon({name}));
  };

  return (
  <div>
    <div id='list'>
      {
        data.map((val,index) => (
          <div key={val.name} className='itemContainer'>
          <label >{`${index + 1}) ${val.name}`}</label>
          <button  onClick={() => handleRemovePokemon(val.name)}>X</button>
          </div>
        ))
      }
    </div>
  </div>)
}


