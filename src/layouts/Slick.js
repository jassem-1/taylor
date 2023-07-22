import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slick.css';
import Slider from "react-slick";
import VideoItem from "./VideoItem";
export default function Slick() {
    var settings = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="carousel">
    <Slider {...settings}>
      <div className="box">
      <VideoItem videoId="lVkKLf4DCn8" />
      </div>
      <div className="box">
      <VideoItem videoId="lVkKLf4DCn8" />
      </div>
      <div className="box">
      <VideoItem videoId="lVkKLf4DCn8" />
      </div>
      <div className="box">
      <VideoItem videoId="lVkKLf4DCn8" />
      </div>
      <div className="box">
      <VideoItem videoId="lVkKLf4DCn8" />
      </div>
    </Slider>
    </div>
  );
}
