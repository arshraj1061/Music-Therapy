import React from "react";
import ThetaCard from "../BinauralCard";
import classes from "../BinauralCard.module.css";

function Theta(props) {
  const thetaAudio = [
    {
      id: "156GQRKJJtHmHFgIys3ye104Xn_7vw4uG",
      cardStyle: classes.inside2,
      freq: '4.0 Hz',
      name: "Deep Relaxation",
      effect: "Promotes Deep Relaxation and Improves Feelings of Calmness and Tranquility",
    },
    {
      id: "1G7Y1s0ZUttM18LK7I3ZaXiFq0_kiE6eN",
      cardStyle: classes.inside2,
      freq: '4.5 Hz',
      name: "Sleep",
      effect: "Promotes a State of Deep Relaxation and Improves Sleep Quality",
    },
    {
      id: "1j0GYh2qLVzHBZdN6Gdd3uaTB65P1V9g4",
      cardStyle: classes.inside2,
      freq: '5.0 Hz',
      name: "Stressfree",
      effect: "Promotes Deep Relaxation and Relieve Feelings of Anxiety and Stress",
    },
    {
      id: "1MZ6ClTlBCv6M_jSfbyuo5s1TE7NeLIp2",
      cardStyle: classes.inside2,
      freq: '6.0 Hz',
      name: "Creative Thinking",
      effect: "Promotes Creative Thinking and Enhances Visualization Skills ",
    },
    {
      id: "1S_rJtzye1ATfMS6qvnohuXl60KIoMQpv",
      cardStyle: classes.inside2,
      freq: '7.0 Hz',
      name: "Focus and Concentration",
      effect: "Improves Focus and Concentration also Promotes a Sense of Mental Clarity",
    },
    {
      id: "1qn1XDQsEDYSH4QbErZ5gZFiF3-CUq1Oe",
      cardStyle: classes.inside2,
      freq: '8.0 Hz',
      name: "Meditation",
      effect: "Empowers the Deeper State of Relaxation and Reduces Anxiety",
    },
    
    
   
    
  ];

  return thetaAudio.map((audio, index) => (
    <ThetaCard
      key= {index}
      id= {audio.id}
      cardStyle= {audio.cardStyle}
      freq= {audio.freq}
      name= {audio.name}
      effect= {audio.effect}
    />
  ));
}

export default Theta;
