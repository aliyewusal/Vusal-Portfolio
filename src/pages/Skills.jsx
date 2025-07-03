import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { 
  TestTube, 
  Code, 
  CheckCircle, 
  Server, 
  GitBranch, 
  Workflow, 
  FileCode, 
  GitPullRequest,
  BarChart,
  Database
} from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Test Automation Tools',
      description: 'Specialized tools for creating and executing automated tests',
      skills: [
        { name: 'Playwright', level: 90, icon: <TestTube className="h-6 w-6" />, description: 'End-to-end testing for modern web apps with cross-browser support' },
        { name: 'Cypress', level: 90, icon: <Code className="h-6 w-6" />, description: 'Front-end testing tool for modern web applications' },
        { name: 'Cucumber', level: 85, icon: <CheckCircle className="h-6 w-6" />, description: 'BDD tool for writing tests in natural language' },
        { name: 'Postman', level: 85, icon: <Server className="h-6 w-6" />, description: 'API development and testing platform' },
        { name: 'Selenium', level: 70, icon: <GitBranch className="h-6 w-6" />, description: 'Web browser automation tool' },
      ]
    },
    {
      title: 'Programming Languages',
      description: 'Languages used for developing test automation frameworks and scripts',
      skills: [
        { name: 'JavaScript', level: 85, icon: <Code className="h-6 w-6" />, description: 'Primary language for web automation' },
        { name: 'TypeScript', level: 85, icon: <FileCode className="h-6 w-6" />, description: 'Type-safe JavaScript for robust test frameworks' },
        { name: 'Java', level: 70, icon: <GitBranch className="h-6 w-6" />, description: 'Object-oriented language for enterprise test automation' },
      ]
    },
    {
      title: 'Testing Methodologies',
      description: 'Approaches and strategies for effective software testing',
      skills: [
        { name: 'Behavior-Driven Development (BDD)', level: 90, icon: <Workflow className="h-6 w-6" />, description: 'Collaborative approach connecting business and technical perspectives' },
        { name: 'API Testing', level: 85, icon: <Server className="h-6 w-6" />, description: 'Validating application interfaces and data exchanges' },
        { name: 'UI Automation', level: 90, icon: <Code className="h-6 w-6" />, description: 'End-to-end testing of user interfaces' },
        { name: 'Test-Driven Development (TDD)', level: 75, icon: <CheckCircle className="h-6 w-6" />, description: 'Writing tests before implementation' },
      ]
    },
    {
      title: 'Tools & Technologies',
      description: 'Additional tools and technologies used in the testing ecosystem',
      skills: [
        { name: 'Git/GitHub', level: 80, icon: <GitPullRequest className="h-6 w-6" />, description: 'Version control and collaboration' },
        { name: 'CI/CD Integration', level: 75, icon: <Workflow className="h-6 w-6" />, description: 'Automated testing in continuous integration pipelines' },
        { name: 'Test Reporting', level: 80, icon: <BarChart className="h-6 w-6" />, description: 'Creating comprehensive test result visualizations' },
        { name: 'Test Data Management', level: 75, icon: <Database className="h-6 w-6" />, description: 'Strategies for handling test data effectively' },
      ]
    }
  ];

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
            <h1 className="text-4xl font-bold mb-6">My Skills</h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive overview of my technical expertise and capabilities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Categories */}
      {skillCategories.map((category, categoryIndex) => (
        <section 
          key={categoryIndex} 
          className={`py-16 ${categoryIndex % 2 !== 0 ? 'bg-muted/30' : ''}`}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className="text-center mb-12" variants={fadeIn}>
                <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </motion.div>

              <div className="space-y-12">
                {category.skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="flex flex-col md:flex-row gap-6 items-center"
                    variants={fadeIn}
                  >
                    <div className="md:w-1/4 flex flex-col items-center md:items-start">
                      <div className="p-4 bg-primary/10 rounded-full mb-4">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-bold">{skill.name}</h3>
                    </div>
                    
                    <div className="md:w-3/4">
                      <div className="mb-4">
                        <p className="text-muted-foreground">{skill.description}</p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex-grow">
                          <Progress value={skill.level} className="h-2" />
                        </div>
                        <span className="text-sm font-medium">{skill.level}%</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Additional Skills Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Continuous Learning</h2>
            <p className="text-lg mb-8">
              I'm constantly expanding my skills and staying up-to-date with the latest testing technologies and methodologies. 
              Currently, I'm focusing on deepening my expertise in Playwright and exploring new approaches to test automation frameworks.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="p-4 bg-primary-foreground/10 rounded-lg">
                <h3 className="font-bold">Advanced Playwright</h3>
              </div>
              <div className="p-4 bg-primary-foreground/10 rounded-lg">
                <h3 className="font-bold">API Automation</h3>
              </div>
              <div className="p-4 bg-primary-foreground/10 rounded-lg">
                <h3 className="font-bold">CI/CD Pipelines</h3>
              </div>
              <div className="p-4 bg-primary-foreground/10 rounded-lg">
                <h3 className="font-bold">Test Architecture</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;

