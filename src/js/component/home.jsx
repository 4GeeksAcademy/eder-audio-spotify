import React from "react";
import { AudioPlayer } from "./AudioPlayer";
import { NavBar } from "./NavBar";
import { MediaControls } from "./AudioPlayer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
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
          <AudioPlayer />
        </div>
      </div>
      <MediaControls />
    </div>
  );
};

export default Home;
