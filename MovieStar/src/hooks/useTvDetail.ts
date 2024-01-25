import { API_OPTIONS } from "@/utils/constant";
import { useQuery } from "react-query";

export const useTvDetail = (id: string | undefined) => {
  return useQuery({
    queryKey: ["tv-detail"],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/tv/
          ${id}`,
        API_OPTIONS
      )
        .then((res) => res.json())
        .then((data) => data),
  });
};
