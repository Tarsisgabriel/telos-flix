import {
  CardGiftcardOutlined,
  SignalCellularAltOutlined,
} from "@mui/icons-material";
import React from "react";
import "./index.css";
import MiniVideoCard from "../miniVideoCard";

function EnjoyForFree() {
  const videos = [
    {
      title: "Video1",
    },
    {
      title: "Video2",
    },
    {
      title: "Video3",
    },
  ];
  return (
    <div className="enjoyForFreeSection">
      <div className="labelSection">
        <CardGiftcardOutlined /> Aproveite grátis
      </div>
      <div className="enjoyForFreeVideosGrid">
        {videos.map((video) => (
          <MiniVideoCard title={video.title} />
        ))}
      </div>
    </div>
  );
}

export default EnjoyForFree;
