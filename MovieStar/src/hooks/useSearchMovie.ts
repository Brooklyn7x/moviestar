import { API_OPTIONS } from "@/utils/constant";
import { useQuery } from "react-query";

const useSearchMovie = (value: string) => {
  return useQuery(
    "search",
    () =>
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      )
        .then((res) => res.json())
        .then((data) => data.results),
    {
      enabled: !!value,
    }
  );
};

export default useSearchMovie;
