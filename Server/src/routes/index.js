const { login } = require('../controllers/loginController');
const { getCharById } = require('../controllers/getCharById');
const { postFav, deleteFav } = require('../controllers/handleFavorites');

const router = require('express').Router();

router.get('/character/:id', (req, res) => {
    getCharById(req, res);
})

router.get('/login', (req, res) => {
    login(req, res);
})

// router.get('/login', login); también es válido, de manera automática la función se ejecuta

router.post('/fav', (req, res) => {
    postFav(req, res);
})

router.delete('/fav/:id', (req, res) => {
    deleteFav(req, res);
});


module.exports = router;


// const {Router} = require("express");
// const getCharById = require("../controllers/getCharById");
// const login = require("../controllers/loginController");
// const {postFav, deleteFav} = require("../controllers/handleFavorites");

// const router = Router();

// router.get("/character/:id", getCharById);
// router.get("/login", login);
// router.post("/fav", postFav);
// router.delete("/fav/:id", deleteFav);

// module.exports = router;

