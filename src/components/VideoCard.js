import React, { useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./VideoCard.scss";
import gsap from "gsap";

const VideoCard = ({ author, videoUrlOriginal, coverImage }) => {
  const swiper = useRef(null);

  useEffect(() => {
    swiper.current = new Swiper(".swiper-container");
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          {/* <img src={this.props.coverImage} className="coverImage"></img> */}
          <video
            src={videoUrlOriginal}
            controls
            muted
            className="coverImage"
          ></video>
        </div>
        {/* author info */}
        <div className="swiper-slide white-bg">
          <div className="authorInfo">
            <p>By</p>
            <p className="size2 mt0">{author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
