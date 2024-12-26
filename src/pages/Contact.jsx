import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const Contact = () => {
  return (
    <div id='contact' className='bg-white w-full'>

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
          Contact us
        </motion.h1>

        <motion.h1
          variants={slideUpVariants}
          className='text-black-500 text-4xl font-bold'
        >
          Reach us for query
          
        </motion.h1>
        
        <div className='w-[120px] h-[4px] bg-yellow-500 my-4 mx-auto'></div>

        <p className='text-black text-lg mx-4'>
          At Prime Constructions, we believe in building more than just structures; we create spaces that inspire and elevate the living experience. 
          Our team is dedicated to providing exceptional craftsmanship and innovative designs tailored to your needs.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='flex-1 flex justify-center items-center lg:w-[60%] w-full flex-col lg:gap-8 gap-4 text-center'
      >
        <motion.form
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className='flex flex-col gap-4'
        >
<input type='text' placeholder='Enter FullName' className='px-6 py-3 bottom-[2px] border-black rounded-lg w-full'/>
<input type='email' placeholder='Enter Email' className='px-6 py-3 bottom-[2px] border-black rounded-lg w-full'/>
<input type='number' placeholder='Enter PhoneNumber' className='px-6 py-3 bottom-[2px] border-black rounded-lg w-full'/>
<textarea placeholder='Enter Message' className='px-6 py-3 bottom-[2px] border-black rounded-lg w-full'/>
<motion.button variants={zoomInVariants} className='bg-yellow-500 text-white px-6 py-3 rounded-lg w-full'>Submit</motion.button>
        </motion.form>
      </motion.div>
    </div>
    </div>
  );
};

export default Contact;
