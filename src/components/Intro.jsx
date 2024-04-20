import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { overview, services } from '../data';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='sm:w-[210px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-2 px-5 min-h-[150px] sm:min-h-[250px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
            style={{ fill: 'white' }}
          />
          <h3 className='text-white text-[20px] text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Intro = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-fourth text-[17px] max-w-3xl leading-[30px]'
      >
        {overview}
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-6'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const SectionAbout = SectionWrapper(Intro, 'intro');

export default SectionAbout;
