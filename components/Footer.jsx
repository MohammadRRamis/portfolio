import React from 'react';
import Image from 'next/image';
import Twitter from '../public/assets/twitter.png';
import Medium from '../public/assets/medium.png';
import Linkedin from '../public/assets/linkedin.png';
import Github from '../public/assets/github.png';
import Email from '../public/assets/email.png';

const Footer = () => {
  return (
    <div className='flex flex-col bg-gblack w-full h-[200px] items-center justify-center space-y-5'>
      <div className='flex justify-center items-center lg:space-x-11 space-x-5 w-full'>
        <a
          target='_blank'
          href='https://twitter.com/MohammadRRamis'
          rel='noopener noreferrer'
        >
          <div className='relative lg:w-auto w-[48px] object-contain cursor-pointer bg-[#D8E2E7] p-2 hover:bg-[#6FC2FF] transition-all duration-300 ease-in-out'>
            <Image src={Twitter} alt='image' />
          </div>
        </a>
        <a
          target='_blank'
          href='https://medium.com/@mohammadrramis'
          rel='noopener noreferrer'
        >
          <div className='relative lg:w-auto w-[48px] object-contain cursor-pointer bg-[#D8E2E7] p-2 hover:bg-[#6FC2FF] transition-all duration-300 ease-in-out'>
            <Image src={Medium} alt='image' />
          </div>
        </a>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/mohammadrramis/'
          rel='noopener noreferrer'
        >
          <div className='relative lg:w-auto w-[48px] object-contain cursor-pointer bg-[#D8E2E7] p-2 hover:bg-[#6FC2FF] transition-all duration-300 ease-in-out'>
            <Image src={Linkedin} alt='image' />
          </div>
        </a>
        <a
          target='_blank'
          href='https://github.com/MohammadRRamis'
          rel='noopener noreferrer'
        >
          <div className='relative lg:w-auto w-[48px] object-contain cursor-pointer bg-[#D8E2E7] p-2 hover:bg-[#6FC2FF] transition-all duration-300 ease-in-out'>
            <Image src={Github} alt='image' />
          </div>
        </a>
        <a
          target='_blank'
          href='mailto:MohammadRRamis@outlook.com'
          rel='noopener noreferrer'
        >
          <div className='relative lg:w-auto w-[48px] object-contain cursor-pointer bg-[#D8E2E7] p-2 hover:bg-[#6FC2FF] transition-all duration-300 ease-in-out'>
            <Image src={Email} alt='image' />
          </div>
        </a>
      </div>
      <p className='text-center pt-1 text-2xl'>
        Mohammad Al Ramis &#169;{new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
