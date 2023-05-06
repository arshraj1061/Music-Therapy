import beach from "../../../Images/beach.jpg";
import Card from "../../UI/Card";
import BeachBg from "../../BgImage/BgImage";
import Label from "../../Label/Label";
import Player from "../../Player/Player";
import BeachAudio from "./BeachAudio";
import { useContext} from "react";
import AudioContext from "../../../store/audio-context";

function Beach() {
  const audioCtx  = useContext(AudioContext);

  return (
    <>
      <BeachBg src={beach}>
        <Label text="Beach" />
      </BeachBg>
      <Card>
        {audioCtx.showPlayer && <Player /> } 
        <BeachAudio />
      </Card>
    </>
  );
}

export default Beach;
