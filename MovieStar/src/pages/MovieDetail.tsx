import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import SimilarMovie from "@/components/movie/SimilarMovie";
import VideoTitle from "@/components/movie/VideoTitle";
import { useMovieDetail } from "@/hooks/useMovieDetail";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Loader from "@/components/Loader";

import Detail from "@/components/Detail";
import { Button } from "@/components/ui/button";
import VideoBackground from "@/components/movie/VideoBackground";


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

  const {
    original_title,
    overview,
    poster_path,
    vote_average,
    release_date,
    status,
    runtime,
    genres,
    tagline,
  } = data ?? {};

  return (
    data && (
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
        <VideoTitle title={original_title} overview={tagline} />
        <VideoBackground id={data.id} />

        <div className="pt-10 pl-5 md:pl-28 pr-3">
          <Tabs defaultValue="More Like This" className="w-full">
            <TabsList className="grid md:w-1/2 grid-cols-3 md:h-10 rounded-sm">
              <TabsTrigger value="More Like This">More Like This</TabsTrigger>
              <TabsTrigger value="Trailer & More">Trailer</TabsTrigger>
              <TabsTrigger value="Details">Details</TabsTrigger>
            </TabsList>
            <TabsContent value="More Like This">
              <MoreLikeThisTab id={id} />
            </TabsContent>
            <TabsContent value="Trailer & More">No Trailer</TabsContent>
            <TabsContent value="Details">
              <Detail
                original_title={original_title ?? ""}
                overview={overview ?? ""}
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
    )
  );
};

export default MovieDetail;
