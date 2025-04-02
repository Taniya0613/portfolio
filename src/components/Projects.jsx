import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Project images (using placeholder URLs - replace with your actual images)
const projectImages = {
  astra: [
    'https://img.freepik.com/free-vector/flat-woman-chatting-with-chatbot-communicating-ai-robot-assistant_88138-959.jpg?t=st=1743633413~exp=1743637013~hmac=287e77368763d9d4a4292124adfd1b40e0073f434f6c0b7ed777cc0d34a95b91&w=1480',
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  ],
  signin: [
    'https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?t=st=1743633467~exp=1743637067~hmac=f00eb7380b0242151444686bef018050e0f77746d435d5ff643fddb9924afcaf&w=900',
    'https://img.freepik.com/free-vector/onboarding-app-screen-online-purchase_52683-32179.jpg?t=st=1743633706~exp=1743637306~hmac=6283848c19c7570eb0cc78e34954b68f2c7cccc6c5f4fcb080068cf44cdad7a5&w=1380',
    'https://img.freepik.com/premium-photo/businessman-suit-holding-tablet-symbolizing-successful-teamwork-accomplishing-newest-project-plans-man-carrying-electrical-device-representing-combined-effort-management_424947-5719.jpg?w=1380'
  ],
  amazon: [
    'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  ]
};

const projects = [
  {
    id: 'astra',
    title: "Generative AI Chatbot (Astra)",
    role: "Full Stack Developer",
    link: "https://github.com/Taniya0613/astra-chatbot",
    description: [
      "Built an AI-powered chatbot using Google Gemini API, enabling real-time conversational responses.",
      "Integrated voice and image input features for enhanced user interaction and accessibility.",
      "Designed a responsive UI with chat history and new chat options for seamless user experience."
    ]
  },
  {
    id: 'signin',
    title: "Sign-In/Sign-out System",
    role: "Full Stack Developer",
    link: "https://github.com/Taniya0613/Sign-in-Sign-out",
    description: [
      "Developed a Sign-In/Sign-out system using HTML, CSS, JavaScript, and videos.js for user authentication.",
      "Implemented secure password handling and session management to ensure user data protection.",
      "Designed a user-friendly interface with responsive design for seamless access across devices."
    ]
  },
  {
    id: 'amazon',
    title: "Amazon Clone",
    role: "Frontend Developer",
    link: "https://github.com/Taniya0613/smazon-clone.git",
    description: [
      "Built the front page of an Amazon clone using HTML, CSS, and JavaScript.",
      "Focused on responsive design for seamless usability across devices.",
      "Enhanced UI with Font Awesome icons for a polished, interactive experience."
    ]
  }
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
            className={index === currentIndex ? 'active' : ''}
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
    triggerOnce: true
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
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub /> View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}