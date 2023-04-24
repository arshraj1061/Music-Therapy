import classes from "./Frame.module.css";

function Frame(props) {
  return (
    <div className={classes.card}>
      <div className={classes.cardInfo}>
      {props.children}
      </div>
    </div>
  );
}

export default Frame;
