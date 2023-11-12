import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/contants";

const useNowPlayingMovies = () => {
  const dispacth = useDispatch();
  const apikey='ba08d09e0df240006ab10436b342fe0d'
  const language='te'
  const getNowPlayingMOvies = async () => {
    const data = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=${language}&with_original_language=${language}`,
      API_OPTIONS
    );
    const json = await data.json();
    dispacth(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMOvies();
  }, []);
};

export default useNowPlayingMovies
