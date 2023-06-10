import React, { useContext, useEffect, useState } from "react";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmotionContext from "../../store/emotion-context";

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

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState("");

  useEffect(() => {
    // Shuffle the audioFiles array
    const shuffledAudioFiles = shuffleArray(audioFiles);

    // Select the first audio file from the shuffled array
    const initialAudio = shuffledAudioFiles[0];
    setCurrentAudio(initialAudio);

    // Create an instance of the Audio object
    const audio = new Audio(initialAudio);
    setIsPlaying(true);

    // Play the audio
    audio.play();

    // Clean up the audio instance when the component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Function to shuffle the array
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

  const handleButtonClick = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      // Pause the audio
      
      console.log(currentAudio);
    } else {
      // Resume playing the audio
      //   currentAudio.play();
    }
  };

  return (
    <button onClick={handleButtonClick}>
      {isPlaying ? (
        <FontAwesomeIcon icon={faPause} style={{ color: "f7ba2b" }} />
      ) : (
        <FontAwesomeIcon icon={faPlay} style={{ color: "f7ba2b" }} />
      )}
    </button>
  );
}

export default Happy;
