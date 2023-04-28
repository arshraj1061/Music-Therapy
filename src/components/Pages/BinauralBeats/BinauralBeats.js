import binaural from "../../../Images/binaural.jpg";
import Card from "./BinauralCard";
import BeachBg from "../../BgImage/BgImage";
import Label from "../../Label/Label";
import Player from "../../Player/Player";
import BinauralBeatsAudio from "./BinauralBeatsAudio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faSpa,
  faMoon,
  faChild,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./BinauralCard.module.css";
import CardLabel from "./CardLabel";

function BinauralBeats() {
  return (
    <>
      <BeachBg src={binaural}>
        <Label text="Binaural Beats" />
      </BeachBg>

      <div className={classes.cardContainer}>

        <div className={classes.card}>
            <div className={classes.inside1}>
                <FontAwesomeIcon
                    className={classes.icon}
                    icon={faBookOpen}
                    color="#D10000"
                    size="2xl"
                />
                <span className={classes.label}>Study</span>
            </div>
        </div>
          
        <div className={classes.card}>
            <div className={classes.inside2}>
                <FontAwesomeIcon
                    className={classes.icon}
                    icon={faSpa}
                    color="#f7ba2b"
                    size="2xl"
                />
                <span className={classes.label}>Spirit</span>
            </div>
        </div>
        <div className={classes.card}>
            <div className={classes.inside3}>
                <FontAwesomeIcon
                    className={classes.icon}
                    icon={faMoon}
                    color="#acdc6e"
                    size="2xl"
                />
                <span className={classes.label}>Sleep </span>
            </div>
        </div>

        <div className={classes.card}>
            <div className={classes.inside4}>
                <FontAwesomeIcon
                    className={classes.icon}
                    icon={faChild}
                    color="#1e93dc"
                    size="2xl"
                />
                <span className={classes.label}>Body</span>
            </div>
        </div>

        <div className={classes.card}>
            <div className={classes.inside5}>
                <FontAwesomeIcon
                    className={classes.icon}
                    icon={faBrain}
                    color="#6a1edc"
                    size="2xl"
                />
                <span className={classes.label}>Brain</span>
            </div>
        </div>
      </div>
    </>
  );
}

export default BinauralBeats;
