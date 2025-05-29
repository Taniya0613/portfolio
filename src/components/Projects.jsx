import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Project images (using placeholder URLs - replace with your actual images)
const projectImages = {
  tomato: [
    "https://static.vecteezy.com/system/resources/previews/003/093/936/non_2x/online-delivery-service-free-vector.jpg",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "https://www.jaypeehotels.com/blog/wp-content/uploads/2021/06/Food-Delivery-1.jpg",
  ],
  astra: [
    "https://img.freepik.com/free-vector/flat-woman-chatting-with-chatbot-communicating-ai-robot-assistant_88138-959.jpg?t=st=1743633413~exp=1743637013~hmac=287e77368763d9d4a4292124adfd1b40e0073f434f6c0b7ed777cc0d34a95b91&w=1480",
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  ],
  softskill: [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "https://www.mindsetterz.com/wp-content/uploads/2024/01/Animation-in-Web-Design.jpeg",
  ],
};

const projects = [
  {
    id: "tomato",
    title: "Full Stack Food Ordering Website (Tomato)",
    role: "Full Stack Developer",
    link: "#", // Add your repo or live link if available
    description: [
      "Built a full-stack food delivery platform with user auth, live order tracking, and role-based dashboards.",
      "Developed REST APIs for menu, cart, orders, and Stripe-integrated payments.",
      "Designed a responsive UI with search, filters, and interactive cart for smooth UX.",
    ],
    tech: "React.js, Node.js, Express.js, MongoDB, Stripe API",
  },
  {
    id: "astra",
    title: "Generative AI Chatbot (Astra)",
    role: "Full Stack Developer",
    link: "https://github.com/Taniya0613/astra-chatbot",
    description: [
      "Built an AI-powered chatbot using the Google Gemini API to enable real-time conversational responses.",
      "Integrated voice and image input for enhanced interactivity and accessibility.",
      "Designed a responsive UI with chat history and new chat features for an intuitive user experience.",
    ],
    tech: "React.js, HTML, CSS",
  },
  {
    id: "softskill",
    title: "SoftSell Marketing Website",
    role: "Frontend Developer",
    link: "https://taniya0613.github.io/SoftSell-marketing-site/", // Add your repo or live link if available
    description: [
      "Built a fast, responsive single-page marketing site with React.js, featuring dark mode, smooth scrolling, and advanced animations using Tailwind CSS and Framer Motion.",
      "Added SEO, secured routes, testimonials, and Contact form for better engagement.",
      "Integrated admin dashboard for skill management and user authentication.",
    ],
    tech: "React.js, Vite, Tailwind CSS, JavaScript, Framer Motion",
  },
];

function ProjectImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="project-image-slider">
      <button className="slider-arrow left" onClick={prevSlide}>
        <FaArrowLeft />
      </button>

      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Project screenshot"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      <button className="slider-arrow right" onClick={nextSlide}>
        <FaArrowRight />
      </button>

      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "active" : ""}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" ref={ref} className="projects-section">
      <h2>PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="project-card"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
              transition: { duration: 0.3 },
            }}
          >
            <ProjectImageSlider images={projectImages[project.id]} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="role">{project.role}</p>
              <ul>
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
