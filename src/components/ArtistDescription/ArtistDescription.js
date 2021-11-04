import React from "react";

import classes from "./ArtistDescription.module.css";

const ArtistDescription = (props) => {
  return (
    <div className={classes.description}>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.text}>{props.text}</p>
    </div>
  );
};

export default ArtistDescription;
