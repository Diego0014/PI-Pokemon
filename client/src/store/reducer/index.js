import {
  GET_POKEMONS,
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_NAME,
  GET_TYPES,
  POST,
} from "../../constants/index";

const initialState = {
  pokemons: [],
  filteredPokemons: [],
  types: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        filteredPokemons: action.payload,
      };
    case GET_POKEMON_BY_ID:
      return {
        ...state,
        pokemons: state.pokemons.map((pokemon) => {
          if (pokemon.id === action.payload.id) {
            return action.payload;
          }
          return pokemon;
        }),
        filteredPokemons: state.filteredPokemons.map((pokemon) => {
          if (pokemon.id === action.payload.id) {
            return action.payload;
          }
          return pokemon;
        }),
      };
    case GET_POKEMON_BY_NAME:
      return {
        ...state,
        pokemons: state.pokemons.map((pokemon) => {
          if (pokemon.name === action.payload.name) {
            return action.payload;
          }
          return pokemon;
        }),
        filteredPokemons: state.filteredPokemons.map((pokemon) => {
          if (pokemon.name === action.payload.name) {
            return action.payload;
          }
          return pokemon;
        }),
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case POST:
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
        filteredPokemons: [...state.filteredPokemons, action.payload],
      };
    default:
      return state;
  }
}
