import React from 'react'
import YouTube from 'react-youtube';

export default function VideoItem({ videoId }) {
  

  return (
    <iframe
    title={`Video ${videoId}`}
    width="100%"
    height="100%"
    src={`https://www.youtube.com/embed/${videoId}`}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
  )
}
