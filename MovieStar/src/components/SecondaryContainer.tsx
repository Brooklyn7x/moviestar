import { useNowPlaying } from "@/hooks/useNowPlaying";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const { data } = useNowPlaying();

  console.log(data);

  return (
    <div className="">
      <div className="-mt-52 relative z-20 pl-28">
        <MovieList data={data} name={"Lastest Released"} />
        <MovieList data={data} name={"Upcoming Movies"}/>
        <MovieList data={data} name={"Top Released"} />
        <MovieList data={data} name={"Most Popular Movies"}/>
        <MovieList data={data} name={"OG Released"} />
        <MovieList data={data} name={"Upcoming Movies"}/>
        <MovieList data={data} name={"Lastest Released"} />
        <MovieList data={data} name={"Upcoming Movies"}/>
      </div>
    </div>
  );
};

export default SecondaryContainer;
