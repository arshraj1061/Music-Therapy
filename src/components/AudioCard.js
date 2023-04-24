import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import classes from "../components/UI/Place.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause} from "@fortawesome/free-solid-svg-icons";
import Frame from "./UI/Frame";

export default function AudioCard({ source, title, dp }) {
  const DEFAULT_VOLUME = 0.5;
  const [audio] = useState(new Audio(source));
  const [isPlaying, setIsPlaying] = useState(false);

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
      audio.pause();
    } else {
      audio.play();
    }
  }

  function handleClick() {
    console.log("Clicked");
    setIsPlaying(!isPlaying);
    toggleAudio();
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
              style={{ color: "f7ba2b" }}
              onClick={handleClick}
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
            handleClick // Executes handleClick function
          }
        >
          {title}
        </p>
      </Frame>
    </span>
  );
}
