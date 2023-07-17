import { createContext } from "react";
import happy from "../assets/audio/Emotions/happy.mp3";
import happy1 from "../assets/audio/Emotions/happy1.mp3";
import happy2 from "../assets/audio/Emotions/happy2.mp3";
import sad from "../assets/audio/Emotions/sad.mp3";
import sad1 from "../assets/audio/Emotions/sad1.mp3";
import sad2 from "../assets/audio/Emotions/sad2.mp3";
import angry1 from "../assets/audio/Emotions/angry1.mp3";
import angry2 from "../assets/audio/Emotions/angry2.mp3";
import neutral from "../assets/audio/Emotions/neutral.mp3";
import neutral1 from "../assets/audio/Emotions/neutral1.mp3";
import neutral2 from "../assets/audio/Emotions/neutral2.mp3";

const EmotionContext = createContext({
    emotion: '',
    emotionAudio: [],
});

export const EmotionContextProvider = (props) => {
    const emotionAudio = {
        happy : [ happy, happy1, happy2],
        sad : [ sad, sad1, sad2],
        neutral : [neutral, neutral1, neutral2, happy, angry1, angry2],
        surprise : [ happy2, happy1, happy2, neutral2],
        angry : [ angry1, angry2, sad2, sad1],
        fear : [ angry2, sad2, sad1, sad, angry1],
    }

return (
    <EmotionContext.Provider value={emotionAudio}>
      {props.children}
    </EmotionContext.Provider>
  );
}
export default EmotionContext;