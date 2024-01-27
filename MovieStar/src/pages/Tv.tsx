import { TvBackgroud } from "@/components/tv/TvBackgroud";
import VideoTitle from "@/components/movie/VideoTitle";
import { useTv } from "@/hooks/useTv";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Loader from "@/components/Loader";
import { MoreTvLikeThisTab } from "./TvDetails";
import Detail from "@/components/Detail";

const Tv = () => {
  const { data: movies, isLoading, error } = useTv();
  if (!movies || movies.length < 2)
    return <div>No movies available or not enough data</div>;

  const {
    id,
    name,
    overview,
    poster_path,
    vote_average,
    release_date,
    status,
    runtime,
    genres,
  } = movies[2];

  if (isLoading) return <Loader />;
  if (error) return <div>Error fetching movies</div>;

  return (
    <>
      <VideoTitle title={name} overview={overview} />
      <TvBackgroud id={id} />

      <div className="pt-10 pl-5 md:pl-28 pr-3">
        <Tabs defaultValue="More Like This " className="w-full">
          <TabsList className="grid md:w-1/2 grid-cols-2 md:h-10 rounded-sm">
            <TabsTrigger value="More Like This ">More Like This</TabsTrigger>
            <TabsTrigger value="Details">Details</TabsTrigger>
          </TabsList>
          <TabsContent value="More Like This ">
            <MoreTvLikeThisTab id={id} />
          </TabsContent>
          <TabsContent value="Details">
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
    </>
  );
};

export default Tv;
