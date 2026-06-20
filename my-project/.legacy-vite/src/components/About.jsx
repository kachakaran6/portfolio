import profilePic from "../assets/Profile pic.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <section className="w-full px-4 md:px-margin-desktop py-20 border-b border-grid-line bg-surface relative overflow-hidden">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-label-mono-bold text-label-mono-bold text-secondary">05 // SYSTEM SPECIFICATIONS</span>
        <div className="h-px bg-grid-line flex-grow"></div>
        <span className="font-label-mono-sm text-label-mono-sm text-metadata-gray hidden md:block">AUTHOR_DATA</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        {/* Left: Image in Blueprint Frame */}
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute -inset-4 border border-grid-line hidden md:block"></div>
          <div className="absolute -inset-4 border border-grid-line hidden md:block rotate-1"></div>
          
          <div className="relative p-2 border border-primary bg-paper-white z-10 group">
            {/* Corner Markers */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary -translate-x-1 -translate-y-1"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary translate-x-1 translate-y-1"></div>
            
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-auto object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            
            <div className="absolute bottom-4 left-4 bg-paper-white border border-primary px-3 py-1">
              <span className="font-label-mono-bold text-[10px] uppercase text-primary">FIG 1.0: ARCHITECT_PROFILE</span>
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="font-display-xl-mobile md:font-display-xl text-3xl md:text-5xl mb-8 leading-[1.1] md:leading-[1]">
            Operating <br/>
            <span className="text-secondary italic">Parameters</span>.
          </h2>
          
          <div className="relative pl-6 border-l border-grid-line">
            <div className="absolute top-0 left-[-4px] w-2 h-8 bg-secondary"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {ABOUT_TEXT}
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-4 border-t border-grid-line pt-8">
            <div>
              <span className="font-label-mono-bold text-[10px] text-metadata-gray block mb-1">STATUS</span>
              <span className="font-label-mono-bold text-sm text-primary uppercase">OPERATIONAL</span>
            </div>
            <div>
              <span className="font-label-mono-bold text-[10px] text-metadata-gray block mb-1">CAPABILITY</span>
              <span className="font-label-mono-bold text-sm text-primary uppercase">FULL STACK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
