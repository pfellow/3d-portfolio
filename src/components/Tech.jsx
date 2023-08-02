import React from 'react';

import { Cloud, renderSimpleIcon } from 'react-icon-cloud';
// import js from 'simple-icons/icons/javascript';
// import nextjs from 'simple-icons/icons/nextdotjs';
import * as allIcons from 'simple-icons';
import { SectionWrapper } from '../hoc';

const slugs = [
  allIcons.siJavascript,
  allIcons.siNextdotjs,
  allIcons.siTypescript,
  allIcons.siHtml5,
  allIcons.siTailwindcss,
  allIcons.siReact,
  allIcons.siReactrouter,
  allIcons.siAmazonaws,
  allIcons.siAmazonec2,
  allIcons.siNodedotjs,
  allIcons.siExpress,
  allIcons.siMongodb,
  allIcons.siMongoose,
  allIcons.siMysql,
  allIcons.siGraphql
];

const icons = slugs.map((icon) => {
  return renderSimpleIcon({
    icon,
    bgHex: '#000',
    fallbackHex: '#fff',
    minContrastRatio: 3,
    color: 'white',
    size: 100,
    aProps: {
      onClick: (e) => e.preventDefault()
    }
  });
});

const IconCloud = () => {
  return (
    <Cloud
      options={{
        dragControl: true,
        maxSpeed: 0.01,
        outlineMethod: 'size',
        stretchX: 1.1,
        stretchY: 1.1,
        tooltip: 'native',
        tooltipDelay: 100,
        wheelZoom: false
      }}
    >
      {icons}
    </Cloud>
  );
};

const Tech = () => (
  <div className='flex justify-center'>
    <IconCloud />
  </div>
);

const TechSection = SectionWrapper(Tech, 'tech');

export default TechSection;
