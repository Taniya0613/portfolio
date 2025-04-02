import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="contact" ref={ref} className="contact-section">
      <h2>CONTACT</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="contact-info"
      >
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <a href="tel:+917973437559">+91-79734-37559</a>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:taniya4116@gmail.com">taniya4116@gmail.com</a>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>Amritsar, Punjab 143115</span>
        </div>
      </motion.div>
    </section>
  );
}