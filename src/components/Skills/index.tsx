// "use client";

// import { motion } from "framer-motion";

// const Skills = () => {
//   const skills = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Next.js",
//     "TypeScript",
//     "Tailwind",
//     "Jest",
//   ];

//   const radius = 120; // distance from the center of the orbit

//   return (
//     <section
//       id="skills"
//       className="py-20 bg-gradient-to-b from-indigo-400 to-white flex flex-col items-center justify-center"
//     >
//       <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-32">
//         My Skills
//       </h2>

//       <div className="relative  w-180 h-180">
//         {skills.map((skill, index) => {
//           const angle = (index / skills.length) * 2 * Math.PI; // radians
//           const x = radius * Math.cos(angle);
//           const y = radius * Math.sin(angle);

//           return (
//             <motion.div
//               key={index}
//               className="absolute w-20 h-20 bg-white rounded-full shadow-lg border border-indigo-200 flex items-center justify-center font-semibold text-indigo-600"
//               initial={{ x: 0, y: 0 }}
//               animate={{ x, y }}
//               transition={{
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 10,
//                 delay: index * 0.1,
//               }}
//               whileHover={{ scale: 1.2 }}
//             >
//               {skill}
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Skills;


// "use client";

// import { motion } from "framer-motion";

// const Skills = () => {
//   const skills = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Next.js",
//     "TypeScript",
//     "Tailwind",
//     "Jest",
//   ];

//   const radius = 100;
//   const centerX = 120;
//   const centerY = 120;

//   return (
//     <section
//       id="skills"
//       className="py-20 bg-gradient-to-b from-indigo-400 to-white flex flex-col items-center justify-center"
//     >
//       <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-32">
//         My Skills
//       </h2>

//       {/* Rotating container */}
//       <motion.div
//         className="relative w-[240px] h-[240px]"
//         animate={{ rotate: 360 }}
//         transition={{
//           repeat: Infinity,
//           duration: 20,
//           ease: "linear",
//         }}
//       >
//         {/* Optional center dot */}
//         <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-indigo-600 rounded-full transform -translate-x-1/2 -translate-y-1/2" />

//         {skills.map((skill, index) => {
//           const angle = (index / skills.length) * 2 * Math.PI;
//           const x = radius * Math.cos(angle);
//           const y = radius * Math.sin(angle);

//           return (
//             <div
//               key={index}
//               className="absolute w-20 h-20 bg-white rounded-full shadow-lg border border-indigo-200 flex items-center justify-center font-semibold text-indigo-600"
//               style={{
//                 top: centerY - 40 + y,
//                 left: centerX - 40 + x,
//               }}
//             >
//               {skill}
//             </div>
//           );
//         })}
//       </motion.div>
//     </section>
//   );
// };

// export default Skills;

"use client";

import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Jest",
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b to-indigo-400 from-white flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-12">
        My Skills
      </h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="w-24 h-24 bg-white rounded-full shadow-md border border-indigo-200 flex items-center justify-center font-semibold text-indigo-600"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;


