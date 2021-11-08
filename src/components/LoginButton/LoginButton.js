import React, { useEffect } from "react";
import { useCallback } from "react";

import classes from "./LoginButton.module.css";

const LoginButton = () => {
  const loginHandler = useCallback(async (event) => {
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
  }, []);

  return <button onClick={loginHandler}>Get token</button>;
};

export default LoginButton;
