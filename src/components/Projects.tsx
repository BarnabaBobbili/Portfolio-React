import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Brain, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Stock Predictor",
      description: "A machine learning application that predicts stock prices using LSTM neural networks and real-time market data. Features interactive charts and backtesting capabilities.",
      technologies: ["Python", "TensorFlow", "Flask", "React", "Alpha Vantage API"],
      icon: Brain,
      github: "https://github.com/barnaba-bichsel/stock-predictor",
      demo: "https://stock-predictor-demo.vercel.app",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for analyzing large datasets with customizable charts, filters, and real-time updates. Built for business intelligence and analytics teams.",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "WebSocket"],
      icon: Database,
      github: "https://github.com/barnaba-bichsel/data-dashboard",
      demo: "https://data-viz-dashboard.netlify.app",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Smart City IoT Platform",
      description: "IoT platform for smart city management with sensor data collection, real-time monitoring, and predictive maintenance alerts for urban infrastructure.",
      technologies: ["Python", "MongoDB", "MQTT", "Docker", "Grafana"],
      icon: Globe,
      github: "https://github.com/barnaba-bichsel/smart-city-iot",
      demo: null,
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Code Review Automation Tool",
      description: "AI-powered tool that automatically reviews code for best practices, security vulnerabilities, and performance issues. Integrates with popular Git platforms.",
      technologies: ["Python", "OpenAI API", "FastAPI", "Redis", "GitHub API"],
      icon: Code,
      github: "https://github.com/barnaba-bichsel/code-review-ai",
      demo: "https://code-review-ai.herokuapp.com",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Real-time Chat Analytics",
      description: "Platform for analyzing chat conversations in real-time with sentiment analysis, topic detection, and user behavior insights for customer support teams.",
      technologies: ["React", "Node.js", "Socket.io", "NLP", "Chart.js"],
      icon: Brain,
      github: "https://github.com/barnaba-bichsel/chat-analytics",
      demo: "https://chat-analytics-demo.netlify.app",
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "Blockchain Supply Chain",
      description: "Decentralized supply chain tracking system using blockchain technology to ensure transparency and traceability of products from manufacturer to consumer.",
      technologies: ["Solidity", "Web3.js", "React", "IPFS", "Ethereum"],
      icon: Database,
      github: "https://github.com/barnaba-bichsel/blockchain-supply-chain",
      demo: null,
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in 
            data science, AI, and full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="border border-gray-200 shadow-md p-0.5 rounded-lg hover:bg-gradient-to-r from-red-500 via-yellow-500 to-green-500
                            dark:hover:bg-none dark:border-border
                            dark:bg-card dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.5),0_0_20px_rgba(0,150,255,0.4)] transition-all duration-300 h-full">
                <div className="bg-card text-card-foreground rounded-md h-full p-6 flex flex-col">
                  {/* Project Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                        <project.icon size={28} className="text-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary/10 text-primary rounded text-sm font-medium border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4 pt-4 border-t border-border">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={18} />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>

                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2 text-primary hover:text-accent transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm font-medium">Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <div className="space-x-4">
            <motion.a
              href="https://github.com/barnaba-bichsel"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="btn-hero inline-flex items-center space-x-2"
            >
              <Github size={20} />
              <span>View All Projects</span>
            </motion.a>
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              className="btn-ghost"
            >
              Let's Collaborate
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;