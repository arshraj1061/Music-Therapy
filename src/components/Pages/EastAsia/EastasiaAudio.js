import React from "react";
import AudioCard from "../../AudioCard/AudioCard";
import Bamboo from "../../../assets/audio/EastAsia/Bamboo.mp3";
import Chineseflute from "../../../assets/audio/EastAsia/Chineseflute.mp3";
import Duduk from "../../../assets/audio/EastAsia/Duduk.mp3";
import Japanesecicada from "../../../assets/audio/EastAsia/Japanesecicada.mp3";
import Om from "../../../assets/audio/EastAsia/Om.mp3";
import Ritual from "../../../assets/audio/EastAsia/Ritual.mp3";
import Taiko from "../../../assets/audio/EastAsia/Taiko.mp3";
import Tibetanbowl from "../../../assets/audio/EastAsia/Tibetanbowl.mp3";
import Windchimes from "../../../assets/audio/EastAsia/Windchimes.mp3";
import {
  faWater,
  faFire,
  faMusic,
  faOm,
  faDrum,
  faBell,
  faBowlRice
  
} from "@fortawesome/free-solid-svg-icons";

export default function BeachAudio() {
  const audioSources = [
    { source: Bamboo, icon: faWater, title: "Bamboo" },
    { source: Chineseflute, icon: faMusic, title: "Chinese flute" },
    { source: Duduk, icon: faFire, title: "Duduk" },
    { source: Japanesecicada, icon: faWater, title: "Japanese Cicada" },
    { source: Om, icon: faOm, title: "Om" },
    { source: Ritual, icon: faMusic, title: "Ritual" },
    { source: Taiko, icon: faDrum, title: "Taiko" },
    { source: Tibetanbowl, icon: faBowlRice, title: "Tibetan Bowl" },
    { source: Windchimes, icon: faBell, title: "Windchimes" },
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
