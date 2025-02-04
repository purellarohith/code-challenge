import { configureStore } from '@reduxjs/toolkit'
import { pokemonReducer } from './slices/pokemonSlice';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,

  }
}) 


export default store

export type RootMainState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;