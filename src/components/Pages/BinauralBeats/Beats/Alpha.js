import React from "react";
import AlphaCard from "../BinauralCard";
import classes from "../BinauralCard.module.css";

function Alpha(props) {
  const alphaAudio = [
    {
      id: "105-Z79ytS2ebkaPfhyW6ep7o-kv95DCE",
      cardStyle: classes.inside3,
      freq: 4.0,
      name: "Memory",
      effect: "Increasing of memory retention functionalities",
    },
    {
      id: "1G3eINjQHdr78VlODr1tckbH3Y7dvlDh6",
      cardStyle: classes.inside3,
      freq: 8.0,
      name: "Memory loss",
      effect: "Increasing of memory retention functionalities",
    },
    {
      id: "105-Z79ytS2ebkaPfhyW6ep7o-kv95DCE",
      cardStyle: classes.inside3,
      freq: 4.0,
      name: "Memory",
      effect: "Increasing of memory retention functionalities",
    },
    {
      id: "105-Z79ytS2ebkaPfhyW6ep7o-kv95DCE",
      cardStyle: classes.inside3,
      freq: 4.0,
      name: "Memory",
      effect: "Increasing of memory retention functionalities",
    },
  ];

  return alphaAudio.map((audio, index) => (
    <AlphaCard
      key= {index}
      id= {audio.id}
      cardStyle= {audio.cardStyle}
      freq= {audio.freq}
      name= {audio.name}
      effect= {audio.effect}
    />
  ));
}

export default Alpha;
