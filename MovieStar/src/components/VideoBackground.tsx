import { useVideoTrailer } from "@/hooks/useVideoTrailer";

interface VideoBackgroundProps {
  id: number | undefined;
}

export const VideoBackground = ({ id }: VideoBackgroundProps) => {
  const { data, isLoading, error } = useVideoTrailer(id);

  // useEffect(() => {}, [id]);

  const trailer = data && data.length > 9 ? data?.[9] : data?.[0];

  if (isLoading) return <div>Loading trailer...</div>;
  if (error) return <div>Error loading trailer</div>;

  const videoSrc = trailer
    ? `https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`
    : null;

  return (
    <div>
      {videoSrc ? (
        <iframe
          src={videoSrc}
          className="w-screen aspect-video"
          title="Video Background"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
          allowFullScreen
        ></iframe>
      ) : (
        <div>No trailer available</div>
      )}
    </div>
  );
};
