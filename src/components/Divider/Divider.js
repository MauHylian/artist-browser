import React from "react";

import classes from "./Divider.module.css";

const Divider = (props) => {
  return <div className={classes.divider} style={props.style}></div>;
};

export default Divider;
