import React, { useEffect, useRef, useState } from "react";

export function AudioPlayer(props) {
  const control = useRef(false);
  useEffect(() => {
    if (control.current == true) {
      for (let i = 0; i < props.songlist.length; i++) {
        document.getElementById(i).children[0].classList.value =
          " text-light ms-3 mb-0 mb-md-0 mb-lg-0 ";
        document.getElementById(i).children[1].classList.value =
          " text-light ms-5 mb-0 mb-md-0 mb-lg-0 ";
      }
      document.getElementById(props.index).children[0].classList.value =
        " text-success ms-3 mb-0 mb-md-0 mb-lg-0 ";
      document.getElementById(props.index).children[1].classList.value =
        " text-success ms-5 mb-0 mb-md-0 mb-lg-0 ";
    }
  }, [props.index]);

  const createPlaylist = props.songlist.map((value, index) => {
    return (
      <div className="row row-cols-1 px-0 mx-0 px-sm-0 mx-sm-0 px-md-0 px-lg-0 mx-lg-0  border-bottom  border-light border-1 border-opacity-25">
        <div
          className=" col d-flex  p-3 align-items-center"
          style={{ backgroundColor: "#0d1b2a" }}
          onClick={(e) => {
            {
              props.geturl(e.target.id);
              props.setIndex(e.target.id);
              props.setIsPlaying(true);
              control.current = true;

              console.log(e);
            }
          }}
          id={index}
        >
          <p
            className=" text-light ms-3 mb-0 mb-md-0 mb-lg-0 "
            onClick={(e) => {
              props.geturl(e.target.parentElement.id);
              props.setIndex(e.target.parentElement.id);
              e.stopPropagation();
              props.setIsPlaying(true);
            }}
          >
            {value.id}
          </p>
          <p
            className="text-light ms-5 mb-0 mb-md-0 mb-lg-0"
            onClick={(e) => {
              props.geturl(e.target.parentElement.id);
              props.setIndex(e.target.parentElement.id);
              e.stopPropagation();
              props.setIsPlaying(true);
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

  function nextSong() {
    props.controlPause();
    let playListSize = props.songlist.length;
    if (props.index < playListSize - 1) {
      let nextIndex = +props.index + 1;
      props.setIndex(nextIndex);
      props.geturl(nextIndex);
      props.controlPlay();
    } else {
      props.setIndex(0);
      props.geturl(0);
    }
  }

  function prevSong() {
    props.controlPause();
    if (props.index !== 0) {
      let nextIndex = +props.index - 1;
      props.setIndex(nextIndex);
      props.geturl(nextIndex);
      props.controlPlay();
    } else {
      props.setIndex(18);
      props.geturl(18);
    }
  }

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
                onClick={() => {
                  prevSong();
                  props.setIsPlaying(true);
                }}
              ></i>
              <i
                className={`fa-regular fa-circle-play fa-xl ${
                  props.isPlaying == true ? "d-none" : ""
                } `}
                ref={buttonPlay}
                style={{ color: "#ffffff" }}
                onClick={() => {
                  props.controlPlay();
                  props.setIsPlaying(true);
                }}
              ></i>
              <i
                className={`fa-regular fa-circle-pause fa-xl ${
                  props.isPlaying == true ? "" : "d-none"
                }`}
                style={{ color: "#ffffff" }}
                onClick={() => {
                  props.controlPause();
                  props.setIsPlaying(false);
                }}
              ></i>
              <i
                className="fa-solid fa-forward-step fa-xl ms-5"
                style={{ color: "#ffffff" }}
                onClick={() => {
                  nextSong();
                  props.setIsPlaying(true);
                }}
              ></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
