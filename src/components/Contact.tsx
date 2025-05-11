import React from 'react';
import { Mail, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-800 mb-6">Connect With Us</h2>
          <p className="text-lg text-gray-700 mb-10">
            We'd love to hear from you! Reach out with questions, ideas, or just to say hello.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="mailto:nisaruecolife@gmail.com"
              className="flex items-center justify-center gap-2 px-6 py-4 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>nisaruecolife@gmail.com</span>
            </a>
            
            <a 
              href="https://www.youtube.com/@NisaruEcoLife"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
            >
              <Youtube className="h-5 w-5" />
              <span>YouTube Channel</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;