import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code, Database, Brain, Globe, Server, Zap } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('technical');

  const skillCategories = {
    technical: {
      title: 'Technical Skills',
      icon: Code,
      skills: [
        { name: 'Python', level: 95, color: 'from-blue-500 to-blue-600' },
        { name: 'JavaScript/TypeScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'React/Next.js', level: 88, color: 'from-cyan-400 to-cyan-600' },
        { name: 'Node.js', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'SQL/NoSQL', level: 92, color: 'from-purple-500 to-purple-600' },
        { name: 'Git/GitHub', level: 90, color: 'from-gray-600 to-gray-700' },
      ]
    },
    ai: {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: [
        { name: 'TensorFlow/Keras', level: 90, color: 'from-orange-500 to-orange-600' },
        { name: 'PyTorch', level: 85, color: 'from-red-500 to-red-600' },
        { name: 'Scikit-learn', level: 95, color: 'from-blue-500 to-blue-600' },
        { name: 'Pandas/NumPy', level: 98, color: 'from-indigo-500 to-indigo-600' },
        { name: 'Deep Learning', level: 88, color: 'from-purple-500 to-purple-600' },
        { name: 'NLP', level: 82, color: 'from-pink-500 to-pink-600' },
      ]
    },
    data: {
      title: 'Data & Analytics',
      icon: Database,
      skills: [
        { name: 'Data Visualization', level: 92, color: 'from-green-500 to-green-600' },
        { name: 'Statistical Analysis', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'A/B Testing', level: 85, color: 'from-purple-500 to-purple-600' },
        { name: 'ETL Pipelines', level: 88, color: 'from-yellow-500 to-yellow-600' },
        { name: 'Big Data (Spark)', level: 80, color: 'from-orange-500 to-orange-600' },
        { name: 'Business Intelligence', level: 87, color: 'from-teal-500 to-teal-600' },
      ]
    },
    tools: {
      title: 'Tools & Platforms',
      icon: Server,
      skills: [
        { name: 'AWS/Azure', level: 85, color: 'from-orange-400 to-orange-600' },
        { name: 'Docker/Kubernetes', level: 82, color: 'from-blue-400 to-blue-600' },
        { name: 'Jupyter/VS Code', level: 95, color: 'from-purple-400 to-purple-600' },
        { name: 'Tableau/Power BI', level: 88, color: 'from-green-400 to-green-600' },
        { name: 'MongoDB/PostgreSQL', level: 90, color: 'from-indigo-400 to-indigo-600' },
        { name: 'Apache Kafka', level: 78, color: 'from-red-400 to-red-600' },
      ]
    }
  };

  const categories = Object.keys(skillCategories) as Array<keyof typeof skillCategories>;

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
            My technical expertise spans across multiple domains including AI/ML, 
            data science, full-stack development, and cloud technologies.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const CategoryIcon = skillCategories[category].icon;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-professional-md'
                    : 'bg-card hover:bg-secondary text-card-foreground border border-border'
                }`}
              >
                <CategoryIcon size={20} />
                <span>{skillCategories[category].title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-card text-card-foreground rounded-lg px-4 py-2 shadow-sm border border-border hover:bg-secondary transition-colors"
            >
              <span className="font-medium">{skill.name}</span>
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