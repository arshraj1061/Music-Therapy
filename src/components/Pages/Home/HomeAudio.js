import React from "react";
import AudioCard from "../../AudioCard/AudioCard";
import Brownnoise from "../../../assets/audio/Home/Brownnoise.mp3";
import Cat from "../../../assets/audio/Home/Cat.mp3";
import Chimney from "../../../assets/audio/Home/Chimney.mp3";
import Clock from "../../../assets/audio/Home/Clock.mp3";
import Coffeepot from "../../../assets/audio/Home/Coffeepot.mp3";
import Drop from "../../../assets/audio/Home/Drop.mp3";
import Dryer from "../../../assets/audio/Home/Dryer.mp3";
import Fan from "../../../assets/audio/Home/Brownnoise.mp3";
import Heartbeat from "../../../assets/audio/Home/Heartbeat.mp3";
import Keyboard from "../../../assets/audio/Home/Keyboard.mp3";
import Pinknoise from "../../../assets/audio/Home/Pinknoise.mp3";
import RainonUmbrella from "../../../assets/audio/Home/RainonUmbrella.mp3";
import Shower from "../../../assets/audio/Home/Shower.mp3";
import Vacuum from "../../../assets/audio/Home/Vacuum.mp3";
import Washingmachine from "../../../assets/audio/Home/Washingmachine.mp3";
import Whitenoise from "../../../assets/audio/Home/Whitenoise.mp3";
import Wind from "../../../assets/audio/Home/Wind.mp3";
import {
  faWater,
  faMusic,
  faWaveSquare,
  faClock,
  faCoffee,
  faCat,
  faHouseChimney,
  faDroplet,
  faFan,
  faHeartbeat,
  faKeyboard,
  faUmbrella,
  faShower,
  faWind,
  faBox,
} from "@fortawesome/free-solid-svg-icons";

export default function BeachAudio() {
  const audioSources = [
    { source: Brownnoise, icon: faWater, title: "Brown noise" },
    { source: Cat, icon: faCat, title: "Cat" },
    { source: Chimney , icon:  faHouseChimney, title: "Chimney " },
    { source: Clock, icon: faClock, title: "Clock" },
    { source: Coffeepot, icon: faCoffee, title: "Coffee pot" },
    { source: Drop , icon: faDroplet, title: "Drop" },
    { source: Dryer, icon: faFan, title: "Dryer" },
    { source: Fan , icon: faFan, title: "Fan" },
    { source: Heartbeat, icon: faHeartbeat, title: "Heartbeat" },
    { source: Keyboard, icon: faKeyboard, title: "Keyboard" },
    { source: Pinknoise, icon: faWaveSquare, title: "Pink noise" },
    { source: RainonUmbrella, icon: faUmbrella, title: "Rain on Umbrella" },
    { source: Shower, icon: faShower, title: "Shower" },
    { source: Vacuum, icon: faMusic, title: "Vacuum" },
    { source: Washingmachine, icon: faBox, title: "Washing machine" },
    { source: Whitenoise , icon: faWaveSquare, title: "White noise " },
    { source: Wind, icon: faWind, title: "Wind" },
  
  ];

  function displayAudioCards() {
    return audioSources.map((audio, index) => (
      <AudioCard
        key={index}
        source={audio.source}
        title={audio.title}
        dp={audio.icon}
      />
    ));
  }

  return <span className="audio-collection">{displayAudioCards()}</span>;
}
