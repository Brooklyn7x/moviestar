import { useQuery } from "react-query";
import { API_OPTIONS } from "@/utils/constant";

export const usePopularTvShows = () => {
  return useQuery("tv-shows", () =>
    fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    )
      .then((res) => res.json())
      .then((data) => data.results)
  );
};
