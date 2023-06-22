import React from "react";
import AudioCard from "../../AudioCard/AudioCard";
import Birds from "../../../assets/audio/Park/Birds.mp3";
import Dog from "../../../assets/audio/Park/Dog.mp3";
import Ducks from "../../../assets/audio/Park/Ducks.mp3";
import Fountain from "../../../assets/audio/Park/Fountain.mp3";
import Kidsplaying from "../../../assets/audio/Park/Kidsplaying.mp3";
import Lake from "../../../assets/audio/Park/Lake.mp3";
import {
  faWater,
  faDog,
  faFire,
  faChildren,
  faCrow,
  faWaterLadder
} from "@fortawesome/free-solid-svg-icons";

export default function RagaAudio() {
  const audioSources = [
    { source: Birds, icon: faCrow, title: "Birds" },
    { source: Dog, icon: faDog, title: "Dog" },
    { source: Ducks, icon: faFire, title: "Ducks" },
    { source: Fountain, icon: faWaterLadder, title: "Fountain" },
    { source: Kidsplaying, icon: faChildren, title: "Kids playing" },
    { source: Lake, icon: faWater, title: "Lake" },
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
