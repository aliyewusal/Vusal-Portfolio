import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, TestTube, Server, GitBranch, CheckCircle } from 'lucide-react';
import profileImage from '../assets/profile.png';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skills = [
    { name: 'Playwright', icon: <TestTube className="h-6 w-6" /> },
    { name: 'Cypress', icon: <TestTube className="h-6 w-6" /> },
    { name: 'Cucumber/BDD', icon: <CheckCircle className="h-6 w-6" /> },
    { name: 'API Testing', icon: <Server className="h-6 w-6" /> },
    { name: 'JavaScript/TypeScript', icon: <Code className="h-6 w-6" /> },
    { name: 'Java', icon: <GitBranch className="h-6 w-6" /> },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              className="md:w-1/2"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                variants={fadeIn}
              >
                Vusal <span className="text-primary">Aliyev</span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6"
                variants={fadeIn}
              >
                Software Test Automation Engineer
              </motion.h2>
              
              <motion.p 
                className="text-lg mb-8 max-w-lg"
                variants={fadeIn}
              >
                Crafting reliable test automation solutions with precision and passion
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeIn}
              >
                <Button asChild size="lg">
                  <Link to="/projects">
                    Explore My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    Get In Touch
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
                <img 
                  src={profileImage} 
                  alt="Vusal Aliyev" 
                  className="relative z-10 rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-background shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-8">
              I'm a dedicated Software Test Automation Engineer specializing in Playwright, Cypress, and Cucumber frameworks. 
              With a focus on creating robust, maintainable test solutions, I help ensure software quality through innovative automation approaches.
            </p>
            <Button asChild variant="outline">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2">My Skills</h2>
            <p className="text-muted-foreground">Technologies and tools I work with</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow"
                variants={fadeIn}
              >
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  {skill.icon}
                </div>
                <h3 className="font-medium">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/skills">
                View All Skills
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <p className="text-muted-foreground">Some of my recent work</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Project 1 */}
            <motion.div
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              variants={fadeIn}
            >
              <div className="p-6 bg-primary/5 h-48 flex items-center justify-center">
                <TestTube className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">playwright-showcase</h3>
                <p className="text-muted-foreground mb-4">
                  A comprehensive demonstration of Playwright's capabilities for end-to-end testing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">TypeScript</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Playwright</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Test Automation</span>
                </div>
                <a 
                  href="https://github.com/aliyewusal/playwright-showcase" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              variants={fadeIn}
            >
              <div className="p-6 bg-primary/5 h-48 flex items-center justify-center">
                <Code className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cypress_Automation</h3>
                <p className="text-muted-foreground mb-4">
                  A standardized and maintainable approach to writing automated tests with Cypress.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">JavaScript</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Cypress</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Test Automation</span>
                </div>
                <a 
                  href="https://github.com/aliyewusal/Cypress_Automation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              variants={fadeIn}
            >
              <div className="p-6 bg-primary/5 h-48 flex items-center justify-center">
                <Server className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AutoTest-exercise</h3>
                <p className="text-muted-foreground mb-4">
                  A collection of Postman requests designed to simulate real-life scenarios for API testing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Postman</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">API Testing</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">JSON</span>
                </div>
                <a 
                  href="https://github.com/aliyewusal/AutoTest-exercise" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg mb-8">
              I'm always interested in collaborating on innovative test automation projects. 
              If you're looking for a test automation engineer or have a project you'd like to discuss, feel free to reach out!
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;

