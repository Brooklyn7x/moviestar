import { API_OPTIONS } from "@/utils/constant";
import { useQuery } from "react-query";

export const useTvTrailer = (id: number | undefined) => {
  return useQuery(
    ["Tvtrailer", id],
    () =>
      fetch(
        `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,
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
