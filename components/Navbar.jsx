import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';
import Logo from '../public/assets/logo.png';
import { useState } from 'react';

const Navbar = () => {
  const [isMenu, setMenu] = useState(true);

  const handleMenu = () => {
    setMenu(!isMenu);
  };

  return (
    <div className='absolute w-full z-[100] '>
      <div className='flex justify-between items-center w-full h-full px-12 2xl:px-16 py-6 '>
        <Link href='/'>
          <div className='w-[140px] cursor-pointer'>
            <Image src={Logo} alt='image' priority={true} />
          </div>
        </Link>
        <div>
          <div
            className='w-[60px] h-[45px] relative rotate-0 ease-in-out duration-500'
            onClick={handleMenu}
          >
            <div
              className={
                isMenu
                  ? 'block absolute left-0 top-0 origin-[left_center] h-[9px] w-full bg-white rounded-[9px] opacity-100 rotate-0 ease-in-out duration-200'
                  : 'block absolute left-[8px] top-[-3px] origin-[left_center] h-[9px] w-full bg-white rounded-[9px] opacity-100 rotate-45 ease-in-out duration-200'
              }
            ></div>
            <div
              className={
                isMenu
                  ? 'block absolute left-0 top-[18px] origin-[left_center] h-[9px] w-full bg-white rounded-[9px] opacity-100 rotate-0 ease-in-out duration-200'
                  : 'block absolute left-0 top-[18px] origin-[left_center] h-[9px] w-0 bg-white rounded-[9px] opacity-0 rotate-0 ease-in-out duration-200'
              }
            ></div>
            <div
              className={
                isMenu
                  ? 'block absolute left-0 top-[36px] origin-[left_center] h-[9px] w-full bg-white rounded-[9px] opacity-100 rotate-0 ease-in-out duration-200'
                  : 'block absolute left-[8px] top-[39px] origin-[left_center] h-[9px] w-full bg-white rounded-[9px] opacity-100 rotate-[-45deg] ease-in-out duration-200'
              }
            ></div>
          </div>
          <ul className='lg:flex hidden'>
            <li className='ml-20 uppercase hover:border-b hover:-mb-[1px] border-[#1D1D1D]'>
              <Scroll to='work' spy={true} smooth={true}>
                Work
              </Scroll>
            </li>
            <li className='ml-20 uppercase hover:border-b hover:-mb-[1px] border-[#1D1D1D]'>
              <Scroll to='about' spy={true} smooth={true}>
                About
              </Scroll>
            </li>
            <li className='ml-20 uppercase hover:border-b hover:-mb-[1px] border-[#1D1D1D]'>
              <a
                target='_blank'
                href='https://drive.google.com/file/d/1xPqqhQoCWR8yNGmVsa_J0sAUMqoK8d9_/view?usp=sharing'
                rel='noopener noreferrer'
              >
                CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
