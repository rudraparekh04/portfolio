import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database } from 'lucide-react';
import { 
  SiReact, SiVuedotjs, SiTailwindcss, SiFramer, SiNextdotjs,
  SiNodedotjs, SiExpress, SiPython, SiFastapi, SiGo,
  SiPostgresql, SiMongodb, SiRedis, SiFirebase,
  SiJavascript, SiTypescript, SiHtml5, SiCss
} from 'react-icons/si';

const About = () => {
const iconMap = {
    'React': <SiReact className="w-4 h-4 text-[#61DAFB]" />,
    'Vue': <SiVuedotjs className="w-4 h-4 text-[#4FC08D]" />,
    'TailwindCSS': <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />,
    'Framer Motion': <SiFramer className="w-4 h-4 text-white" />,
    'Next.js': <SiNextdotjs className="w-4 h-4 text-white" />,
    'Node.js': <SiNodedotjs className="w-4 h-4 text-[#339933]" />,
    'Express': <SiExpress className="w-4 h-4 text-white" />,
    'Python': <SiPython className="w-4 h-4 text-[#3776AB]" />,
    'FastAPI': <SiFastapi className="w-4 h-4 text-[#009688]" />,
    'Go': <SiGo className="w-4 h-4 text-[#00ADD8]" />,
    'PostgreSQL': <SiPostgresql className="w-4 h-4 text-[#4169E1]" />,
    'MongoDB': <SiMongodb className="w-4 h-4 text-[#47A248]" />,
    'Redis': <SiRedis className="w-4 h-4 text-[#DC382D]" />,
    'Firebase': <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
    'JavaScript': <SiJavascript className="w-4 h-4 text-[#F7DF1E]" />,
    'TypeScript': <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
    'HTML': <SiHtml5 className="w-4 h-4 text-[#E34F26]" />,
    'CSS': <SiCss className="w-4 h-4 text-[#1572B6]" />
  };

  const skills = [
    { name: 'Frontend', icon: <Layout className="w-6 h-6" />, items: ['React', 'Vue', 'TailwindCSS', 'Framer Motion', 'Next.js'] },
    { name: 'Backend', icon: <Server className="w-6 h-6" />, items: ['Node.js', 'Express', 'Python', 'FastAPI', 'Go'] },
    { name: 'Database', icon: <Database className="w-6 h-6" />, items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'] },
    { name: 'Languages', icon: <Code className="w-6 h-6" />, items: ['JavaScript', 'TypeScript', 'Python', 'Go', 'HTML', 'CSS'] }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Image with Premium Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2560&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />
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
            <span className="text-teal-400 font-mono text-xl">01.</span>
            About Me
            <div className="h-px bg-slate-700 flex-grow ml-4 max-w-xs"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 leading-relaxed space-y-6 text-lg"
          >
            <p>
              Hello! My name is Jane and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about about layout and design!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            <p>
              I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skillGroup) => (
              <motion.div
                key={skillGroup.name}
                whileHover={{ y: -5 }}
                className="backdrop-blur-xl bg-slate-900/40 p-6 rounded-xl border border-white/10 hover:border-teal-400/50 transition-colors shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
              >
                <div className="flex items-center gap-3 mb-4 text-slate-200">
                  <div className="text-teal-400">
                    {skillGroup.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{skillGroup.name}</h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="text-slate-400 flex items-center gap-2 text-sm">
                      {iconMap[item] || <div className="w-1.5 h-1.5 rounded-full bg-teal-400/50"></div>}
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
