'use client'

import { motion, Variants } from "framer-motion";

interface AboutMeProps {
  className?: string; // optional className for extra styling
}

// Type-safe container variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Type-safe item variants
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier array, TypeScript safe
    },
  },
};

const AboutMe: React.FC<AboutMeProps> = ({ className }) => {
  return (
    <section
      id="about"
      className={`py-20 bg-gradient-to-b from-white to-indigo-400 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Staggered animation container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-indigo-600 mb-6"
          >
            About Me
          </motion.h3>

          {/* Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-gray-700 leading-relaxed text-lg"
          >
            I'm a Front-End Developer based in Sweden, currently studying at{" "}
            <span className="font-semibold text-indigo-500">FutureGames</span>.  
            I specialize in{" "}
            <span className="font-semibold">
              React, Next.js, TypeScript, and Tailwind CSS
            </span>.  
            I love building clean, accessible, and responsive web applications.
          </motion.p>

          {/* Floating Card with continuous animation */}
          <motion.div
            variants={itemVariants}
            className="mt-10 p-6 bg-white shadow-xl rounded-2xl border border-indigo-100"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 25px rgba(79, 70, 229, 0.2)",
            }}
            animate={{
              y: [0, -10, 0], // float up and down
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <p className="text-indigo-600 font-medium">
              ✨ Passionate about modern UI/UX
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
