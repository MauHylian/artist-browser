import React from "react";
import { useState, useCallback } from "react";

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
  const [artistAlbums, setArtistAlbums] = useState();

  if (localStorage.getItem("spotify-access_token")) {
    localStorage.getItem("spotify-access_token");
  }

  const fetchAlbums = useCallback(async (id) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/artists/${id}/albums?market=US&limit=50`,
        {
          headers: {
            Host: "api.spotify.com",
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem(
              "spotify-access_token"
            )}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log("ALBUMES");
      console.log(data);
      setArtistAlbums(data.items);
      // ARTIST_INFO_SPOTIFY = data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleCallback = (dataChild) => {
    console.log(dataChild);
    fetchAlbums(dataChild.id);
    setArtistName(dataChild.name);
    setArtistImg(dataChild.images[0].url);
  };

  return (
    <div className={classes.App}>
      <Header parentCallback={handleCallback} />
      <MainContainer>
        <ArtistInfo name={artistName} img={artistImg} />
        <Divider style={{ margin: "3rem 0 3rem 0" }} />
        <p className={classes.albumsHeader}>Albums</p>
        {artistAlbums.map((album, index) => (
          <AlbumInfo
            key={index}
            src={album.images[0].url}
            title={album.name}
            alt="Cover"
            release="2000"
            recordLabel="DJI"
          />
        ))}
      </MainContainer>
    </div>
  );
};

export default App;
