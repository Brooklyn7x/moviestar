import { IMG_CDN_URL } from "@/utils/constant";
import React from "react";

interface Genre {
  id: number;
  name: string;
}

interface DetailProps {
  original_title: string;
  overview: string;
  genres: Genre[];
  poster_path: string;
  release_date: string;
  runtime: number;
  status: string;
  vote_average: number;
}

export const Detail: React.FC<DetailProps> = ({
  original_title,
  overview,
  genres,
  poster_path,
  release_date,
  runtime,
  status,
  vote_average,
}) => {
  return (
    <div className="container mx-auto p-4 md:pl-28   ">
      <div className="text-center my-4">
        <h1 className="text-4xl font-bold">{original_title}</h1>
        <p className="text-xl pt-3">{overview}</p>
        <div className="flex items-center justify-center gap-2 font-serif">
          {genres?.map((g) => (
            <p key={g.id}>
              {g.name} {" | "}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row my-4 gap-5 items-center">
        <img
          className="w-64 h-96 mx-auto"
          src={IMG_CDN_URL + poster_path}
          alt="Movie Poster"
        />
        <div className="flex-1 ml-4 gap-4 text-lg">
          <p>
            <strong>Release Date:</strong> {release_date}
          </p>
          <p>
            <strong>Runtime:</strong> {runtime} minutes
          </p>
          <p>
            <strong>Status:</strong> {status}
          </p>
          <p>
            <strong>User Ratings:</strong> {vote_average}
          </p>
        </div>
      </div>

      <footer className="my-4">
        <p className="text-center text-sm">© 2024</p>
      </footer>
    </div>
  );
};

export default Detail;
