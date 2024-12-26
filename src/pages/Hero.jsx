import React from 'react';
import heroing from '../assets/heroimg.png'; 
import background from '../assets/homeimg.webp';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div
      id='hero'
      className='bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] flex justify-between items-center lg:flex-row flex-col lg:gap-5'
      style={{ 
        backgroundImage: `url(${background})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='flex-1 flex justify-center items-center lg:w-[60%] w-full flex-col lg:gap-8 gap-4 text-center'
      >
        <motion.h1
          variants={slideUpVariants}
          className='text-5xl lg:text-6xl font-bold text-yellow'
        >
          We are the builders
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className='text-5xl lg:text-6xl font-bold text-yellow'
        >
          We will build your dream
        </motion.h1>
        
        <div className='w-[120px] h-[6px] bg-yellow-500 my-4 mx-auto'></div>
        
        <p className='text-white text-[20px] mx-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className='flex justify-center items-center gap-5 mt-4'
        >
          <motion.button
            variants={zoomInVariants}
            whileInView="visible"
            className='w-[150px] h-[50px] bg-yellow-500 hover:bg-white hover:text-black font-bold rounded-md transition-all px-6 py-3'
          >
            READ MORE
          </motion.button>
        </motion.div>

        <motion.button
          variants={zoomInVariants}
          whileInView="visible"
          className='border border-white hover:border-yellow-500 hover:text-yellow-500 font-bold rounded-md transition-all px-10 py-3 mt-2'
        >
          Contact Us
        </motion.button>
      </motion.div>

      <div className='flex justify-center items-end lg:w-[40%] w-full'>
        <motion.img 
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          src={heroing} 
          alt='Hero Illustration' 
          className='lg:h-[600px] h-[400px] lg:-mb-20 object-cover'
        />
      </div>
    </div>
  );
};

export default Hero;
