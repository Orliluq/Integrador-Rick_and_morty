// import { connect } from "react-redux";
import React from "react";
import Cards from "../../components/cards/Cards";
import style from "./favorites.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  orderFav,
  filterFav,
  resetFav,
} from "../../redux/actions";

export default function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);

  function handleSort(e) {
    if (e.target && e.target.value) {
      dispatch(orderFav(e.target.value));
    }
  }

  function handleFilter(e) {
    if (e.target && e.target.value) {
      dispatch(filterFav(e.target.value));
    }
  }

  function handleReset() {
    dispatch(resetFav());
  }


  return (
    <div className={style.container}>
        <div className={style.favFilter}>
        <select placeholder="Gender" onChange={handleFilter}>
          {["Male", "Female", "unknown", "Genderless"].map((gender, index) => (
            <option key={index} value={gender}>{gender}</option>
            ))}
          </select>
        </div>
        <div className={style.favOrder}>
        <select placeholder="Orden" onChange={handleSort}>
          {["Ascendente", "Descendente"].map((order, index) => (
          <option key={index} value={order}>{order}</option>
          ))}
        </select>
        </div>
        <div className={style.favReset}>
      <button onClick={handleReset}>Reset Filters</button>
      </div>
      <Cards characters={favorites} />
    </div>
  );
}


// const mapStateToProps = (state) => {
//   return {
//     favorites: state.myFavorites,
//   };
// };

// export default connect(mapStateToProps, null)(Favorites);