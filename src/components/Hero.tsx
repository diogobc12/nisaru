import React from 'react';
import YouTubeEmbed from './YouTubeEmbed';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6 leading-tight">
            Sustainable Living for a Better Tomorrow
          </h1>
          <p className="text-lg md:text-xl text-emerald-700 mb-8">
            Join us on our journey to explore and celebrate nature, sustainability, and regenerative living.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto shadow-xl rounded-xl overflow-hidden">
          <YouTubeEmbed />
        </div>
      </div>
    </section>
  );
};

export default Hero;