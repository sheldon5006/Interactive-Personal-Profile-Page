import { motion } from "motion/react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { StoryChapter } from "./StoryChapter";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Github, 
  ExternalLink, 
  Star, 
  GitFork, 
  Eye, 
  Code, 
  Database,
  Smartphone,
  Globe,
  Search,
  Filter
} from "lucide-react";

const projects = [
  {
    id: "ecommerce-platform",
    name: "NeoCommerce",
    description: "Full-stack e-commerce platform with real-time inventory, AI recommendations, and cryptocurrency payments",
    image: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc1ODgxOTc3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "fullstack",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe", "AWS"],
    stars: 247,
    forks: 89,
    watchers: 156,
    status: "active",
    commits: 342,
    lastUpdate: "2 days ago",
    featured: true,
    complexity: "advanced",
    demo: "https://demo.neocommerce.com",
    repo: "https://github.com/alexjohnson/neocommerce"
  },
  {
    id: "ai-task-manager",
    name: "TaskMatrix",
    description: "AI-powered project management with smart scheduling, team collaboration, and predictive analytics",
    image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4ODY1Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "frontend",
    technologies: ["Vue.js", "TypeScript", "Python", "TensorFlow", "Socket.io", "Docker"],
    stars: 189,
    forks: 45,
    watchers: 78,
    status: "active",
    commits: 156,
    lastUpdate: "1 week ago",
    featured: true,
    complexity: "advanced",
    demo: "https://taskmatrix.dev",
    repo: "https://github.com/alexjohnson/taskmatrix"
  },
  {
    id: "data-visualizer",
    name: "DataFlow",
    description: "Real-time data visualization dashboard with interactive charts and custom widget builder",
    image: "https://images.unsplash.com/photo-1555209183-8facf96a4349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBzZXR1cHxlbnwxfHx8fDE3NTg4NzEwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "frontend",
    technologies: ["React", "D3.js", "WebGL", "Node.js", "GraphQL", "MongoDB"],
    stars: 156,
    forks: 67,
    watchers: 92,
    status: "maintenance",
    commits: 234,
    lastUpdate: "2 months ago",
    featured: false,
    complexity: "intermediate",
    demo: "https://dataflow.demo.com",
    repo: "https://github.com/alexjohnson/dataflow"
  },
  {
    id: "crypto-wallet",
    name: "SecureWallet",
    description: "Cryptocurrency wallet with multi-chain support, DeFi integration, and advanced security features",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMHdhbGxldHxlbnwxfHx8fDE3NTg4NzEwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "mobile",
    technologies: ["React Native", "Solidity", "Web3.js", "Firebase", "Redux", "Jest"],
    stars: 312,
    forks: 134,
    watchers: 201,
    status: "active",
    commits: 187,
    lastUpdate: "5 days ago",
    featured: true,
    complexity: "advanced",
    demo: "https://securewallet.app",
    repo: "https://github.com/alexjohnson/securewallet"
  },
  {
    id: "api-gateway",
    name: "NeuralGateway",
    description: "Intelligent API gateway with rate limiting, analytics, and automatic load balancing",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBnYXRld2F5fGVufDF8fHx8MTc1ODg3MTEyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "backend",
    technologies: ["Go", "Kubernetes", "Prometheus", "Grafana", "Redis", "PostgreSQL"],
    stars: 98,
    forks: 23,
    watchers: 45,
    status: "experimental",
    commits: 89,
    lastUpdate: "3 weeks ago",
    featured: false,
    complexity: "advanced",
    demo: "https://neuralgateway.dev",
    repo: "https://github.com/alexjohnson/neuralgateway"
  },
  {
    id: "ml-playground",
    name: "MLPlayground",
    description: "Interactive machine learning experimentation platform with Jupyter integration",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzU4ODcxMTg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "data",
    technologies: ["Python", "TensorFlow", "Jupyter", "Flask", "NumPy", "Pandas"],
    stars: 445,
    forks: 178,
    watchers: 267,
    status: "active",
    commits: 523,
    lastUpdate: "1 day ago",
    featured: true,
    complexity: "intermediate",
    demo: "https://mlplayground.ai",
    repo: "https://github.com/alexjohnson/mlplayground"
  }
];

const categories = [
  { id: "all", name: "All Projects", icon: Code },
  { id: "fullstack", name: "Full Stack", icon: Globe },
  { id: "frontend", name: "Frontend", icon: Smartphone },
  { id: "backend", name: "Backend", icon: Database },
  { id: "mobile", name: "Mobile", icon: Smartphone },
  { id: "data", name: "Data Science", icon: Database },
];

export function ProjectRepository() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "text-primary";
      case "maintenance": return "text-yellow-400";
      case "experimental": return "text-accent";
      default: return "text-muted-foreground";
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "beginner": return "text-primary";
      case "intermediate": return "text-yellow-400";
      case "advanced": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  return (
    <StoryChapter
      chapter="04"
      title="ls ~/projects --recursive"
      subtitle="Exploring the repository of built applications, experiments, and open-source contributions"
      className="bg-gradient-to-br from-card/10 to-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Repository Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Card className="code-block">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Search and Filters */}
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search repositories..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-background border border-primary/30 rounded font-mono text-sm focus:border-primary focus:outline-none"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <motion.button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center gap-2 px-3 py-2 rounded text-sm border transition-all ${
                          selectedCategory === category.id
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-primary/30 text-muted-foreground hover:border-primary/50 hover:text-foreground'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <category.icon className="w-4 h-4" />
                        <span className="font-mono">{category.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Repository Stats */}
                <div className="flex items-center gap-6 text-sm font-mono">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Public: </span>
                    <span className="text-primary">{filteredProjects.length}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400">
                      {filteredProjects.reduce((sum, p) => sum + p.stars, 0)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4 text-accent" />
                    <span className="text-accent">
                      {filteredProjects.reduce((sum, p) => sum + p.forks, 0)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <Card className="code-block h-full group cursor-pointer overflow-hidden">
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                      <Badge variant="outline" className={`${getStatusColor(project.status)} border-current`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-current mr-1"></div>
                        {project.status}
                      </Badge>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-primary text-background">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Project Stats Overlay */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-3 text-white text-xs font-mono">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        <span>{project.forks}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{project.watchers}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-primary group-hover:text-accent transition-colors">
                        {project.name}
                      </h3>
                      <Badge variant="outline" className={`text-xs ${getComplexityColor(project.complexity)}`}>
                        {project.complexity}
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Repository Info */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 font-mono">
                      <span>{project.commits} commits</span>
                      <span>Updated {project.lastUpdate}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1"
                      >
                        <Button variant="outline" size="sm" className="w-full neon-glow border-primary/50 hover:border-primary">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1"
                      >
                        <Button size="sm" className="w-full neon-glow bg-primary hover:bg-primary/90">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Repository Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <Card className="code-block">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-primary mb-4">Repository Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-3xl font-mono text-primary mb-2">
                      {projects.length}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-mono text-accent mb-2">
                      {projects.reduce((sum, p) => sum + p.stars, 0)}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Stars</div>
                  </div>
                  <div>
                    <div className="text-3xl font-mono text-secondary mb-2">
                      {projects.reduce((sum, p) => sum + p.commits, 0)}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Commits</div>
                  </div>
                  <div>
                    <div className="text-3xl font-mono text-yellow-400 mb-2">
                      {new Set(projects.flatMap(p => p.technologies)).size}
                    </div>
                    <div className="text-sm text-muted-foreground">Technologies Used</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </StoryChapter>
  );
}