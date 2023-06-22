import React from "react";
import GammaCard from "../BinauralCard";
import classes from "../BinauralCard.module.css";

function Gamma(props) {
  const gammaAudio = [
    {
      id: "1mURROt8wsxJxhouxVn2hbjg5JmC5FlfE",
      cardStyle: classes.inside5,
      freq: '40.0 Hz',
      name: "Learning Enhancement",
      effect: "Helps in Memory Processing and Reduces symptoms of Parkinson's disease",
    },
    {
      id: "1qGXynLXcBqozhzbpklwpUYndu18v-NRz",
      cardStyle: classes.inside5,
      freq: '50.0 Hz',
      name: "Boosts Mood",
      effect: "Helps in Reducing Anxiety and Improving Mood",
    },
    {
      id: "1Osk_5M7SfZtKkjItfS-U-dnmfoAjkHdZ",
      cardStyle: classes.inside5,
      freq: '60.0 Hz',
      name: "Cognitive Functions",
      effect: "Strengthens Decision-making skills and Reduces Symptoms of Depression and Anxiety",
    },
    {
      id: "1AZLkOY2cXKyi7ZERGsMA3XPMobzqS_Go",
      cardStyle: classes.inside5,
      freq: '70.0 Hz',
      name: "Perception",
      effect: "Enforces Perception and Sensory Processing also Reduces Symptoms of ADHD ",
    },
    

    {
      id: "1esmqxtGGcwyWKCHGNzyD5G6NLJAy1zdm",
      cardStyle: classes.inside5,
      freq: '90.0 Hz',
      name: "Consciousness",
      effect: "Involves Higher Levels of consciousness also helps in reducing Symptoms of PTSD ",
    },
    {
      id: "1y1SLn58fbUoVfdEH4PowuYaJmkBxPdRk",
      cardStyle: classes.inside5,
      freq: '100.0 Hz',
      name: "Awareness",
      effect: "Increases Awareness also improves Cognitive Performance",
    },
    
    
   
    
  ];

  return gammaAudio.map((audio, index) => (
    <GammaCard
      key= {index}
      id= {audio.id}
      cardStyle= {audio.cardStyle}
      freq= {audio.freq}
      name= {audio.name}
      effect= {audio.effect}
    />
  ));
}

export default Gamma;