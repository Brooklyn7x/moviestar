import React from "react";
import { Button } from "./ui/button";
import { Play, Plus } from "lucide-react";

interface VideoTitleProps {
  title: string | undefined;
  overview: string | undefined;
  year?: string;
  language?: string;
}

const VideoTitle = ({
  title,
  overview,
  year = "2024",
  language = "English,Hindi",
}: VideoTitleProps) => {
  return (
    <div className=" px-28 w-full aspect-video pt-[23%] absolute">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold">{title ?? "No Title"}</h1>
        <div className="flex items-center gap-x-2 ">
          <p>{year}</p>
          <p>:</p>
          <p>{language}</p>
        </div>
        <p className="text-md text-wrap w-2/4">{overview ?? "no overview"}</p>
        <p>Drama | Suspense | Robbery</p>
      </div>

      <div className="py-8 flex items-center">
        <div className="flex items-center gap-x-3">
          <Button className="w-[350px] h-14 flex-1 rounded-sm bg-white dark:text-black text-lg gap-x-2  font-bold">
            <Play className="h-5 w-5" />
            Subscribe to Watch
          </Button>
          <Button className="h-12 rounded-sm bg-white bg-opacity-25 text-md">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;