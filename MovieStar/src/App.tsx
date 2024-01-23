import { Route, Routes } from "react-router-dom";

import RootLayout from "./_root/RootLayout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Tv from "./pages/Tv";
import Movie from "./pages/Movie";
import Sport from "./pages/Sport";
import MySpace from "./pages/MySpace";
import MovieDetail from "./pages/MovieDetail";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/my-space" element={<MySpace />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/sport" element={<Sport />} />
      </Route>
    </Routes>
  );
};

export default App;
