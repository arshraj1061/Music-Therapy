import { createContext } from "react";
import happy from "../assets/audio/Emotions/happy.mp3";
import sad from "../assets/audio/Emotions/sad.mp3";
import M5 from "../assets/audio/Emotions/5.mp3";
import M6 from "../assets/audio/Emotions/6.mp3";
import M7 from "../assets/audio/Emotions/7.mp3";

const EmotionContext = createContext({
    emotion: '',
    emotionAudio: [],
});

export const EmotionContextProvider = (props) => {
    const emotionAudio = {
        happy : [ happy, sad, M5, M6, M7],
        sad : [ sad, M5, M6, M7],
        neutral : [ happy, sad, M6, M7],
        surprise : [ happy, sad, M5, M7],
        angry : [ happy, sad, M5, M6],
        fear : [ happy, sad, M6, M7],
    }

return (
    <EmotionContext.Provider value={emotionAudio}>
      {props.children}
    </EmotionContext.Provider>
  );
}
export default EmotionContext;