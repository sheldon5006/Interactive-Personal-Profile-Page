import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { StoryChapter } from "./StoryChapter";
import { 
  Terminal, 
  Send, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  MapPin,
  Phone,
  Globe,
  Calendar
} from "lucide-react";

const contactCommands = [
  "connect --github",
  "message --compose",
  "schedule --meeting",
  "download --resume",
  "ping --social"
];

const socialLinks = [
  { 
    platform: "GitHub", 
    username: "@alexjohnson", 
    url: "https://github.com/alexjohnson",
    icon: Github,
    color: "text-primary",
    command: "git clone https://github.com/alexjohnson"
  },
  { 
    platform: "LinkedIn", 
    username: "/in/alexjohnson-dev", 
    url: "https://linkedin.com/in/alexjohnson-dev",
    icon: Linkedin,
    color: "text-accent",
    command: "curl -X GET linkedin.com/in/alexjohnson-dev"
  },
  { 
    platform: "Email", 
    username: "alex.johnson@email.com", 
    url: "mailto:alex.johnson@email.com",
    icon: Mail,
    color: "text-secondary",
    command: "sendmail alex.johnson@email.com"
  },
  { 
    platform: "Portfolio", 
    username: "alexjohnsondev.com", 
    url: "https://alexjohnsondev.com",
    icon: Globe,
    color: "text-yellow-400",
    command: "wget https://alexjohnsondev.com"
  }
];

