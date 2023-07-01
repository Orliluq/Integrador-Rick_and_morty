const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios(`${URL}/${id}`);

        if (!data.name) throw Error(`Faltan datos del personaje con ID: ${id}`);

        const character = {
            id: data.id,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender,
            status: data.status
        };
        return res.status(200).json(character);
    } catch (error) {
        return error.message.includes('ID')
            ? res.status(404).send("Character not found")
            : res.status(500).send(error?.response?.data?.error);

    }
};

module.exports = getCharById;



// const axios = require('axios')
// const characters = require('../utils/data')
// let cache = characters

// const getCharById = async (req, res)=>{
//     const {id} = req.params
//     console.log(id)    
//     let charac = cache.find(char => char.id === +id)
//     if(charac){
//         res.json(charac)
//     }else{
//         let url = `https://rickandmortyapi.com/api/character/${id}`;        
//         let {data} = await axios.get(url)
//         try {
//             if(data.name){
//                 let {id, name, gender, species, origin, image, status}= data
//                 let charObj = {id, name, gender ,species, origin, image, status}
//                 cache = [...cache, charObj]
//                 res.json(charObj)
//             }            
//         } catch (error) {
//             res.status(500).send(error.message)
//         }    
//     }   
// }    

// module.exports = getCharById;


// const axios = require("axios");
// const URL = "https://rickandmortyapi.com/api/character/";

// const getCharById = (req, res) => {
//   const { id } = req.params;

//   axios(URL + id)
//     .then((response) => response.data)
//     .then((data) => {
//       const character = {
//         id: data.id,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         origin: data.origin?.name,
//         image: data.image,
//         status: data.status,
//       };

//       character.name
//         ? res.status(200).json(character)
//         : res.status(404).send("Not found");
//     })
//     .catch((error) => {
//       res.status(500).json({message: error.message});
//     });
// };

// module.exports = getCharById;