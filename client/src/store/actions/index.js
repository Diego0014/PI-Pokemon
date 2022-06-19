import axios from "axios";
import {
  GET_POKEMONS,
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_NAME,
  GET_TYPES,
  POST,
} from "../../constants/index";

export const getAllPokemons = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/api/pokemons")
      .then((response) => {
        dispatch({
          type: GET_POKEMONS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getPokemonById = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/api/pokemons/${id}`)
      .then((response) => {
        dispatch({
          type: GET_POKEMON_BY_ID,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getPokemonByName = (name) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/api/pokemons/?name=${name}`)
      .then((response) => {
        dispatch({
          type: GET_POKEMON_BY_NAME,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getAllTypes = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/api/types")
      .then((response) => {
        dispatch({
          type: GET_TYPES,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const postPokemon = (pokemon) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3001/api/pokemons", pokemon)
      .then((response) => {
        dispatch({
          type: POST,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
