import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ImacCanvas } from './canvas';
import { heroText } from '../data';

const Hero = () => {
  return (
    <>
      <section className='w-full mx-auto mt-16'>
        <div
          className={`${styles.paddingX} inset-0 max-w-7xl flex flex-col justify-start items-start`}
        >
          <div className='flex flex-row gap-5 mt-10'>
            <div className='flex flex-col justify-start items-center mt-5'>
              <div className='w-5 h-5 rounded-full bg-[#1282a2]' />
              <div className='w-1 h-full blue-gradient' />
            </div>

            <div>
              <h1
                className={`${styles.heroHeadText} text-white md:max-w-[80%]`}
              >
                Kia ora, I'm&nbsp;
                <span className='text-[#1282a2]'>Sergey Shilovskiy</span>
              </h1>
              <p
                className={`${styles.heroSubText} mt-5 text-white-100 md:max-w-[90%]`}
              >
                {heroText}
              </p>
            </div>
          </div>
        </div>
        <div className='md:h-[47vw] max-h-[600px] h-[300px] w-full'>
          <ImacCanvas />
        </div>
        <div className='xs:bottom-10 bottom-32 w-full flex justify-center items-center pb-2'>
          <a href='#intro' className='block'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-fourth flex justify-center items-start p-2 cursor-pointer'>
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className='w-3 h-3 rounded-full bg-fourth mb-1'
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
