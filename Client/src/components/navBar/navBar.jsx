import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import "./navBar.css";

export default function Navbar({ onSearch, random }) {
  
   function randomCharacter(event) {
    const randomNumber = Math.floor(Math.random() * 826) + 1;
    onSearch(randomNumber);
  }

  return (
   <div className="navContainer">
   <SearchBar onSearch={onSearch} />

      <Link to="/home">
        <button className="button">Home</button>
      </Link>

      <Link to="/about">
        <button className="button">About</button>
      </Link>

      <Link to="/favorites">
        <button className="button">Favoritos</button>
      </Link>

      <button className="button" onClick={randomCharacter}>
        Random
      </button>

      <Link to="/">
        <button className="logOut">Cerrar Sesión</button>
      </Link>
    </div>
  );
}



// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import SearchBar from "../searchBar/SearchBar";
// import { NavLink } from "react-router-dom";
// import "./navBar.css";
// import wallpaper from "../../assets/wallpaperbetter.jpg";
// import { useNavigate } from "react-router-dom";

// export default function NavBar({ onSearch, random }) {
//   const [access, setAccess] = useState(false);
//   const [animationActive, setAnimationActive] = useState(true);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [navExpanded, setNavExpanded] = useState(false);

//   const handleLogout = () => {
//     console.log("access before", access);
//     setAccess(false);
//     console.log("access after", access);
//     navigate("/login");
//   };
  

//   const handleAnimate = () => {
//     setAnimationActive(!animationActive);
//     dispatch(animationActive(!animationActive));
//   };

//   const [isNavExpanded, setIsNavExpanded] = useState(false);
//   const handleHamburgerClick = () => {
//     setIsNavExpanded(!isNavExpanded);
//   };

//   const handleHamburgerMouseEnter = () => {
//     setNavExpanded(true);
//   };

//   const handleHamburgerMouseLeave = () => {
//     setNavExpanded(false);
//   };

//   return (
//     <>
//     <nav className="navBar">
    
//       <SearchBar onSearch={onSearch} onClick={handleAnimate} />
//       <div className="hamburger" 
//         onMouseEnter={handleHamburgerMouseEnter}
//         onMouseLeave={handleHamburgerMouseLeave} 
//         onClick={handleHamburgerClick}>
//           <div className="hamburger-line"></div>
//         <div className="hamburger-line"></div>
//         <div className="hamburger-line"></div>
//       </div>
//       <div className={`navigation__items ${isNavExpanded ? "" : "hidden"}`}>
//         <NavLink to="/home" activeClassName="active">
//           <button>HOME</button>
//         </NavLink>
//         <NavLink to="/about" activeClassName="active">
//           <button>ABOUT</button>
//         </NavLink>
//         <NavLink to="/favorites" activeClassName="active">
//           <button>FAVORITES</button>
//         </NavLink>
//         <NavLink to="/random" activeClassName="active">
//           <button>ADD RANDOM</button>
//         </NavLink>
//         <div>
//           <button onClick={handleLogout}>LOG OUT</button>
//         </div>
//       </div>
//   </nav>
//   </>
//   );
// }