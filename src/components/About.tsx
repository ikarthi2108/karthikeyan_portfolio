import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image Section */}
          <div className="relative">
            <div className="w-full aspect-square rounded-2xl overflow-hidden">
              <img
                src="/karthi_profile.jpg"
                alt="Karthi Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-2xl" />
          </div>

          {/* About Text Section */}
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-300 mb-6">
              I'm a Full Stack Developer with over 2.5 years of experience in
              designing, developing, and deploying scalable web and mobile
              applications. Proficient in React.js, Next.js, Node.js, React
              Native, and MongoDB, with expertise in API integrations, secure
              authentication systems (JWT, OAuth 2.0), and performance
              optimization (SSR, SSG).
            </p>
            <p className="text-gray-300 mb-6">
              Currently working at CG-VAK Software and Exports as a Software Engineer, where I
              contribute to full-stack projects,Mobile Projects and client-facing platforms. I'm
              passionate about creating intuitive and user-friendly interfaces,
              building secure APIs, and collaborating with teams in Agile
              environments.
            </p>

            {/* Skills Section */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p className="text-gray-400">
                  React.js, Next.js, Redux, Tailwind CSS, Ant Design, MUI
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Backend</h3>
                <p className="text-gray-400">
                  Node.js, Express.js, MongoDB (Mongoose), MS SQL Server
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Auth & Security</h3>
                <p className="text-gray-400">
                  JWT, OAuth 2.0, RBAC, CSRF Protection
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">APIs & Testing</h3>
                <p className="text-gray-400">
                  REST, GraphQL, Postman, Swagger, SoapUI
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Tools & Cloud</h3>
                <p className="text-gray-400">
                  Git, GitHub, VS Code, AWS (EC2, S3, Lambda)
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Project Management</h3>
                <p className="text-gray-400">Jira, Agile, Scrum</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
