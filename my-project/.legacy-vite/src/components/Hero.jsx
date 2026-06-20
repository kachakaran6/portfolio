import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <main id="identity" className="relative w-full min-h-screen flex flex-col md:flex-row pt-16">
      {/* Technical Markers */}
      <div className="absolute top-20 left-4 md:left-8 font-label-mono-sm text-label-mono-sm text-metadata-gray opacity-40 select-none hidden md:block">
        X: 23.02 // Y: 72.57
      </div>
      <div className="absolute bottom-8 right-8 font-label-mono-sm text-label-mono-sm text-metadata-gray opacity-40 select-none hidden md:block">
        [SECTION_01] IDENTITY_ROOT
      </div>
      <div className="absolute top-24 right-8 font-label-mono-sm text-label-mono-sm text-secondary select-none hidden md:block">
        ● SYSTEM ACTIVE
      </div>

      {/* Left Column: Content */}
      <section className="w-full md:w-[55%] h-full flex flex-col justify-center px-4 md:px-margin-desktop border-b md:border-b-0 md:border-r border-grid-line py-20 md:py-0 min-h-[80vh]">
        <div className="mb-4">
          <span className="font-label-mono-bold text-label-mono-bold text-secondary">01 // IDENTITY</span>
        </div>
        
        <h1 className="font-display-xl-mobile md:font-display-xl text-4xl md:text-display-xl mb-8 leading-[1.1] md:leading-[0.9]">
          Karan Kacha — <br className="hidden md:block"/>
          <span className="text-secondary italic">Engineering</span><br/>
          Excellence.
        </h1>
        
        <p className="font-body-lg text-body-lg max-w-xl mb-12 text-on-surface-variant leading-relaxed">
          {HERO_CONTENT}
        </p>
        
        <div className="flex flex-wrap gap-4 mb-16">
          <a href="#work" className="bg-primary text-on-primary font-label-mono-bold text-label-mono-bold uppercase px-8 py-4 transition-all hover:bg-secondary active:translate-y-1 inline-block text-center cursor-pointer">
            VIEW SELECTED WORK
          </a>
          <a href="#contact" className="border border-primary text-primary font-label-mono-bold text-label-mono-bold uppercase px-8 py-4 hover:bg-primary hover:text-white transition-all active:translate-y-1 inline-block text-center cursor-pointer">
            INITIATE CONNECTION
          </a>
        </div>
        
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/kacha-karan-5337731b2" className="font-label-mono-sm text-label-mono-sm text-metadata-gray hover:text-secondary transition-colors underline decoration-grid-line underline-offset-4" target="_blank" rel="noreferrer">LINKEDIN</a>
          <a href="https://github.com/kachakaran6" className="font-label-mono-sm text-label-mono-sm text-metadata-gray hover:text-secondary transition-colors underline decoration-grid-line underline-offset-4" target="_blank" rel="noreferrer">GITHUB</a>
          <a href="https://www.instagram.com/kacha_karan_" className="font-label-mono-sm text-label-mono-sm text-metadata-gray hover:text-secondary transition-colors underline decoration-grid-line underline-offset-4" target="_blank" rel="noreferrer">INSTAGRAM</a>
        </div>
      </section>

      {/* Right Column: Interactive Blueprint */}
      <section className="w-full md:w-[45%] h-full bg-paper-white flex items-center justify-center relative overflow-hidden min-h-[50vh] md:min-h-screen">
        <svg className="w-4/5 h-4/5 overflow-visible" fill="none" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          {/* Grid Lines in SVG */}
          <line stroke="rgba(0,0,0,0.04)" strokeWidth="1" x1="0" x2="600" y1="300" y2="300"></line>
          <line stroke="rgba(0,0,0,0.04)" strokeWidth="1" x1="300" x2="300" y1="0" y2="600"></line>
          
          {/* Connection Lines */}
          <path className="blueprint-line" d="M300 300 L150 150 M300 300 L450 150 M300 300 L150 450 M300 300 L450 450 M300 300 L300 100" stroke="#000" strokeWidth="0.5"></path>
          
          {/* Center Node (Core) */}
          <circle cx="300" cy="300" fill="#B7131A" r="4"></circle>
          <circle className="node-pulse" cx="300" cy="300" r="12" stroke="#B7131A" strokeWidth="1"></circle>
          <text className="uppercase" fill="#000" fontFamily="IBM Plex Mono" fontSize="10" fontWeight="700" x="315" y="305">Core_Systems</text>
          
          {/* Project Node: SnapDocs */}
          <g className="cursor-pointer transition-all duration-300 hover:[&>rect]:fill-secondary hover:[&>circle]:fill-white hover:[&>text]:fill-black">
            <rect fill="#fff" height="20" stroke="#000" strokeWidth="1" width="20" x="140" y="140" className="transition-colors"></rect>
            <circle cx="150" cy="150" fill="#000" r="3" className="transition-colors"></circle>
            <text className="uppercase transition-colors" fill="#666" fontFamily="IBM Plex Mono" fontSize="10" x="100" y="130">FULLSTACK [01]</text>
            <text fill="#B7131A" fontFamily="IBM Plex Mono" fontSize="8" x="110" y="175">REF_402.AI</text>
          </g>
          
          {/* Project Node: Trust Tracker */}
          <g className="cursor-pointer transition-all duration-300 hover:[&>rect]:fill-secondary hover:[&>circle]:fill-white hover:[&>text]:fill-black">
            <rect fill="#fff" height="20" stroke="#000" strokeWidth="1" width="20" x="440" y="140" className="transition-colors"></rect>
            <circle cx="450" cy="150" fill="#000" r="3" className="transition-colors"></circle>
            <text className="uppercase transition-colors" fill="#666" fontFamily="IBM Plex Mono" fontSize="10" x="450" y="130">TRUST_TRACKER [02]</text>
          </g>
          
          {/* Project Node: Noctune */}
          <g className="cursor-pointer transition-all duration-300 hover:[&>rect]:fill-secondary hover:[&>circle]:fill-white hover:[&>text]:fill-black">
            <rect fill="#fff" height="20" stroke="#000" strokeWidth="1" width="20" x="140" y="440" className="transition-colors"></rect>
            <circle cx="150" cy="450" fill="#000" r="3" className="transition-colors"></circle>
            <text className="uppercase transition-colors" fill="#666" fontFamily="IBM Plex Mono" fontSize="10" x="100" y="480">HMS_CORE [03]</text>
          </g>
          
          {/* Project Node: Vault X */}
          <g className="cursor-pointer transition-all duration-300 hover:[&>rect]:fill-secondary hover:[&>circle]:fill-white hover:[&>text]:fill-black">
            <rect fill="#fff" height="20" stroke="#000" strokeWidth="1" width="20" x="440" y="440" className="transition-colors"></rect>
            <circle cx="450" cy="450" fill="#000" r="3" className="transition-colors"></circle>
            <text className="uppercase transition-colors" fill="#666" fontFamily="IBM Plex Mono" fontSize="10" x="450" y="480">PU_VAULT [04]</text>
          </g>
          
          {/* Project Node: Divine Geeta */}
          <g className="cursor-pointer transition-all duration-300 hover:[&>rect]:fill-secondary hover:[&>circle]:fill-white hover:[&>text]:fill-black">
            <rect fill="#fff" height="20" stroke="#000" strokeWidth="1" width="20" x="290" y="90" className="transition-colors"></rect>
            <circle cx="300" cy="100" fill="#000" r="3" className="transition-colors"></circle>
            <text className="uppercase transition-colors" fill="#666" fontFamily="IBM Plex Mono" fontSize="10" x="325" y="95">BACKEND [05]</text>
          </g>
          
          {/* Measurement Markings */}
          <text fill="rgba(0,0,0,0.3)" fontFamily="IBM Plex Mono" fontSize="8" transform="rotate(-45 210 210)" x="210" y="210">L: 212.13mm</text>
          <text fill="rgba(0,0,0,0.3)" fontFamily="IBM Plex Mono" fontSize="8" transform="rotate(45 370 210)" x="370" y="210">θ: 45.00°</text>
        </svg>

        {/* Metadata Overlay */}
        <div className="absolute bottom-12 left-4 md:left-12 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></span>
            <span className="font-label-mono-sm text-label-mono-sm text-primary uppercase font-bold">Structural Analysis</span>
          </div>
          <div className="w-48 h-1 bg-grid-line overflow-hidden">
            <div className="h-full bg-secondary w-2/3"></div>
          </div>
          <span className="font-label-mono-sm text-label-mono-sm text-metadata-gray">DATA_LOAD: 87.2% COMPLETE</span>
        </div>
      </section>
    </main>
  );
};

export default Hero;
