import { useSimilarMovie } from "@/hooks/useSimilarMovie";
import MovieList from "./MovieList";

interface SimilarMovieProps {
  id: string | undefined;
}

const SimilarMovie = ({ id }: SimilarMovieProps) => {
  const { data } = useSimilarMovie(id);

  return (
    <div className="w-full">
      <MovieList data={data} name={"More Like This"} />
    </div>
  );
};

export default SimilarMovie;
