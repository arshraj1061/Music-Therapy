import classes from "./BinauralCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BinauralCard(props) {
  
  const link = 'https://docs.google.com/uc?export=download&id=' + props.id

  return (
    <div className={classes.card}>
      <div className={props.cardStyle} />
      <div className={classes.info}>
        <p className={classes.frequency}>{props.freq} Hz</p>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.effect}>{props.effect}</p>
        <audio src = {link} controls />
      </div>
    </div>





  );
}

export default BinauralCard;
