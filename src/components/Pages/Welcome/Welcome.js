import React, { useState } from "react";
import Card from "../../UI/Card";
import { NavLink } from "react-router-dom";
import classes from "./Welcome.module.css";
import happy from "../../../assets/Pics/happy.png";
import sad from "../../../assets/Pics/sad.png";
import angry from "../../../assets/Pics/angry.png";
import surprise from "../../../assets/Pics/surprise.png";
import neutral from "../../../assets/Pics/neutral.png";
import fear from "../../../assets/Pics/fear.png";
import Emotion from "../../Emotion/Emotion";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Welcome(props) {
  const [emote, setEmote] = useState(null);

  const fetchData = async () => {
    fetch("/detect-emotion")
      .then((response) => response.json())
      .then((data) => {
        console.log("Emotion Result:", data.emotion);
        if (data.emotion !== undefined) setEmote(data.emotion);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Card>
        <button className={classes.button} onClick={fetchData}>
          <span className={classes.button_content}>Capture Emotion <FontAwesomeIcon icon={faCamera} style={{ color: "f7ba2b" }} /></span>
        </button>

        <NavLink to="/beach">
          <button className={classes.button}>
            <span className={classes.button_content}>Relaxing Music</span>
          </button>
        </NavLink>

        <NavLink to="/binaural">
          <button className={classes.button}>
            <span className={classes.button_content}>Binaural Beats</span>
          </button>
        </NavLink>
      </Card>

      {emote && (
        <Card>
          <h2>Emotion: {emote}</h2>
          {emote === "happy" && <img src={happy} alt={emote} />}
          {emote === "sad" && <img src={sad} alt={emote} />}
          {emote === "neutral" && <img src={neutral} alt={emote} />}
          {emote === "surprise" && <img src={surprise} alt={emote} />}
          {emote === "angry" && <img src={angry} alt={emote} />}
          {emote === "fear" && <img src={fear} alt={emote} />}

          {emote === "happy" && <Emotion emotion = {emote} />}
          {emote === "sad" && <Emotion emotion = {emote}/>}
          {emote === "surprise" && <Emotion emotion = {emote}/>}
          {emote === "angry" && <Emotion emotion = {emote}/>}
          {emote === "fear" && <Emotion emotion = {emote}/>}
          {emote === "neutral" && <Emotion emotion = {emote}/>}
        </Card>
      )}
    </div>
  );
}

export default Welcome;
