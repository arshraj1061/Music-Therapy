import React from "react";
import DeltaCard from "../BinauralCard";
import classes from "../BinauralCard.module.css";

function Delta(props) {
  const deltaAudio = [
    {
      id: "1P5-929z5LjP7N2P4hquqYXAIife5stRk",
      cardStyle: classes.inside1,
      freq: '0.5 Hz',
      name: "Relaxation",
      effect: "Promotes Deep Relaxation and sense of Inner Peace ",
    },
    {
      id: "18unhMf25CaRjCu86KPjsd3MiBrKpHrGT",
      cardStyle: classes.inside1,
      freq: '1.0 Hz',
      name: "Deep Relaxation",
      effect: "Promotes a State of Deep Relaxation and Improves Sleep Quality",
    },
    {
      id: "1vSwys9xyn4OctL2oCn_nCm62a8s6FFre",
      cardStyle: classes.inside1,
      freq: '1.5 Hz',
      name: "Calmness",
      effect: "Promotes a State of Deep relaxation and Improves Feeling of Calmness and Tranquility",
    },
    {
      id: "1_nWZpzvNaYApl_RD3p_s1DhOfELKg5Tw",
      cardStyle: classes.inside1,
      freq: '2.0 Hz',
      name: "Relief",
      effect: "Promotes Deep Relaxation and Relieve Feelings of Anxiety and Stress",
    },
   
    {
      id: "1cZ0H9tX_Lp73E_qiheDxxm7rmJ_HGeBn",
      cardStyle: classes.inside1,
      freq: '3.0 Hz',
      name: "Inner Peace",
      effect: "Empowers Inner Peace and Improves Sleep Quality",
    },
    
    {
      id: "186lWnHgKpkPdMyhIqIV49qlO9Y1QVtTQ",
      cardStyle: classes.inside1,
      freq: '4.0 Hz',
      name: "Deep Sleep",
      effect: "Promotes a Restful and Restorative Sleep State",
    },
    
    
  ]
  return deltaAudio.map((audio, index) => (
    <DeltaCard
      key= {index}
      id= {audio.id}
      cardStyle= {audio.cardStyle}
      freq= {audio.freq}
      name= {audio.name}
      effect= {audio.effect}
    />
  ));
}

export default Delta;
