import { useState } from "react";
import icons from "../../assets/lupa.svg";
import "./searchBar.css";

export default function SearchBar(props) {
  const { onSearch } = props;
  const [id, setId] = useState("");

  function changeHandler(e) {
    e.preventDefault();
    let input = e.target.value;
    setId(input);
  }

  return (
    <div className="searchContainer">
      <input
        className="searchbar"
        type="text"
        placeholder="Search character..."
        onChange={changeHandler}
      />
      <div className="searchIconContainer">
        <div className="searchIcon" onClick={() => onSearch(id)} />
      </div>
    </div>
  );
}
