import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const About = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:barnaba.bichsel@example.com',
      color: 'hover:text-red-500',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/barnaba-bichsel',
      color: 'hover:text-blue-600',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/barnaba-bichsel',
      color: 'hover:text-gray-800 dark:hover:text-gray-200',
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card-elevated">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I'm a passionate Computer Science Engineering graduate with a strong focus on 
                data analysis and artificial intelligence. My journey in technology has been 
                driven by curiosity and a desire to solve complex problems through innovative solutions.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                With expertise in machine learning, data visualization, and software development, 
                I enjoy transforming raw data into meaningful insights that drive decision-making. 
                I'm constantly learning and exploring new technologies to stay at the forefront 
                of the rapidly evolving tech landscape.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not coding or analyzing data, you can find me contributing to open-source 
                projects, writing technical articles, or exploring the latest developments in AI 
                and machine learning.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className={`p-3 rounded-full bg-card border border-border shadow-professional-sm transition-all duration-300 hover:shadow-professional-md ${social.color}`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="card-gradient p-8 text-center">
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent p-1"
                >
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <span className="text-4xl font-bold gradient-text">BB</span>
                  </div>
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always interested in discussing new opportunities, 
                  collaborative projects, or just having a conversation about technology.
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-hero inline-flex items-center space-x-2"
                >
                  <span>Get In Touch</span>
                  <ExternalLink size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;