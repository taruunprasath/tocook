import React from 'react';

const Youtube = ({ videoUrl }) => {
  const getYoutubeVideoId = (url) => {
    try {
      const urlParams = new URLSearchParams(new URL(url).search);
      return urlParams.get('v');
    } catch (error) {
      console.error('Error parsing YouTube video URL:', error);
      return null;
    }
  };

  const videoId = getYoutubeVideoId(videoUrl);

  return (
    <div className="video">
      {videoId && (
        <iframe
          title="YouTube Video"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Youtube;
