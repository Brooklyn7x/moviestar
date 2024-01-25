import MovieCard from "./MovieCard";

interface Movie {
  id: string;
  poster_path: string;
}

interface MovieListProps {
  data: Movie[];
  name: string;
}

export const MovieTralierList = ({ data, name }: MovieListProps) => {
  return (
    <div className="">
      <div className="flex flex-col gap-3 pt-10">
        <h2 className="text-2xl">{name}</h2>
        <div className="flex overflow-x-scroll w-full">
          <div className="flex gap-2">
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
