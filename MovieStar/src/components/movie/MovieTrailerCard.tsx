import { IMG_CDN_URL } from "@/utils/constant";
import { Link } from "react-router-dom";

interface MovieCardProps {
  imageUrl: string;
  id: string;
}

export const MovieTralierCard = ({ imageUrl, id }: MovieCardProps) => {
  const imgUrl = IMG_CDN_URL + imageUrl;
  if (!imageUrl) return null;
  return (
    <div className="w-44">
      <Link to={`/movie/${id}`}>
        <img src={imgUrl} alt="movie-card" className="rounded-sm" />
      </Link>
    </div>
  );
};


