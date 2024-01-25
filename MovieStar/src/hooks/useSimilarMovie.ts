import { API_OPTIONS } from "@/utils/constant";
import { useQuery } from "react-query";

export const useSimilarMovie = (id: string | undefined) => {
  return useQuery({
    queryKey: ["similar-movie"],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
        API_OPTIONS
      )
        .then((res) => res.json())
        .then((data) => data.results),
  });
};
