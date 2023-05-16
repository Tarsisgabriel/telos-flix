import React from "react";
import MainVideo from "../../components/mainVideo";
import Trending from "../../components/trending";
import EnjoyForFree from "../../components/enjoyForFree";
import "./index.css";

function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <MainVideo />
      <div className="sectionsGrid">
        <Trending />
        <EnjoyForFree />
      </div>
    </div>
  );
}

export default Home;
