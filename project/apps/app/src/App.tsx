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
    <div id='container'>
        Question 4: What makes the createSlice in redux-toolkit difference then A Reducer in redux?        
        <br />
        Ans: createSlice has combining action creators and reducers in one function.Underneth redux toolkit uses Immer for immutable updates. We don't need to use switch statements anymore.
        <br />
        <br />
        <br />
        Question 5: Describe the benefits of immutable code.
        <br />
        Ans:The Immutable code prevents accidental mutations, making debugging easier and ensuring predictable state updates.
    </div>
  </>
  )
}

export default App
