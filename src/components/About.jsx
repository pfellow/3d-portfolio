import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
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
import programming from '../assets/programming.png';
import sergey from '../assets/sergey.jpg';
import newzealand from '../assets/newzealand.png';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Interests</p>
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>
      <div className='w-full lg:flex gap-4 justify-between items-center'>
        <motion.div
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-4 text-fourth sm:text-[20px]  sm:leading-[30px] text-[18px] leading-[22px] lg:w-[60%] max-w-[600px] '
        >
          <div className='mb-4 leading-10'>
            I love spending my spare time{' '}
            <img src={swimming} className='inline h-8' alt='swimming' />,{' '}
            <img src={hiking} className='inline  h-8' alt='hiking' />, and{' '}
            <img src={programming} className='inline  h-8' alt='programming' />.
          </div>
          <div className='mb-4 leading-10'>
            I am also into playing{' '}
            <img src={computer} className='inline h-8' alt='computer' />,{' '}
            <img src={playstation} className='inline  w-8' alt='playstation' />{' '}
            and <img src={board} className='inline h-8' alt='board' /> games,
            reading and listening to science fiction{' '}
            <img src={books} className='inline h-8' alt='books' />, watching{' '}
            <img src={netflix} className='inline h-8' alt='tv shows' /> and
            socializing with my{' '}
            <img src={friends} className='inline h-8' alt='friends' />.
          </div>
          <div className='mb-4 leading-10'>
            I'm keen on{' '}
            <img src={travelling} className='inline h-8' alt='travelling' /> and{' '}
            <img src={exploring} className='inline h-8' alt='exploring' /> new
            places across <img src={globe} className='inline h-8' alt='globe' />
            .
          </div>
          <div className='mb-4 leading-10'>
            I'm based in Wellington{' '}
            <img src={newzealand} className='inline h-8' alt='New Zealand' />{' '}
            but open to relocation to other cities of Aotearoa.
          </div>
        </motion.div>
        <div className='lg:w-[40%] max-w-[500px] lg:mt-0 mt-10'>
          <motion.div variants={fadeIn('down', 'spring', 0.5, 0.75)}>
            <Tilt
              options={{ max: 45, scale: 1, speed: 200 }}
              className='bg-tertiary p-1 rounded-md'
            >
              <img
                src={sergey}
                alt="Sergey's photo"
                className='w-full h-full object-cover rounded-md'
              />
            </Tilt>
          </motion.div>
        </div>
      </div>
    </>
  );
};

const AboutSection = SectionWrapper(About, 'about');

export default AboutSection;
