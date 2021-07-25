import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";
// Spotify Logo and Login Button

function Login() {
  return (
    <div className="login">
      <h1>I am Login Page</h1>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""/>
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
