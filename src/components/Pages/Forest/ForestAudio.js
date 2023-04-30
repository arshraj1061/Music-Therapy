import React from "react";
import AudioCard from "../../AudioCard/AudioCard";
import Birds from "../../../assets/audio/Forest/Birds.mp3";
import Campfire from "../../../assets/audio/Forest/Campfire.mp3";
import Crickets from "../../../assets/audio/Forest/Crickets.mp3";
import Frogs from "../../../assets/audio/Forest/Frogs.mp3";
import Owl from "../../../assets/audio/Forest/Owl.mp3";
import Rainonatent from "../../../assets/audio/Forest/Rainonatent.mp3";
import River from "../../../assets/audio/Forest/River.mp3";
import Storm from "../../../assets/audio/Forest/Storm.mp3";
import TawnyOwl from "../../../assets/audio/Forest/TawnyOwl.mp3";
import Waterfall from "../../../assets/audio/Forest/Waterfall.mp3";
import Wind from "../../../assets/audio/Forest/Wind.mp3";
import Wolf from "../../../assets/audio/Forest/Wolf.mp3";
import Woodpecker from "../../../assets/audio/Forest/Woodpecker.mp3";
import {
  faWater,
  faCrow,
  faFire,
  faCloudBolt,
  faMusic,
  faTents,
  faBugs,
  faFrog,
  faWaterLadder,
  faWind,
  faKiwiBird
} from "@fortawesome/free-solid-svg-icons";

export default function BeachAudio() {
  const audioSources = [
    { source: Birds, icon: faCrow, title: "Birds" },
    { source: Campfire, icon: faFire, title: "Campfire" },
    { source: Crickets, icon: faBugs, title: "Crickets" },
    { source: Frogs, icon: faFrog, title: "Frogs" },
    { source: Owl, icon: faMusic, title: "Owl" },
    { source: Rainonatent, icon: faTents, title: "Rain on tent" },
    { source: River, icon: faWater, title: "River" },
    { source: Storm, icon: faCloudBolt, title: "Storm" },
    { source: TawnyOwl, icon: faMusic, title: "Tawny Owl" },
    { source: Waterfall, icon: faWaterLadder, title: "Waterfall" },
    { source: Wind , icon: faWind, title: "Wind " },
    { source: Wolf, icon: faMusic, title: "Wolf" },
    { source: Woodpecker , icon: faKiwiBird, title: "Woodpecker " },
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
