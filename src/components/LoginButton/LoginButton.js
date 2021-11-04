import React from "react";
import { useCallback } from "react";

import classes from "./LoginButton.module.css";

const LoginButton = () => {
  const loginHandler = useCallback(async (event) => {
    // event.preventDefault();

    var OAuth = require("@zalando/oauth2-client-js");
    var spotify = new OAuth.Provider({
      id: "spotify", // required
      authorization_url: "https://accounts.spotify.com/authorize", // required
    });

    // Create a new request
    var request = new OAuth.Request({
      client_id: "6fa45623af26491889f5407530e3a49c", // required
      redirect_uri: "http://localhost:3000/callback",
    });

    // Give it to the provider
    var uri = spotify.requestToken(request);

    // Later we need to check if the response was expected
    // so save the request
    spotify.remember(request);

    // Do the redirect
    window.location.href = uri;

    var response = spotify.parse(window.location.hash);
    console.log(response);

    spotify.getAccessToken();
    //try {
    //  const response = await fetch(
    //    `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=http://localhost:3000/callback&scope=user-read-private%20user-read-email&response_type=token&state=123`,
    //    { mode: "no-cors" }
    //  );
    //
    //  console.log(response);
    //  const data = await response.json();
    //  console.log(data);
    //} catch (error) {
    //  console.log(error);
    //}
  }, []);
  return <button onClick={loginHandler}>Log in</button>;
};

export default LoginButton;
