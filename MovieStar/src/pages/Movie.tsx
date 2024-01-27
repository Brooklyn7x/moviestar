import Loader from "@/components/Loader";
import SimilarMovie from "@/components/movie/SimilarMovie";
import VideoBackground from "@/components/movie/VideoBackground";

import VideoTitle from "@/components/movie/VideoTitle";
import { usePopularMovie } from "@/hooks/usePopularMovie";

const Movie = () => {
  const { data, isLoading } = usePopularMovie();
  if (isLoading) return <Loader />;
  const { title, overview, id } = data[0];
  return (
    <>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground id={id} />
      <div className="pl-5 md:pl-28">
        <SimilarMovie id={id} />
      </div>
    </>
  );
};

export default Movie;
