import React, { useEffect } from "react";
import { useIntersection } from "react-use";
import VideoCard from "./VideoCard";
import data from "../data/data.json";
import { stockImageUrl } from "../data/constants";

const VideoFeed = () => {
  return (
    <div className="rootContainer">
      {data.map((item, index) => (
        <VideoCard
          key={index}
          coverImage={
            item.video.coverImageUrl ? item.video.coverImageUrl : stockImageUrl
          }
          videoUrlOriginal={item.video.originalUrl}
          author={item.channel ? item.channel.user.name : "John Doe"}
        />
      ))}
    </div>
  );
};

export default VideoFeed;
