import React from 'react';
import NoSSR from './NoSSR';

const YouTubeEmbed: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Channel Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Nisaru EcoLife Youtube Channel</h2>
            <p className="text-lg text-gray-600 mb-4">Watch our latest short-form sustainable living tips</p>
            <a 
              href="https://www.youtube.com/@NisaruEcoLife/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-colors"
            >
              Subscribe
            </a>
          </div>
          
          {/* Shorts Grid */}
          <NoSSR fallback={<div className="py-8 text-center">Loading videos...</div>}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Short 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="aspect-[9/16] relative">
                  <iframe
                    src="https://www.youtube.com/embed/UMnZktYxk-E"
                    title="Nisaru EcoLife Short"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Short 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="aspect-[9/16] relative">
                  <iframe
                    src="https://www.youtube.com/embed/vPIOb2pztt0"
                    title="Nisaru EcoLife Short"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Short 3 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="aspect-[9/16] relative">
                  <iframe
                    src="https://www.youtube.com/embed/TNSNi7lOcH0"
                    title="Nisaru EcoLife Short"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </NoSSR>
        </div>
      </div>
    </section>
  );
};

export default YouTubeEmbed;