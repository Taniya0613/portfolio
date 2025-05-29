import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" ref={ref} className="contact-section">
      <h2 className="contact-main-heading">Get in Touch</h2>
      <div className="contact-flex">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="contact-info contact-info-left"
        >
          <div className="contact-quote">
            <span>
              "Passionate about building beautiful, scalable, and innovative web
              apps that solve real-world problems creatively through
              cutting-edge technology with user-focused, impactful solutions.."
            </span>
          </div>
          <div className="contact-list">
            <motion.div
              className="contact-item"
              whileHover={{ scale: 1.08, backgroundColor: "#e3f2fd" }}
            >
              <FaPhone className="contact-icon" />
              <a href="tel:+91797437559">+91 797437559</a>
            </motion.div>
            <motion.div
              className="contact-item"
              whileHover={{ scale: 1.08, backgroundColor: "#e3f2fd" }}
            >
              <FaEnvelope className="contact-icon" />
              <a href="mailto:taniya4115@gmail.com">taniya4115@gmail.com</a>
            </motion.div>
            <motion.div
              className="contact-item"
              whileHover={{ scale: 1.08, backgroundColor: "#e3f2fd" }}
            >
              <FaMapMarkerAlt className="contact-icon" />
              <a
                href="https://www.google.com/maps/place/New+Delhi,+India"
                target="_blank"
                rel="noreferrer"
              >
                New Delhi, India
              </a>
            </motion.div>
            <motion.div
              className="contact-item"
              whileHover={{ scale: 1.08, backgroundColor: "#e3f2fd" }}
            >
              <FaLinkedin className="contact-icon" />
              <a
                href="https://linkedin.com/in/taniya-sharma-1680d"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </motion.div>
            <motion.div
              className="contact-item"
              whileHover={{ scale: 1.08, backgroundColor: "#e3f2fd" }}
            >
              <FaGithub className="contact-icon" />
              <a
                href="https://github.com/Taniya0613"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </motion.div>
          </div>
        </motion.div>
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          onSubmit={handleSubmit}
        >
          <h3>Send a Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
          {error && <div className="form-error">{error}</div>}
          {submitted && (
            <div className="form-success">
              Thank you! Your message has been sent.
            </div>
          )}
          <button type="submit">Send</button>
        </motion.form>
      </div>
    </section>
  );
}
