import React from "react";
import DeltaCard from "../BinauralCard";
import classes from "../BinauralCard.module.css";

function Delta(props) {
  return (
    <div>
      <DeltaCard
        cardStyle={classes.inside1}
        freq={4.0}
        name="Memory"
        effect="Increasing of memory retention functionalities"
      />
    </div>
  );
}

export default Delta;
