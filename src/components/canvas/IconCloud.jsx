import { Cloud, renderSimpleIcon } from 'react-icon-cloud';
import * as allIcons from 'simple-icons';

const slugs = [
  allIcons.siJavascript,
  allIcons.siNextdotjs,
  allIcons.siTypescript,
  allIcons.siHtml5,
  allIcons.siCss3,
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
  allIcons.siGraphql,
  allIcons.siGit,
  allIcons.siRedux,
  allIcons.siJest,
  allIcons.siCypress,
  allIcons.siWix,
  allIcons.siTestrail,
  allIcons.siJira,
  allIcons.siConfluence,
  allIcons.siUnity
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

export default IconCloud;
