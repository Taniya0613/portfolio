import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const education = [
  {
    period: "2023 – 2025",
    institution: "Chandigarh University",
    location: "Chandigarh, Punjab",
    degree: "Master of Computer Applications",
  },
  {
    period: "2020 – 2023",
    institution: "Guru Nanak Dev University",
    location: "Amritsar, Punjab",
    degree: "Bachelor of Computer Science",
  },
];

export default function Education() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="education" ref={ref} className="education-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
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
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
                <p>{edu.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
