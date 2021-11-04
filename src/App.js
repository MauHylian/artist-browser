import React from "react";
import { useState } from "react";

import classes from "./App.module.css";
import AlbumInfo from "./components/AlbumInfo/AlbumInfo";
import ArtistInfo from "./components/ArtistInfo/ArtistInfo";
import Divider from "./components/Divider/Divider";

import Header from "./components/Header/Header";
import LoginButton from "./components/LoginButton/LoginButton";
import MainContainer from "./components/MainContainer/MainContainer";

const App = (props) => {
  const [artistName, setArtistName] = useState("Elton John");
  const [artistImg, setArtistImg] = useState(
    "https://i.scdn.co/image/ab6761610000e5eb0a7388b95df960b5c0da8970"
  );

  if (localStorage.getItem("spotify-access_token")) {
    localStorage.getItem("spotify-access_token");
  }

  const handleCallback = (dataChild) => {
    console.log(dataChild);
    setArtistName(dataChild.name);
    setArtistImg(dataChild.images[0].url);
  };

  return (
    <div className={classes.App}>
      <Header parentCallback={handleCallback} />
      <LoginButton />
      <MainContainer>
        <ArtistInfo name={artistName} img={artistImg} />
        <Divider style={{ margin: "3rem 0 3rem 0" }} />
        <p className={classes.albumsHeader}>Albums</p>
        <AlbumInfo
          src="https://img.discogs.com/dvmkocrT1XaN15tFtMmQzu-SMRc=/600x400/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-57103-1619472775-8523.jpeg.jpg"
          alt="Album cover art"
          title="Empty Sky"
          release="1969"
          recordLabel="DJI Records"
        />
      </MainContainer>
    </div>
  );
};

export default App;
