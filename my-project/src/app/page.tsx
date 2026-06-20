import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { MobileApps } from "@/components/MobileApps";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SceneCanvas } from "@/components/three/SceneCanvas";

export default function Home() {
  return (
    <>
      <SceneCanvas />
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-between w-full relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Education />
        <Experience />
        <MobileApps />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
