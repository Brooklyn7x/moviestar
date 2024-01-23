import { API_OPTIONS } from "@/utils/constant";
import { useQuery } from "react-query";

export const useVideoTrailer = (id: number | undefined) => {
  return useQuery(
    ["trailer", id],
    () =>
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_OPTIONS
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => data.results),
    {
      enabled: !!id,
    }
  );
};
