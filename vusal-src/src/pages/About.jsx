import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import profileImage from '../assets/profile.png';

const About = () => {
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
    { category: 'Test Automation Frameworks', items: [
      { name: 'Playwright', level: 90 },
      { name: 'Cypress', level: 90 },
      { name: 'Cucumber', level: 85 },
      { name: 'Selenium', level: 70 },
    ]},
    { category: 'Programming Languages', items: [
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 85 },
      { name: 'Java', level: 70 },
    ]},
    { category: 'Testing Approaches', items: [
      { name: 'Behavior-Driven Development (BDD)', level: 90 },
      { name: 'API Testing', level: 85 },
      { name: 'UI Automation', level: 90 },
      { name: 'Test-Driven Development (TDD)', level: 75 },
    ]},
    { category: 'Tools & Technologies', items: [
      { name: 'Postman', level: 85 },
      { name: 'Git/GitHub', level: 80 },
      { name: 'CI/CD Integration', level: 75 },
      { name: 'Test Reporting', level: 80 },
    ]},
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
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-lg text-muted-foreground">
              Learn more about my background, skills, and approach to test automation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              className="md:w-1/3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl"></div>
                <img 
                  src={profileImage} 
                  alt="Vusal Aliyev" 
                  className="relative z-10 rounded-2xl w-full h-auto shadow-xl"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-2/3"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl font-bold mb-6"
                variants={fadeIn}
              >
                Professional Biography
              </motion.h2>
              
              <motion.div variants={fadeIn}>
                <p className="mb-4">
                  I am Vusal Aliyev, a Software Test Automation Engineer with expertise in modern testing frameworks and methodologies. My professional journey is centered around creating efficient, scalable test automation solutions that enhance software quality and reliability.
                </p>
                <p className="mb-4">
                  I specialize in implementing test automation frameworks using Playwright, Cypress, and Cucumber, with a strong focus on behavior-driven development approaches. My technical toolkit includes proficiency in JavaScript, TypeScript, and Java, allowing me to develop comprehensive testing solutions across different platforms and technologies.
                </p>
                <p className="mb-4">
                  Currently, I'm focused on advancing my expertise in Playwright and looking for opportunities to collaborate on innovative test automation frameworks. I believe in the power of well-designed test architecture to not only catch bugs but to improve the overall development process.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">My Approach to Test Automation</h2>
            <p className="mb-8 text-center">
              My approach to test automation is built on three core principles:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">Maintainability</h3>
                <p>
                  Creating test frameworks that are easy to maintain and extend over time, reducing technical debt and ensuring longevity.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">Reliability</h3>
                <p>
                  Developing stable tests that provide consistent results and minimize flakiness, building confidence in the testing process.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">Efficiency</h3>
                <p>
                  Optimizing test execution and reporting to provide quick feedback and integrate seamlessly into CI/CD pipelines.
                </p>
              </div>
            </div>

            <p className="mt-8 text-center">
              I believe that effective test automation is not just about finding bugs but about improving the entire software development lifecycle through quality-focused practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2">Skills & Expertise</h2>
            <p className="text-muted-foreground">A comprehensive overview of my technical skills</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div 
                key={groupIndex}
                className="mb-12"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h3 
                  className="text-xl font-bold mb-6"
                  variants={fadeIn}
                >
                  {skillGroup.category}
                </motion.h3>
                
                <div className="space-y-6">
                  {skillGroup.items.map((skill, index) => (
                    <motion.div key={index} variants={fadeIn}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;

