import React from "react";
import RagaCard from "../BinauralBeats/BinauralCard";
import classes from "../BinauralBeats/BinauralCard.module.css";
import Card from "../../UI/Card";
import raga from "../../../Images/raga.jpg";
import RagaBg from "../../BgImage/BgImage";
import Label from "../../Label/Label";

function Raga(props) {
  const ragaAudio = [
    {
      id: "1Xcuc_ySegRxePKQpyA7CaRi1uVRu0nzv",
      cardStyle: classes.inside3,
      freq: "Raga Tilak Kamod",
      effect:
        "Alters mood by bringing happiness and bliss (Ananda). Divine sentiments are expressed that inspires compassion",
    },
    {
      id: "1aRhvT1nS7v26_x5fbPOpWZI5WbF4TvfH",
      cardStyle: classes.inside3,
      freq: "Raga Puriya Dhanashree",
      effect:
        "Avoids acidity and generates a sweet, weighty, hazy, profound, and stable mental state",
    },
    {
      id: "1BuRKHtg6G69i-XNh2t2_WUl7ZY2t1w2t",
      cardStyle: classes.inside3,
      freq: "Raga Hindol",
      effect:
        "Aids in cleansing of the blood. Brings up feelings of joy, festivity, and celebration ",
    },
    {
      id: "1_Q6H7wYwPYHDJFpyrdkxZPaEsNnavH9I",
      cardStyle: classes.inside3,
      freq: "Raga Darbari",
      effect:
        "Reduces Stress. Tansen wrote for Akbar to help him relax after a hectic day of court life.",
    },
    {
      id: "1c0sgNgdnre6Uo-CeCCCEeA8R_qxKWUUu",
      cardStyle: classes.inside3,
      freq: "Raga Megh Malhar",
      effect:
        "Treatement of asthma and sunstroke, cooling and relaxing impact on the mind and body. Induce a feeling of comfort and revitalization",
    },
    {
      id: "1KA6wxAbZHNxGT3LNEMyMIx_b7IRNielo",
      cardStyle: classes.inside3,
      freq: "Raga Bageshri",
      effect:
        "Evokes feelings of tranquility, depth, stability, and darkness. Used to treat hypertension and diabetes. Enhances mental acuity and calmness",
    },
    {
      id: "1Zvet-IwVR8qyirMBVM5tsZp6xZd6DbWW",
      cardStyle: classes.inside3,
      freq: "Raga Bhairavi",
      effect:
        "Gives relief in illnesses like tuberculosis, cancer, common cold, sinusitis, and toothaches",
    },
    {
      id: "1A1Ilwzstd6DSjUowfrvAWRKeLziIFQRM",
      cardStyle: classes.inside3,
      freq: "Raga Desi Todi",
      effect:
        "Relief from cold and headache to patients of high blood pressure.  Associated with the devotional or meditative mood",
    },
    {
      id: "1Yz5lCdgY_j3wsoWJg35Iw2ShBNugwxAa",
      cardStyle: classes.inside3,
      freq: "Raga Malkauns",
      effect:
        "Effective in treating hypotension, extremely low blood pressure. Noted for its profound and introspective atmosphere",
    },
  ];
  const mappedArray = ragaAudio.map((audio, index) => (
    <RagaCard
      key={index}
      id={audio.id}
      cardStyle={audio.cardStyle}
      freq={audio.freq}
      effect={audio.effect}
    />
  ));

  return (
    <>
      <RagaBg src={raga}>
        <Label text="Raga" />
      </RagaBg>
      <Card>{mappedArray}</Card>
    </>
  );
}

export default Raga;
