import React from "react";
import AudioCard from "../../AudioCard";
import fire from "../../../assets/audio/fire.mp3";
import jungle from "../../../assets/audio/jungle.mp3";
import rain from "../../../assets/audio/rain.mp3";
import thunder from "../../../assets/audio/thunder.mp3";
import traffic from "../../../assets/audio/waves.mp3";
import {
 faCar,
 fa
} from "@fortawesome/free-solid-svg-icons";

export default function BeachAudio() {
  const audioSources = [
    { source: traffic, icon: faCar, title: "Traffic" },
    { source: traffic, icon: faCar, title: "Traffic" },
    
    
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
