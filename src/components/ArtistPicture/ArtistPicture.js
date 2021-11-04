import React from "react";

import classes from "./ArtistPicture.module.css";

const ArtistPicture = (props) => {
  return (
    <div className={classes.imgContainer}>
      <img className={classes.artistImg} src={props.img} alt={props.alt} />
    </div>
  );
};

export default ArtistPicture;
