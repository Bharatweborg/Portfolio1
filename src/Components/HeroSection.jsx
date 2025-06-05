import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen hover:shadow-purple-800/40 transform-gpu 
      transition-all duration-500 bg-gradient-to-br from-gray-900 
      via-gray-950 to-black flex xl:flex-row  
items-center justify-between lg:px-24 px-10 relative overflow-hidden
pt-[50px] md:pt-[70px] lg:pt-[80px]">


      {/* Left Section */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-4xl md:text-6xl 
          lg:text-7xl font-bold z-10 mb-6">
          Building Fast <br /> Reliable Results
        </motion.h1>
         <motion.p 
         initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}

         className="text-xl md:text-1xl 
         lg:text-2xl text-purple-200 max-w-2xl">
          I deliver robust, production-ready 
          websites and web apps with speed 
          and precision. Every project is 
          backed by 
          clean code, clear communication, 
          and a communicate to getting it 
          done, on time, every time.
         </motion.p>
      </div>
      {/* Right Section */}
      
    </section>
  )
}

export default HeroSection