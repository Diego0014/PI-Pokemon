require("dotenv").config();
const { allPokemons, pokemonsById, pokemonsByName, pokemonsType } = process.env;
const axios = require("axios");
const { Op } = require("sequelize");
const { Pokemon, Type } = require("../../db");

const getTypes = async () => {
  const { data } = await axios.get(pokemonsType);
  const types = data.results.map((e) => e.name);
  const type = Type.bulkCreate(types.map((e) => ({ name: e })));
  return type;
};

const getPokemonsNames = async () => {
  const { data } = await axios.get(allPokemons);
  const pokemons = data.results.map((e) => e.url);
  const data2 = await axios
    .get(data.next)
    .then((e) => e.data.results.map((e) => e.url));
  return [...pokemons, ...data2];
};

const getPokemonsApi = async () => {
  try {
    const names = await getPokemonsNames();
    const data = names.map(async (e) => {
      const results = await axios.get(e).then((e) => {
        return {
          name: e.data.name,
          image: e.data.sprites.other.dream_world.front_default,
          types: e.data.types.map((e) => e.type.name),
          id: e.data.id,
          height: e.data.height,
          weight: e.data.weight,
          stats: e.data.stats.map((e) => {
            return {
              name: e.stat.name,
              value: e.base_stat,
            };
          }),
        };
      });
      return results;
    });
    const allPokemons = await Promise.all(data);
    return allPokemons;
  } catch (e) {
    console.log(
      "An error occurred while processing the results: " + e.toString()
    );
  }
};

const getPokemonsDB = async () => {
  try {
    const pokemons = await Pokemon.findAll({
      attributes: ["id", "name", "image", "height", "weight"],
      include: [{ attribute: "types", model: Type, through: "PokemonTypes" }],
    });
    return pokemons;
  } catch (e) {
    console.log(
      "An error occurred while processing the results: " + e.toString()
    );
  }
};

const getAllPokemons = async () => {
  try {
    const pokemons = await getPokemonsApi();
    const pokemonsDB = await getPokemonsDB();
    return pokemonsDB ? [...pokemonsDB, ...pokemons] : pokemons;
  } catch (e) {
    console.log(e);
  }
};

const searchPokemonByName = async (name) => {
  try {
    const pokemonsDB = await Pokemon.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      attributes: ["id", "name", "image", "height", "weight"],
      include: [{ attribute: "types", model: Type, through: "PokemonTypes" }],
    });
    const pokemonsApi = await axios
      .get(`${pokemonsByName}${name}`)
      .then((e) => {
        return {
          name: e.data.name,
          image: e.data.sprites.other.dream_world.front_default,
          types: e.data.types.map((e) => e.type.name),
          id: e.data.id,
          height: e.data.height,
          weight: e.data.weight,
          stats: e.data.stats.map((e) => {
            return {
              name: e.stat.name,
              value: e.base_stat,
            };
          }),
        };
      });

    return pokemonsDB.length ? pokemonsDB : pokemonsApi;
  } catch (e) {
    console.log(
      "An error occurred while processing the results: " + e.toString()
    );
  }
};

const searchPokemonById = async (id) => {
  try {
    if(id.length > 15){
    const pokemonsDB = await Pokemon.findByPk(id, {
      attributes: ["id", "name", "image", "height", "weight"],
      include: [{ attribute: "types", model: Type, through: "PokemonTypes" }],
    });
    return pokemonsDB;
  }else{
    const pokemonsApi = await axios.get(`${pokemonsById}${id}`).then((e) => {
      return {
          name: e.data.name,
          image: e.data.sprites.other.dream_world.front_default,
          types: e.data.types.map((e) => e.type.name),
          id: e.data.id,
          height: e.data.height,
          weight: e.data.weight,
          stats: e.data.stats.map((e) => {
            return {
              name: e.stat.name,
              value: e.base_stat,
            };
          }),
        };
    });
    return pokemonsApi;
  }
  } catch (e) {
    console.log(
      "An error occurred while processing the results: " + e.toString()
    );
  }
};


module.exports = {
  getTypes,
  getAllPokemons,
  searchPokemonByName,
  searchPokemonById,
};
