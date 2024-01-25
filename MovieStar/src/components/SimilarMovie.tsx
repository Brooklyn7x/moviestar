import { useSimilarMovie } from "@/hooks/useSimilarMovie";
import MovieList from "./MovieList";

interface SimilarMovieProps {
  id: string | undefined;
}

const SimilarMovie = ({ id }: SimilarMovieProps) => {
  const { data } = useSimilarMovie(id);
  console.log(data);

  return (
    <div>
      <MovieList data={data} name={"More Like This"} />
    </div>
  );
};

export default SimilarMovie;
