import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";
// Spotify Logo and Login Button

function Login() {

  const githubProf = "https://github.com/heysoumyadeep";

  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="" className="logo"/>
      <a href={loginUrl}>Login with Spotify</a>
      
      <div className='dev_info'>
        <p>Made by Soumyadeep Pradhan</p>

        <a href={githubProf} rel="noreferrer" target="_blank"> 
          <img src="https://img.icons8.com/color/48/000000/github--v1.png"
          alt="" className="githubProfLogo" />
        </a>

      </div>
    </div>
  );
}

export default Login;
