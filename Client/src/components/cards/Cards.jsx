import Card from "../card/Card";
import style from "./cards.module.css";
import background from '../../assets/gifreadme.gif'


export default function Cards(props) {
   const {characters, onClose} = props;
 
return (
  <div className={style.backgroundHome}>
  <div className={style.cardList}>
    {characters?.map((character) => (
    <Card key={character.id} character={character} onClose={onClose} />
   ))}
 </div>
 </div>
 );
}



