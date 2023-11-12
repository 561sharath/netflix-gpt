import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/contants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useSearchParams } from "react-router-dom";
import UseTrailer from "../Hooks/useTrailer";

const VideoBackground = ({ id }) => {

    const trailerKey = useSelector((store) => store.movies?.tarilerVideo);
    UseTrailer(id)

  return (
    <div className="w-screen ">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/_rDRjCpkogc?&autoplay=1&loop=1&controls=&mute=1"}
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
