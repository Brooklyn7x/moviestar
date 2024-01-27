import VideoTitle from "@/components/movie/VideoTitle";
import { useNavigate, useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Loader from "@/components/Loader";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTvDetail } from "@/hooks/useTvDetail";
import { TvBackgroud } from "@/components/tv/TvBackgroud";
import { SimilarTvShows } from "@/components/tv/SimilarTvShows";
import { TvEpisode } from "@/components/tv/TvEpisode";
import Detail from "@/components/Detail";

interface MoreLikeThisTabProps {
  id: string | undefined;
}

export const MoreTvLikeThisTab = ({ id }: MoreLikeThisTabProps) => (
  <div className="w-full overflow-hidden">
    <SimilarTvShows id={id} />
  </div>
);

const TvDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useTvDetail(id);
  const {
    name,
    overview,
    poster_path,
    vote_average,
    release_date,
    status,
    runtime,
    genres,
  } = data;

  if (isLoading) return <Loader />;
  if (isError) return <div>Error loading movie details</div>;
  return data ? (
    <div>
      <div className="fixed pt-10 md:pl-20 z-10">
        <Button
          onClick={() => navigate(-1)}
          variant="ghost"
          className="shad-button_ghost"
        >
          <ArrowLeft />
        </Button>
      </div>
      <VideoTitle title={data?.name} overview={data?.overview} />
      <TvBackgroud id={data.id} />

      <div className="pt-10 pl-5 md:pl-28 pr-3">
        <Tabs defaultValue="More Like This " className="w-full">
          <TabsList className="grid md:w-1/2 grid-cols-3 md:h-10 rounded-sm">
            <TabsTrigger value="More Like This ">More Like This</TabsTrigger>
            <TabsTrigger value="Episodes">Episodes</TabsTrigger>
            <TabsTrigger value="Details">Details</TabsTrigger>
          </TabsList>
          <TabsContent value="More Like This ">
            <MoreTvLikeThisTab id={id} />
          </TabsContent>
          <TabsContent value="Episodes">
            <TvEpisode data={data} />
          </TabsContent>
          <TabsContent value="Episodes">
            <Detail
              original_title={name}
              overview={overview}
              genres={genres}
              poster_path={poster_path}
              release_date={release_date}
              runtime={runtime}
              status={status}
              vote_average={vote_average}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ) : null;
};

export default TvDetail;
