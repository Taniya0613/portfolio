import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Project images (using placeholder URLs - replace with your actual images)
const projectImages = {
  airesume: [
    "https://assets.hipcv.com/content/Illustrations-for-content/ats-checker.jpeg",
    "https://www.skillfuel.com/wp-content/uploads/2025/09/image_b16d4ecf37882ef8796b976fc99f6768-768x512.jpeg",
    "https://miro.medium.com/v2/resize:fit:1200/1*bTctD2Ub51R_k594veWS7A.jpeg",
  ],
  forever: [
    "https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=612x612&w=0&k=20&c=EWKEahyVLY8iAHyirCCDESHRGW37lqUJ7In0SssNSLE=",
    "https://img.freepik.com/free-photo/portrait-curly-girl-with-red-lipstick-taking-notes-tablet-pink-background-with-dressees_197531-17620.jpg",
    "https://media.tychesoftwares.com/wp-content/uploads/2018/11/69932-big.jpg",
  ],
  softskill: [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "https://www.mindsetterz.com/wp-content/uploads/2024/01/Animation-in-Web-Design.jpeg",
  ],
};

const projects = [
  {
    id: "airesume",
    title: "AI Resume Analyzer API",
    role: "Backend Developer",
    link: "https://github.com/Taniya0613/ai-resume-analyzer",
    description: [
      "Built a FastAPI backend to analyze PDF resumes by extracting text and generating recruiter-style reports (skills, strengths, weaknesses, score) using OpenAI.",
      "Implemented JWT authentication and SQLAlchemy database integration to manage user analysis history.",
      "Documented APIs with Swagger UI and deployed the application on Render for live testing.",
    ],
    tech: "Python, FastAPI, SQLAlchemy, PyMuPDF, OpenAI, JWT, SQLite/PostgreSQL",
  },
  {
    id: "forever",
    title: "Full Stack eCommerce Website (Forever)",
    role: "Full Stack Developer",
    link: "https://github.com/Taniya0613/ecommerce-forever",
    description: [
      "Developed a full-stack eCommerce platform with admin and customer dashboards for product management, cart, and order tracking.",
      "Built REST APIs using Express & MongoDB with JWT-based authentication and integrated Cloudinary for image uploads.",
      "Designed a responsive UI with React and Tailwind CSS and integrated Stripe/Razorpay payment gateways.",
    ],
    tech: "React.js, Node.js, Express.js, MongoDB, Stripe, Razorpay, Cloudinary, Tailwind CSS, Vite",
  },
  {
    id: "softskill",
    title: "SoftSell Marketing Website",
    role: "Frontend Developer",
    link: "https://taniya0613.github.io/SoftSell-marketing-site/",
    description: [
      "Built a responsive marketing website using React and Tailwind CSS with optimized performance via Vite.",
      "Implemented SEO optimization using meta tags, Open Graph, and social sharing support.",
      "Enhanced UI using Font Awesome icons and Google Fonts for a modern user experience.",
    ],
    tech: "React, Tailwind CSS, Vite, HTML5, JavaScript, Font Awesome",
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
  }, [nextSlide]);

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
