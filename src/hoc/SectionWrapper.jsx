import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => {
  return function HOC() {
    return (
      <motion.section
        variant={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <div className='hash-spn mb-14' id={idName}>
          &nbsp;
        </div>
        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;
