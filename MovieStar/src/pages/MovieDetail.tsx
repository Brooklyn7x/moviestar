import SimilarMovie from "@/components/SimilarMovie";
import { VideoBackground } from "@/components/VideoBackground";
import VideoTitle from "@/components/VideoTitle";
import { useMovieDetail } from "@/hooks/useMovieDetail";
import { useNavigate, useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Loader from "@/components/Loader";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const MoreLikeThisTab = ({ id }) => (
  <div className="w-full overflow-hidden">
    <SimilarMovie id={id} />
  </div>
);

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useMovieDetail(id);

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
      <VideoTitle title={data?.original_title} overview={data?.overview} />
      <VideoBackground id={data.id} />

      <div className="pt-10 pl-5 md:pl-28 pr-3">
        <Tabs defaultValue="More Like This " className="w-full">
          <TabsList className="grid md:w-1/2 grid-cols-2 md:h-10 rounded-sm">
            <TabsTrigger value="More Like This ">More Like This</TabsTrigger>
            <TabsTrigger value="Trailer & More ">Trailer</TabsTrigger>
          </TabsList>
          <TabsContent value="More Like This ">
            <MoreLikeThisTab id={id} />
          </TabsContent>
          <TabsContent value="Trailer & More ">No Trailer</TabsContent>
        </Tabs>
      </div>
    </div>
  ) : null;
};

export default MovieDetail;
