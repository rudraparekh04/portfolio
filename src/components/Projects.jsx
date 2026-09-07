import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [

    {
      title: 'Vehicle Booking Service',
      description: 'Developed a full-stack Vehicle Booking Service web application that allows users to browse, book, and manage vehicle rentals efficiently. Implemented secure authentication, RBAC (Role-Based Access Control), and concurrent user handling to ensure secure and reliable system performance. Designed responsive UI components and optimized backend APIs for smooth booking and reservation management.',
      tech: ['React', 'TailwindCSS', 'ExpressJS', 'NodeJs', 'MongoDB'],
      github: '#',
      external: 'https://vehicleserviceautoserve.vercel.app',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, product management, and Stripe integration for payments.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      external: 'https://rose-garment-clone.vercel.app/',
    },
    // {
    //   title: 'Social Media Manager',
    //   description: 'A web app that helps content creators schedule and publish posts across multiple platforms from a single dashboard.',
    //   tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    //   github: '#',
    //   external: '#',
    // },

    //   {
    //     title: 'Task Management API',
    //     description: 'A robust REST API for task management with features like user roles, project collaboration, and email notifications.',
    //     tech: ['Go', 'PostgreSQL', 'Docker'],
    //     github: '#',
    //     external: '#',
    //   },
    //   {
    //     title: 'Weather App',
    //     description: 'A beautiful and responsive weather application using the OpenWeather API with location-based forecasts.',
    //     tech: ['Vue.js', 'CSS3', 'Vite'],
    //     github: '#',
    //     external: '#',
    //   },
    //   {
    //     title: 'Portfolio V1',
    //     description: 'The first iteration of my personal portfolio website, built with basic HTML, CSS, and Vanilla JavaScript.',
    //     tech: ['HTML', 'CSS', 'JavaScript'],
    //     github: '#',
    //     external: '#',
    //   }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Image with Premium Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2560&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[3px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/50 to-slate-900" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 flex items-center gap-4">
            <span className="text-teal-400 font-mono text-xl">02.</span>
            Some Things I've Built
            <div className="h-px bg-slate-700 flex-grow ml-4 max-w-xs"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="backdrop-blur-xl bg-slate-900/40 rounded-xl p-8 flex flex-col h-full border border-white/10 hover:border-teal-400/50 transition-all duration-300 group shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
            >
              <div className="flex justify-between items-center mb-8">
                <Folder className="w-10 h-10 text-teal-400" />
                <div className="flex gap-4">
                  <a href={project.github} className="text-slate-400 hover:text-teal-400 transition-colors">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a href={project.external} className="text-slate-400 hover:text-teal-400 transition-colors" target="_blank">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-200 mb-4 group-hover:text-teal-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-8 flex-grow">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-mono text-slate-500 mt-auto">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
