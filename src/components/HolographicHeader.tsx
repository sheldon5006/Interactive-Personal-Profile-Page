import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Terminal, Code, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const codeSnippets = [
  "const developer = { name: 'Alex', passion: 'code' };",
  "function buildAmazingThings() { return innovation; }",
  "while(coding) { dreams.push('reality'); }",
  "console.log('Hello, World!');",
  "import { future } from './tomorrow';",
];

const matrixChars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

export function HolographicHeader() {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [matrixRain, setMatrixRain] = useState<string[]>([]);

  // Typing animation effect
  useEffect(() => {
    if (isTyping) {
      const snippet = codeSnippets[currentSnippet];
      let index = 0;
      const timer = setInterval(() => {
        if (index <= snippet.length) {
          setDisplayText(snippet.slice(0, index));
          index++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
            setDisplayText("");
            setIsTyping(true);
          }, 2000);
          clearInterval(timer);
        }
      }, 50);
      return () => clearInterval(timer);
    }
  }, [currentSnippet, isTyping]);

  // Matrix rain effect
  useEffect(() => {
    const generateMatrixRain = () => {
      const columns = Math.floor(window.innerWidth / 20);
      const rain = Array.from({ length: columns }, () => 
        matrixChars[Math.floor(Math.random() * matrixChars.length)]
      );
      setMatrixRain(rain);
    };

    generateMatrixRain();
    const interval = setInterval(generateMatrixRain, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-card">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-10">
        {matrixRain.map((char, index) => (
          <motion.div
            key={index}
            className="absolute text-primary font-mono text-sm"
            style={{
              left: `${(index * 20)}px`,
              top: `-20px`,
            }}
            animate={{
              y: [0, window.innerHeight + 40],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {char}
          </motion.div>
        ))}
      </div>

      {/* Floating Code Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-accent font-mono text-xs opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {['{', '}', '<', '>', '/', '=', ';', '(', ')', '[', ']'][Math.floor(Math.random() * 11)]}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            {/* Holographic Avatar */}
            <motion.div
              className="relative mx-auto mb-8 w-48 h-48"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-20 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full border-2 border-primary holographic"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODg2Njg0Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Alex Johnson - Full Stack Developer"
                className="w-full h-full rounded-full object-cover border-4 border-primary/50 relative z-10"
              />
              
              {/* Orbiting Icons */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                  <Terminal className="w-6 h-6 text-accent" />
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
              </motion.div>
            </motion.div>

            {/* Terminal-style Introduction */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mb-8"
            >
              <div className="code-block p-6 max-w-2xl mx-auto">
                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                  <Terminal className="w-4 h-4" />
                  <span>portfolio.exe --initialize</span>
                </div>
                <div className="font-mono text-left space-y-2">
                  <div className="text-accent">
                    <span className="text-muted-foreground">01</span> | class <span className="text-primary">Developer</span> {"{"}
                  </div>
                  <div className="text-accent ml-4">
                    <span className="text-muted-foreground">02</span> |   name: <span className="text-yellow-400">"Alex Johnson"</span>;
                  </div>
                  <div className="text-accent ml-4">
                    <span className="text-muted-foreground">03</span> |   role: <span className="text-yellow-400">"Senior Full-Stack Developer"</span>;
                  </div>
                  <div className="text-accent ml-4">
                    <span className="text-muted-foreground">04</span> |   location: <span className="text-yellow-400">"San Francisco, CA"</span>;
                  </div>
                  <div className="text-accent ml-4">
                    <span className="text-muted-foreground">05</span> |   passion: <span className="text-yellow-400">"Building the future with code"</span>;
                  </div>
                  <div className="text-accent">
                    <span className="text-muted-foreground">06</span> | {"}"}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Dynamic Code Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mb-8"
            >
              <div className="bg-muted/20 border border-primary/30 rounded p-4 max-w-lg mx-auto">
                <div className="font-mono text-sm">
                  <span className="text-muted-foreground">$ </span>
                  <span className="text-primary">{displayText}</span>
                  <span className="terminal-cursor"></span>
                </div>
              </div>
            </motion.div>

            {/* Tech Stack Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, boxShadow: "0 0 20px currentColor" }}
                >
                  <Badge variant="outline" className="neon-glow border-primary text-primary hover:bg-primary hover:text-background transition-all">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00ff41" }} whileTap={{ scale: 0.95 }}>
                <Button className="neon-glow bg-primary text-background hover:bg-primary/90">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00ffff" }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="neon-glow border-accent text-accent hover:bg-accent hover:text-background">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, boxShadow: "0 0 20px #ff006e" }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="neon-glow border-accent text-accent hover:bg-accent hover:text-background">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-primary text-sm font-mono">
          <div className="mb-2 text-center">scroll_down()</div>
          <div className="text-2xl text-center">↓</div>
        </div>
      </motion.div>
    </section>
  );
}