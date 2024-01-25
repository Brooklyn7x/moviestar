import MainContainer from "@/components/MainContainer";
import { VideoBackground } from "@/components/VideoBackground";
import VideoTitle from "@/components/VideoTitle";
import { useTv } from "@/hooks/useTv";

const Tv = () => {
  const { data: movies, isLoading, error } = useTv();
  const { name, overview, id } = movies[1];

  if (isLoading) return <div>Loading movies...</div>;
  if (error) return <div>Error fetching movies</div>;

  return (
    <>
      <VideoTitle title={name} overview={overview} />
      <VideoBackground id={id} />
    </>
  );
};

export default Tv;
