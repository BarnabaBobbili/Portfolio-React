import { motion } from 'framer-motion';
import { ExternalLink, FileText, Calendar, Users } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Deep Learning Approaches for Predictive Analytics in Financial Markets",
      authors: ["Barnaba Bichsel", "Dr. Maria Schmidt", "Prof. Andreas Weber"],
      journal: "IEEE Transactions on Neural Networks and Learning Systems",
      year: "2024",
      doi: "10.1109/TNNLS.2024.1234567",
      abstract: "This paper presents novel deep learning architectures for financial market prediction, achieving 15% improvement over traditional methods.",
      keywords: ["Deep Learning", "Financial Markets", "Predictive Analytics", "LSTM", "Time Series"],
      type: "Journal Article"
    },
    {
      title: "IoT-Based Smart City Infrastructure: A Comprehensive Framework",
      authors: ["Barnaba Bichsel", "Dr. Elena Rodriguez", "Prof. Michael Johnson"],
      journal: "IEEE Internet of Things Journal",
      year: "2024",
      doi: "10.1109/JIOT.2024.2345678",
      abstract: "We propose a scalable IoT framework for smart city applications with real-time data processing and predictive maintenance capabilities.",
      keywords: ["IoT", "Smart Cities", "Edge Computing", "Real-time Systems", "Urban Infrastructure"],
      type: "Journal Article"
    },
    {
      title: "Machine Learning for Automated Code Review: A Comparative Study",
      authors: ["Barnaba Bichsel", "Dr. Thomas Mueller"],
      journal: "Proceedings of the 2024 International Conference on Software Engineering",
      year: "2024",
      doi: "10.1109/ICSE.2024.3456789",
      abstract: "Comprehensive evaluation of ML techniques for automated code review, showing significant improvements in bug detection rates.",
      keywords: ["Machine Learning", "Code Review", "Software Engineering", "Static Analysis", "Bug Detection"],
      type: "Conference Paper"
    },
    {
      title: "Blockchain Technology for Supply Chain Transparency: Challenges and Solutions",
      authors: ["Barnaba Bichsel", "Dr. Sarah Chen", "Prof. Robert Wilson"],
      journal: "IEEE Transactions on Industrial Informatics",
      year: "2023",
      doi: "10.1109/TII.2023.4567890",
      abstract: "Analysis of blockchain implementation challenges in supply chain management with proposed solutions for scalability and interoperability.",
      keywords: ["Blockchain", "Supply Chain", "Transparency", "Distributed Systems", "Smart Contracts"],
      type: "Journal Article"
    },
    {
      title: "Real-time Sentiment Analysis for Customer Support Optimization",
      authors: ["Barnaba Bichsel", "Dr. Lisa Anderson"],
      journal: "Proceedings of the 2023 Conference on Natural Language Processing",
      year: "2023",
      doi: "10.1109/NLP.2023.5678901",
      abstract: "Novel approach to real-time sentiment analysis in customer support contexts, improving response times by 40%.",
      keywords: ["Sentiment Analysis", "NLP", "Customer Support", "Real-time Processing", "Text Mining"],
      type: "Conference Paper"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Publications</span> & Research
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My research contributions to the fields of machine learning, IoT, and software engineering, 
            published in prestigious journals and conferences.
          </p>
        </motion.div>

        <div className="space-y-8">
          {publications.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-elevated hover:shadow-professional-xl">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                  {/* Paper Icon */}
                  <div className="flex-shrink-0 mb-4 lg:mb-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent p-0.5 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                        <FileText size={28} className="text-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Paper Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                          {paper.title}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Users size={16} className="mr-1" />
                            <span>{paper.authors.join(', ')}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-1" />
                            <span>{paper.year}</span>
                          </div>
                          <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium border border-accent/20">
                            {paper.type}
                          </span>
                        </div>
                      </div>

                      {/* DOI Link */}
                      <motion.a
                        href={`https://doi.org/${paper.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        <span>View Paper</span>
                      </motion.a>
                    </div>

                    <p className="text-muted-foreground italic mb-4 leading-relaxed">
                      {paper.journal}
                    </p>

                    <p className="text-foreground mb-4 leading-relaxed">
                      <strong>Abstract:</strong> {paper.abstract}
                    </p>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Keywords:</h4>
                      <div className="flex flex-wrap gap-2">
                        {paper.keywords.map((keyword, keywordIndex) => (
                          <span
                            key={keywordIndex}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm border border-border"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <strong>DOI:</strong> {paper.doi}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center card-gradient">
              <div className="text-3xl font-bold gradient-text mb-2">5</div>
              <div className="text-muted-foreground">Published Papers</div>
            </div>
            <div className="text-center card-gradient">
              <div className="text-3xl font-bold gradient-text mb-2">3</div>
              <div className="text-muted-foreground">Journal Articles</div>
            </div>
            <div className="text-center card-gradient">
              <div className="text-3xl font-bold gradient-text mb-2">2</div>
              <div className="text-muted-foreground">Conference Papers</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;