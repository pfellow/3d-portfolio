import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { aboutMeIntro, photos } from '../data';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

import swimming from '../assets/swimming.png';
import hiking from '../assets/hiking.png';
import computer from '../assets/computer.png';
import playstation from '../assets/ps.png';
import board from '../assets/board.png';
import friends from '../assets/friends.png';
import travelling from '../assets/travelling.png';
import exploring from '../assets/exploring.png';
import globe from '../assets/globe.png';
import netflix from '../assets/netflix.png';
import books from '../assets/books.png';

const PhotoCard = ({ index, name, image }) => {
  return (
    <motion.div variants={fadeIn('down', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 200 }}
        className='bg-tertiary p-5 rounded-2xl 2xl:w-[550px] xl:w-[550px] lg:w-[440px] md:w-[310px] w-full'
      >
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
        />
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Interests</p>
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-fourth text-[17px] max-w-3xl leading-[30px]'
        >
          {/* {aboutMeIntro} */}
          <p className='mb-4 leading-10'>
            I love spending my spare time{' '}
            <img src={swimming} className='inline w-10' /> and{' '}
            <img src={hiking} className='inline  w-10' />.
          </p>
          <p className='mb-4 leading-10'>
            I am also into playing{' '}
            <img src={computer} className='inline  w-8' alt='computer' />,{' '}
            <img src={playstation} className='inline  w-8' alt='playstation' />{' '}
            and <img src={board} className='inline  w-8' alt='board' /> games,
            reading and listening to science fiction{' '}
            <img src={books} className='inline  w-8' alt='books' />, watching{' '}
            <img src={netflix} className='inline  w-8' alt='tv shows' /> and
            socializing with my{' '}
            <img src={friends} className='inline  w-8' alt='friends' />.
          </p>
          <p className='leading-10'>
            I'm keen on{' '}
            <img src={travelling} className='inline  w-8' alt='travelling' />{' '}
            and <img src={exploring} className='inline  w-8' alt='exploring' />{' '}
            new places across{' '}
            <img src={globe} className='inline  w-8' alt='globe' />.
          </p>
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-4'>
        {photos.map((project, index) => (
          <PhotoCard key={`project.${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

const AboutSection = SectionWrapper(About, 'about');

export default AboutSection;
