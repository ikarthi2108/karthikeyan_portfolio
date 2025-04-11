import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Mail, Linkedin, Github, Code2 } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
              Karthikeyan R
            </h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl mb-8"
            >
              <span className="text-cyan-300">Full Stack</span>{" "}
              <span className="text-purple-300">Developer</span>
            </motion.h2>

            <div className="flex flex-wrap gap-4 mb-12">
              {/* Email */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:karthikeyanzx21@gmail.com"
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 px-6 py-3 rounded-xl hover:from-cyan-500/30 hover:to-cyan-600/30 transition-all border border-cyan-500/20 backdrop-blur-sm"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-300">Email</span>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/karthikeyan-r-7baba2219"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 px-6 py-3 rounded-xl hover:from-purple-500/30 hover:to-purple-600/30 transition-all border border-purple-500/20 backdrop-blur-sm"
              >
                <Linkedin className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300">LinkedIn</span>
              </motion.a>

              {/* GitHub */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/ikarthi2108"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-pink-600/20 px-6 py-3 rounded-xl hover:from-pink-500/30 hover:to-pink-600/30 transition-all border border-pink-500/20 backdrop-blur-sm"
              >
                <Github className="w-5 h-5 text-pink-400" />
                <span className="text-pink-300">GitHub</span>
              </motion.a>

              {/* View CV */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1Zyz0y62jiPAnzV3S2q3SuqlJbK0sGgEU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-green-600/20 px-6 py-3 rounded-xl hover:from-green-500/30 hover:to-green-600/30 transition-all border border-green-500/20 backdrop-blur-sm"
              >
                <Code2 className="w-5 h-5 text-green-400" />
                <span className="text-green-300">View CV</span>
              </motion.a>
            </div>

            {/* Experience & Education */}
            <div className="flex gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="flex items-center justify-center w-16 h-16 mb-3 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 rounded-xl backdrop-blur-sm border border-cyan-500/20">
                  <Briefcase className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-300">2+ Years</h3>
                <p className="text-cyan-200/70">Experience</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="flex items-center justify-center w-16 h-16 mb-3 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-xl backdrop-blur-sm border border-purple-500/20">
                  <GraduationCap className="w-8 h-8 text-purple-400" />
                </div>
                <div className="flex flex-wrap gap-x-8 text-purple-200/90">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-300">BSC</h3>
                    <p className="text-purple-200/70">2023</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-300">Computer Technology</h3>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Animation Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
            <div className="relative aspect-square">
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Code2 className="w-48 h-48 text-purple-400/50" />
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      rotate: { 
                        duration: 10 - i * 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.5
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5
                      }
                    }}
                    className={`absolute w-64 h-64 border-2 rounded-full
                      ${i === 0 ? 'border-cyan-500/20' : 
                        i === 1 ? 'border-purple-500/20' : 'border-pink-500/20'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
