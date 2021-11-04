import React from "react";
import ArtistDescription from "../ArtistDescription/ArtistDescription";
import ArtistPicture from "../ArtistPicture/ArtistPicture";

import classes from "./ArtistInfo.module.css";

const ARTIST_IMAGE =
  "https://img.discogs.com/dvmkocrT1XaN15tFtMmQzu-SMRc=/600x400/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-57103-1619472775-8523.jpeg.jpg";

const ARTIST_TEXT =
  "English singer-songwriter, composer and pianist, born March 25, 1947, Pinner, Middlesex. Elton John has been one of the dominant forces in rock and popular music, especially during the 1970s.";

const ArtistInfo = (props) => {
  return (
    <div className={classes.ArtistInfo}>
      <ArtistPicture img={props.img} alt="Artist profile picture" />
      <ArtistDescription name={props.name} text={ARTIST_TEXT} />
    </div>
  );
};

export default ArtistInfo;
