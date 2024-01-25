import SecondaryContainer from "@/components/SecondaryContainer";
import MainContainer from "@/components/MainContainer";
import React from "react";
import { useNowPlaying } from "@/hooks/useNowPlaying";

const Home = () => {
  const { data, isLoading, error } = useNowPlaying();

  if (isLoading) return <div>Loading movies...</div>;
  if (error) return <div>Error fetching movies</div>;
  
    return (
      <>
        <MainContainer data={data || []} />
        <SecondaryContainer />
      </>
    );
};

export default Home;
