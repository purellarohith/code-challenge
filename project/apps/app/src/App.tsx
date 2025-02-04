import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "ui";
import Axios from "axios";
import { RootMainState } from "./redux/store";
import { setPokemonList } from "./redux/slices/pokemonSlice";

const api = "https://pokeapi.co/api/v2/pokemon?limit=151";

const App = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(
    (state: RootMainState) => state.pokemon.allPokemons
  );

  useEffect(() => {
    fetchAllPokimons();
  }, []);

  const fetchAllPokimons = async () => {
    try {
      const response = await Axios.get(api);
      const data = await response.data;
      dispatch(setPokemonList(data.results));
    } catch (error) {
      console.error("Error", error);
    }
  };


  return (
    <>
      <h1>Pokemon list:</h1>
      <List data={pokemonList} />
      <div id="container">
        Question 6: How can you verify the action has been dispatched?
        <br />
        Ans: We can confirm by checking data changes in dev tools and also by
        logging in reducer using action.payload.
        <br />
        <br />
        <br />
        Question 7: Explain the use of useEffect hook in React.
        <br />
        Ans: useEffect allows running side effects in functional components. It
        is commonly used for:
        <br />
        <ul>
          <li>Fetching API data</li>
          <li>Subscribing to events</li>
          <li>Managing timers</li>
        </ul>
        <br />
        Example: 
        <br />
        <code>
        {`       
          useEffect(() => {
            console.log("Component Mounted");
            
            return () => {
              console.log("Cleanup on Unmount. This return will triggered on unmont of component");
              };
              }, []);
              `}
        </code>
              <br />
              <br />
              <br />
              Question 8: What is a Higher-Order Component (HOC)?
              <br />
              Ans: A Higher-Order Component (HOC) is a function that takes a component and returns a new component with added functionality. Mainly used for authentication of the user or user level authentication with different functionality or to render user specific UI components.
              <br />
              <br />
              <br />
              Question 10: What does it indicate when a component is prefixed with use?
              <br />
              Ans: The function with use prefix is called as custom hook in react.
              <br />
              <br />
              <br />
              Question 11: What is a Generic Type in TypeScript?
              <br />
              Ans: The Generic type function is used to pass type of variable dynamically in TypeScript functions .
              <br />
              <br />
              <br />
              Question 12: What's the difference between a controlled and uncontrolled input in React?
              <br />
              Ans: The compontns which uses states to controll value are called controlled component. For uncontrolled input we use useRef by which we take reference of the input element and manuplate directly.
      </div>
    </>
  );
};

export default App;
