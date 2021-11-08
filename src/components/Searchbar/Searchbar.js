import React from "react";
import { useCallback } from "react";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from "./Searchbar.module.css";

const CONSUMER_KEY = "FrRkJYVAJJOjgXtulkDY";
const CONSUMER_SECRET = "inbcWrkhMdtOcSMADzZzWjZNALOCXKQF";
var ARTIST_INFO_SPOTIFY = null;
// FOTO, NOMBRE, DESCRIPCION, ALBUMES

const Searchbar = (props) => {
  const errorToast = (text) => {
    toast.error(text, {
      className: "custom-toast",
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const warnToast = (text) => {
    toast.warn(text, {
      className: "custom-toast",
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const getArtistInfo = useCallback(async (artist) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${artist}&type=artist&market=us&limit=1`,
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
      console.log(data);
      if (data.artists.items.length === 0) {
        const text = "Parece que el artista no existe.";
        warnToast(text);
        console.log("NO ARTIST");
      } else {
        ARTIST_INFO_SPOTIFY = data;
        return data;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }, []);

  const handleSearch = async (e) => {
    console.log(localStorage.getItem("spotify-access_token"));
    e.preventDefault();
    var query = e.target[0].value;

    await getArtistInfo(query);

    if (ARTIST_INFO_SPOTIFY !== null) {
      props.parentCallback(ARTIST_INFO_SPOTIFY);
    } else {
      const text =
        "No procedió la búsqueda. ¿Solicitó el token o escribió bien el nombre del artista?";
      errorToast(text);
      console.log(text);
    }

    // fetch(URL)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data.results);
    //     // setCoverImage(data.results[0].cover_image);
    //     // setArtistId(data.results[0].id);
    //     // setResourceUrl(data.results[0].resource_url);
    //     // setArTitle(data.results[0].title);
    //     for (var entry in data.results) {
    //       console.log(data.results[entry]);
    //       if (
    //         data.results[entry].hasOwnProperty("type") &&
    //         data.results[entry].type === "artist"
    //       ) {
    //         console.log(data.results[entry].title);
    //         ARTIST = data.results[entry].type;
    //         console.log(data.results[entry].resource_url);
    //         ARTIST_URL = data.results[entry].resource_url;
    //         return;
    //       }
    //     }
    //     console.log("ARTIST");
    //     console.log(ARTIST);
    //     return data.results;
    //   });
  };

  return (
    <form onSubmit={handleSearch}>
      <>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
      <input className={classes.search} type="text" placeholder="Search.." />
    </form>
  );
};

export default Searchbar;
