import binaural from "../../../Images/binaural.jpg";
import BeachBg from "../../BgImage/BgImage";
import Label from "../../Label/Label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSpa,
  faBookOpen,
  faCrosshairs,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./BinauralCard.module.css";

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
              icon={faMoon}
              color="#D10000"
              size="2xl"
            />
            <span className={classes.label}>Delta</span>
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
            <span className={classes.label}>Theta</span>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.inside3}>
            <FontAwesomeIcon
              className={classes.icon}
              icon={faBookOpen}
              color="#acdc6e"
              size="2xl"
            />
            <span className={classes.label}>Alpha</span>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.inside4}>
            <FontAwesomeIcon
              className={classes.icon}
              icon={faCrosshairs}
              color="#1e93dc"
              size="2xl"
            />
            <span className={classes.label}>Beta</span>
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
            <div className={classes.labelBox}>
              <span className={classes.label}>Gamma</span>
              {/* <span className={classes.detail}>Cognitive Enhancement</span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BinauralBeats;
