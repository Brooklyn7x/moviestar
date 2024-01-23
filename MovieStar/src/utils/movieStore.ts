import { create } from "zustand";
import { API_OPTIONS } from "./constant";

interface Movie {
  id: number;
  original_title: string;
  overview: string;
}

interface Video {
  id: number;
  key: string;
  name: string;
}

interface MovieState {
  movies: Movie[];
  videos: Video[];
  loading: boolean;
  error: string | null;
  fetchMovies: () => Promise<void>;
  fetchVideo: (movieId: number) => Promise<void>;
}

const useMovieStore = create<MovieState>((set) => ({
  movies: [],
  videos: [],
  loading: false,
  error: null,

  fetchMovies: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const data = await response.json();
      set({ movies: data.results, loading: false });
    } catch (error) {
      set({ loading: false, error: "Failed to fetch movies" });
    }
  },

  fetchVideo: async (movieId) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const data = await response.json();
      set({ videos: data, loading: false });
    } catch (error) {
      set({ loading: false, error: "Failed to fetch videos" });
    }
  },
}));

export default useMovieStore;
