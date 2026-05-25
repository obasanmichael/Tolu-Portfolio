import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CursorTrail } from "@/components/motion/CursorTrail";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StackSection } from "@/components/sections/StackSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <CursorTrail />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <StackSection />
        <PrinciplesSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
