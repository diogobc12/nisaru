import React from 'react';

const YouTubeEmbed: React.FC = () => {
  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden bg-gray-100">
      <iframe
        src="https://www.youtube.com/embed?listType=user_uploads&list=NisaruEcoLife"
        title="Nisaru EcoLife YouTube Channel"
        className="absolute top-0 left-0 w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;