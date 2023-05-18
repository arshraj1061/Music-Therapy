import classes from "./BinauralCard.module.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import AudioContext from "../../../store/audio-context";

function BinauralCard(props) {
  const audioCtx = useContext(AudioContext);

  const link = "https://docs.google.com/uc?export=download&id=" + props.id;

  const DEFAULT_VOLUME = 0.5;
  const [audio] = useState(new Audio(link));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(
    () => {
      audio.volume = DEFAULT_VOLUME;
      audio.loop = true;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  function toggleAudio() {
    console.log("ye");
    if (isPlaying) {
      audioCtx.setIsPlaying(false);
      audio.pause();
    } else {
      audioCtx.pauseAllAudio();
      audioCtx.setIsPlaying(true);
      audio.play();
    }
  }

  function handleClick() {
    setIsPlaying(!isPlaying);
    toggleAudio();

    if (audioCtx.streaming.length > 0) {
      audioCtx.isPlaying = true;
    }
    if (audioCtx.streaming.includes(audio)) {
      audioCtx.streaming.splice(audioCtx.streaming.indexOf(audio), 1);
    } else {
      audioCtx.streaming.push(audio);
    }
  }

  function setVolume(volumeValue) {
    audio.volume = volumeValue;
  }

  return (
    <div className={classes.card} onClick={handleClick}>
      <div className={props.cardStyle} />

      <div className={classes.info}>
        <div className={classes.header}>
          <span className={classes.frequency}>{props.freq} Hz</span>

          {isPlaying && (
            <FontAwesomeIcon
              className={classes.icon}
              icon={faPause}
              style={{ color: "f7ba2b" }}
            />
          )}
        </div>

        <p className={classes.name}>{props.name}</p>

        <p className={classes.effect}>{props.effect}</p>

        <audio src={link} />

        {isPlaying && (
          <div>
          <FontAwesomeIcon className={classes.icon} icon={faHeadphones} style={{ color: "f7ba2b" }} />
          <Slider
            className={classes.slider}
            min={0}
            max={1}
            step={0.01}
            defaultValue={DEFAULT_VOLUME}
            onClick={(event) => {
              // Prevents click event from bubbling up
            }}
            onChange={(volumeValue) => setVolume(volumeValue)}
          />
          </div>
        )}
      </div>
    </div>
  );
}

export default BinauralCard;
