import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { allservices } from '../export';

const Services = () => {
  return (
    <div id='services' className='w-full bg-white py-20'>
      <motion.div
        variants={slideUpVariants}
        whileInView="visible"
        initial="hidden"
        className='lg:w-[80%] w-[90%] m-auto flex flex-col justify-center items-center gap-10'
      >
        <motion.h1
          variants={slideUpVariants}
          className='text-3xl font-bold text-yellow-500 text-center'
        >
          Special Offer
        </motion.h1>

        <motion.h1
          variants={slideUpVariants}
          className='text-4xl font-bold text-yellow-500 text-center'
        >
          Our Services
        </motion.h1>

        <motion.div
          variants={slideUpVariants}
          className='w-[120px] h-[6px] bg-yellow-500 mb-4'
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className='w-full grid lg:grid-cols-3 grid-cols-1 justify-items-center items-start gap-10 mt-10'
        >
          {
            allservices.map((item, index) => (
              <motion.div 
                key={index} 
                className='flex flex-col justify-center items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105'
              >
                <img 
                  src={item.icon} 
                  alt="icon" 
                  className='w-[80px] h-[80px] border-2 border-yellow-500 rounded-full p-2 bg-white'
                />
                <div className='flex flex-col justify-center items-center text-center'>
                  <h1 className='text-2xl font-bold text-yellow-500'>{item.title}</h1>
                  <p className='text-md text-gray-700'>{item.about}</p>
                </div>
              </motion.div>
            ))
          }
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
