import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Terminal, 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  Coffee,
  Heart,
  Zap,
  ChevronUp,
  Cpu
} from "lucide-react";

const footerStats = [
  { label: "Lines of Code", value: "250K+", icon: Code },
  { label: "Coffee Consumed", value: "5.8K", icon: Coffee },
  { label: "Projects Built", value: "50+", icon: Zap },
  { label: "Years Coding", value: "8+", icon: Cpu },
];

const networkNodes = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 2,
}));

export function CyberpunkFooter() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemUptime, setSystemUptime] = useState("2,847 days");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-card/20 overflow-hidden">
      {/* Network Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          {networkNodes.map((node, index) => (
            <g key={node.id}>
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="2"
                fill="#00ff41"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: node.delay,
                }}
              />
              {index < networkNodes.length - 1 && (
                <motion.line
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${networkNodes[index + 1].x}%`}
                  y2={`${networkNodes[index + 1].y}%`}
                  stroke="#00ff41"
                  strokeWidth="0.5"
                  opacity="0.2"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: node.delay,
                  }}
                />
              )}
            </g>
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16"
        >
          <div className="grid lg:grid-cols-3 gap-12">
            {/* System Information */}
            <div className="space-y-6">
              <Card className="code-block">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Terminal className="w-5 h-5 text-primary" />
                    <h3 className="text-primary">System Info</h3>
                  </div>
                  
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Developer:</span>
                      <span className="text-primary">Alex Johnson v8.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <span className="text-accent">ACTIVE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Uptime:</span>
                      <span className="text-secondary">{systemUptime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="text-yellow-400">SF, CA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Local Time:</span>
                      <span className="text-foreground">{currentTime.toLocaleTimeString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Performance Metrics */}
              <Card className="code-block">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="w-5 h-5 text-accent" />
                    <h3 className="text-primary">Performance Metrics</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {footerStats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center"
                      >
                        <stat.icon className={`w-6 h-6 mx-auto mb-2 ${
                          index % 4 === 0 ? 'text-primary' :
                          index % 4 === 1 ? 'text-accent' :
                          index % 4 === 2 ? 'text-secondary' : 'text-yellow-400'
                        }`} />
                        <div className={`text-lg font-mono mb-1 ${
                          index % 4 === 0 ? 'text-primary' :
                          index % 4 === 1 ? 'text-accent' :
                          index % 4 === 2 ? 'text-secondary' : 'text-yellow-400'
                        }`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Navigation Matrix */}
            <div className="space-y-6">
              <Card className="code-block">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="w-5 h-5 text-secondary" />
                    <h3 className="text-primary">Navigation Matrix</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 font-mono text-sm">
                    {[
                      { label: "./about", section: "#about" },
                      { label: "./skills", section: "#skills" },
                      { label: "./experience", section: "#experience" },
                      { label: "./projects", section: "#projects" },
                      { label: "./contact", section: "#contact" },
                      { label: "./resume.pdf", section: "#" },
                    ].map((nav, index) => (
                      <motion.button
                        key={nav.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 5, color: "#00ff41" }}
                        onClick={() => {
                          const element = document.querySelector(nav.section);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="text-left text-muted-foreground hover:text-primary transition-colors p-2 rounded border border-transparent hover:border-primary/30"
                      >
                        <span className="text-accent">&gt;</span> {nav.label}
                      </motion.button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="code-block">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <h3 className="text-primary">Quick Actions</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        variant="outline" 
                        className="w-full justify-start neon-glow border-primary/50 hover:border-primary"
                        onClick={() => window.open('mailto:alex.johnson@email.com')}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        variant="outline" 
                        className="w-full justify-start neon-glow border-accent/50 hover:border-accent"
                      >
                        <Terminal className="w-4 h-4 mr-2" />
                        Schedule Call
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Network */}
            <div className="space-y-6">
              <Card className="code-block">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-5 h-5 grid grid-cols-2 gap-px">
                      <div className="bg-primary rounded-sm"></div>
                      <div className="bg-accent rounded-sm"></div>
                      <div className="bg-secondary rounded-sm"></div>
                      <div className="bg-yellow-400 rounded-sm"></div>
                    </div>
                    <h3 className="text-primary">Social Network</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { 
                        platform: "GitHub", 
                        handle: "@alexjohnson", 
                        status: "42 repos",
                        icon: Github,
                        color: "text-primary"
                      },
                      { 
                        platform: "LinkedIn", 
                        handle: "/in/alexjohnson-dev", 
                        status: "500+ connections",
                        icon: Linkedin,
                        color: "text-accent"
                      },
                      { 
                        platform: "Email", 
                        handle: "alex.johnson@email.com", 
                        status: "Always open",
                        icon: Mail,
                        color: "text-secondary"
                      },
                    ].map((social, index) => (
                      <motion.div
                        key={social.platform}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 p-3 rounded border border-primary/20 hover:border-primary/50 transition-all cursor-pointer"
                      >
                        <social.icon className={`w-5 h-5 ${social.color}`} />
                        <div className="flex-1">
                          <div className="text-sm font-mono">{social.platform}</div>
                          <div className="text-xs text-muted-foreground">{social.handle}</div>
                        </div>
                        <div className="text-xs text-accent">{social.status}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Scroll to Top */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={scrollToTop}
                  className="w-full neon-glow bg-primary hover:bg-primary/90"
                >
                  <ChevronUp className="w-4 h-4 mr-2" />
                  Back to Top
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Copyright Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-primary/20 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <span>© 2024 Alex Johnson</span>
              <span className="text-primary">•</span>
              <span>Built with</span>
              <Heart className="w-4 h-4 text-destructive fill-current" />
              <span>and lots of</span>
              <Coffee className="w-4 h-4 text-yellow-400" />
            </div>
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
              <span>Version 2.0.1</span>
              <span className="text-primary">•</span>
              <span>Last deployed: {new Date().toLocaleDateString()}</span>
              <span className="text-primary">•</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Online</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}