const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const type = require("./type")
const pokemon = require("./pokemon")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/api/pokemons", pokemon);
router.use("/api/types", type )

module.exports = router;
