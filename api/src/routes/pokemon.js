const { Router } = require("express");
const router = Router();
const { Pokemon } = require("../db");
const {
  getAllPokemons,
  searchPokemonByName,
  searchPokemonById,
} = require("./controllers");

router.get("/", async (req, res, next) => {
  try {
    const { name } = req.query;
    if (name) {
      const pokemon = await searchPokemonByName(name);
      res.status(200).json(pokemon);
    } else {
      const pokemons = await getAllPokemons();
      res.status(200).json(pokemons);
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.get("/:id", async(req, res, next) => {
  try {
    const { id } = req.params;
    if (id) {
      const result = await searchPokemonById(id);
      res.status(200).json(result);
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, image, types, height, weight, stats } = req.body;
    const pokemon = await Pokemon.create({
      name,
      image,
      height,
      weight,
      stats,
    });
    await pokemon.addTypes(types);
    res.status(201).json(pokemon);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
