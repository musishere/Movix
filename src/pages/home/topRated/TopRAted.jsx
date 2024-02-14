import React, { useState } from "react";
import ContentWrapper from "../../../components/contentwrapper/ContentWrapper";
import "../style.scss";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/UseFetch";
import Carousel from "../../../components/carousel/Carousel";

const TopRAted = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const {data,loading} = useFetch(`/${endpoint}/top_rated`)

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv")
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={["Movies", "TV shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel endpoint={endpoint} data={data?.results} loading={loading}/>
    </div>
  );
};

export default TopRAted;
