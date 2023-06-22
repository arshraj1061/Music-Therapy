import React from "react";
import AlphaCard from "../BinauralCard";
import classes from "../BinauralCard.module.css";

function Alpha(props) {
  const alphaAudio = [
    {
      id: "1kzuv3xr2dnqr0VKSJGBh20SJfZakz0An",
      cardStyle: classes.inside3,
      freq: '8.0 Hz',
      name: "Relaxed State",
      effect: "Induces a Relaxed State of Mind and Reduces Stress and Anxiety",
    },
    {
      id: "1GnKtlKWRY3SIozdgSqZTgJG99ycA0ad0",
      cardStyle: classes.inside3,
      freq: '8.5 Hz',
      name: "Release of Endorphins",
      effect: "Helps to Improve Mood and Reduces Pain",
    },
    {
      id: "12B6ve2QMGMANjDpVtDSZNoesq2rTw4Hl",
      cardStyle: classes.inside3,
      freq: '9.0 Hz',
      name: "Memory",
      effect: "Improves Memory and Cognitive Functions",
    },
    {
      id: "1PiJbx0up3p2i2fw3GN8z231BgGYa_nHb",
      cardStyle: classes.inside3,
      freq: '10.0 Hz',
      name: "Relaxation and Calmness",
      effect: "Induces Feeling of Relaxation and Calmness also Accelerates Focus and Concentration",
    },
    {
      id: "105-Z79ytS2ebkaPfhyW6ep7o-kv95DCE",
      cardStyle: classes.inside3,
      freq: '10.5 Hz',
      name: "Alertness",
      effect: "State of Relaxed Alertness and Promotes Mental Clarity and Focus",
    },
    {
      id: "19YL9PqkDatxX40PHcE-oUGAeYBs9nzzA",
      cardStyle: classes.inside3,
      freq: '11.0 Hz',
      name: "Meditation",
      effect: "Empowers the Deeper State of Relaxation and Reduce Anxiety",
    },
    {
      id: "1ZFvD402l7aZTwwL_otpqMlk9z9Q2QRz2",
      cardStyle: classes.inside3,
      freq: '11.5 Hz',
      name: "Creativity",
      effect: "Enhances Creativity and Improves Problem Solving Skills",
    },

    {
      id: "1dyaGLeZKhJZ7ZWSP49vVgzwz0TbpbIs9",
      cardStyle: classes.inside3,
      freq: '12.0 Hz',
      name: "Cognition",
      effect: "Increases Mental Clarity and Focus also Develops Cognitive Performance",
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
