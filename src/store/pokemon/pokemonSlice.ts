import { SimplePokemon } from "@/pokemons";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PokemonState {
  favorites: {
    [key: string]: SimplePokemon;
  };
}

/* const getInitialState = (): PokemonState => {
  const favorites = JSON.parse(
    localStorage.getItem("favorite-pokemons") ?? "{}"
  );
  return favorites;
}; */

const initialState: PokemonState = {
  favorites: {},
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setFavoritePokemons: (state, action: PayloadAction<{[key: string]: SimplePokemon}>) => {
      state.favorites = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }

      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));
    },
  },
});

export const { setFavoritePokemons, toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
