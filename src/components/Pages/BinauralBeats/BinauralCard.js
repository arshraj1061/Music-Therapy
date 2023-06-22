import classes from "./BinauralCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";
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

  return (
    <div className={classes.card} onClick={handleClick}>
      <div className={props.cardStyle} />

      <div className={classes.info}>
        <div className={classes.header}>
          <span className={classes.frequency}>{props.freq}</span>

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
      </div>
    </div>
  );
}

export default BinauralCard;
