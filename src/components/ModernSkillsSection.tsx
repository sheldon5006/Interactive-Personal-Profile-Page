import { motion } from "motion/react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { 
  Globe, 
  Server, 
  Database, 
  Smartphone, 
  Cloud, 
  Palette,
  Code2,
  Layers
} from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Globe,
    color: "text-blue-500",
    skills: [
      { name: "React & Next.js", level: 95, experience: "5 years" },
      { name: "TypeScript", level: 90, experience: "4 years" },
      { name: "Vue.js", level: 85, experience: "3 years" },
      { name: "Tailwind CSS", level: 92, experience: "3 years" },
    ]
  },
  {
    id: "backend",
    name: "Backend",
    icon: Server,
    color: "text-green-500",
    skills: [
      { name: "Node.js", level: 88, experience: "4 years" },
      { name: "Python", level: 85, experience: "3 years" },
      { name: "GraphQL", level: 82, experience: "2 years" },
      { name: "REST APIs", level: 95, experience: "5 years" },
    ]
  },
  {
    id: "database",
    name: "Database",
    icon: Database,
    color: "text-purple-500",
    skills: [
      { name: "PostgreSQL", level: 85, experience: "4 years" },
      { name: "MongoDB", level: 80, experience: "3 years" },
      { name: "Redis", level: 75, experience: "2 years" },
      { name: "Prisma ORM", level: 88, experience: "2 years" },
    ]
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: Cloud,
    color: "text-orange-500",
    skills: [
      { name: "AWS", level: 82, experience: "3 years" },
      { name: "Docker", level: 80, experience: "3 years" },
      { name: "CI/CD", level: 85, experience: "4 years" },
      { name: "Kubernetes", level: 70, experience: "1 year" },
    ]
  },
];

const tools = [
  { name: "VS Code", category: "Editor" },
  { name: "Git", category: "Version Control" },
  { name: "Figma", category: "Design" },
  { name: "Postman", category: "API Testing" },
  { name: "Jest", category: "Testing" },
  { name: "Cypress", category: "E2E Testing" },
  { name: "Webpack", category: "Build Tools" },
  { name: "Vite", category: "Build Tools" },
];

export function ModernSkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const activeSkills = skillCategories.find(cat => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and the tools I use 
              to bring ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Category Selector */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="font-semibold mb-4">Categories</h3>
              {skillCategories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-primary text-primary-foreground shadow-lg tech-glow'
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <div>
                    <div className="font-medium">{category.name}</div>
                    <div className={`text-sm ${
                      activeCategory === category.id ? 'text-primary-foreground/80' : 'text-muted-foreground'
                    }`}>
                      {category.skills.length} skills
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* Skills Display */}
            <div className="lg:col-span-2 space-y-6">
              {/* Active Category Header */}
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="interactive">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      {(() => {
                        const category = skillCategories.find(cat => cat.id === activeCategory);
                        if (category) {
                          const IconComponent = category.icon;
                          return (
                            <>
                              <IconComponent className={`w-6 h-6 ${category.color}`} />
                              <h3 className="text-xl font-semibold">{category.name} Skills</h3>
                            </>
                          );
                        }
                        return null;
                      })()}
                    </div>

                    <div className="space-y-6">
                      {activeSkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{skill.name}</span>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">
                                {skill.experience}
                              </Badge>
                              <span className="text-sm text-muted-foreground">
                                {skill.level}%
                              </span>
                            </div>
                          </div>
                          <Progress 
                            value={skill.level} 
                            className="h-2"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Tools & Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="interactive">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Code2 className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-semibold">Tools & Technologies</h3>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {tools.map((tool, index) => (
                        <motion.div
                          key={tool.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ 
                            scale: 1.05,
                            y: -2
                          }}
                          className="p-3 bg-secondary rounded-lg text-center hover:bg-secondary/80 transition-all cursor-default"
                        >
                          <div className="font-medium text-sm">{tool.name}</div>
                          <div className="text-xs text-muted-foreground mt-1">{tool.category}</div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Skill Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="interactive">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary mb-1">8+</div>
                        <div className="text-sm text-muted-foreground">Years Experience</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary mb-1">20+</div>
                        <div className="text-sm text-muted-foreground">Technologies</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary mb-1">50+</div>
                        <div className="text-sm text-muted-foreground">Projects Built</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary mb-1">∞</div>
                        <div className="text-sm text-muted-foreground">Learning Mode</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}