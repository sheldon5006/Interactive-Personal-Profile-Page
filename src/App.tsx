import { ModernNavigation } from "./components/ModernNavigation";
import { HeroSection } from "./components/HeroSection";
import { CleanAboutSection } from "./components/CleanAboutSection";
import { ModernSkillsSection } from "./components/ModernSkillsSection";
import { TimelineExperience } from "./components/TimelineExperience";
import { ProjectsShowcase } from "./components/ProjectsShowcase";
import { ContactSection } from "./components/ContactSection";
import { ModernFooter } from "./components/ModernFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Modern Navigation */}
      <ModernNavigation />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <CleanAboutSection />
        
        {/* Skills Section */}
        <ModernSkillsSection />
        
        {/* Experience Section */}
        <TimelineExperience />
        
        {/* Projects Section */}
        <ProjectsShowcase />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Modern Footer */}
      <ModernFooter />
    </div>
  );
}