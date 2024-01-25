import { useQuery } from "react-query";
import { API_OPTIONS } from "@/utils/constant";

export const useTv = () => {
  return useQuery("tv", () =>
    fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    )
      .then((res) => res.json())
      .then((data) => data.results)
  );
};
