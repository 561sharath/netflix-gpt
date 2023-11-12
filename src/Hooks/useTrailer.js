import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

const UseTrailer = (id) => {
  const dispacth = useDispatch();
  
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    //console.log(json.results);

    const filterdata = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterdata.length ? filterdata[0] : json.results[0];
    dispacth(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default UseTrailer
