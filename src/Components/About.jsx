import { motion } from "framer-motion";
import { FiAward, FiCode, FiLayers } from "react-icons/fi";

const skills = [
  { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { name: "Backend", items: ["Node.js", "Express", "Firebase", "MongoDB"] },
  { name: "Design", items: ["Figma", "Adobe XD", "UI/UX", "Prototyping"] }
];

const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-20 px-4 sm:px-6 pt-[150px] md:pt-[150px] lg:pt-[150px]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Here's my story and what drives me to create exceptional digital experiences.
          </motion.p>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Who Am I?
            </h3>
            <div className="text-2xl space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm a passionate full-stack developer with 5+ years of experience creating 
                beautiful, functional digital products. My journey began when I built my 
                first website at 16, and I've been hooked ever since.
              </p>
              <p>
                I specialize in creating immersive web experiences using modern technologies 
                like React, Next.js, and Tailwind CSS. My design background helps me bridge 
                the gap between aesthetics and functionality.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing 
                to open-source projects, or hiking in the mountains.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            
            
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">Skills</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-12 h-12 rounded-lg ${index === 0 ? 'bg-violet-100 dark:bg-violet-900/50' : index === 1 ? 'bg-purple-100 dark:bg-purple-900/50' : 'bg-fuchsia-100 dark:bg-fuchsia-900/50'} flex items-center justify-center mb-4`}>
                  {index === 0 ? <FiCode className="text-violet-600 dark:text-violet-400 text-xl" /> : 
                   index === 1 ? <FiLayers className="text-purple-600 dark:text-purple-400 text-xl" /> : 
                   <FiAward className="text-fuchsia-600 dark:text-fuchsia-400 text-xl" />}
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{skill.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span 
                      key={item}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-violet-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <FiCode className="text-4xl mx-auto mb-6 text-white/50" />
            <h3 className="text-2xl md:text-3xl font-bold mb-6">My Development Philosophy</h3>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              "I believe in creating digital experiences that are not just functional, but delightful. 
              Every pixel and line of code should serve a purpose while creating emotional connections 
              with users."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
                <p className="font-medium">Clean Code</p>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
                <p className="font-medium">User-Centered Design</p>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
                <p className="font-medium">Performance First</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;