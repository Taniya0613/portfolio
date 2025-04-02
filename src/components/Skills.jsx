import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = {
  hard: [
    "HTML", "CSS", "JavaScript", "Python", "Node.js", 
    "MySQL", "React.js", "Bootstrap", "WordPress", "Git & GitHub"
  ],
  soft: [
    "Project Management", "Public Relations", "Teamwork", 
    "Time Management", "Leadership", "Effective Communication", 
    "Critical Thinking"
  ]
};

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="skills" ref={ref} className="skills-section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2>SKILLS</h2>
        <div className="skills-container">
          <div className="skills-column">
            <h3>Hard Skills</h3>
            <ul className="skills-list">
              {skills.hard.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="skills-column">
            <h3>Soft Skills</h3>
            <ul className="skills-list">
              {skills.soft.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}