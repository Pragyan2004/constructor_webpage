import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { planning } from '../export';

const Working = () => {
  return (
    <div id="working" className="w-full bg-white py-20">
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
          Step-by-step
        </motion.h1>

        <motion.h1
          variants={slideUpVariants}
          className="text-4xl font-bold text-yellow-500 text-center"
        >
          How it Work?
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
          {planning.map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-center gap-4">
              <div className="text-center">
                <h1 className="text-2xl font-bold uppercase">{item.title}</h1>
                <p className="text-lg text-gray-800">{item.about}</p>
              </div>
              <item.icon className="w-[60px] h-[60px] bg-yellow-500 hover:bg-black hover:fill-white p-4 rounded-full cursor-pointer" />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Working;
