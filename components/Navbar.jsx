import Image from 'next/future/image';
import React from 'react';
import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';
import Logo from '../public/assets/logo.png';

const Navbar = () => {
  return (
    <div className='absolute w-full z-[100] '>
      <div className='flex justify-between items-center w-full h-full px-12 2xl:px-16 py-6 '>
        <Link href='/'>
          <div className='w-[140px] cursor-pointer'>
            <Image
              src={Logo}
              alt='image'
              layout='fill'
            />
          </div>
        </Link>
        <div>
          <ul className='flex'>
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
