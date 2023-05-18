import binaural from "../../../Images/binaural.jpg";
import BinauralBg from "../../BgImage/BgImage";
import Label from "../../Label/Label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSpa,
  faBookOpen,
  faCrosshairs,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./BinauralBeats.module.css";
import { NavLink } from "react-router-dom";

function BinauralBeats() {
  return (
    <>
      <BinauralBg src={binaural}>
        <Label text="Binaural Beats" />
      </BinauralBg>

      <nav>
        <div className={classes.cardContainer}>
          <NavLink to="/binaural/delta">
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
          </NavLink>

          <NavLink to="/binaural/theta">
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
          </NavLink>

          <NavLink to="/binaural/alpha">
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
          </NavLink>

          <NavLink to="/binaural/beta">
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
          </NavLink>

          <NavLink to="/binaural/gamma">
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
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default BinauralBeats;
