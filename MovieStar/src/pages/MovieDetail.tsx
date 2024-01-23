import { VideoBackground } from "@/components/VideoBackground";
import VideoTitle from "@/components/VideoTitle";
import { useMovieDetail } from "@/hooks/useMovieDetail";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useMovieDetail(id);
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <VideoTitle title={data?.original_title} overview={data?.overview} />
      <VideoBackground id={data.id} />
    </div>
  );
};

export default MovieDetail;
