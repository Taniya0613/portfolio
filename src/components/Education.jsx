import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const education = [
  {
    period: "2023-2025",
    institution: "CHANDIGARH UNIVERSITY",
    degree: "Pursuing Master in Computer Application"
  },
  {
    period: "2020-2023",
    institution: "GURU NANAK DEV UNIVERSITY",
    degree: "Bachelor of Computer Science"
  }
];

export default function Education() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="education" ref={ref} className="education-section">
      <h2>EDUCATION</h2>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="education-item"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="period">{edu.period}</div>
            <div className="details">
              <h3>{edu.institution}</h3>
              <p>{edu.degree}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}