import VideoTitle from "./VideoTitle";
import { VideoBackground } from "./VideoBackground";
import { useNowPlaying } from "@/hooks/useNowPlaying";
import { TvBackgroud } from "./TvBackgroud";

interface MainContainerProps {
  data: any[];
}

const MainContainer = ({ data: movies }: MainContainerProps) => {
  const { name, overview, id } = movies[1];

  return (
    <div>
      <VideoTitle title={name} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
