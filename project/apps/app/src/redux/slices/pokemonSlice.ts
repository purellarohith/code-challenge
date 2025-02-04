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
  },
});

export const { 
    setPokemonList 
} = pokemonSlice.actions;


// Reducers
const pokemonReducer = pokemonSlice.reducer;

export {
    pokemonReducer
}