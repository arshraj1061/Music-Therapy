import React from "react";
import GammaCard from "../BinauralCard";
import classes from "../BinauralCard.module.css";

function Gamma(props) {
  return (
    <div>
      <GammaCard
        cardStyle={classes.inside5}
        freq={4.0}
        name="Memory"
        effect="Increasing of memory retention functionalities"
      />
    </div>
  );
}

export default Gamma;
