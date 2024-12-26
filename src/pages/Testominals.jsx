import React from 'react';
import { motion } from 'framer-motion';
import { zoomInVariants, slideUpVariants } from './animation';
import { clients } from '../export';

const Testominals = () => {
  return (
    <div id="working" className="w-full py-20">
      <motion.div
        variants={slideUpVariants}
        whileInView="visible"
        initial="hidden"
        className="lg:w-[80%] w-[90%] m-auto flex flex-col justify-center items-center gap-10"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-3xl font-bold text-yellow-500 text-center"
        >
          Testominals
        </motion.h1>

        <motion.h1
          variants={slideUpVariants}
          className="text-4xl font-bold text-white text-center"
        >
          What Your Clients Says!!
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
          {clients.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-4"
            >
              <div className="border-2 border-white hover:bg-yellow-100 pb-[30px] pt-[30px] px-6 rounded-lg shadow-md">
                <p className="text-white text-center text-lg">{item.about}</p>
              </div>
              <div className="w-full flex justify-center items-center mt-4">
                {/* <img
                  className="w-[60px] h-[60px] rounded-full object-cover"
                  src={item.img}
                  alt={`${item.name}'s testimonial image`}
                /> */}
              </div>
              <h1 className="text-white text-center mt-2 font-bold">{item.name}</h1>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testominals;
