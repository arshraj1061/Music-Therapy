import React from "react";
import AudioCard from "../../AudioCard/AudioCard";
import Traffic from "../../../assets/audio/Urban/Traffic.mp3";
import Police from "../../../assets/audio/Urban/Police.mp3";
import People from "../../../assets/audio/Urban/People.mp3";
import Train from "../../../assets/audio/Urban/Train.mp3";
import Works from "../../../assets/audio/Urban/Works.mp3";
import Wind from "../../../assets/audio/Urban/Wind.mp3";
import Rain from "../../../assets/audio/Urban/Rain.mp3";
import Pigeons from "../../../assets/audio/Urban/Pigeons.mp3";
import Airport from "../../../assets/audio/Urban/Airport.mp3";
import {
  faCar,
  faTrain,
  faPeopleGroup,
  faWind,
  faCloudShowersHeavy,
  faDove,
  faCartFlatbedSuitcase,
  faHandcuffs,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";

export default function BeachAudio() {

  const audioSources = [
    { source: Traffic, icon: faCar, title: "Traffic" },
    { source: Police, icon: faHandcuffs, title: "Police" },
    { source: People, icon: faPeopleGroup, title: "People" },
    { source: Train, icon: faTrain, title: "Train" },
    { source: Works, icon: faIndustry, title: "Works" },
    { source: Wind, icon: faWind, title: "Wind" },
    { source: Rain, icon: faCloudShowersHeavy, title: "Rain" },
    { source: Pigeons, icon: faDove, title: "Pigeons" },
    { source: Airport, icon: faCartFlatbedSuitcase, title: "Airport" },
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
