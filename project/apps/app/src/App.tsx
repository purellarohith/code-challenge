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
    <div id='container'>
        Question 1: How did you manage to fetch the list and what tool did you use?
        <br />
        Ans: I used the Axios package for fetching data instead of the native fetch API.
        <br />
        <br />
        <br />
        Question 2: What steps would you take to future improve this?
        <br />
        Ans: Here are some improvements i can make to enhance code readability..
        <br />
        1) I will implement redux toolkit for managing store
        <br />
        2) I will create a pokimon slice in redux toolkit and make all the api calls and state management related stuff in this slice.
        <br />
        3) I will store the fetched data in redux store for better state management.
    </div>
  </>
  )
}

export default App
