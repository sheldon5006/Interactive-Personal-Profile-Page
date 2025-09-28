import { motion } from "motion/react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  User, 
  Target, 
  Coffee, 
  BookOpen, 
  Lightbulb,
  Award,
  Calendar,
  MapPin
} from "lucide-react";

const stats = [
  { icon: Calendar, label: "Experience", value: "8+ Years" },
  { icon: Award, label: "Projects", value: "50+" },
  { icon: Coffee, label: "Coffee", value: "5,847 Cups" },
  { icon: Lightbulb, label: "Ideas", value: "∞" },
];

const values = [
  {
    icon: User,
    title: "User-Centric",
    description: "Every line of code I write serves the end user's needs and enhances their experience."
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "I focus on delivering solutions that drive business objectives and create measurable impact."
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Technology evolves fast, and I stay ahead by constantly learning new tools and techniques."
  },
];

export function CleanAboutSection() {
  const [activeTab, setActiveTab] = useState("story");

  const tabs = [
    { id: "story", label: "My Story", icon: User },
    { id: "values", label: "Values", icon: Target },
    { id: "facts", label: "Fun Facts", icon: Coffee },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-secondary/20 to-background">
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference. 
              Here's my journey so far.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Tab Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-wrap gap-2 p-1 bg-secondary rounded-xl"
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-background text-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </motion.div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="interactive">
                  <CardContent className="p-8">
                    {activeTab === "story" && (
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold">The Journey</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            My passion for technology began in college when I built my first 
                            web application. What started as a simple project quickly became 
                            an obsession with creating seamless digital experiences.
                          </p>
                          <p className="text-muted-foreground leading-relaxed">
                            Over the past 8 years, I've worked with startups and established 
                            companies, leading teams and building applications that serve 
                            hundreds of thousands of users. My focus has always been on 
                            writing clean, maintainable code that solves real problems.
                          </p>
                          <p className="text-muted-foreground leading-relaxed">
                            Today, I specialize in full-stack development with a particular 
                            love for React ecosystems and cloud architectures. I believe in 
                            the power of technology to improve lives and create opportunities.
                          </p>
                        </div>
                        
                        <div className="pt-4">
                          <Button className="tech-glow">
                            Let's Connect
                          </Button>
                        </div>
                      </div>
                    )}

                    {activeTab === "values" && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold">What Drives Me</h3>
                        <div className="space-y-4">
                          {values.map((value, index) => (
                            <motion.div
                              key={value.title}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors"
                            >
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <value.icon className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold mb-1">{value.title}</h4>
                                <p className="text-muted-foreground text-sm">{value.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === "facts" && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Random Facts About Me</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-muted-foreground">
                              I can solve a Rubik's cube in under 2 minutes (not world-record worthy, but I'm proud of it!)
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-muted-foreground">
                              My ideal debugging environment includes rain sounds and a good cup of coffee
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-muted-foreground">
                              I've contributed to 15+ open source projects and maintain 3 of my own
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-muted-foreground">
                              When not coding, you'll find me hiking trails around the Bay Area or trying new coffee shops
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="interactive">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">By the Numbers</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="text-center"
                        >
                          <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                          <div className="font-semibold text-lg">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Location & Availability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="interactive">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Currently</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-primary" />
                        <div>
                          <div className="font-medium">San Francisco, CA</div>
                          <div className="text-sm text-muted-foreground">Open to remote</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <div>
                          <div className="font-medium">Available</div>
                          <div className="text-sm text-muted-foreground">For new opportunities</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Skills Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="interactive">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Core Strengths</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React/Next.js", "TypeScript", "Node.js", "Python", 
                        "AWS", "Leadership", "System Design", "Mentoring"
                      ].map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
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