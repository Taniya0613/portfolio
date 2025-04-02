import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ThreeDScene from './ThreeDScene';
import profileImage from '../assets/images/IMG_4406.JPG'; // Update with your actual image path

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="name-container"
        >
          <h1>TANIYA</h1>
          <h1 className="last-name">SHARMA</h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="subtitle-container"
        >
          <TypingText 
            texts={[
              "Full Stack Developer", 
              "AI Enthusiast",
              "Python Programmer",
              "Tech Innovator"
            ]} 
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="social-icons"
        >
          <a href="https://github.com/Taniya0613" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:taniya4116@gmail.com">
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
      
      <div className="image-frame-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="image-frame"
        >
          <img src={profileImage} alt="Taniya Sharma" />
          <div className="frame-decoration"></div>
        </motion.div>
      </div>
      
      <div className="canvas-container">
        <ThreeDScene />
      </div>
    </section>
  );
}

// TypingText component
function TypingText({ texts }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (currentIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Pause at end of text
          if (displayedText.length === currentText.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        }
      } else {
        // Deleting
        if (currentIndex > 0) {
          setDisplayedText(currentText.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          // Move to next text
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentIndex, currentTextIndex, isDeleting, texts]);

  return (
    <p className="subtitle">
      {displayedText}
      <span className="cursor">|</span>
    </p>
  );
}