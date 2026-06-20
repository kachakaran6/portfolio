import { useEffect, useState } from 'react';
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Footer from './components/Footer'

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Calculate scroll percentage only if there's scrollable height
      if (height > 0) {
        const scrolled = (winScroll / height) * 100;
        setScrollProgress(scrolled);
      }
    };
    
    // Initial call
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background text-primary overflow-x-hidden cursor-precision font-inter min-h-screen">
      <Navbar />
      
      <div className="w-full flex flex-col items-center">
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>

      <Footer />

      {/* Vertical Scroll Progress Line */}
      <div className="fixed right-4 top-1/4 h-1/2 w-px bg-grid-line hidden md:block z-50 pointer-events-none">
        <div 
          className="w-full bg-secondary transition-all duration-300" 
          style={{ height: `${Math.min(scrollProgress + 15, 100)}%` }}
        ></div>
      </div>
    </div>
  )
}

export default App