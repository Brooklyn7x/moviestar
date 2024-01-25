import MainContainer from "@/components/MainContainer";
import { TvBackgroud } from "@/components/TvBackgroud";
import { useTv } from "@/hooks/useTv";
import React from "react";

const Tv = () => {
  const { data, isLoading, error } = useTv();

  if (isLoading) return <div>Loading movies...</div>;
  if (error) return <div>Error fetching movies</div>;

  console.log(data);
  

  return (
    <>
      <MainContainer data={data} />
     
    </>
  );
};

export default Tv;
