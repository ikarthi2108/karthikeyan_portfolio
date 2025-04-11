import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
        >
          Experience & Education
        </motion.h2>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(255, 255, 255, 0.05)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.05)' }}
            date="2023 - Present"
            iconStyle={{ background: '#6366f1', color: '#fff' }}
            icon={<Briefcase />}
          >
            <h3 className="vertical-timeline-element-title font-bold">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">CG-VAK Software and Exports</h4>
            <p className="text-gray-300">
              Working on full-stack projects and client-facing platforms using React.js, Node.js,React Native and SQL Server.
            </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgba(255, 255, 255, 0.05)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.05)' }}
            date="2020 - 2023"
            iconStyle={{ background: '#8b5cf6', color: '#fff' }}
            icon={<GraduationCap />}
          >
            <h3 className="vertical-timeline-element-title font-bold">Bachelor of Computer Applications</h3>
            <h4 className="vertical-timeline-element-subtitle">PSG College of Arts and Science</h4>
            <p className="text-gray-300">Graduated with First class with distinction</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgba(255, 255, 255, 0.05)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.05)' }}
            date="2018 - 2020"
            iconStyle={{ background: '#8b5cf6', color: '#fff' }}
            icon={<GraduationCap />}
          >
            <h3 className="vertical-timeline-element-title font-bold">Higher Secondary Education</h3>
            <h4 className="vertical-timeline-element-subtitle">Skl Public School, Tiruppur</h4>
            <p className="text-gray-300">Completed HSC with excellent academic performance</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgba(255, 255, 255, 0.05)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.05)' }}
            date="2017 - 2018"
            iconStyle={{ background: '#8b5cf6', color: '#fff' }}
            icon={<GraduationCap />}
          >
            <h3 className="vertical-timeline-element-title font-bold">SSLC</h3>
            <h4 className="vertical-timeline-element-subtitle">Amrita Vidyalayam , Tiruppur</h4>
            <p className="text-gray-300">Completed secondary education with distinction</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}