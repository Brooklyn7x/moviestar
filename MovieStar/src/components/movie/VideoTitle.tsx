import { Button } from "../ui/button";
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
    <div className="md:px-28 w-full aspect-video pt-[20%] md:pt-[23%] absolute px-4">
      <div className="flex flex-col md:gap-3 gap-1">
        <h1 className="text-xl md:text-4xl font-bold">{title ?? "No Title"}</h1>
        <div className="text-sm md:text-md flex items-center gap-x-2 ">
          <p>{year}</p>
          <p>:</p>
          <p>{language}</p>
        </div>
        <p className="hidden md:flex sm:hidden text-md text-wrap w-2/4">
          {overview ?? "no overview"}
        </p>
        <p>Drama | Suspense | Robbery</p>
      </div>

      <div className="py-4 md:py-8 flex items-center">
        <div className="flex items-center gap-x-3">
          <Button className="w-[100px] md:w-[350px] h-12 md:h-14 flex-1 rounded-sm bg-white bg-opacity-25 text-white text-lg gap-x-2 font-bold z-10">
            <Play className="h-5 w-5" />
            Play
          </Button>
          <Button className="h-12 md:h-14 rounded-sm bg-white bg-opacity-25 text-md text-white">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
