import { motion } from "motion/react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  ExternalLink, 
  Github, 
  Star, 
  Users, 
  Calendar,
  Filter,
  Search
} from "lucide-react";

const projects = [
  {
    id: "ecommerce-platform",
    title: "NeoCommerce Platform",
    description: "A modern e-commerce platform with real-time inventory, AI recommendations, and seamless payment processing. Built for scalability and performance.",
    longDescription: "Full-featured e-commerce solution with advanced inventory management, machine learning-powered product recommendations, and integrated payment processing. Features include real-time inventory updates, user analytics dashboard, and comprehensive admin panel.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc1ODg3NDIzOXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Full-Stack",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe", "AWS"],
    featured: true,
    status: "Live",
    year: "2024",
    metrics: {
      users: "10K+",
      uptime: "99.9%",
      performance: "A+ Rating"
    },
    links: {
      demo: "https://demo.neocommerce.com",
      github: "https://github.com/alexjohnson/neocommerce"
    }
  },
  {
    id: "ai-task-manager",
    title: "TaskMatrix AI",
    description: "AI-powered project management tool with smart scheduling, team collaboration features, and predictive analytics for better productivity.",
    longDescription: "Intelligent project management platform that uses machine learning to optimize task scheduling, predict project completion times, and enhance team collaboration through smart notifications and automated workflows.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGFwcHxlbnwxfHx8fDE3NTg4NzQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Frontend",
    technologies: ["Vue.js", "TypeScript", "Python", "TensorFlow", "Socket.io"],
    featured: true,
    status: "Beta",
    year: "2024",
    metrics: {
      efficiency: "+40%",
      teams: "50+",
      tasks: "100K+"
    },
    links: {
      demo: "https://taskmatrix.ai",
      github: "https://github.com/alexjohnson/taskmatrix"
    }
  },
  {
    id: "data-visualizer",
    title: "DataFlow Dashboard",
    description: "Real-time data visualization platform with interactive charts, custom widgets, and powerful analytics capabilities.",
    longDescription: "Comprehensive data visualization tool that transforms complex datasets into interactive, beautiful charts and dashboards. Features real-time updates, custom widget builder, and advanced filtering capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU4ODc0MzYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Frontend",
    technologies: ["React", "D3.js", "WebGL", "Node.js", "GraphQL"],
    featured: false,
    status: "Live",
    year: "2023",
    metrics: {
      datasets: "1M+",
      charts: "500+",
      users: "5K+"
    },
    links: {
      demo: "https://dataflow.demo.com",
      github: "https://github.com/alexjohnson/dataflow"
    }
  },
  {
    id: "crypto-wallet",
    title: "SecureWallet Pro",
    description: "Multi-chain cryptocurrency wallet with DeFi integration, advanced security features, and intuitive user interface.",
    longDescription: "Professional-grade cryptocurrency wallet supporting multiple blockchains with integrated DeFi protocols, hardware wallet support, and bank-level security measures.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMHdhbGxldHxlbnwxfHx8fDE3NTg4NzQzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Mobile",
    technologies: ["React Native", "Solidity", "Web3.js", "Firebase"],
    featured: true,
    status: "Live",
    year: "2023",
    metrics: {
      downloads: "25K+",
      volume: "$2M+",
      rating: "4.8/5"
    },
    links: {
      demo: "https://securewallet.app",
      github: "https://github.com/alexjohnson/securewallet"
    }
  },
  {
    id: "api-gateway",
    title: "Neural Gateway",
    description: "Intelligent API gateway with rate limiting, analytics, load balancing, and automated scaling capabilities.",
    longDescription: "Enterprise-grade API gateway solution with machine learning-powered traffic analysis, automatic rate limiting, comprehensive analytics, and seamless integration with cloud platforms.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBnYXRld2F5fGVufDF8fHx8MTc1ODg3MTEyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Backend",
    technologies: ["Go", "Kubernetes", "Prometheus", "Grafana", "Redis"],
    featured: false,
    status: "Beta",
    year: "2023",
    metrics: {
      requests: "1B+",
      latency: "<10ms",
      uptime: "99.99%"
    },
    links: {
      demo: "https://neuralgateway.dev",
      github: "https://github.com/alexjohnson/neuralgateway"
    }
  },
  {
    id: "ml-playground",
    title: "ML Playground",
    description: "Interactive machine learning experimentation platform with Jupyter integration and collaborative features.",
    longDescription: "Educational and research platform for machine learning experimentation featuring interactive notebooks, pre-built models, collaborative workspaces, and seamless deployment capabilities.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBsYWJ8ZW58MXx8fHwxNzU4ODc0NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Data Science",
    technologies: ["Python", "TensorFlow", "Jupyter", "Flask", "Docker"],
    featured: false,
    status: "Live",
    year: "2022",
    metrics: {
      models: "100+",
      users: "2K+",
      experiments: "10K+"
    },
    links: {
      demo: "https://mlplayground.ai",
      github: "https://github.com/alexjohnson/mlplayground"
    }
  }
];

const categories = ["All", "Full-Stack", "Frontend", "Backend", "Mobile", "Data Science"];

export function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" || project.category === selectedCategory
  );

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating my skills in building 
              scalable applications and solving complex problems.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "tech-glow" : ""}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-8">Featured</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="interactive h-full overflow-hidden group">
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary text-primary-foreground">
                            Featured
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                            {project.status}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <Badge variant="secondary" className="mb-2">
                              {project.category}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{project.year}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Metrics */}
                        <div className="flex flex-wrap gap-4 mb-4 text-sm">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div key={key} className="flex items-center gap-1">
                              <span className="text-primary font-medium">{value}</span>
                              <span className="text-muted-foreground">{key}</span>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1"
                          >
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full"
                              onClick={() => window.open(project.links.demo, '_blank')}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1"
                          >
                            <Button 
                              size="sm" 
                              className="w-full tech-glow"
                              onClick={() => window.open(project.links.github, '_blank')}
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Regular Projects */}
          {regularProjects.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-8">More Projects</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="interactive h-full">
                      <div className="relative h-32 overflow-hidden">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm text-xs">
                            {project.status}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold">{project.title}</h4>
                          <span className="text-xs text-muted-foreground">{project.year}</span>
                        </div>
                        
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {project.category}
                        </Badge>

                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.technologies.slice(0, 2).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 2}
                            </Badge>
                          )}
                        </div>

                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1 text-xs"
                            onClick={() => window.open(project.links.demo, '_blank')}
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Demo
                          </Button>
                          <Button 
                            size="sm" 
                            className="flex-1 text-xs"
                            onClick={() => window.open(project.links.github, '_blank')}
                          >
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <Card className="interactive">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-6">Project Impact</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">6</div>
                    <div className="text-sm text-muted-foreground">Total Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">100K+</div>
                    <div className="text-sm text-muted-foreground">Total Users</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                    <div className="text-sm text-muted-foreground">Avg Uptime</div>
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