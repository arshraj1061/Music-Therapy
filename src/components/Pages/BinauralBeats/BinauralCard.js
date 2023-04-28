import classes from './BinauralCard.module.css';

function Card(props) {
  
  return <div className={classes.card}>
      <div className={classes.inside}>
        {props.children}
      </div>
    </div>;
}

export default Card;