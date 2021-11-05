import React from "react";
import LoginButton from "../LoginButton/LoginButton";
import Searchbar from "../Searchbar/Searchbar";

import classes from "./Header.module.css";

const Header = (props) => {
  const handleCallback = (dataChild) => {
    console.log(dataChild.artists.items[0]);
    props.parentCallback(dataChild.artists.items[0]);
  };

  return (
    <header>
      <LoginButton />
      <Searchbar parentCallback={handleCallback} />
    </header>
  );
};

export default Header;
