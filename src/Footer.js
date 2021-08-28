import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
// import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
// import React, { useEffect, useState } from "react";
// import { useDataLayerValue } from "./DataLayer";
// import { Favorite } from '@material-ui/icons';
import FavoriteIcon from "@material-ui/icons/FavoriteBorderOutlined";
import DevicesSharpIcon from '@material-ui/icons/DevicesSharp';

function Footer() {

  // const [{ token, item, playing }, dispatch] = useDataLayerValue();

  // useEffect(() => {
  //   spotify.getMyCurrentPlaybackState().then((r) => {
  //     console.log(r);

  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: r.is_playing,
  //     });

  //     dispatch({
  //       type: "SET_ITEM",
  //       item: r.item,
  //     });
  //   });
  // }, []);

  // const handlePlayPause = () => {
  //   if (playing) {
  //     spotify.pause();
  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: false,
  //     });
  //   } else {
  //     spotify.play();
  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: true,
  //     });
  //   }
  // };

  // const skipNext = () => {
  //   spotify.skipToNext();
  //   spotify.getMyCurrentPlayingTrack().then((r) => {
  //     dispatch({
  //       type: "SET_ITEM",
  //       item: r.item,
  //     });
  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: true,
  //     });
  //   });
  // };

  // const skipPrevious = () => {
  //   spotify.skipToPrevious();
  //   spotify.getMyCurrentPlayingTrack().then((r) => {
  //     dispatch({
  //       type: "SET_ITEM",
  //       item: r.item,
  //     });
  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: true,
  //     });
  //   });
  // };

  return (
    <div className="footer">
            <div className="footer_left">
                <img 
                className="footer_albumLogo"
                src="https://i.pinimg.com/originals/97/39/fe/9739fe3d4134a837230d7c1c92a30814.jpg" 
                alt=""
                />
                <div className="footer_songInfo">
                    <a href="">
                        <h5>Rockstar</h5>
                    </a>
                    <a href=""><p>Post Malone</p></a>
                </div>
                <FavoriteIcon className="footer_heartCurrent" />
            </div>

            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon" />
                <PlayCircleOutlineIcon 
                fontSize="large"
                className="footer_icon footer_play" 
                />
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_green" />
            </div>
            <div className="footer_durationContainer">
              <span>02:14</span>
              <Slider className="footer_durationBar" />
              <span>4:36</span>
            </div>

            <div className="footer_right">
              <div className="footer_rightContainer">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon className="footer_playlistIcon" />
                    </Grid>
                    <Grid item>
                        <DevicesSharpIcon className="footer_deviceIcon" />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon className="footer_volumeIcon" />
                    </Grid>
                    <Grid item xs>
                        <Slider className="footer_volumeSlider" />
                    </Grid>
                </Grid>
              </div>
            </div>
        </div>
  );
}

export default Footer;
