import React from 'react';
import { Heart } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 text-center relative overflow-hidden border-t border-slate-800">
      {/* Background Image with Premium Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2560&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[3px] mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
            <span className="sr-only">GitHub</span>
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
            <span className="sr-only">Twitter</span>
            <FaTwitter className="w-5 h-5" />
          </a>
        </div>
        <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
          Designed & Built with <Heart className="w-4 h-4 text-teal-400" /> by Rudra Parekh
        </p>
      </div>
    </footer>
  );
};

export default Footer;
