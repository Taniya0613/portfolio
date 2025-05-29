import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" ref={ref} className="about-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="about-content"
      >
        <h2>PROFILE</h2>
        <p>
          Motivated and detail-oriented <b>Full Stack Developer</b> with
          hands-on experience in designing and developing web applications using{" "}
          <b>MongoDB, Express.js, React.js, Node.js (MERN)</b>, HTML, CSS,
          Javascript and MySQL. Skilled in building responsive UIs, secure
          backends, and RESTful APIs. Passionate about clean code, scalability,
          and solving real-world problems through technology.
        </p>
      </motion.div>
    </section>
  );
}
