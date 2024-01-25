import MovieCard from "./movie/MovieCard";

interface Movie {
  id: string;
  poster_path: string;
}

interface searchMovieProps {
  data: Movie[];
  name: string;
}

const SearchMovie = ({ data, name }: searchMovieProps) => {
  return (
    <div className="">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl md:text-2xl">{name}</h2>
        <div className="flex w-full">
          <div className="grid grid-flow-row grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 ">
            {data?.map((movie) => (
              <MovieCard
                key={movie.id}
                imageUrl={movie.poster_path}
                id={movie.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
