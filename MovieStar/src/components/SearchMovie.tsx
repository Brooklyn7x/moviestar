import MovieCard from "./MovieCard";

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
        <h2 className="text-2xl">{name}</h2>
        <div className="flex w-full">
          <div className="flex flex-wrap gap-2">
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
