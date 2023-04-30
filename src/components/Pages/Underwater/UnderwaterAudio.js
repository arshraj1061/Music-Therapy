import React from "react";
import AudioCard from "../../AudioCard/AudioCard";
import Airbubbles from "../../../assets/audio/Underwater/Airbubbles.mp3";
import Sonar from "../../../assets/audio/Underwater/Sonar.mp3";
import Underthesea from "../../../assets/audio/Underwater/Underthesea.mp3";
import Whale from "../../../assets/audio/Underwater/Whale.mp3";
import {
  faWater,
  faMusic,
  faSoap,
  faFishFins
} from "@fortawesome/free-solid-svg-icons";

export default function BeachAudio() {
  const audioSources = [
    { source: Airbubbles, icon: faWater, title: "Air Bubbles" },
    { source: Sonar, icon: faMusic, title: "Sonar" },
    { source: Underthesea , icon: faSoap, title: "Under Sea " },
    { source: Whale, icon: faFishFins, title: "Whale" },
 
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
