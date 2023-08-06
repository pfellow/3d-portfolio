import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

import { styles } from '../styles';
import { navLinks } from '../data';
import { logo, menu, close } from '../assets';
import cv from '../assets/Sergey_Shilovskiy_CV.pdf';

const Navbar = () => {
  const [active, setActive] = React.useState('');
  const [toggle, setToggle] = React.useState();

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 top-0 z-20 bg-[#042433] fixed`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-12 h-12 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            <span>Sergey Shilovskiy&nbsp;</span>
            <span className='xl:block hidden'>{`/>`} Web Developer</span>
          </p>
        </Link>
        <ul className='list-none hidden lg:flex flex-row gap-7'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <a href={cv} download>
          <button className='text-secondary hover:text-white text-[18px] font-medium hidden lg:block'>
            <FontAwesomeIcon icon={faFileArrowDown} /> CV
          </button>
        </a>
        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt={menu}
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle((toggle) => !toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex flex-col items-start'
            } p-6 dark-blue-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl  w-[200px]`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4 mb-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-fourth'
                  } font-poppins font-medium cursor-pointer text-[18px] hover:text-primary`}
                  onClick={() => {
                    setToggle((toggle) => !toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            <a href={cv} download>
              <button className='text-secondary hover:text-primary text-[18px] font-medium'>
                <FontAwesomeIcon icon={faFileArrowDown} /> CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
