import React from "react";
import Card from "../../UI/Card";
import { NavLink } from "react-router-dom";
import classes from "./Welcome.module.css";

function Welcome(props) {
  const fetchData = async () => {
    try {
      await fetch("http://localhost:5000/detect-emotion"); // Replace with your API endpoint URL
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Card>
        <button className={classes.button} onClick={fetchData}>
          <span className={classes.button_content}>Get Emotion</span>
        </button>

        <NavLink to="/beach">
          <button className={classes.button}>
            <span className={classes.button_content}>Custom Music</span>
          </button>
        </NavLink>

        <NavLink to="/binaural">
          <button className={classes.button}>
            <span className={classes.button_content}>Binaural Beats</span>
          </button>
        </NavLink>
      </Card>
    </div>
  );
}

export default Welcome;
