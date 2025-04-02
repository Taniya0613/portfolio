import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './styles/global.scss';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="loader"
          >
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1.2 }}
              transition={{ 
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.8
              }}
            >
              TANIYA SHARMA
            </motion.h1>
          </motion.div>
        ) : (
          <>
            <Navbar />
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Education />
              <Contact />
            </main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;