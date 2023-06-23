import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./detail.css";
import loading from "../../assets/loading.gif";
import gif from "../../assets/YzyY.gif"

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);

  return (
    <div className="background-detail">
      <div>
          <img className="gif" src={gif} alt="Gif" />
        </div>
        <div>
          <img className="loading" src={loading} alt="Loading" />
        </div>
          <div className="detail-container">
            <div className="img-container">
              <h2>{character.name}</h2>
              <img src={character.image} alt={character.name} />
            </div>
            <div className="details">
              <div>
                <h3>Species:</h3>
                <p>{character.species}</p>
              </div>
              <div>
                <h3>Gender:</h3>
                <p>{character.gender}</p>
              </div>
              <div>
                <h3>Status:</h3>
                <p>{character.status}</p>
              </div>
              <div>
                <h3>Origin:</h3>
                <p>{character.origin?.name}</p>
              </div>
              <div>
                <h3>Location:</h3>
                <p>{character.location?.name}</p>
              </div>
            </div>
          </div>
      </div>
  );
}

export default Detail;
