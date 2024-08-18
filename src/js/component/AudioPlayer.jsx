import React, { useEffect, useRef, useState } from "react";

export function AudioPlayer(props) {
  /* let getSong = useRef(); */

  const createPlaylist = props.songlist.map((value, index) => {
    return (
      <div className="row row-cols-1 px-0 mx-0 px-sm-0 mx-sm-0 px-md-0 px-lg-0 mx-lg-0  border-bottom  border-light border-1 border-opacity-25">
        <div
          className="col d-flex  p-3 align-items-center"
          style={{ backgroundColor: "#0d1b2a" }}
          /* ref={getSong} */
          onClick={(e) => {
            props.setIndex(e.target.id);
            props.geturl(e.target.id);
          }}
          id={index}
        >
          <p
            className="text-light ms-2 mb-0 mb-md-0 mb-lg-0 "
            onClick={(e) => {
              props.setIndex(e.target.parentElement.id);
              props.geturl(e.target.parentElement.id);
              e.stopPropagation();
            }}
          >
            {value.id}
          </p>
          <p
            className="text-light ms-5 mb-0 mb-md-0 mb-lg-0"
            onClick={(e) => {
              props.setIndex(e.target.parentElement.id);
              props.geturl(e.target.parentElement.id);
              e.stopPropagation();
            }}
          >
            {value.name}
          </p>
        </div>
      </div>
    );
  });

  return createPlaylist;
}

export function MediaControls(props) {
  const buttonPlay = useRef(null);

  function reproduceSong() {
    props.playsong.play();
  }

  function pauseSong() {
    props.playsong.pause();
  }

  function nextSong() {
    let playListSize = props.songlist.length;
    if (props.index < playListSize - 1) {
      let nextIndex = parseInt(props.index) + 1;
      console.log("debug valor ", nextIndex);
      props.geturl(nextIndex);
      reproduceSong();
    } else {
      props.geturl(0);
      reproduceSong();
    }

    //console.log(playListSize);
  }
  /*   useEffect(() => {
    props.playsong.pause();
  }, [buttonPlay.current.onClick()]); */

  return (
    <div className="container sticky-bottom">
      <div className="row row-cols-md-1">
        <div
          className="navbar col"
          style={{ backgroundColor: "#252A31", minHeight: "70px" }}
        >
          <div className="container-fluid justify-content-center">
            <span className="navbar-brand mb-0 h1 text-light fw-light ms-2">
              <i
                className="fa-solid fa-backward-step fa-xl me-5"
                style={{ color: "#ffffff" }}
                onClick={() => pauseSong()}
              ></i>
              <i
                className="fa-regular fa-circle-play fa-xl  "
                ref={buttonPlay}
                style={{ color: "#ffffff" }}
                onClick={() => reproduceSong()}
              ></i>
              <i
                class="fa-regular fa-circle-pause fa-xl d-none"
                style={{ color: "#ffffff" }}
              ></i>
              <i
                className="fa-solid fa-forward-step fa-xl ms-5"
                style={{ color: "#ffffff" }}
                onClick={() => nextSong()}
              ></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
