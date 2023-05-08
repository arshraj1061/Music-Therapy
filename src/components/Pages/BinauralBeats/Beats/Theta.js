import React from "react";
import ThetaCard from "../BinauralCard";
import classes from "../BinauralCard.module.css";

function Theta(props) {
  return (
    <div>
      <ThetaCard
        cardStyle={classes.inside1}
        freq={4.0}
        name="Memory"
        effect="Increasing of memory retention functionalities"
        
      />
    </div>
  );
}

export default Theta;
