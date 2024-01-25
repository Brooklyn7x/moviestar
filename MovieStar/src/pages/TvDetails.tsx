import VideoTitle from "@/components/movie/VideoTitle";
import { useNavigate, useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Loader from "@/components/Loader";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTvDetail } from "@/hooks/useTvDetail";
import { TvBackgroud } from "@/components/tv/TvBackgroud";
import { SimilarTvShows } from "@/components/tv/SimilarTvShows";

const MoreLikeThisTab = ({ id }) => (
  <div className="w-full overflow-hidden">
    <SimilarTvShows id={id} />
  </div>
);

const TvDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useTvDetail(id);
  console.log(data);

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
          <TabsList className="grid md:w-1/2 grid-cols-2 md:h-10 rounded-sm">
            <TabsTrigger value="More Like This ">More Like This</TabsTrigger>
            <TabsTrigger value="Episodes">Episodes</TabsTrigger>
          </TabsList>
          <TabsContent value="More Like This ">
            <MoreLikeThisTab id={id} />
          </TabsContent>
          <TabsContent value="Episodes">Episodes</TabsContent>
        </Tabs>
      </div>
    </div>
  ) : null;
};

export default TvDetail;
