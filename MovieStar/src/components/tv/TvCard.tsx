import { IMG_CDN_URL } from "@/utils/constant";
import { Link } from "react-router-dom";

interface TvCardProps {
  imageUrl: string;
  id: string;
}

export const TvCard = ({ imageUrl, id }: TvCardProps) => {
  const imgUrl = IMG_CDN_URL + imageUrl;
  if (!imageUrl) return null;
  return (
    <div className="w-44">
      <Link to={`/tv/${id}`}>
        <img src={imgUrl} alt="tv-card" className="rounded-sm" />
      </Link>
    </div>
  );
};


