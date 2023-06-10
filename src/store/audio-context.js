import { createContext, useState } from "react";

const AudioContext = createContext({
  isPlaying: false,
  setIsPlaying: () => {},
  streaming: [],
  pauseAllAudio :() =>{},
  playAllAudio :() =>{},
  showPlayer: false,
  setShowPlayer : () => {},
  isPaused: false,
  setIsPaused: () => {}
});

export const AudioContextProvider = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [streaming] = useState([]);
  const [showPlayer, setShowPlayer] = useState(false);

  const pauseAllAudio = () => {
    // setIsPlaying(false);
        setIsPaused(true);
    streaming.forEach((audio) => {
      audio.pause();
    });
  };

  const playAllAudio = () => {
    setIsPaused(false);

    streaming.forEach((audio) => {
        audio.play();
    })
  }

  const contextValue = {
    isPlaying: isPlaying,
    setIsPlaying,
    streaming: streaming,
    pauseAllAudio,
    playAllAudio,
    showPlayer,
    setShowPlayer,
    isPaused,
    setIsPaused
  };

  return (
    <AudioContext.Provider value={contextValue}>
      {props.children}
    </AudioContext.Provider>
  );
};

export default AudioContext;
