import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    period: "11/2025 – Present",
    company: "Fitelo",
    location: "Gurugram",
    role: "Operations Executive",
    responsibilities: [
      "Managed daily operational workflows to ensure smooth execution of business processes.",
      "Maintained structured data records and documentation for accurate reporting and internal systems.",
      "Coordinated with cross-functional teams to resolve operational issues and streamline workflows.",
      "Generated reports and monitored data accuracy using internal tools and MS Excel, ensuring compliance with company standards.",
    ],
  },
  {
    period: "08/2025 – 10/2025",
    company: "Genpact",
    location: "Gurugram",
    role: "Process Executive – Backend Operations",
    responsibilities: [
      "Managed backend operations including data processing and documentation.",
      "Maintained high accuracy while handling sensitive operational data.",
      "Ensured compliance with internal processes and quality standards.",
      "Collaborated with cross-functional teams to improve operational workflows.",
      "Delivered high-quality output within defined SLA timelines.",
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experience" ref={ref} className="experience-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>EXPERIENCE</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="period">{exp.period}</div>
              <div className="details">
                <h3>{exp.role}</h3>
                <p className="company">{exp.company} • {exp.location}</p>
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
