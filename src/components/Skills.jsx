import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = {
  technical: [
    "JavaScript",
    "Python",
    "React.js",
    "MongoDB",
    "Express.js",
    "Node.js",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",
    "MySQL",
    "REST APIs",
    "Excel",
    "Tableau",
  ],
  soft: [
    "Project Management",
    "Teamwork",
    "Time Management",
    "Leadership",
    "Communication",
    "Critical Thinking",
  ],
};

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" ref={ref} className="skills-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>SKILLS</h2>
        <div className="skills-container">
          <div className="skills-column">
            <h3>Technical Skills</h3>
            <ul className="skills-list">
              {skills.technical.map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.1, backgroundColor: "#e3f2fd" }}
                >
                  {item}
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
                  whileHover={{ scale: 1.1, backgroundColor: "#e3f2fd" }}
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
