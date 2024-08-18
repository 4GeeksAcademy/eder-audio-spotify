import React, { useRef } from "react";
import { AudioPlayer } from "./AudioPlayer";
import { NavBar } from "./NavBar";
import { MediaControls } from "./AudioPlayer";
import { useState } from "react";
import { useEffect } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [songList, setSongList] = useState([]);
  const [currentSong, setCurrentSong] = useState("");
  const [currentIndex, setCurrentIndex] = useState("");

  const playSong = new Audio(currentSong);

  useEffect(() => {
    getSongs();
  }, []);

  const getURL = (e) => {
    //console.log(songList[0]);
    setCurrentSong("https://playground.4geeks.com" + songList[e].url);
    console.log(currentSong);
  };

  function getSongs() {
    const URL = "https://playground.4geeks.com/sound/songs";

    fetch(URL, { method: "GET" })
      .then((response) => response.json())
      .then((data) => setSongList(data.songs));
  }
  return (
    <div
      className=" vh-100 vh-md-100 vh-lg-100 py-2"
      style={{ backgroundColor: "#f2f2f4" }}
    >
      <div
        className="container"
        style={{ backgroundColor: "#0d1b2a", minHeight: "90vh" }}
      >
        <div className="row row-cols-md-1">
          <NavBar />
          <AudioPlayer
            songlist={songList}
            geturl={getURL}
            setIndex={setCurrentIndex}
          />
        </div>
      </div>
      <MediaControls
        songlist={songList}
        playsong={playSong}
        index={currentIndex}
        geturl={getURL}
      />
    </div>
  );
};

export default Home;
