import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import VideoItem from './VideoItem';


export default function SliderDemo() {
   
  
 

  return (
    <div className="SliderContainer">
      <div style={carouselContainerStyle} className="carousel-container">
        <Carousel
          responsive={responsive}
          additionalTransfrom={0} // Set the desired additional transform value
          customDot={customDotStyle} // Apply the custom dot style
          customTransition="transform 500ms ease-in-out" // Custom transition effect for the carousel
          itemClass="carousel-item-padding-40-px" // Add custom class to each carousel item
        >
          <VideoItem videoId="lVkKLf4DCn8" />
          <VideoItem videoId="oxNLRqMJMZk" />
          <VideoItem videoId="b7QlX3yR2xs" />
          <VideoItem videoId="lVkKLf4DCn8" />
          <VideoItem videoId="oxNLRqMJMZk" />
          <VideoItem videoId="b7QlX3yR2xs" />
        </Carousel>
      </div>
    </div>
  );
}
