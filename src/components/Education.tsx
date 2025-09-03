import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Science in Data Science",
      institution: "University of Technology",
      location: "Tech City, Switzerland",
      period: "2022 - 2024",
      gpa: "3.8/4.0",
      description: "Specialized in Machine Learning, Statistical Analysis, and Big Data Technologies. Thesis on 'Deep Learning Applications in Predictive Analytics'.",
      highlights: [
        "Dean's List (4 semesters)",
        "Graduate Research Assistant",
        "Machine Learning Certification"
      ]
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Swiss Institute of Technology",
      location: "Zurich, Switzerland",
      period: "2018 - 2022",
      gpa: "3.7/4.0",
      description: "Comprehensive study in Computer Science fundamentals, Software Engineering, and Data Structures. Senior project focused on AI-powered web applications.",
      highlights: [
        "Magna Cum Laude",
        "Computer Science Society President",
        "Programming Competition Winner"
      ]
    },
    {
      degree: "High School Diploma",
      institution: "International High School",
      location: "Bern, Switzerland",
      period: "2016 - 2018",
      gpa: "95/100",
      description: "Strong foundation in Mathematics, Physics, and Computer Science. Active in robotics club and programming competitions.",
      highlights: [
        "Valedictorian",
        "National Math Olympiad - Bronze Medal",
        "Science Fair - First Place"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey has provided me with a strong foundation in computer science, 
            data analysis, and artificial intelligence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden lg:block"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-professional-lg hidden lg:block z-10"></div>

                {/* Education Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="card-elevated group hover:shadow-professional-xl">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <GraduationCap size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {edu.degree}
                          </h3>
                          <p className="text-primary font-semibold">{edu.institution}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-muted-foreground mb-1">
                          <Calendar size={16} className="mr-1" />
                          <span className="text-sm font-medium">{edu.period}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin size={16} className="mr-1" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center text-accent">
                          <Award size={16} className="mr-1" />
                          <span className="text-sm font-semibold">GPA: {edu.gpa}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <span
                            key={highlightIndex}
                            className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;