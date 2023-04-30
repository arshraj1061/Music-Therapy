import React from "react";
import AudioCard from "../../AudioCard/AudioCard";
import Birds from "../../../assets/audio/Countryside/Birds.mp3";
import Cow from "../../../assets/audio/Countryside/Cow.mp3";
import Dog from "../../../assets/audio/Countryside/Dog.mp3";
import Hens from "../../../assets/audio/Countryside/Hens.mp3";
import Horse from "../../../assets/audio/Countryside/Horse.mp3";
import Pig from "../../../assets/audio/Countryside/Pig.mp3";
import Rain from "../../../assets/audio/Countryside/Rain.mp3";
import Rooster from "../../../assets/audio/Countryside/Rooster.mp3";
import Sheep from "../../../assets/audio/Countryside/Sheep.mp3";
import Storm from "../../../assets/audio/Countryside/Storm.mp3";
import Wind from "../../../assets/audio/Countryside/Wind.mp3";

import {
  faCrow,
  faCloudRain,
  faCloudBolt,
  faMusic,
  faCow,
  faDog,
  faHorse,
  faPiggyBank,
  faWind,
  faEgg,
  faFeather
  
} from "@fortawesome/free-solid-svg-icons";

export default function BeachAudio() {
  const audioSources = [
    { source: Birds, icon: faCrow, title: "Birds" },
    { source: Cow, icon: faCow, title: "Cow" },
    { source: Dog, icon: faDog, title: "Dog" },
    { source: Hens, icon: faEgg, title: "Hens" },
    { source: Horse, icon: faHorse, title: "Horse" },
    { source: Pig, icon: faPiggyBank, title: "Pig" },
    { source: Rain, icon: faCloudRain, title: "Rain" },
    { source: Rooster, icon: faFeather, title: "Rooster" },
    { source: Sheep, icon: faMusic, title: "Sheep" },
    { source: Storm, icon: faCloudBolt, title: "Storm" },
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
