const { Favorite } = require('../DB_connection');

let myFavorites = []; 

function deleteFav(req, res) {
  const characterId = req.params.id;
  myFavorites = myFavorites.filter((character) => character.id !== +characterId);
  res.status(200).json(myFavorites);
}
// const deleteFav = async (req, res) => {
//     try {
//         const { id } = req.params;

//             await Favorite.destroy({
//                 where: id 
//             })
//             const favorites = await Favorite.findAll()
//             return res.status(200).json(favorites)
//         }
//         catch (error) {
//         return res.status(500).json({ error: error.message })
//     }
// }

module.exports = deleteFav;



// const {Favorite} = require('../DB_connection');

// const deleteFav = async (req, res) => {
//     const {id} = req.params;
//     const {idUser} = req.query;

//     try {
//         const fav = await Favorite.findOne({
//             where:{id}
//         });
//         await fav.removeUser(idUser)

//         res.status(200).json({success: true});
//     }
//     catch (error) {
//         res.status(500).json({message: error});
//     }
// }

// module.exports = {
//     deleteFav
// }



// const {Favorite} = require('../DB_connection');

// const deleteFav = async (req, res) => {
//     const {id} = req.params;
//     const {idUser} = req.query;

//     try {
//         const fav = await Favorite.findOne({
//             where:{id}
//         });
//         await fav.removeUser(idUser)

//         res.status(200).json({success: true});
//     }
//     catch (error) {
//         res.status(500).json({message: error});
//     }
// }

// module.exports = {
//     deleteFav
// }
