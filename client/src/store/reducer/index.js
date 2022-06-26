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
  pokemonDetail: [],
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
        pokemonDetail: action.payload,
        filteredPokemons: action.payload,
      };
    case GET_POKEMON_BY_NAME:
      return {
        ...state,
        filteredPokemons: action.payload,
        pokemonDetail: action.payload,
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
