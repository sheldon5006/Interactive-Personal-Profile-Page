import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Code2, Coffee, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { StoryChapter } from "./StoryChapter";

const personalData = {
  name: "Alex Johnson",
  version: "8.0.0",
  status: "Active Development",
  lastUpdated: "2024-09-26",
  dependencies: ["coffee", "curiosity", "creativity", "collaboration"],
  features: [
    "Full-stack architecture",
    "Scalable solutions",
    "Team leadership",
    "Innovation mindset"
  ],
  stats: {
    projectsCompleted: 50,
    linesOfCode: 250000,
    coffeeCups: 5847,
    debugSessions: 1247
  }
};

const codeSnippet = `{
  "developer": {
    "name": "${personalData.name}",
    "passion": "Building digital experiences",
    "philosophy": "Code is poetry in motion",
    "approach": "User-first, performance-driven",
    "motto": "Always learning, always growing"
  }
}`;

export function CodeAboutSection() {
  const [activeTab, setActiveTab] = useState("overview");
  const [typedCode, setTypedCode] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing animation for code snippet
  useEffect(() => {
    if (currentIndex < codeSnippet.length) {
      const timer = setTimeout(() => {
        setTypedCode(codeSnippet.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const tabs = [
    { id: "overview", label: "package.json", icon: Code2 },
    { id: "stats", label: "analytics.js", icon: Lightbulb },
    { id: "philosophy", label: "README.md", icon: Coffee },
  ];

  return (
    <StoryChapter
      chapter="01"
      title="System.initialize()"
      subtitle="Loading developer profile and core modules..."
      className="bg-gradient-to-br from-background to-muted/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Interactive Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="code-block h-full">
              <CardContent className="p-0">
                {/* Editor Header */}
                <div className="bg-muted/50 px-4 py-2 flex items-center gap-3 border-b border-primary/30">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <div className="flex gap-2">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-1 px-3 py-1 text-xs rounded-t transition-colors ${
                          activeTab === tab.id
                            ? 'bg-background text-primary border-t border-l border-r border-primary'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <tab.icon className="w-3 h-3" />
                        <span>{tab.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Editor Content */}
                <div className="p-6 font-mono text-sm min-h-[400px]">
                  {activeTab === "overview" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <pre className="text-accent whitespace-pre-wrap">
                        <span className="text-muted-foreground">1  </span>{typedCode}
                        <span className="terminal-cursor"></span>
                      </pre>
                    </motion.div>
                  )}

                  {activeTab === "stats" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-3"
                    >
                      <div className="text-accent">
                        <span className="text-muted-foreground">1  </span>
                        <span className="text-primary">const</span> stats = {"{"}
                      </div>
                      {Object.entries(personalData.stats).map(([key, value], index) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-accent ml-4"
                        >
                          <span className="text-muted-foreground">{index + 2}  </span>
                          <span className="text-yellow-400">{key}</span>: 
                          <span className="text-primary"> {value.toLocaleString()}</span>,
                        </motion.div>
                      ))}
                      <div className="text-accent">
                        <span className="text-muted-foreground">{Object.keys(personalData.stats).length + 2}  </span>
                        {"}"};
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "philosophy" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4"
                    >
                      <div className="text-primary">
                        <span className="text-muted-foreground">1  </span>
                        # Developer Philosophy
                      </div>
                      <div className="text-muted-foreground">
                        <span className="text-muted-foreground">2  </span>
                      </div>
                      <div className="text-foreground">
                        <span className="text-muted-foreground">3  </span>
                        I believe in writing code that tells a story—clean,
                      </div>
                      <div className="text-foreground">
                        <span className="text-muted-foreground">4  </span>
                        maintainable, and purposeful. Every line should serve
                      </div>
                      <div className="text-foreground">
                        <span className="text-muted-foreground">5  </span>
                        the user and contribute to something greater.
                      </div>
                      <div className="text-muted-foreground">
                        <span className="text-muted-foreground">6  </span>
                      </div>
                      <div className="text-accent">
                        <span className="text-muted-foreground">7  </span>
                        &gt; "The best code is the code that doesn't need comments"
                      </div>
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Interactive Stats Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* System Status */}
            <Card className="code-block">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-mono text-primary">SYSTEM ONLINE</span>
                </div>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Version:</span>
                    <span className="text-primary">{personalData.version}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="text-accent">{personalData.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Update:</span>
                    <span className="text-yellow-400">{personalData.lastUpdated}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature Matrix */}
            <Card className="code-block">
              <CardContent className="p-6">
                <h3 className="mb-4 text-primary">Core Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {personalData.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-muted/30 p-3 rounded border border-primary/20 hover:border-primary/50 transition-colors"
                    >
                      <div className="text-xs text-accent mb-1">MODULE {index + 1}</div>
                      <div className="text-sm">{feature}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Dependencies */}
            <Card className="code-block">
              <CardContent className="p-6">
                <h3 className="mb-4 text-primary">Dependencies</h3>
                <div className="space-y-2">
                  {personalData.dependencies.map((dep, index) => (
                    <motion.div
                      key={dep}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 font-mono text-sm"
                    >
                      <span className="text-muted-foreground">└─</span>
                      <span className="text-accent">{dep}</span>
                      <span className="text-primary">^latest</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Code2, label: "Projects", value: personalData.stats.projectsCompleted, color: "text-primary" },
                { icon: Coffee, label: "Coffee", value: personalData.stats.coffeeCups, color: "text-accent" },
              ].map((metric, index) => (
                <Card key={metric.label} className="code-block">
                  <CardContent className="p-4 text-center">
                    <metric.icon className={`w-8 h-8 mx-auto mb-2 ${metric.color}`} />
                    <div className={`text-2xl font-mono ${metric.color}`}>
                      {metric.value.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </StoryChapter>
  );
}