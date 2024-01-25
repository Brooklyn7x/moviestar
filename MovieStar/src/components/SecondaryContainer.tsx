import { useNowPlaying } from "@/hooks/useNowPlaying";
import MovieList from "./movie/MovieList";
import { usePopularTvShows } from "@/hooks/usePopularTvShows";
import TvList from "./tv/TvList";

const SecondaryContainer = () => {
  const { data } = useNowPlaying();
  const { data: data1 } = usePopularTvShows();

  return (
    <div className="">
      <div className="pl-5 md:-mt-30 lg:-mt-52 relative z-20 md:pl-28">
        <MovieList data={data} name={"Lastest Released"} />
        <TvList data={data1} name={"Popular Tv shows"} />
        <MovieList data={data} name={"Top Released"} />
        <MovieList data={data} name={"Most Popular Movies"} />
        <MovieList data={data} name={"OG Released"} />
        <MovieList data={data} name={"Upcoming Movies"} />
        <MovieList data={data} name={"Lastest Released"} />
        <MovieList data={data} name={"Upcoming Movies"} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
