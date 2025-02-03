import { useEffect, useState } from 'react'
import { List } from 'ui'
import Axios from 'axios';

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {

  const [pokemonList, setPokemonList] = useState([]);


  useEffect(()=>{
    fetchAllPokimons()
  },[])


  const fetchAllPokimons = async () => {
      try {
        const response = await Axios.get(api);
        const data = await response.data
        console.log(data)
        setPokemonList(data.results);
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
