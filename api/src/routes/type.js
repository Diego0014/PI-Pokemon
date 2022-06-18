const {Router} = require('express');
const router = Router();
const {Type} = require("../db");


router.get("/", async (req, res, next) => {
    await Type.findAll()
       .then((ep) => {
         res.status(200).json(ep);
       })
       .catch((err) => next(err));
   });

module.exports = router;