export function TerminalContact() {
  const [terminalHistory, setTerminalHistory] = useState<Array<{command: string, output: string, timestamp: string}>>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [showForm, setShowForm] = useState(false);

  // Initialize terminal with welcome message
  useEffect(() => {
    const welcomeMessage = {
      command: "welcome",
      output: `Welcome to Alex Johnson's Contact Terminal v2.0.1
System initialized successfully. Type 'help' for available commands.
Ready to establish connection...`,
      timestamp: new Date().toLocaleTimeString()
    };
    setTerminalHistory([welcomeMessage]);
  }, []);

  const executeCommand = (cmd: string) => {
    const timestamp = new Date().toLocaleTimeString();
    let output = "";

    switch (cmd.toLowerCase().trim()) {
      case "help":
        output = `Available commands:
• help          - Show this help message
• about         - Display contact information
• connect       - Show social media links
• message       - Open contact form
• clear         - Clear terminal history
• whoami       - Display current user info
• status       - Show availability status`;
        break;
      
      case "about":
        output = `Alex Johnson - Senior Full-Stack Developer
Location: San Francisco, CA
Email: alex.johnson@email.com
Phone: +1 (555) 123-4567
Website: https://alexjohnsondev.com
Status: Available for new opportunities`;
        break;
      
      case "connect":
        output = `Social connections established:
${socialLinks.map(link => `• ${link.platform}: ${link.username}`).join('\n')}

Use 'open [platform]' to visit links.`;
        break;
      
      case "message":
        output = "Opening contact form interface...";
        setShowForm(true);
        break;
      
      case "clear":
        setTerminalHistory([]);
        return;
      
      case "whoami":
        output = `guest@alexjohnson-portfolio:~$ id
uid=1000(visitor) gid=1000(visitor) groups=1000(visitor),interested(developers)`;
        break;
      
      case "status":
        output = `System Status: ONLINE ✓
Availability: OPEN TO OPPORTUNITIES ✓
Response Time: less than 24 hours ✓
Coffee Level: [████████░░] 80%
Enthusiasm: [██████████] 100%`;
        break;
      
      case "ls":
        output = `contact-methods/    social-links/    resume.pdf    portfolio/`;
        break;
      
      default:
        if (cmd.startsWith("open ")) {
          const platform = cmd.split(" ")[1];
          const link = socialLinks.find(l => l.platform.toLowerCase() === platform?.toLowerCase());
          if (link) {
            output = `Opening ${link.platform}... -> ${link.url}`;
            // In a real app, you'd open the link
          } else {
            output = `Error: Platform '${platform}' not found. Try: ${socialLinks.map(l => l.platform.toLowerCase()).join(', ')}`;
          }
        } else {
          output = `Command '${cmd}' not found. Type 'help' for available commands.`;
        }
    }

    setTerminalHistory(prev => [...prev, {
      command: cmd,
      output,
      timestamp
    }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const output = `Message queued for transmission:
From: ${formData.name} <${formData.email}>
Subject: ${formData.subject}
Status: SENT ✓

Thank you for your message! I'll respond within 24 hours.`;
    
    setTerminalHistory(prev => [...prev, {
      command: "send-message",
      output,
      timestamp: new Date().toLocaleTimeString()
    }]);
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setShowForm(false);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentCommand.trim()) {
      executeCommand(currentCommand);
      setCurrentCommand("");
    }
  };

  return (
    <StoryChapter
      chapter="05"
      title="./contact.sh --interactive"
      subtitle="Initialize connection protocols and establish communication channels"
      className="bg-gradient-to-br from-background to-muted/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Interactive Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="code-block h-full">
              <CardContent className="p-0">
                {/* Terminal Header */}
                <div className="bg-muted/50 px-4 py-3 flex items-center gap-3 border-b border-primary/30">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <Terminal className="w-4 h-4 text-muted-foreground" />
                  <span className="font-mono text-sm text-muted-foreground flex-1">
                    alex@contact-terminal:~$
                  </span>
                  <div className="text-xs text-muted-foreground">
                    {new Date().toLocaleDateString()}
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 min-h-[500px] max-h-[500px] overflow-y-auto font-mono text-sm">
                  {/* Terminal History */}
                  <div className="space-y-4 mb-4">
                    {terminalHistory.map((entry, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {entry.command !== "welcome" && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <span className="text-primary">guest@alexjohnson:~$</span>
                            <span>{entry.command}</span>
                            <span className="text-xs ml-auto">{entry.timestamp}</span>
                          </div>
                        )}
                        <div className="text-accent whitespace-pre-line ml-0 mt-1">
                          {entry.output}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Command Input */}
                  <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2">
                    <span className="text-primary">guest@alexjohnson:~$</span>
                    <input
                      type="text"
                      value={currentCommand}
                      onChange={(e) => setCurrentCommand(e.target.value)}
                      className="flex-1 bg-transparent border-none outline-none text-foreground"
                      placeholder="Type a command..."
                      autoFocus
                    />
                    <span className="terminal-cursor"></span>
                  </form>

                  {/* Quick Commands */}
                  <div className="mt-6 pt-4 border-t border-primary/20">
                    <div className="text-xs text-muted-foreground mb-2">Quick Commands:</div>
                    <div className="flex flex-wrap gap-2">
                      {contactCommands.map((cmd) => (
                        <button
                          key={cmd}
                          onClick={() => {
                            setCurrentCommand(cmd);
                            executeCommand(cmd);
                          }}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded border border-primary/30 hover:bg-primary/20 transition-colors"
                        >
                          {cmd}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Social Links */}
            <Card className="code-block">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-5 h-5 text-primary" />
                  <h3 className="text-primary">Connection Endpoints</h3>
                </div>

                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={link.platform}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      <div className="flex items-center gap-4 p-3 rounded border border-primary/20 hover:border-primary/50 transition-all bg-muted/10">
                        <link.icon className={`w-5 h-5 ${link.color}`} />
                        <div className="flex-1">
                          <div className="text-sm font-mono">{link.platform}</div>
                          <div className="text-xs text-muted-foreground">{link.username}</div>
                        </div>
                        <div className="text-xs text-muted-foreground font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                          {link.command}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="code-block">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Send className="w-5 h-5 text-accent" />
                  <h3 className="text-primary">Direct Message Interface</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-muted-foreground mb-2 font-mono">
                        NAME:
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full p-3 bg-background border border-primary/30 rounded font-mono text-sm focus:border-primary focus:outline-none"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-muted-foreground mb-2 font-mono">
                        EMAIL:
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full p-3 bg-background border border-primary/30 rounded font-mono text-sm focus:border-primary focus:outline-none"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-muted-foreground mb-2 font-mono">
                      SUBJECT:
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full p-3 bg-background border border-primary/30 rounded font-mono text-sm focus:border-primary focus:outline-none"
                      placeholder="Message subject"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-muted-foreground mb-2 font-mono">
                      MESSAGE:
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full p-3 bg-background border border-primary/30 rounded font-mono text-sm focus:border-primary focus:outline-none min-h-[120px]"
                      placeholder="Tell me about your project or just say hello!"
                      required
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button type="submit" className="w-full neon-glow bg-primary hover:bg-primary/90">
                      <Send className="w-4 h-4 mr-2" />
                      TRANSMIT MESSAGE
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card className="code-block">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <h3 className="text-primary">System Status</h3>
                </div>

                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="text-primary">&lt; 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Availability:</span>
                    <span className="text-accent">OPEN TO WORK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time Zone:</span>
                    <span className="text-secondary">PST (UTC-8)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Preferred Contact:</span>
                    <span className="text-yellow-400">EMAIL</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </StoryChapter>
  );
}