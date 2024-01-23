import { API_OPTIONS } from "@/utils/constant";
import { useQuery } from "react-query";

export const useMovieDetail = (id: string | undefined) => {
  return useQuery({
    queryKey: ["movie-detail"],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/
          ${id}`,
        API_OPTIONS
      )
        .then((res) => res.json())
        .then((data) => data),
  });
};
