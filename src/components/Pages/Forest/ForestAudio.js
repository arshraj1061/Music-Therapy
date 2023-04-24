import React from "react";
import AudioCard from "../../AudioCard";
import fire from "../../../assets/audio/fire.mp3";
import jungle from "../../../assets/audio/jungle.mp3";
import rain from "../../../assets/audio/rain.mp3";
import thunder from "../../../assets/audio/thunder.mp3";
import waves from "../../../assets/audio/waves.mp3";
import {
  faWater,
  faCrow,
  faFire,
  faCloudRain,
  faGuitar,
  faShip,
  faSailboat,
  faCloudBolt,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

export default function BeachAudio() {
  const audioSources = [
    { source: waves, icon: faWater, title: "Waves" },
    { source: jungle, icon: faCrow, title: "Seagulls" },
    { source: fire, icon: faFire, title: "Camp Fire" },
    { source: rain, icon: faCloudRain, title: "Rain" },
    { source: thunder, icon: faGuitar, title: "Guitar" },
    { source: thunder, icon: faShip, title: "Ship" },
    { source: thunder, icon: faSailboat, title: "Boat" },
    { source: thunder, icon: faCloudBolt, title: "Storm" },
    { source: thunder, icon: faMusic, title: "Melody" },
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
