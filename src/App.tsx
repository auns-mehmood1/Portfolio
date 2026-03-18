import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { motion, AnimatePresence } from 'motion/react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  
  return null;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-brand-purple/30">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route 
                path="/" 
                element={
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                } 
              />
              <Route 
                path="/projects" 
                element={
                  <PageWrapper>
                    <Projects />
                  </PageWrapper>
                } 
              />
              <Route 
                path="/contact" 
                element={
                  <PageWrapper>
                    <Contact />
                  </PageWrapper>
                } 
              />
            </Routes>
          </AnimatePresence>
        </main>
        <FloatingWhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}
