import { motion } from "framer-motion";
import { useRef } from "react";


const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/HaranathMondal",
    image: "/images/ecommerce.jpg", // Place in public/images/
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat with GPT-4 integration",
    tags: ["Next.js", "Firebase", "OpenAI"],
    link: "https://github.com/HaranathMondal",
    image: "/images/chatapp.jpg",
  },
  {
    title: "Portfolio Website",
    description: "Interactive 3D portfolio site",
    tags: ["Three.js", "GSAP", "React"],
    link: "https://github.com/HaranathMondal",
    image: "/images/portfolio.jpg",
  },
];

const ProjectCard = ({ project, customDelay }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: customDelay }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-xl overflow-hidden 
      shadow-lg hover:shadow-purple-800/40 transform-gpu 
      transition-all duration-500 bg-gradient-to-br from-gray-900 
      via-gray-950 to-black "
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover opacity-90 group-hover:opacity-100 transition duration-500"
      />

      {/* Content */}
      <div className="p-5 flex flex-col justify-between h-48">
        <div>
          <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
          <p className="text-sm text-gray-300">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-violet-800/30 text-purple-300 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-700/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
    </motion.a>
  );
};

const Projects = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 pt-[150px] md:pt-[150px] lg:pt-[150px]" >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-4 text-center"
        >
          My Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-1xl"
        >
          Explore some of the projects I’ve built, combining modern technologies and elegant designs.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} customDelay={index * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
