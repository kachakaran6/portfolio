"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

export function Nav() {
  const [progress, setProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 bg-grid-line z-[60]">
        <div 
          className="h-full bg-secondary transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      <header className="fixed top-1 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-grid-line flex justify-between items-center px-4 md:px-margin-desktop h-16 max-w-full">
        <div className="font-headline-md text-base md:text-headline-md font-bold tracking-tighter text-primary uppercase">
          Karan Kacha
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a className="font-label-mono-bold text-label-mono-bold uppercase text-primary hover:text-secondary cursor-pointer transition-colors duration-200" href="#about">ABOUT</a>
          <a className="font-label-mono-bold text-label-mono-bold uppercase text-primary hover:text-secondary cursor-pointer transition-colors duration-200" href="#projects">WORK</a>
          <a className="font-label-mono-bold text-label-mono-bold uppercase text-primary hover:text-secondary cursor-pointer transition-colors duration-200" href="#education">EDUCATION</a>
          <a className="font-label-mono-bold text-label-mono-bold uppercase text-primary hover:text-secondary cursor-pointer transition-colors duration-200" href="#contact">CONTACT</a>
          
          <button 
            onClick={toggleTheme} 
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface transition-colors"
            aria-label="Toggle theme"
          >
            {mounted ? (
              resolvedTheme === "dark" ? <Sun size={20} className="text-primary" /> : <Moon size={20} className="text-primary" />
            ) : (
              <div className="w-5 h-5" />
            )}
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button 
            onClick={toggleTheme} 
            className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-surface transition-colors"
            aria-label="Toggle theme"
          >
            {mounted ? (
              resolvedTheme === "dark" ? <Sun size={20} className="text-primary" /> : <Moon size={20} className="text-primary" />
            ) : (
              <div className="w-5 h-5" />
            )}
          </button>
          <button 
            className="w-11 h-11 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[68px] z-40 bg-background flex flex-col items-center justify-center gap-8 md:hidden">
          <a onClick={closeMobileMenu} className="font-headline-md text-2xl font-bold uppercase text-primary" href="#about">ABOUT</a>
          <a onClick={closeMobileMenu} className="font-headline-md text-2xl font-bold uppercase text-primary" href="#projects">WORK</a>
          <a onClick={closeMobileMenu} className="font-headline-md text-2xl font-bold uppercase text-primary" href="#education">EDUCATION</a>
          <a onClick={closeMobileMenu} className="font-headline-md text-2xl font-bold uppercase text-primary" href="#contact">CONTACT</a>
        </div>
      )}
    </>
  );
}
