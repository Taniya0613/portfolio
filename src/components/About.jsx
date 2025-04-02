import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" ref={ref} className="about-section">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="about-content"
      >
        <h2>PROFILE</h2>
        <p>
          Enthusiastic and detail-oriented fresher with a strong academic background in Computer Applications. 
          Proficient in Python programming, Excel, data analysis, and Arduino projects. Quick learner with a passion 
          for technology and problem-solving, seeking to apply technical skills and creativity in a dynamic environment. 
          Excellent team player with strong communication skills and a commitment to continuous learning and professional growth.
        </p>
      </motion.div>
    </section>
  );
}