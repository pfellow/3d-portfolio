import PropTypes from 'prop-types';
import {
  SiLinkedin,
  SiGithub,
  SiGmail,
  SiWhatsapp,
  SiTelegram,
} from '@icons-pack/react-simple-icons';

import { Link } from 'react-router-dom';

import { styles } from '../styles';

const Icon = ({ url, SiIcon }) => {
  return (
    <li>
      <Link to={url} target='_blank'>
        <SiIcon size={32} className='hover:text-secondary' />
      </Link>
    </li>
  );
};

Icon.propTypes = {
  url: PropTypes.string.isRequired,
  SiIcon: PropTypes.elementType.isRequired,
};

const Footer = () => {
  return (
    <div
      className={`${styles.paddingX} pt-6 sm:pb-6 pb-10 w-full flex sm:flex-row flex-col items-center bg-[#042433]`}
    >
      <div className='w-full flex sm:flex-row flex-col justify-between items-center gap-4 max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-white text-[18px] cursor-pointer flex'>
            <span>
              Copyright&nbsp;©&nbsp;{new Date().getFullYear()}&nbsp;Sergey
              Shilovskiy
            </span>
          </p>
        </Link>
        <ul className='list-none flex flex-row gap-3'>
          <Icon
            SiIcon={SiLinkedin}
            url='https://www.linkedin.com/in/sergey-shilovskiy/'
          />
          <Icon SiIcon={SiGithub} url='https://github.com/pfellow' />
          <Icon SiIcon={SiGmail} url='mailto:pfellow@gmail.com' />
          <Icon SiIcon={SiWhatsapp} url='https://wa.me/+642040003464' />
          <Icon SiIcon={SiTelegram} url='https://t.me/pfellow' />
        </ul>
      </div>
    </div>
  );
};

export default Footer;
