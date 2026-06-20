import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background border-b border-grid-line flex justify-between items-center px-4 md:px-margin-desktop h-16 max-w-full">
      <div className="font-headline-md text-xl md:text-headline-md font-bold tracking-tighter text-primary">
        ENGINEERING EXCELLENCE JOURNAL
      </div>
      <nav className="hidden md:flex gap-8">
        <a className="font-label-mono-bold text-label-mono-bold uppercase text-secondary border-b border-secondary cursor-pointer active:opacity-70 transition-colors duration-200" href="#">INDEX</a>
        <a className="font-label-mono-bold text-label-mono-bold uppercase text-primary hover:text-secondary cursor-pointer active:opacity-70 transition-colors duration-200" href="#identity">IDENTITY</a>
        <a className="font-label-mono-bold text-label-mono-bold uppercase text-primary hover:text-secondary cursor-pointer active:opacity-70 transition-colors duration-200" href="#work">WORK</a>
        <a className="font-label-mono-bold text-label-mono-bold uppercase text-primary hover:text-secondary cursor-pointer active:opacity-70 transition-colors duration-200" href="#contact">CONTACT</a>
      </nav>
      <div className="flex items-center gap-4 md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-primary font-label-mono-bold uppercase">
          {menuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-background border-b border-grid-line flex flex-col p-4 gap-4 shadow-lg md:hidden">
          <a onClick={() => setMenuOpen(false)} className="font-label-mono-bold text-label-mono-bold uppercase text-secondary" href="#">INDEX</a>
          <a onClick={() => setMenuOpen(false)} className="font-label-mono-bold text-label-mono-bold uppercase text-primary" href="#identity">IDENTITY</a>
          <a onClick={() => setMenuOpen(false)} className="font-label-mono-bold text-label-mono-bold uppercase text-primary" href="#work">WORK</a>
          <a onClick={() => setMenuOpen(false)} className="font-label-mono-bold text-label-mono-bold uppercase text-primary" href="#contact">CONTACT</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
