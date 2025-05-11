import React from 'react';
import { Sprout, Heart, Globe } from 'lucide-react';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-emerald-100 transition-all duration-300 hover:shadow-md hover:transform hover:-translate-y-1">
      <div className="flex flex-col items-center text-center">
        <div className="text-emerald-600 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-emerald-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-16 bg-gradient-to-b from-emerald-50/70 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            "At Nisaru EcoLife, we explore and celebrate nature, sustainability, and regenerative living. 
            Our dream is to one day launch an investment fund to support the creation of self-sufficient, 
            eco-conscious communities around the world."
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <ValueCard 
            icon={<Sprout className="h-10 w-10" />}
            title="Sustainability"
            description="Promoting practices that meet present needs without compromising future generations."
          />
          <ValueCard 
            icon={<Heart className="h-10 w-10" />}
            title="Community"
            description="Building connections that foster collaboration, support, and shared responsibility."
          />
          <ValueCard 
            icon={<Globe className="h-10 w-10" />}
            title="Regeneration"
            description="Going beyond sustainability to restore, renew, and revitalize natural systems."
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;