let myFavorites = [];

const postFav = (req, res) => {
  try {
    const character = req.body;
    const characterFound = myFavorites.find(fav => fav.id === character.id);

    if(characterFound) throw Error('El personaje ya existe en favoritos');
      
      myFavorites.push(character);

      return res.status(200).json(myFavorites);
  } catch (error) {
      return res.status(404).send(error.message)
  };

};

const deleteFav = (req, res) => {
  const { id } = req.params;

  // const characterFiltered = myFavorites.filter((favorite) => 
  // favorite.id !== +id); // se parsea si hay un + adelante se vuelve número no string

  // return res.status(200).json(characterFiltered);

  myFavorites = myFavorites.filter((favorite) => 
  favorite.id !== +id);

  return res.status(200).json(myFavorites);

};

module.exports = {
  postFav,
  deleteFav
};



// let myFavorites = [];

// function postFav(req, res) {
//   const character = req.body;

//   myFavorites.push(character);
//   res.status(200).json(myFavorites);
// }

// function deleteFav(req, res) {
//   const {id} = req.params;

//   const filtered = myFavorites.filter(
//     (character) => character.id !== Number(id)
//   );

//   myFavorites = filtered;

//   res.status(200).json(filtered);
// }

// module.exports = {
//   postFav,
//   deleteFav,
// };
