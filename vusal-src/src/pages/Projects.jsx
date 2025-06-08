import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, TestTube, Code, Server, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'playwright-showcase',
      description: 'A comprehensive demonstration of Playwright\'s capabilities for end-to-end testing. This repository showcases advanced testing patterns, best practices, and automation techniques using Playwright.',
      technologies: ['TypeScript', 'Playwright', 'Test Automation'],
      category: 'automation',
      githubLink: 'https://github.com/aliyewusal/playwright-showcase',
      icon: <TestTube className="h-16 w-16 text-primary" />,
      features: [
        'End-to-end test examples',
        'Page Object Model implementation',
        'Visual testing demonstrations',
        'API testing integration'
      ]
    },
    {
      id: 2,
      title: 'Cypress_Automation',
      description: 'A standardized and maintainable approach to writing automated tests with Cypress. This framework provides guidelines and best practices for creating reliable UI tests.',
      technologies: ['JavaScript', 'Cypress', 'Test Automation'],
      category: 'automation',
      githubLink: 'https://github.com/aliyewusal/Cypress_Automation',
      icon: <Code className="h-16 w-16 text-primary" />,
      features: [
        'Custom command implementations',
        'Reusable test components',
        'CI/CD integration examples',
        'Reporting solutions'
      ]
    },
    {
      id: 3,
      title: 'AutoTest-exercise',
      description: 'A collection of Postman requests designed to simulate real-life scenarios for API testing. This project demonstrates comprehensive API testing approaches and validation techniques.',
      technologies: ['Postman', 'API Testing', 'JSON'],
      category: 'api',
      githubLink: 'https://github.com/aliyewusal/AutoTest-exercise',
      icon: <Server className="h-16 w-16 text-primary" />,
      features: [
        'Real-world API test scenarios',
        'Environment configuration',
        'Test data management',
        'Automated test suites'
      ]
    },
    {
      id: 4,
      title: 'LatestCucumber6WithPOM',
      description: 'A BDD framework implementation using Cucumber 6 with Page Object Model design pattern. This project demonstrates how to create structured, maintainable test automation using Java and Cucumber.',
      technologies: ['Java', 'Cucumber', 'Selenium', 'BDD'],
      category: 'bdd',
      githubLink: 'https://github.com/aliyewusal/LatestCucumber6WithPOM',
      icon: <GitBranch className="h-16 w-16 text-primary" />,
      features: [
        'Page Object Model implementation',
        'BDD scenarios with Gherkin syntax',
        'Reusable step definitions',
        'Reporting integration'
      ]
    },
    {
      id: 5,
      title: 'CapitalAPIAutomation',
      description: 'An API automation project focused on testing financial services APIs. This framework demonstrates approaches to testing complex API interactions and validations.',
      technologies: ['API Testing', 'Automation'],
      category: 'api',
      githubLink: 'https://github.com/aliyewusal/CapitalAPIAutomation',
      icon: <Server className="h-16 w-16 text-primary" />,
      features: [
        'Financial API testing patterns',
        'Data-driven test approaches',
        'Security testing considerations',
        'Performance validation'
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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

  return (
    <>
      {/* Header Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6">My Projects</h1>
            <p className="text-lg text-muted-foreground">
              A showcase of my test automation projects and contributions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-12">
              <TabsList>
                <TabsTrigger 
                  value="all" 
                  onClick={() => setActiveFilter('all')}
                  className="px-6"
                >
                  All Projects
                </TabsTrigger>
                <TabsTrigger 
                  value="automation" 
                  onClick={() => setActiveFilter('automation')}
                  className="px-6"
                >
                  Automation
                </TabsTrigger>
                <TabsTrigger 
                  value="api" 
                  onClick={() => setActiveFilter('api')}
                  className="px-6"
                >
                  API Testing
                </TabsTrigger>
                <TabsTrigger 
                  value="bdd" 
                  onClick={() => setActiveFilter('bdd')}
                  className="px-6"
                >
                  BDD
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <motion.div 
                className="grid md:grid-cols-2 gap-8"
                initial="initial"
                animate="animate"
                variants={staggerContainer}
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    variants={fadeIn}
                  >
                    <div className="p-6 bg-primary/5 h-48 flex items-center justify-center">
                      {project.icon}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Key Features:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {project.features.map((feature, index) => (
                            <li key={index} className="text-sm">{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                        >
                          <Github className="mr-1 h-4 w-4" />
                          View on GitHub
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="automation" className="mt-0">
              {/* Content will be controlled by the filtered projects */}
            </TabsContent>
            
            <TabsContent value="api" className="mt-0">
              {/* Content will be controlled by the filtered projects */}
            </TabsContent>
            
            <TabsContent value="bdd" className="mt-0">
              {/* Content will be controlled by the filtered projects */}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Interested in Collaboration?</h2>
            <p className="text-lg mb-8">
              I'm always looking for new opportunities to collaborate on test automation projects.
              If you have a project in mind or want to discuss potential collaborations, feel free to reach out!
            </p>
            <Button asChild size="lg">
              <a href="https://github.com/aliyewusal" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Visit My GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;

