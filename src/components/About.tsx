import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

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
      color: 'hover:text-green-500',
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
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

        {/* Content only */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card-elevated p-6">
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
            <div className="flex justify-center space-x-6">
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
        </div>
      </div>
    </section>
  );
};

export default About;
