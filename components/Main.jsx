import Image from 'next/image';
import React from 'react';
import { Link as Scroll } from 'react-scroll';
import Me from '../public/assets/me.webp';
import MeMobile from '../public/assets/me_mobile.png';
import { useState, useEffect } from 'react';

const Main = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => setShow(false), 100);
  }, []);

  return (
    <div className='relative flex lg:flex-row lg:pt-0 items-center flex-col pt-28 lg:space-y-0 space-y-11'>
      <div className='lg:hidden md:w-[477px] w-[326px] md:pt-5 object-contain animate-show'>
        <Image
          src={MeMobile}
          alt='image'
          sizes='(min-width: 768px) 477px, 326px'
          priority={true}
          placeholder='blur'
        />
      </div>

      <div className='xl:px-8 lg:px-12 2xl:px-16 px-5 animate-show'>
        {/* Text */}
        <h1 className='lg:pb-11 pb-5 leading-[87px] lg:text-6xl lg:text-left text-[58px] text-center'>
          Hey! This is <span>MRA</span>
        </h1>
        <p className='max-w-4xl leading-10 pb-16 lg:text-2xl lg:text-left text-center text-[23px] lg:px-0 md:px-24'>
          I&#39;m <span>M</span>ohammad Al <span>Ra</span>mis, a UX/UI designer
          with background in software engineering. I strive to connect the dots
          between software development and UX.
        </p>
        {/* CTA Button */}
        <Scroll className='lg:block hidden' to='about' spy={true} smooth={true}>
          <button className='text-3xl font-medium text-[#6FC2FF] box-border flex flex-row justify-center items-center px-10 py-4 gap-2.5 border-[3px] border-solid border-[#6FC2FF] hover:bg-[#6FC2FF] hover:text-[#F8F9FA] transition-all duration-300'>
            More about me!
          </button>
        </Scroll>
      </div>

      {/* Image */}
      <div className='lg:block absolute 2xl:right-[10%] right-[5%] bottom-0 z-[99] 4xl:w-[600px] 3xl:w-[470px] 1.5xl:w-[400px] w-[380px] object-contain animate-show hidden'>
        <Image
          src={Me}
          alt='image'
          sizes='(min-width: 2560px) 600px, (min-width: 1920px) 470px, (min-width: 1440px) 400px, 380px'
          priority={true}
          placeholder='blur'
        />
      </div>

      {/* Background */}
      <div className='lg:flex lg:justify-end lg:w-full lg:h-screen hidden'>
        <div className='absolute flex flex-row-reverse content-center justify-center items-center'>
          <div
            className={
              show
                ? 'md:w-[0vw] md:border-solid md:border-transparent md:border-r-[0px] md:border-b-[100vh] md:border-b-[#f2f2f2] md:rotate-180 transition-all duration-1000 ease-in-out'
                : 'md:w-[65vw] md:border-solid md:border-transparent md:border-r-[350px] md:border-b-[100vh] md:border-b-[#f2f2f2] md:rotate-180 transition-all duration-1000 ease-in-out'
            }
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
