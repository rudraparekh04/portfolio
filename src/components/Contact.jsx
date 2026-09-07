import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Image with Premium Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2560&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/50 to-slate-900" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-teal-400 font-mono text-lg mb-4">03. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <motion.a
              whileHover={{ y: -5 }}
              href="mailto:hello@example.com"
              className="flex items-center gap-4 backdrop-blur-xl bg-slate-900/40 p-6 rounded-xl border border-white/10 hover:border-teal-400/50 transition-colors shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
            >
              <div className="w-12 h-12 bg-teal-400/10 rounded-full flex items-center justify-center text-teal-400">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-400">Email Me</p>
                <p className="text-slate-200 font-medium">rudraparekh04@gmail.com</p>
              </div>
            </motion.a>

            <motion.div
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 backdrop-blur-xl bg-slate-900/40 p-6 rounded-xl border border-white/10 hover:border-teal-400/50 transition-colors shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
            >
              <div className="w-12 h-12 bg-teal-400/10 rounded-full flex items-center justify-center text-teal-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-400">Location</p>
                <p className="text-slate-200 font-medium">Valsad,Gujarat</p>
              </div>
            </motion.div>
          </div>

          <a
            href="mailto:hello@example.com"
            className="inline-block px-8 py-4 border-2 border-teal-400 text-teal-400 font-semibold rounded-lg hover:bg-teal-400/10 transition-colors"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
