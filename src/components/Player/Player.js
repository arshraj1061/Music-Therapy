import classes from "./Player.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHourglassHalf,
  faCirclePause,
  faCirclePlay,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import AudioContext from "../../store/audio-context";

function Player() {
  const audioCtx = useContext(AudioContext);

  return (
    <div className={classes.PlayerCard}>
      {/* <FontAwesomeIcon
        className={classes.icon}
        icon={faHourglassHalf}
        size="2xl"
        style={{ color: "#f7ba2b" }}
      /> */}

      { !audioCtx.isPaused && (
        <span onClick={audioCtx.pauseAllAudio}>
          <FontAwesomeIcon
            className={classes.icon}
            icon={faCirclePause}
            size="2xl"
            style={{ color: "#f7ba2b" }}
          />
        </span>
      )}

      { (audioCtx.isPaused) &&
        <span onClick={audioCtx.playAllAudio}>
          <FontAwesomeIcon
            className={classes.icon}
            icon={faCirclePlay}
            size="2xl"
            style={{ color: "#f7ba2b" }}
          />
        </span>
      }
      {/* <FontAwesomeIcon className={classes.icon} icon={faSliders} size="2xl" style={{color: "#f7ba2b",}} /> */}
    </div>
  );
}

export default Player;
