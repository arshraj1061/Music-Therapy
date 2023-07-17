import React, { useContext, useEffect, useState } from "react";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmotionContext from "../../store/emotion-context";
import classes from "./Emotion.module.css";

function Happy(props) {
  const emotionAudio = useContext(EmotionContext);
  var audioFiles;

  const happyFiles = emotionAudio.happy;
  const sadFiles = emotionAudio.sad;
  const neutralFiles = emotionAudio.neutral;
  const surpriseFiles = emotionAudio.surprise;
  const fearFiles = emotionAudio.fear;
  const angryFiles = emotionAudio.angry;

  if (props.emotion === "happy") audioFiles = happyFiles;
  else if (props.emotion === "sad") audioFiles = sadFiles;
  else if (props.emotion === "neutral") audioFiles = neutralFiles;
  else if (props.emotion === "surprise") audioFiles = surpriseFiles;
  else if (props.emotion === "fear") audioFiles = fearFiles;
  else if (props.emotion === "angry") audioFiles = angryFiles;

  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const shuffledAudioFiles = shuffleArray(audioFiles);
    setCurrentAudioIndex(0);
    setAudio(new Audio(shuffledAudioFiles[0]));
  }, []);

  useEffect(() => {
    if (audio) {
      audio.addEventListener("ended", handleAudioEnded);
      return () => {
        audio.removeEventListener("ended", handleAudioEnded);
      };
    }
  }, [audio]);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleAudioEnded = () => {
    const nextAudioIndex = (currentAudioIndex + 1) % audioFiles.length;
    setCurrentAudioIndex(nextAudioIndex);
    setAudio(new Audio(audioFiles[nextAudioIndex]));
    setIsPlaying(true);
  };

  const handlePlayButtonClick = () => {
    if (audio) {
      setIsPlaying(true);
      audio.play();
    }
  };

  const handlePauseButtonClick = () => {
    if (audio) {
      setIsPlaying(false);
      audio.pause();
    }
  };

  useEffect(() => {
    if (audio) {
      audio.addEventListener("ended", handleAudioEnded);
      return () => {
        audio.removeEventListener("ended", handleAudioEnded);
      };
    }
  }, [audio, currentAudioIndex]);

  useEffect(() => {
    if (isPlaying && audio) {
      audio.play();
    }
  }, [isPlaying, audio]);

  return (
    <div>
      <button className={classes.button} onClick={handlePlayButtonClick} disabled={isPlaying}>
        <FontAwesomeIcon
          className={classes.icon}
          icon={faPlay}
          style={{ color: "f7ba2b" }}
        />
      </button>
      <button className={classes.button} onClick={handlePauseButtonClick} disabled={!isPlaying}>
        <FontAwesomeIcon
          className={classes.icon}
          icon={faPause}
          style={{ color: "f7ba2b" }}
        />
      </button>
    </div>
  );
}

export default Happy;
