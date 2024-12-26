import React from 'react';
import { motion } from 'framer-motion';
import { zoomInVariants, slideUpVariants } from './animation';

const Portfolio = () => {
  // Ensure these variables are defined or imported properly
  const allservices = [
    // Example service items
    { icon: 'src/assets/logo1.png', title: 'Service 1' },
    { icon: 'src/assets/logo2.png', title: 'Service 2' },
    { icon: 'src/assets/logo3.png', title: 'Service 3' },
  ];

  const project1 = 'src/assets/project1.jpg';
  const project2 = 'src/assets/project2.jpg';
  const project3 = 'src/assets/project3.jpg';
  const project4 = 'src/assets/project4.jpg';
  const project5 = 'src/assets/project5.jpg';
  const project6 = 'src/assets/project6.jpg';
  const project7 = 'src/assets/project7.jpg';
  const project8 = 'src/assets/project8.jpg';

  return (
    <div id="projects" className="w-full">
      <motion.div
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        className="lg:w-[80%] w-[90%] m-auto flex flex-col justify-center items-center gap-10"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-3xl font-bold text-white text-center"
        >
          Special Offers
        </motion.h1>

        <motion.h1
          variants={slideUpVariants}
          className="text-4xl font-bold text-white text-center"
        >
          Portfolio
        </motion.h1>

        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-yellow-500 mb-4"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-items-center items-start gap-10 mt-10"
        >
          {allservices.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-center items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={item.icon}
                alt={`${item.title} icon`}
                className="w-[80px] h-[80px] border-2 border-yellow-500 rounded-full p-2 bg-white"
              />
              <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-2xl font-bold text-yellow-500">{item.title}</h1>
                <p className="text-md text-gray-700">{item.about}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="w-full grid lg:grid-cols-4 grid-cols-2 gap-4 m-auto mt-10"
      >
        <img src={project1} alt="Project 1" className="h-[250px] w-full object-cover rounded-lg shadow-md" />
        <img src={project2} alt="Project 2" className="h-[250px] w-full object-cover rounded-lg shadow-md" />
        <img src={project3} alt="Project 3" className="h-[250px] w-full object-cover rounded-lg shadow-md" />
        <img src={project4} alt="Project 4" className="h-[250px] w-full object-cover rounded-lg shadow-md" />
        <img src={project5} alt="Project 5" className="h-[250px] w-full object-cover rounded-lg shadow-md" />
        <img src={project6} alt="Project 6" className="h-[250px] w-full object-cover rounded-lg shadow-md" />
        <img src={project7} alt="Project 7" className="h-[250px] w-full object-cover rounded-lg shadow-md" />
        <img src={project8} alt="Project 8" className="h-[250px] w-full object-cover rounded-lg shadow-md" />
      </motion.div>
    </div>
  );
};

export default Portfolio;
