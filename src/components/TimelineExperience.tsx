import { motion } from "motion/react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Calendar, 
  MapPin, 
  Building, 
  ChevronDown, 
  ExternalLink,
  Users,
  TrendingUp,
  Award
} from "lucide-react";

const experiences = [
  {
    id: "techcorp",
    company: "TechCorp Inc.",
    role: "Senior Full-Stack Developer",
    period: "2022 - Present",
    location: "San Francisco, CA",
    type: "Full-time",
    logo: "🚀",
    description: "Leading development of scalable microservices architecture serving 100K+ users",
    achievements: [
      "Led a team of 5 developers in rebuilding the core platform architecture",
      "Reduced system downtime by 75% through improved monitoring and deployment practices",
      "Implemented real-time features that increased user engagement by 40%",
      "Mentored 3 junior developers, with 2 receiving promotions during my tenure"
    ],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker", "Kubernetes"],
    metrics: {
      teamSize: "5 developers",
      impact: "100K+ users",
      improvement: "75% less downtime"
    }
  },
  {
    id: "startupxyz",
    company: "StartupXYZ",
    role: "Frontend Developer",
    period: "2020 - 2022",
    location: "Remote",
    type: "Full-time",
    logo: "💡",
    description: "Built responsive web applications improving user engagement by 40%",
    achievements: [
      "Developed a component library used across 5 different products",
      "Optimized application performance, reducing load times by 50%",
      "Collaborated with design team to implement pixel-perfect UI/UX",
      "Achieved 90% code coverage through comprehensive testing strategy"
    ],
    technologies: ["React", "Vue.js", "TypeScript", "SCSS", "Webpack", "Jest"],
    metrics: {
      products: "5 products",
      performance: "50% faster",
      coverage: "90% tested"
    }
  },
  {
    id: "websolutions",
    company: "WebSolutions Ltd",
    role: "Junior Developer",
    period: "2018 - 2020",
    location: "New York, NY",
    type: "Full-time",
    logo: "🌐",
    description: "Maintained client websites and learned full-stack development fundamentals",
    achievements: [
      "Maintained and improved 20+ client websites",
      "Built custom CMS solutions for small businesses",
      "Improved SEO metrics for clients, increasing organic traffic by 60%",
      "Contributed to team code reviews and development best practices"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress"],
    metrics: {
      clients: "20+ websites",
      traffic: "60% more visitors",
      solutions: "Custom CMS built"
    }
  },
  {
    id: "freelance",
    company: "Freelance Projects",
    role: "Web Developer",
    period: "2017 - 2018",
    location: "Various",
    type: "Contract",
    logo: "💻",
    description: "First professional experience building websites for local businesses",
    achievements: [
      "Completed 15+ projects for small businesses and startups",
      "Learned project management and client communication skills",
      "Built responsive websites using modern CSS and JavaScript",
      "Established long-term relationships with 5 recurring clients"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Git"],
    metrics: {
      projects: "15+ completed",
      clients: "5 recurring",
      skills: "Full-stack basics"
    }
  }
];

export function TimelineExperience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey through different roles and companies, 
              each contributing to my growth as a developer.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                  {/* Experience Card */}
                  <div className="ml-20">
                    <Card className="interactive cursor-pointer" onClick={() => toggleExpanded(exp.id)}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-2xl">{exp.logo}</span>
                              <div>
                                <h3 className="text-xl font-semibold">{exp.role}</h3>
                                <p className="text-primary font-medium">{exp.company}</p>
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                              <Badge variant="outline">{exp.type}</Badge>
                            </div>

                            <p className="text-muted-foreground mb-4">{exp.description}</p>

                            {/* Key Metrics */}
                            <div className="flex flex-wrap gap-4 mb-4">
                              {Object.entries(exp.metrics).map(([key, value]) => (
                                <div key={key} className="text-sm">
                                  <span className="text-primary font-medium">{value}</span>
                                </div>
                              ))}
                            </div>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {exp.technologies.slice(0, 4).map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                              {exp.technologies.length > 4 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{exp.technologies.length - 4}
                                </Badge>
                              )}
                            </div>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            className="ml-4"
                          >
                            <ChevronDown 
                              className={`w-4 h-4 transition-transform ${
                                expandedId === exp.id ? 'rotate-180' : ''
                              }`} 
                            />
                          </Button>
                        </div>

                        {/* Expanded Content */}
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ 
                            height: expandedId === exp.id ? 'auto' : 0,
                            opacity: expandedId === exp.id ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-border pt-4 mt-4">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Award className="w-4 h-4 text-primary" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>

                            {exp.technologies.length > 4 && (
                              <div className="mt-4">
                                <h5 className="text-sm font-medium mb-2">All Technologies Used:</h5>
                                <div className="flex flex-wrap gap-1">
                                  {exp.technologies.map((tech) => (
                                    <Badge key={tech} variant="outline" className="text-xs">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <Card className="interactive">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold">Career Highlights</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">8+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">4</div>
                    <div className="text-sm text-muted-foreground">Companies</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">5</div>
                    <div className="text-sm text-muted-foreground">Team Members Led</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">100K+</div>
                    <div className="text-sm text-muted-foreground">Users Impacted</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}