import { useQuery } from "react-query";
import { API_OPTIONS } from "@/utils/constant";

export const useNowPlaying = () => {
  return useQuery("movie", () =>
    fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS)
      .then((res) => res.json())
      .then((data) => data.results)
  );
};
