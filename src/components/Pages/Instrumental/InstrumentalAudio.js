import React from "react";
import AudioCard from "../../AudioCard/AudioCard";
import DeepRelax from "../../../assets/audio/Instrumental/DeepRelax.mp3";
import EveningFall from "../../../assets/audio/Instrumental/EveningFall.mp3";
import Gymnopedie from "../../../assets/audio/Instrumental/Gymnopedie.mp3";
import Lullaby from "../../../assets/audio/Instrumental/Lullaby.mp3";
import Meditation from "../../../assets/audio/Instrumental/Meditation.mp3";
import Piano from "../../../assets/audio/Instrumental/Piano.mp3";
import Violin from "../../../assets/audio/Instrumental/Violin.mp3";
import {
  faWater,
  faGuitar,
  faShip,
  faMusic,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

export default function BeachAudio() {
  const audioSources = [
    { source: DeepRelax, icon: faShip, title: "Deep Relax" },
    { source: EveningFall, icon: faWater, title: "Evening Fall" },
    { source: Gymnopedie, icon: faGuitar, title: "Gymnopedie" },
    { source: Lullaby, icon: faMusic, title: "Lullaby" },
    { source: Meditation , icon: faGuitar, title: "Meditation " },
    { source: Piano, icon: faLeaf, title: "Piano" },
    { source: Violin, icon: faShip, title: "Violin" },
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
