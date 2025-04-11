import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Contact Info
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:karthiynot2108@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                karthiynot2108@gmail.com
              </a>
              <a
                href="tel:+917010602615"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 7010602615
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                Tiruppur, Tamil Nadu
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Connect
            </h3>
            <div className="space-y-4">
              <a
                href="www.linkedin.com/in/karthikeyan-r-7baba2219"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/ikarthi2108"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <span className="bg-white/5 px-3 py-1 rounded text-sm text-gray-300">
                Html/CSS
              </span>
              <span className="bg-white/5 px-3 py-1 rounded text-sm text-gray-300">
                Javascript
              </span>
              <span className="bg-white/5 px-3 py-1 rounded text-sm text-gray-300">
                React.js
              </span>
              <span className="bg-white/5 px-3 py-1 rounded text-sm text-gray-300">
                Next.js
              </span>
              <span className="bg-white/5 px-3 py-1 rounded text-sm text-gray-300">
                React Native
              </span>
              <span className="bg-white/5 px-3 py-1 rounded text-sm text-gray-300">
                Redux
              </span>
              <span className="bg-white/5 px-3 py-1 rounded text-sm text-gray-300">
                Node.js
              </span>
              <span className="bg-white/5 px-3 py-1 rounded text-sm text-gray-300">
                MongoDB
              </span>
              <span className="bg-white/5 px-3 py-1 rounded text-sm text-gray-300">
                SQL Server
              </span>
              <span className="bg-white/5 px-3 py-1 rounded text-sm text-gray-300">
                REST API/Graph QL
              </span>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Karthikeyan A. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
