import { motion } from "motion/react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { StoryChapter } from "./StoryChapter";
import { GitBranch, GitCommit, GitMerge, MapPin, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    id: "commit-1",
    company: "TechCorp Inc.",
    role: "Senior Full-Stack Developer",
    period: "2022 - Present",
    location: "San Francisco, CA",
    type: "feature",
    description: "Leading development of microservices architecture serving 100K+ users",
    commits: [
      "feat: Built scalable REST APIs with 99.9% uptime",
      "refactor: Optimized database queries reducing response time by 40%",
      "feature: Implemented real-time chat system using WebSockets",
      "deploy: Set up CI/CD pipeline reducing deployment time by 60%"
    ],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker", "Kubernetes"],
    achievements: [
      "Led team of 5 developers",
      "Reduced system downtime by 75%",
      "Mentored 3 junior developers"
    ]
  },
  {
    id: "commit-2",
    company: "StartupXYZ",
    role: "Frontend Developer",
    period: "2020 - 2022",
    location: "Remote",
    type: "enhancement",
    description: "Built responsive web applications improving user engagement by 40%",
    commits: [
      "feat: Developed component library used across 5 products",
      "performance: Optimized bundle size reducing load time by 50%",
      "ui: Implemented pixel-perfect designs from Figma mockups",
      "test: Achieved 90% code coverage with Jest and Cypress"
    ],
    technologies: ["React", "Vue.js", "TypeScript", "SCSS", "Webpack", "Jest"],
    achievements: [
      "Improved Core Web Vitals by 60%",
      "Built reusable component library",
      "Collaborated with design team on UX improvements"
    ]
  },
  {
    id: "commit-3",
    company: "WebSolutions Ltd",
    role: "Junior Developer",
    period: "2018 - 2020",
    location: "New York, NY",
    type: "fix",
    description: "Maintained client websites and learned full-stack development fundamentals",
    commits: [
      "fix: Resolved critical security vulnerabilities",
      "feature: Built custom CMS for client management",
      "optimization: Improved SEO metrics across 20+ websites",
      "maintenance: Updated legacy codebases to modern standards"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress"],
    achievements: [
      "Maintained 20+ client websites",
      "Learned agile development practices",
      "Contributed to team code reviews"
    ]
  },
  {
    id: "commit-4",
    company: "Digital Agency",
    role: "Frontend Intern",
    period: "2017 - 2018",
    location: "Boston, MA",
    type: "initial",
    description: "First step into professional development, contributing to team projects",
    commits: [
      "init: Set up development environment and learned Git workflow",
      "feature: Built responsive landing pages for client campaigns",
      "collaboration: Participated in daily standups and sprint planning",
      "learning: Completed online courses in modern web development"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Git"],
    achievements: [
      "Completed first professional project",
      "Learned version control with Git",
      "Contributed to 10+ client projects"
    ]
  }
];

export function GitTimelineExperience() {
  const [selectedCommit, setSelectedCommit] = useState<string | null>(null);
  const [hoveredCommit, setHoveredCommit] = useState<string | null>(null);

  const getCommitTypeColor = (type: string) => {
    switch (type) {
      case "feature": return "text-primary";
      case "enhancement": return "text-accent";
      case "fix": return "text-yellow-400";
      case "initial": return "text-secondary";
      default: return "text-muted-foreground";
    }
  };

  const getCommitTypeIcon = (type: string) => {
    switch (type) {
      case "feature": return GitBranch;
      case "enhancement": return GitMerge;
      case "fix": return GitCommit;
      case "initial": return GitCommit;
      default: return GitCommit;
    }
  };

  return (
    <StoryChapter
      chapter="03"
      title="git log --graph --oneline"
      subtitle="Tracking the evolution of a developer through commit history and project milestones"
      className="bg-gradient-to-br from-background to-card/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Git Graph Timeline */}
          <div className="lg:col-span-2">
            <Card className="code-block">
              <CardContent className="p-0">
                {/* Terminal Header */}
                <div className="bg-muted/50 px-4 py-3 flex items-center gap-3 border-b border-primary/30">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <GitBranch className="w-4 h-4 text-muted-foreground" />
                  <span className="font-mono text-sm text-muted-foreground">
                    alex@career:main$ git log --graph
                  </span>
                </div>

                {/* Git Timeline */}
                <div className="p-6">
                  <div className="relative">
                    {/* Main branch line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />

                    <div className="space-y-8">
                      {experiences.map((exp, index) => {
                        const CommitIcon = getCommitTypeIcon(exp.type);
                        const isSelected = selectedCommit === exp.id;
                        const isHovered = hoveredCommit === exp.id;

                        return (
                          <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative"
                            onMouseEnter={() => setHoveredCommit(exp.id)}
                            onMouseLeave={() => setHoveredCommit(null)}
                            onClick={() => setSelectedCommit(isSelected ? null : exp.id)}
                          >
                            {/* Commit node */}
                            <motion.div
                              className={`absolute left-6 w-4 h-4 rounded-full border-2 bg-background z-10 cursor-pointer ${
                                isHovered || isSelected ? 'border-primary' : 'border-primary/50'
                              }`}
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <CommitIcon className={`w-2 h-2 ${getCommitTypeColor(exp.type)} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`} />
                            </motion.div>

                            {/* Commit info */}
                            <div className="ml-16 cursor-pointer">
                              <motion.div
                                className={`border rounded-lg p-4 transition-all ${
                                  isHovered || isSelected 
                                    ? 'border-primary bg-primary/5' 
                                    : 'border-primary/20 hover:border-primary/40'
                                }`}
                                whileHover={{ y: -2 }}
                              >
                                <div className="flex items-start justify-between mb-2">
                                  <div>
                                    <h4 className="text-primary mb-1">{exp.role}</h4>
                                    <p className="text-accent text-sm font-mono">{exp.company}</p>
                                  </div>
                                  <div className="text-right text-xs text-muted-foreground">
                                    <div className="flex items-center gap-1 mb-1">
                                      <Calendar className="w-3 h-3" />
                                      <span>{exp.period}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <MapPin className="w-3 h-3" />
                                      <span>{exp.location}</span>
                                    </div>
                                  </div>
                                </div>

                                <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>

                                <div className="flex flex-wrap gap-1 mb-3">
                                  {exp.technologies.slice(0, 4).map((tech) => (
                                    <Badge key={tech} variant="outline" className="text-xs">
                                      {tech}
                                    </Badge>
                                  ))}
                                  {exp.technologies.length > 4 && (
                                    <Badge variant="outline" className="text-xs">
                                      +{exp.technologies.length - 4}
                                    </Badge>
                                  )}
                                </div>

                                {/* Expandable commit details */}
                                <motion.div
                                  animate={{ 
                                    height: isSelected ? 'auto' : 0,
                                    opacity: isSelected ? 1 : 0 
                                  }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="border-t border-primary/20 pt-3 mt-3">
                                    <div className="font-mono text-xs space-y-1 mb-3">
                                      {exp.commits.map((commit, idx) => (
                                        <div key={idx} className="text-muted-foreground">
                                          <span className="text-accent">→</span> {commit}
                                        </div>
                                      ))}
                                    </div>
                                    <div className="space-y-1">
                                      {exp.achievements.map((achievement, idx) => (
                                        <div key={idx} className="text-xs text-foreground flex items-center gap-2">
                                          <span className="text-primary">✓</span>
                                          {achievement}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              </motion.div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Repository Stats */}
          <div className="space-y-6">
            {/* Repo Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="code-block">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <GitBranch className="w-5 h-5 text-primary" />
                    <h3 className="text-primary">Repository Stats</h3>
                  </div>
                  
                  <div className="space-y-4 font-mono text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Commits:</span>
                      <span className="text-primary">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lines Added:</span>
                      <span className="text-accent">+250,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lines Removed:</span>
                      <span className="text-destructive">-85,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Branches:</span>
                      <span className="text-secondary">15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Contributors:</span>
                      <span className="text-yellow-400">25+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="code-block">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <GitCommit className="w-5 h-5 text-accent" />
                    <h3 className="text-primary">Recent Activity</h3>
                  </div>
                  
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">2 hours ago</span>
                    </div>
                    <div className="text-accent ml-4">
                      feat: Enhanced portfolio with cyberpunk theme
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">1 day ago</span>
                    </div>
                    <div className="text-accent ml-4">
                      refactor: Optimized React components performance
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-muted-foreground">3 days ago</span>
                    </div>
                    <div className="text-accent ml-4">
                      docs: Updated project documentation
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contribution Graph */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="code-block">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-5 h-5 grid grid-cols-2 gap-px">
                      <div className="bg-primary rounded-sm"></div>
                      <div className="bg-accent rounded-sm"></div>
                      <div className="bg-secondary rounded-sm"></div>
                      <div className="bg-yellow-400 rounded-sm"></div>
                    </div>
                    <h3 className="text-primary">Contribution Heat</h3>
                  </div>
                  
                  <div className="grid grid-cols-12 gap-1">
                    {Array.from({ length: 84 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 rounded-sm bg-primary/20"
                        style={{
                          backgroundColor: Math.random() > 0.7 ? '#00ff41' : 
                                          Math.random() > 0.5 ? '#00ffff' : 
                                          Math.random() > 0.3 ? '#ff006e' : 'rgba(0, 255, 65, 0.1)'
                        }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.01 }}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>
                  
                  <div className="flex justify-between text-xs text-muted-foreground mt-3">
                    <span>Less</span>
                    <span>More</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </StoryChapter>
  );
}