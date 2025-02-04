import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { List } from 'ui'
import Axios from 'axios';
import { RootMainState } from './redux/store';
import { setPokemonList } from './redux/slices/pokemonSlice';

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {

  const dispatch = useDispatch();
  const pokemonList = useSelector((state: RootMainState) => state.pokemon.allPokemons);
 

  useEffect(()=>{
    fetchAllPokimons()
  },[])


  const fetchAllPokimons = async () => {
      try {
        const response = await Axios.get(api);
        const data = await response.data
        dispatch(setPokemonList(data.results));     
       } catch (error) {
        console.error("Error", error);
      } 
  }

  return (
  <>
    <h1>Pokemon list:</h1>
    <List data={pokemonList} />
    
  </>
  )
}

export default App
