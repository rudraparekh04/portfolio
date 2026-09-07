import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import boyAvatar from '../assets/boy_avatar.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Tech Background Image with Premium Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2560&auto=format&fit=crop')",
        }}
      >
        {/* Overlays for contrast and blending into the rest of the site */}
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="backdrop-blur-xl bg-slate-900/40 border border-white/10 p-8 sm:p-12 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] flex flex-col-reverse lg:flex-row items-center gap-12"
          >
            {/* Left Content: Text */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block px-4 py-1.5 mb-6 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 font-medium text-sm tracking-wide"
              >
                Welcome to my portfolio
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg"
              >
                Rudra Parekh.
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-3xl sm:text-5xl font-bold text-slate-200 tracking-tight mb-8 drop-shadow-md"
              >
                I build things for the web.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="max-w-xl mx-auto lg:mx-0 text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed font-light"
              >
                I build fast, scalable, and user-focused applications with clean architecture and modern technologies. Passionate about solving real-world problems through efficient backend systems and intuitive frontend design.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap justify-center lg:justify-start gap-5"
              >
                <a
                  href="#projects"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:shadow-[0_0_30px_rgba(20,184,166,0.6)] hover:-translate-y-1"
                >
                  Check out my work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600 hover:border-teal-400 text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-md hover:-translate-y-1"
                >
                  Resume
                  <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                </a>
              </motion.div>
            </div>

            {/* Right Content: Better Avatar Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 flex-shrink-0"
            >
              <div className="absolute inset-0 bg-teal-500 rounded-full blur-[60px] opacity-20 animate-pulse"></div>
              <img
                src={boyAvatar}
                alt="Profile Avatar"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-teal-500/30 shadow-[0_0_40px_rgba(20,184,166,0.3)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-sm text-slate-400 tracking-widest uppercase font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-teal-500 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
};

export default Hero;
