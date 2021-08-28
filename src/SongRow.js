import React from "react";
import "./SongRow.css";

function SongRow({ track }) {

  var minutes = Math.floor(track.duration_ms / 60000);
  var seconds = ((track.duration_ms % 60000) / 1000).toFixed(0);
  var trackTime = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;

  return (
     <div className="songRow">
      <img className="songRow_album" src={track.album.images[0].url} alt="" />
      <div className="songRow_info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
        <p className="songRow_albumName">{track.album.name}</p>
          <p className="songRow_albumRelease" >{ track.album.release_date }</p>
          <span className="songRow_infoDuration">{
            trackTime
          }</span>
      </div>
    </div>
  );
}

export default SongRow;