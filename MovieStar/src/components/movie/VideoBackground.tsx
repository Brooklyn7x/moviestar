import React, { forwardRef, useRef, useEffect, useState } from "react";
import { useVideoTrailer } from "@/hooks/useVideoTrailer";
import { LoaderIcon } from "lucide-react";
import { Button } from "../ui/button";

interface VideoBackgroundProps {
  id: number | undefined;
}

export const VideoBackground = forwardRef<HTMLDivElement, VideoBackgroundProps>(
  ({ id }, ref) => {
    const { data, isLoading, error } = useVideoTrailer(id);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const trailer = data && data.length > 9 ? data?.[9] : data?.[0];
    const videoSrc = trailer
      ? `https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`
      : null;

    useEffect(() => {
      if (ref) {
        ref.current = overlayRef.current;
      }
    }, [ref]);

    const handleToggleFullscreen = () => {
      if (!isFullscreen) {
        if (overlayRef.current && overlayRef.current.requestFullscreen) {
          overlayRef.current.requestFullscreen();
          setIsFullscreen(true);
        }
      } else {
        if (document.fullscreenElement && document.exitFullscreen) {
          document.exitFullscreen();
          setIsFullscreen(false);
        }
      }
    };

    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-screen">
          <LoaderIcon />
        </div>
      );
    }

    if (error) {
      return <div>Error loading trailer</div>;
    }

    return (
      <div
        className="pt-10 md:pt-0"
        ref={overlayRef}
        onClick={handleToggleFullscreen}
      >
        {videoSrc ? (
          <>
            <iframe
              ref={iframeRef}
              src={videoSrc}
              className="w-screen aspect-video"
              title="Video Background"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
              allowFullScreen
            />
            <div className="pl-5 md:pl-28">
              <Button
                variant={"outline"}
                onClick={handleToggleFullscreen}
                className="z-10 w-[200px]"
              >
                Play
              </Button>
            </div>
          </>
        ) : (
          <div className="w-screen aspect-video">No Video</div>
        )}
      </div>
    );
  }
);

export default VideoBackground;
