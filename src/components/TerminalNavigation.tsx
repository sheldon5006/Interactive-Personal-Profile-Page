import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Terminal, ChevronRight } from "lucide-react";

const navCommands = [
  { cmd: "cd ~/about", section: "#about", description: "Personal information" },
  { cmd: "cat skills.json", section: "#skills", description: "Technical abilities" },
  { cmd: "git log --oneline", section: "#experience", description: "Work history" },
  { cmd: "ls projects/", section: "#projects", description: "Portfolio showcase" },
  { cmd: "wget contact.sh", section: "#contact", description: "Get in touch" },
];

export function TerminalNavigation() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navCommands.map(nav => nav.section);
      const currentSection = sections.find(section => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const executeCommand = (section: string) => {
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary"
    >
      <div className="container mx-auto px-4">
        {/* Terminal Header */}
        <div className="flex items-center justify-between py-2 border-b border-primary/30">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <span className="text-sm text-muted-foreground">alex@portfolio:~$</span>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>{currentTime.toLocaleTimeString()}</span>
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="hover:text-primary transition-colors"
            >
              {isMinimized ? '□' : '_'}
            </button>
          </div>
        </div>

        {/* Terminal Content */}
        <motion.div
          animate={{ height: isMinimized ? 0 : 'auto', opacity: isMinimized ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="py-3">
            <div className="hidden md:flex items-center gap-6">
              {navCommands.map((nav, index) => (
                <motion.button
                  key={nav.cmd}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => executeCommand(nav.section)}
                  className={`flex items-center gap-2 text-sm hover:text-primary transition-colors group ${
                    activeSection === nav.section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <ChevronRight className="w-3 h-3" />
                  <span className="font-mono">{nav.cmd}</span>
                  <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-accent">
                    #{nav.description}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Terminal className="w-4 h-4" />
                <span>Navigation Menu</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {navCommands.map((nav) => (
                  <button
                    key={nav.cmd}
                    onClick={() => executeCommand(nav.section)}
                    className={`text-left text-xs p-2 rounded border hover:bg-primary/10 transition-colors ${
                      activeSection === nav.section 
                        ? 'border-primary text-primary' 
                        : 'border-primary/30 text-muted-foreground'
                    }`}
                  >
                    <div className="font-mono mb-1">{nav.cmd}</div>
                    <div className="text-accent">{nav.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}