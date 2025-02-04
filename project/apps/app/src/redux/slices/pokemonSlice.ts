import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Pokemon {
  name: string;
}

interface PokemonState {
  allPokemons: Pokemon[];
}

const initialState: PokemonState = {
  allPokemons: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonList(state, action: PayloadAction<Pokemon[]>) {
      state.allPokemons = action.payload;
    },
    removePokemon(state,action:PayloadAction<Pokemon>){
      state.allPokemons = state.allPokemons.filter((pokemon) => pokemon.name !== action.payload.name);
    }
  },
});

export const { 
    setPokemonList ,
    removePokemon
} = pokemonSlice.actions;


// Reducers
const pokemonReducer = pokemonSlice.reducer;

export {
    pokemonReducer
}