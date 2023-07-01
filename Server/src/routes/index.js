const router = require('express').Router();

const getCharById = require('../controllers/getCharById');
const getFav = require('../controllers/getFav');
const login = require('../controllers/login');
const postFav = require('../controllers/postFav');
const postUser = require('../controllers/postUser');
const deleteFav = require('../controllers/deleteFav');
const postRegister = require('../controllers/postRegister');


router.get("/login", login);
router.get("/getFav", getFav);
router.post("/login", postUser);
router.post("/fav", postFav);
router.post("/register", postRegister);
router.delete("/fav/:id", deleteFav);

router.get("/character/:id", getCharById);

module.exports = router;




// const { login } = require('../controllers/loginController');
// const { getCharById } = require('../controllers/getCharById');
// const { postFav, deleteFav } = require('../controllers/handleFavorites');

// const router = require('express').Router();

// router.get('/character/:id', (req, res) => {
//     getCharById(req, res);
// })

// router.get('/login', (req, res) => {
//     login(req, res);
// })

// router.get('/login', login); también es válido, de manera automática la función se ejecuta

// router.post('/fav', (req, res) => {
//     postFav(req, res);
// })

// router.delete('/fav/:id', (req, res) => {
//     deleteFav(req, res);
// });


// module.exports = router;




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

