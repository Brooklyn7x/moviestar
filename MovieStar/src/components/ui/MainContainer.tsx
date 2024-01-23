import VideoTitle from "../VideoTitle";
import { VideoBackground } from "../VideoBackground";
import { useNowPlaying } from "@/hooks/useNowPlaying";

const MainContainer = () => {
  const { data: movies, isLoading, error } = useNowPlaying();

  if (isLoading) return <div>Loading movies...</div>;
  if (error) return <div>Error fetching movies</div>;
  if (!movies || movies.length === 0)
    return <div>No movies currently playing.</div>;

  const { original_title, overview, id } = movies[0];

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
