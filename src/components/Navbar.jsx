import React from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../data';
import { logo, menu, close } from '../assets';

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
            <span className='sm:block hidden'>Sergey&nbsp;</span>
            <span className='md:block hidden'>Shilovskiy&nbsp;</span>
            <span className='sm:hidden'>Sergey Shilovskiy</span>
            <span className='sm:block hidden'>{`/>`} Web Developer</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-7'>
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
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt={menu}
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle((toggle) => !toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 dark-blue-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-fourth'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle((toggle) => !toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
