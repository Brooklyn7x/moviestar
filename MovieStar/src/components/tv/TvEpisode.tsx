import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface Season {
  id: string;
  name: string;
  episode_count: number;
}

interface TvSeries {
  seasons: Season[];
  id: string;
  name: string;
}

interface TvSeriesProps {
  data: TvSeries;
}

export const TvEpisode: React.FC<TvSeriesProps> = ({ data }) => {
  return (
    <div>
      <Tabs defaultValue={data.seasons[0]?.id} className="w-full pt-5 h-14 ">
        <TabsList className="overflow-x-scroll w-full gap-2 rounded-sm flex items-center justify-start h-14">
          {data.seasons.map((season) => (
            <TabsTrigger key={season.id} value={season.id}>
              {season.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {data.seasons.map((season) => (
          <TabsContent key={season.id} value={season.id}>
            <p>Episodes Count: {season.episode_count}</p>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
