import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* SloganSpark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-4">SloganSpark – AI-Powered Caption Generator(Personal Project)</h3>
            <p className="text-gray-300 mb-4">
              Full-stack web app to generate catchy slogans and marketing captions using OpenAI.
              Includes user login, history tracking, and favorite management.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="badge">React.js</span>
              <span className="badge">Node.js</span>
              <span className="badge">Express.js</span>
              <span className="badge">MongoDB</span>
              <span className="badge">OpenAI API</span>
              <span className="badge">JWT</span>
            </div>
          </motion.div>

          {/* PLA-FERA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-4"> Quiz, Donation & Waste Collection</h3>
            <p className="text-gray-300 mb-4">
              A waste management platform featuring quizzes, donations, and challenges with
              responsive UI and role-based access control.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="badge">React.js</span>
              <span className="badge">Redux</span>
              <span className="badge">MUI</span>
              <span className="badge">JWT</span>
              <span className="badge">Chart.js</span>
            </div>
          </motion.div>

          {/* FESTIVAL PRO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-4">Event & Artist Info Guide</h3>
            <p className="text-gray-300 mb-4">
              Mobile app to explore and manage event schedules with offline support using SQLite
              for uninterrupted access.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="badge">React Native</span>
              <span className="badge">SQLite</span>
            </div>
          </motion.div>

          {/* PHSS - Employee Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-4">Employee Management System</h3>
            <p className="text-gray-300 mb-4">
              Mobile-first employee app for managing schedules, leave requests, and real-time
              updates using Twilio notifications.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="badge">React Native</span>
              <span className="badge">REST API</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tailwind badge style */}
      <style>{`
        .badge {
          @apply bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm;
        }
      `}</style>
    </div>
  );
}
