import React from "react";
import BetaCard from "../BinauralCard";
import classes from "../BinauralCard.module.css";

function Beta(props) {
  const betaAudio = [
    {
      id: "1MNUYt7ii6opUcijYIzYthc99CoBbFDad",
      cardStyle: classes.inside4,
      freq: '12.5 Hz',
      name: "Relaxed State",
      effect: "Induces a Relaxed State of Mind and Reduces Stress and Anxiety",
    },
    {
      id: "1bAGptph8rgfWa9uZAHmpcw30W1ZVAava",
      cardStyle: classes.inside4,
      freq: '13.0 Hz',
      name: "Relaxed Wakefullness",
      effect: "Improves Focus and Attention",
    },
    {
      id: "1WijK5-ypzDOyqvUs8ulrapbL5BbArxRC",
      cardStyle: classes.inside4,
      freq: '14.0 Hz',
      name: "Mental Health",
      effect: "Improves Mental health and Concentration",
    },
    {
      id: "1U0lxP-ijQuTlwXk4R_5vo9uZ_K0BXExI",
      cardStyle: classes.inside4,
      freq: '15.0 Hz',
      name: "Cognitive Function",
      effect: "Improves Mental Clarity, Cognitive Functions and Problem-Solving Skills",
    },
    {
      id: "1I0tL3xaItUUUudAd5nD89NHwT7n7qgfC",
      cardStyle: classes.inside4,
      freq: '18.0 Hz',
      name: "Productivity",
      effect: "Induces a Relaxed State of Mind and Reduces Stress and Anxiety",
    },
    {
      id: "1DspBG0cPSlus9BSsyc7HgdyE5smgNNg-",
      cardStyle: classes.inside4,
      freq: '20.0 Hz',
      name: "Relaxed State",
      effect: "Induces a Relaxed State of Mind and Reduces Stress and Anxiety",
    },
    
    {
      id: "1AgEwBjRV7MR2pZRUC4racVz_IrOrqa_2",
      cardStyle: classes.inside4,
      freq: '30.0 Hz',
      name: "Mental Alertness",
      effect: "Increases Mental Alertness and Reduces Feeling of Fatigue or drowsiness",
    },
    
    
  ]
  return betaAudio.map((audio, index) => (
    <BetaCard
      key= {index}
      id= {audio.id}
      cardStyle= {audio.cardStyle}
      freq= {audio.freq}
      name= {audio.name}
      effect= {audio.effect}
    />
  ));
}

export default Beta;

  
    
