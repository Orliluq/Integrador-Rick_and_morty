import axios from "axios";

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const ORDER = "ORDER";
export const FILTER = "FILTER";
export const RESET = "RESET";

export const addFavorite = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
    return async (dispatch) => {
      try {
        const { data } = await axios.post(endpoint, character);
      
        if(!data.length) throw Error('No hay favoritos');

        return dispatch({
          type: ADD_FAV,
          payload: data,
      });
    
    } catch (error) {
        console.log(error.message);
  }
}};

export const removeFavorite = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
    return async (dispatch) => {
      try {
        const { data } = await axios.delete(endpoint);

        if(!data.length) throw Error('No hay favoritos');

        return dispatch({
          type: REMOVE_FAV,
          payload: data,
        });

      } catch (error) {
        console.log(error.message);
  }
}};

export function orderFavorites(order) {
  return {
    type: ORDER,
    payload: order,
  };
}

export function filterFavorites(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function resetFavorites() {
  return {
    type: RESET,
  };
}


// export const addFavorite = (character) => {
//   try {
//     const endpoint = "http://localhost:3001/rickandmorty/fav";
//     return async (dispatch) => {
//       const {data} = await axios.post(endpoint, character);
//       return dispatch({
//         type: ADD_FAV,
//         payload: data,
//       });
//     };
//     // eslint-disable-next-line no-unreachable
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const removeFavorite = (id) => {
//   try {
//     const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
//     return async (dispatch) => {
//       const {data} = await axios.delete(endpoint);
//       return dispatch({
//         type: REMOVE_FAV,
//         payload: data,
//       });
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };

// export function orderFavorites(order) {
//   return {
//     type: ORDER,
//     payload: order,
//   };
// }

// export function filterFavorites(gender) {
//   return {
//     type: FILTER,
//     payload: gender,
//   };
// }

// export function resetFavorites() {
//   return {
//     type: RESET,
//   };
// }
