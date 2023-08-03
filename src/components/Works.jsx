import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { portfolioIntro, projects } from '../data';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  link,
  source_code_link
}) => {
  return (
    <motion.div variants={fadeIn('down', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 200 }}
        className='bg-tertiary p-5 rounded-2xl 2xl:w-[550px] xl:w-[550px] lg:w-[440px] md:w-[310px] w-full'
      >
        <div
          className='relative w-full h-[230px] cursor-pointer'
          onClick={() => window.open(link, '_blank')}
        >
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-2 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='github link'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px] sm:visible hidden'>
            {name}
          </h3>
          <p className='mt-2 text-fourth text-[16px]'>
            {/* <p className='mt-2 text-fourth text-[16px] md:visible hidden'> */}
            {description}
          </p>
        </div>
        <div className='mt-4 flex flex-wrap gap-4'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Portfolio</p>
        <h2 className={styles.sectionHeadText}>
          Projects // Under Construction
        </h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-fourth text-[17px] max-w-3xl leading-[30px]'
        >
          {portfolioIntro}
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-4'>
        {projects.map((project, index) => (
          <ProjectCard key={`project.${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

const WorksSection = SectionWrapper(Works, 'portfolio');

export default WorksSection;
