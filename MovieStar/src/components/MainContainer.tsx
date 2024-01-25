import VideoTitle from "./movie/VideoTitle";
import { VideoBackground } from "./movie/VideoBackground";
import { useNowPlaying } from "@/hooks/useNowPlaying";
import { TvBackgroud } from "./tv/TvBackgroud";

interface MainContainerProps {
  data: any[];
}

const MainContainer = ({ data: movies }: MainContainerProps) => {
  const { original_title, overview, id } = movies[1];

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
