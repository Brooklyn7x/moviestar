import { API_OPTIONS } from "@/utils/constant";
import { useQuery } from "react-query";

export const useSimilarShows = (id: string | undefined) => {
  return useQuery({
    queryKey: ["similar-tv"],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`,
        API_OPTIONS
      )
        .then((res) => res.json())
        .then((data) => data.results),
  });
};
