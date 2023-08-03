import React from 'react';
import { SectionWrapper } from '../hoc';
import { IconCloud } from './canvas';

const Tech = () => (
  <div className='flex justify-center'>
    <IconCloud />
  </div>
);

const TechSection = SectionWrapper(Tech, 'tech');

export default TechSection;
