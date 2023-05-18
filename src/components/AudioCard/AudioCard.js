import React, { useState, useEffect, useContext} from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import classes from "./AudioCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause} from "@fortawesome/free-solid-svg-icons";
import Frame from "../UI/Frame";
import AudioContext from "../../store/audio-context";

export default function AudioCard({ source, title, dp }) {
  const DEFAULT_VOLUME = 0.5;
  const [audio] = useState(new Audio(source));
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtx = useContext(AudioContext);

  // Only run upon mounting
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
      if(audioCtx.streaming.length === 1){
        audioCtx.setShowPlayer(false);
      }
      audio.pause();
    } else {
      audio.play();
      
      audioCtx.setShowPlayer(true);
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
    console.log(audioCtx.streaming);  
  }

  function setVolume(volumeValue) {
    audio.volume = volumeValue;
  }

  return (
    <span>
      <Frame onClick={handleClick}>
                
        {isPlaying ? (
          <>
            <FontAwesomeIcon
              className={classes.icon}
              icon={faPause}
              size="lg"
              style={{ color: "red" }}
              onClick={()=>{handleClick(source)}}
            />

            <Slider className={classes.slider}
              min={0}
              max={1}
              step={0.01}
              defaultValue={DEFAULT_VOLUME}
              onChange={(volumeValue) => setVolume(volumeValue)}
              onClick={(event) => {
                event.stopPropagation(); // Prevents click event from bubbling up
              }}
            />
          </>
        ) : (
          <FontAwesomeIcon
            className={classes.icon}
            icon={dp}
            size="lg"
            style={{ color: "f7ba2b" }}
            onClick={handleClick}
          />
        )}

        <p
          className={classes.title}
          onClick={
            ()=>{handleClick(source)}   // Executes handleClick function
          }
        >
          {title}
        </p>
      </Frame>
    </span>
  );
}
