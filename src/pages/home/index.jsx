import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      Home
      <Link
        style={{
          textDecoration: "none",
          color: "white",
          background: "blue",
          padding: "10px",
          borderRadius: "5px",
          maxWidth: "70px",
        }}
        to="/video"
      >
        Video
      </Link>
    </div>
  );
}

export default Home;
