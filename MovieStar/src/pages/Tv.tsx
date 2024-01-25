import { TvBackgroud } from "@/components/tv/TvBackgroud";
import VideoTitle from "@/components/movie/VideoTitle";
import { useTv } from "@/hooks/useTv";

const Tv = () => {
  const { data: movies, isLoading, error } = useTv();
  if (!movies || movies.length < 2)
    return <div>No movies available or not enough data</div>;

  const { name, overview, id } = movies[2];

  if (isLoading) return <div>Loading movies...</div>;
  if (error) return <div>Error fetching movies</div>;

  return (
    <>
      <VideoTitle title={name} overview={overview} />
      <TvBackgroud id={id} />
    </>
  );
};

export default Tv;
