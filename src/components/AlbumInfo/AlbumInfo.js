import React from "react";

import classes from "./AlbumInfo.module.css";

const AlbumInfo = (props) => {
  return (
    <div className={classes.albumInfo}>
      <div className={classes.imgContainer}>
        <img className={classes.albumImg} src={props.src} alt={props.alt} />
      </div>
      <div className={classes.albumTextSection}>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.release}>{props.release}</p>
        <p className={classes.recordLabel}>{props.recordLabel}</p>
      </div>
    </div>
  );
};

export default AlbumInfo;
