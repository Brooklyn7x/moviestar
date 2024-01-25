import { TvCard } from "./TvCard";

interface Tv {
  id: string;
  poster_path: string;
}

interface TvListProps {
  data: Tv[];
  name : string
}

const TvList = ({ data , name }: TvListProps) => {
  return (
    <div className="md:pt-10">
      <div className="flex flex-col gap-3 pt-10">
        <h2 className="text-2xl">{name}</h2>
        <div className="flex overflow-x-scroll w-full">
          <div className="flex gap-2">
            {data?.map((tv) => (
              <TvCard key={tv.id} imageUrl={tv.poster_path} id={tv.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvList;
