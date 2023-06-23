import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
import style from "./card.module.css";

function Card(props) {
  const navigate = useNavigate();
  const {character, onClose, addFavorite, removeFavorite, favorites} = props;
  const {image, name, species, gender, id} = character;

  const [closeBtn, setCloseBtn] = useState(true);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    if (!onClose) {
      setCloseBtn(false);
    }
  }, []);

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === id) {
        setFav(true);
      }
    });
  }, [favorites]);
  
  function navigateHandler() {
    navigate(`/detail/${character.id}`);
  }

  function handleFavorite(character) {
    if (!fav) {
      addFavorite(character);
      setFav(true);
    } else {
      removeFavorite(character);
      setFav(false);
    }
  }


  return (
      <div className={style.characterContainer}>
        <div className={style.characterCard}>
          <img
            className={style.characterImage}
            onClick={navigateHandler}
            src={image}
            alt={name}
          />
          <h2 className={style.name}>{name}</h2>
          {fav ? (
            <button onClick={() => handleFavorite(character.id)}>❤️</button>
          ) : (
            <button onClick={() => handleFavorite(character)}>🤍</button>
          )}
          {closeBtn && (
            <button
              className={style.closeButton}
              onClick={() => {
                onClose(id);
              }}
            >X</button>
          )}
          <p>{species}</p>
          <p>{gender}</p>
        </div>
      </div>
    );
}


const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
  };
};
  
const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Card); 
  
   