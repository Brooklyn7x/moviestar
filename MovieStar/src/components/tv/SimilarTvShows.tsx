import { useSimilarShows } from "@/hooks/useSimilarShows";
import TvList from "./TvList";
import { Loader } from "lucide-react";

interface SimilarTvShowsProps {
  id: string | undefined;
}

export const SimilarTvShows = ({ id }: SimilarTvShowsProps) => {
  const { data, isLoading } = useSimilarShows(id);
  if (isLoading) return <Loader />;

  return (
    <div className="w-full">
      <TvList data={data} name={"More Like This"} />
    </div>
  );
};
