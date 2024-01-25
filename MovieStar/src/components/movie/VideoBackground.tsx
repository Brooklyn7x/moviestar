import { useVideoTrailer } from "@/hooks/useVideoTrailer";
import { LoaderIcon } from "lucide-react";

interface VideoBackgroundProps {
  id: number | undefined;
}

export const VideoBackground = ({ id }: VideoBackgroundProps) => {
  const { data, isLoading, error } = useVideoTrailer(id);

  const trailer = data && data.length > 9 ? data?.[9] : data?.[0];

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <LoaderIcon />
      </div>
    );
  if (error) return <div>Error loading trailer</div>;

  const videoSrc = trailer
    ? `https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`
    : null;

  return (
    <div className="pt-10 md:pt-0">
      {videoSrc ? (
        <iframe
          src={videoSrc}
          className="w-screen aspect-video"
          title="Video Background"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="w-screen aspect-video">
          No Video 
        </div>
      )}
    </div>
  );
};
