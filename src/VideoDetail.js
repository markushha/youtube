import React from "react";

function VideoDetail({ video }) {
  const url = `https://youtube.com/embed/${video.id.videoId}`
  return (
    <div>
      <div className="ui embed">
          <iframe src={url} title={video.snippet.title} />
      </div>
      <div className="ui segment">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail
