import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const About = () => {
  return (
    <div className='w-full m-auto py-20 flex flex-col lg:flex-row justify-between items-start gap-10' id='about'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='flex-1 flex justify-center items-center lg:w-[60%] w-full flex-col lg:gap-8 gap-4 text-center'
      >
        <motion.h1
          variants={slideUpVariants}
          className='text-yellow-500 text-3xl font-bold'
        >
          Welcome to
        </motion.h1>

        <motion.h1
          variants={slideUpVariants}
          className='text-yellow-500 text-4xl font-bold'
        >
          Prime Constructions
        </motion.h1>
        
        <div className='w-[120px] h-[4px] bg-yellow-500 my-4 mx-auto'></div>

        <p className='text-white text-lg mx-4'>
          At Prime Constructions, we believe in building more than just structures; we create spaces that inspire and elevate the living experience. 
          Our team is dedicated to providing exceptional craftsmanship and innovative designs tailored to your needs.
        </p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='flex-1 flex justify-center items-center lg:w-[40%] w-full h-full flex-col'
      >
        <p className='text-white text-lg px-50 mt-10'>
          Our services include residential and commercial construction, renovations, project management, and sustainable building solutions. 
          We use the latest technology and best practices in the industry to ensure that every project meets our high standards of quality.
        </p>
        
        <motion.button
          variants={zoomInVariants}
          className='text-white bg-yellow-500 py-2 px-5 rounded-3xl font-bold mt-10'
        >
          Read More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
