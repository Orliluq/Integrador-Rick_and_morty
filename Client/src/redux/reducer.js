import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, RESET, REGISTER_USER, LOGIN_USER } from "./actions";

let initialState = { myFavorites: [], allCharacters: [] };

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case ORDER:
      const allCharactersCopy = [...state.allCharacters]
      return {
          ...state,
          myFavorites:
          action.payload === "A"
          ? allCharactersCopy.sort((a, b)=> a.id - b.id)
          : allCharactersCopy.sort((a, b)=> b.id - a.id)
      }
    case FILTER:
      const allCharactersFiltered = state.allCharacters.filter(flt => flt.gender === action.payload)
        return {
          ...state,
          myFavorites: 
          action.payload === "allCharacters" 
          ?[...state.allCharacters]
          :allCharactersFiltered
        }
    case RESET:
    case REGISTER_USER:
    case LOGIN_USER:
      return {
        ...state,
        myFavorites: state.allCharacters,
      };
    default:
      return {
        ...state,
      };
  }
}
