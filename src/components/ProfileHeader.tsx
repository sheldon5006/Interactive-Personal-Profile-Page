import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, Calendar, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useState } from "react";

export function ProfileHeader() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/20 py-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Magical floating orbs */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 40 - 20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Sparkling stars */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Gradient waves */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          style={{
            backgroundSize: '200% 200%',
          }}
        />
        
        {/* Interactive cursor trail */}
        <motion.div
          className="absolute w-32 h-32 bg-gradient-radial from-cyan-400/20 to-transparent rounded-full pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-[rgba(0,0,0,0)]">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative"
          >
            <Avatar className="w-48 h-48 border-4 border-background shadow-2xl">
              <AvatarImage 
                src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODg2Njg0Mnww&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Alex Johnson" 
              />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
            <motion.div
              className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-4 h-4" />
            </motion.div>
          </motion.div>

          {/* Profile Info */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h1 className="mb-2">Alex Johnson</h1>
              <h2 className="text-muted-foreground mb-4">Senior Full-Stack Developer</h2>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">San Francisco, CA</span>
              </div>

              <p className="mb-6 max-w-2xl">
                Passionate developer with 8+ years of experience building scalable web applications. 
                I love creating beautiful, functional solutions that make a real impact.
              </p>

              <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">AWS</Badge>
              </div>

              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button size="sm" variant="outline">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button size="sm">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Dark Mode Toggle */}
          <motion.div
            className="absolute top-6 right-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" size="sm" onClick={toggleDarkMode}>
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}