import React from "react";

const VideoCard = ({ video, onClick }) => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg"
      onClick={() => onClick(video)}
    >
      {/* <img className="w-full" src={video} alt={video.tags} /> */}
      <div>{video.videos.large.url}</div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{video.user}</div>
        <p className="text-gray-700 text-base">{video.tags}</p>
      </div>
    </div>
  );
};

export default VideoCard;
