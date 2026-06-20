import {RiReactjsLine} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import {SiMongodb} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {FaNodeJs} from "react-icons/fa";
import {RiTailwindCssFill} from "react-icons/ri";

const Technologies = () => {
  const techs = [
    { icon: RiReactjsLine, name: "REACT.JS", color: "text-[#61DAFB]" },
    { icon: TbBrandNextjs, name: "NEXT.JS", color: "text-primary" },
    { icon: FaNodeJs, name: "NODE.JS", color: "text-[#339933]" },
    { icon: RiTailwindCssFill, name: "TAILWIND", color: "text-[#38B2AC]" },
    { icon: SiMongodb, name: "MONGODB", color: "text-[#47A248]" },
    { icon: FaJava, name: "JAVA", color: "text-[#007396]" }
  ];

  return (
    <section className="w-full px-4 md:px-margin-desktop py-20 border-b border-grid-line bg-paper-white relative overflow-hidden">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-label-mono-bold text-label-mono-bold text-secondary">04 // CORE TECHNOLOGIES</span>
        <div className="h-px bg-grid-line flex-grow"></div>
        <span className="font-label-mono-sm text-label-mono-sm text-metadata-gray hidden md:block">SYS_DEPS: {techs.length} ACTIVE</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-grid-line border border-grid-line">
        {techs.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div 
              key={index}
              className="bg-paper-white flex flex-col items-center justify-center p-8 gap-4 hover:bg-surface transition-colors group relative overflow-hidden cursor-crosshair"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <Icon className={`text-5xl ${tech.color} grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110`} />
              
              <span className="font-label-mono-bold text-[10px] text-metadata-gray group-hover:text-primary transition-colors tracking-widest uppercase">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;