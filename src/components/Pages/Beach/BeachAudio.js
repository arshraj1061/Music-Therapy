import React from "react";
import AudioCard from "../../AudioCard/AudioCard";
import Waves from "../../../assets/audio/Beach/Waves.mp3";
import Seagulls from "../../../assets/audio/Beach/Seagulls.mp3";
import Campfire from "../../../assets/audio/Beach/Campfire.mp3";
import Rain from "../../../assets/audio/Beach/Rain.mp3";
import Guitar from "../../../assets/audio/Beach/Guitar.mp3";
import Boat from "../../../assets/audio/Beach/Boat.mp3";
import Rowboat from "../../../assets/audio/Beach/Rowboat.mp3";
import Storm from "../../../assets/audio/Beach/Storm.mp3";
import Melody from "../../../assets/audio/Beach/Melody.mp3";
import {
  faWater,
  faCrow,
  faFire,
  faCloudRain,
  faGuitar,
  faShip,
  faSailboat,
  faCloudBolt,
} from "@fortawesome/free-solid-svg-icons";

export default function BeachAudio() {

  const audioSources = [
    { source: Waves, icon: faWater, title: "Waves" },
    { source: Seagulls, icon: faCrow, title: "Seagulls" },
    { source: Campfire, icon: faFire, title: "Campfire" },
    { source: Rain, icon: faCloudRain, title: "Rain" },
    { source: Guitar, icon: faGuitar, title: "Guitar" },
    { source: Boat, icon: faShip, title: "Boat" },
    { source: Rowboat, icon: faSailboat, title: "Rowboat" },
    { source: Storm, icon: faCloudBolt, title: "Storm" },
    { source: Melody, icon: faGuitar, title: "Melody" },
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
