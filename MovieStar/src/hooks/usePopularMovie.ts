import { useQuery } from "react-query";
import { API_OPTIONS } from "@/utils/constant";

export const usePopularMovie = () => {
  return useQuery("movie", () =>
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    )
      .then((res) => res.json())
      .then((data) => data.results)
  );
};
