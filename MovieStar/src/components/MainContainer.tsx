import VideoBackground from "./movie/VideoBackground";
import VideoTitle from "./movie/VideoTitle";

interface Movie {
  original_title: string;
  overview: string;
  id: number;
}

interface MainContainerProps {
  data: Movie[];
}

const MainContainer = ({ data: movies }: MainContainerProps) => {
  const { original_title, overview, id } =
    movies.length > 1 ? movies[3] : movies[0];

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
