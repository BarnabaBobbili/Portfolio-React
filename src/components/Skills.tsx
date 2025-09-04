import { motion } from "framer-motion";
import { useState } from "react";
import { Code, Database, Brain, Globe, Server, Zap } from "lucide-react";

const Skills = () => {
  const allSkills = [
    { name: "Python" },
    { name: "JavaScript/TypeScript" },
    { name: "React/Next.js" },
    { name: "Node.js" },
    { name: "SQL/NoSQL" },
    { name: "Git/GitHub" },
    { name: "TensorFlow/Keras" },
    { name: "PyTorch" },
    { name: "Scikit-learn" },
    { name: "Pandas/NumPy" },
    { name: "Deep Learning" },
    { name: "NLP" },
    { name: "Data Visualization" },
    { name: "Statistical Analysis" },
    { name: "A/B Testing" },
    { name: "ETL Pipelines" },
    { name: "Big Data (Spark)" },
    { name: "Business Intelligence" },
    { name: "AWS/Azure" },
    { name: "Docker/Kubernetes" },
    { name: "Jupyter/VS Code" },
    { name: "Tableau/Power BI" },
    { name: "MongoDB/PostgreSQL" },
    { name: "Apache Kafka" },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My technical expertise spans across multiple domains including
            AI/ML, data science, full-stack development, and cloud technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border border-gray-200 shadow-md p-0.5 rounded-lg hover:bg-gradient-to-r from-red-500 via-yellow-500 to-green-500
                            dark:hover:bg-none dark:border-border
                            dark:bg-card dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.5),0_0_20px_rgba(0,150,255,0.4)] transition-all duration-300"
            >
              <div className="bg-card text-card-foreground rounded-md px-4 py-2">
                <span className="font-medium">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="text-center card-gradient">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Code size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">5+ Years</h3>
            <p className="text-muted-foreground">Programming Experience</p>
          </div>

          <div className="text-center card-gradient">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-accent/10 text-accent">
                <Brain size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">3+ Years</h3>
            <p className="text-muted-foreground">AI/ML Development</p>
          </div>

          <div className="text-center card-gradient">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Database size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">15+</h3>
            <p className="text-muted-foreground">Technologies Mastered</p>
          </div>

          <div className="text-center card-gradient">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-accent/10 text-accent">
                <Zap size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">50+</h3>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
