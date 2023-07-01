import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions"; 
import { useNavigate } from "react-router-dom";
import style from "./card.module.css";

function Card(props) {
  const navigate = useNavigate();
  const { character, onClose, addFavorite, removeFavorite, favorites } = props;
  const { image, name, species, gender, id } = character;

  const [closeBtn, setCloseBtn] = useState(true);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (!onClose) {
      setCloseBtn(false);
    }
  }, [onClose]); 

  useEffect(() => {
    favorites.forEach((fav) => { 
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [favorites, id]); 

  function navigateHandler() {
    navigate(`/detail/${character.id}`);
  }

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite(character);
      console.log(handleFavorite);
    }
  };

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
        {isFav ? ( 
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        {closeBtn && (
          <button
            className={style.closeButton}
            onClick={() => {
              onClose(id);
            }}
          >
            X
          </button>
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
