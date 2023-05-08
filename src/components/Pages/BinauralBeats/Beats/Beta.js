import React from "react";
import BetaCard from "../BinauralCard";
import classes from "../BinauralCard.module.css";

function Beta(props) {
  return (
    <div>
      <BetaCard
        cardStyle={classes.inside1}
        freq={4.0}
        name="Memory"
        effect="Increasing of memory retention functionalities"
      />
    </div>
  );
}

export default Beta;
