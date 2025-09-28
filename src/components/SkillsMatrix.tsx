import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { StoryChapter } from "./StoryChapter";
import { Terminal, Database, Cloud, Smartphone, Globe, Zap } from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Globe,
    color: "text-primary",
    skills: [
      { name: "React/Next.js", level: 95, experience: "5 years" },
      { name: "TypeScript", level: 90, experience: "4 years" },
      { name: "Vue.js", level: 85, experience: "3 years" },
      { name: "Tailwind CSS", level: 92, experience: "3 years" },
    ]
  },
  {
    id: "backend",
    name: "Backend",
    icon: Database,
    color: "text-accent",
    skills: [
      { name: "Node.js", level: 88, experience: "4 years" },
      { name: "Python", level: 85, experience: "3 years" },
      { name: "PostgreSQL", level: 82, experience: "4 years" },
      { name: "GraphQL", level: 78, experience: "2 years" },
    ]
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: Cloud,
    color: "text-secondary",
    skills: [
      { name: "AWS", level: 82, experience: "3 years" },
      { name: "Docker", level: 80, experience: "3 years" },
      { name: "Kubernetes", level: 75, experience: "2 years" },
      { name: "CI/CD", level: 85, experience: "4 years" },
    ]
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: Smartphone,
    color: "text-yellow-400",
    skills: [
      { name: "React Native", level: 80, experience: "2 years" },
      { name: "Flutter", level: 70, experience: "1 year" },
      { name: "PWA", level: 88, experience: "3 years" },
      { name: "Responsive Design", level: 95, experience: "5 years" },
    ]
  }
];

const tools = [
  "VS Code", "Git", "GitHub", "Jira", "Figma", "Postman", 
  "Jest", "Cypress", "Webpack", "Vite", "ESLint", "Prettier"
];

export function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: number}>({});

  useEffect(() => {
    const category = skillCategories.find(cat => cat.id === activeCategory);
    if (category) {
      const newAnimatedSkills: {[key: string]: number} = {};
      category.skills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => ({
            ...prev,
            [skill.name]: skill.level
          }));
        }, index * 200);
      });
    }
  }, [activeCategory]);

  const generateSkillCode = (category: any) => {
    return `class ${category.name.replace(/\s/g, '')}Skills {
  constructor() {
${category.skills.map((skill: any) => `    this.${skill.name.replace(/[^a-zA-Z]/g, '').toLowerCase()} = ${skill.level}%;`).join('\n')}
  }
  
  getExpertise() {
    return "Advanced level proficiency";
  }
}`;
  };

  return (
    <StoryChapter
      chapter="02"
      title="import { skills } from './expertise'"
      subtitle="A comprehensive analysis of technical capabilities and development tools"
      className="bg-gradient-to-br from-muted/10 to-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Skill Category Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 p-4 rounded-lg border transition-all ${
                activeCategory === category.id
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-primary/30 hover:border-primary/50 text-muted-foreground hover:text-foreground'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className={`w-5 h-5 ${category.color}`} />
              <span className="font-mono text-sm">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Interactive Code Display */}
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
                  <span className="font-mono text-sm text-muted-foreground">
                    skills/{activeCategory}.js
                  </span>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-sm min-h-[400px]">
                  <motion.pre
                    key={activeCategory}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-accent whitespace-pre-wrap"
                  >
                    {generateSkillCode(skillCategories.find(cat => cat.id === activeCategory))}
                  </motion.pre>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Active Category Skills */}
            <Card className="code-block">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  {(() => {
                    const category = skillCategories.find(cat => cat.id === activeCategory);
                    if (category?.icon) {
                      const IconComponent = category.icon;
                      return <IconComponent className={`w-6 h-6 ${category.color}`} />;
                    }
                    return null;
                  })()}
                  <h3 className="text-primary">
                    {skillCategories.find(cat => cat.id === activeCategory)?.name} Proficiency
                  </h3>
                </div>

                <div className="space-y-6">
                  {skillCategories.find(cat => cat.id === activeCategory)?.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {skill.experience}
                          </Badge>
                          <span className="text-xs text-muted-foreground font-mono">
                            {animatedSkills[skill.name] || 0}%
                          </span>
                        </div>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={animatedSkills[skill.name] || 0} 
                          className="h-2"
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full opacity-50"
                          animate={{
                            x: [0, 5, 0],
                            opacity: [0.3, 0.7, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools & Technologies */}
            <Card className="code-block">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-primary">Development Tools</h3>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {tools.map((tool, index) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 15px currentColor" 
                      }}
                      className="text-center"
                    >
                      <Badge 
                        variant="secondary" 
                        className="w-full justify-center py-2 border border-primary/20 hover:border-primary/50 transition-colors cursor-pointer"
                      >
                        {tool}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skill Summary */}
            <Card className="code-block">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-mono text-primary mb-1">8+</div>
                    <div className="text-xs text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-mono text-accent mb-1">15+</div>
                    <div className="text-xs text-muted-foreground">Technologies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-mono text-secondary mb-1">50+</div>
                    <div className="text-xs text-muted-foreground">Projects Built</div>
                  </div>
                  <div>
                    <div className="text-2xl font-mono text-yellow-400 mb-1">∞</div>
                    <div className="text-xs text-muted-foreground">Learning Mode</div>
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