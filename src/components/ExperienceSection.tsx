import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Lead development of scalable web applications serving 100K+ users. Built microservices architecture using Node.js and React.",
    technologies: ["React", "Node.js", "AWS", "TypeScript", "MongoDB"]
  },
  {
    title: "Frontend Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 - 2022",
    description: "Developed responsive web applications and improved user experience by 40%. Collaborated with design team to implement pixel-perfect UIs.",
    technologies: ["React", "Vue.js", "SCSS", "JavaScript", "Webpack"]
  },
  {
    title: "Junior Developer",
    company: "WebSolutions Ltd",
    location: "New York, NY",
    period: "2018 - 2020",
    description: "Built and maintained client websites using modern frameworks. Gained experience in full-stack development and agile methodologies.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
  },
  {
    title: "Frontend Intern",
    company: "Digital Agency",
    location: "Boston, MA",
    period: "2017 - 2018",
    description: "Assisted in developing responsive websites and learned modern development practices. Contributed to team projects and code reviews.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
  }
];

export function ExperienceSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey through different roles and companies, building expertise 
            and contributing to impactful projects.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  
                  <div className="ml-20">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h3 className="mb-1">{exp.title}</h3>
                            <h4 className="text-primary mb-2">{exp.company}</h4>
                          </div>
                          <div className="flex flex-col lg:items-end gap-2">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}