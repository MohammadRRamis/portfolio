import Image from 'next/image';
import React from 'react';
import { Link as Scroll } from 'react-scroll';
import Me from '../public/assets/me.webp';
import { useState, useEffect } from 'react';

const Main = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => setShow(false), 100);
  }, []);

  return (
    <div className='relative flex items-center'>
      {/* Text */}
      <div className='xl:px-8 px-12 2xl:px-16 animate-show'>
        <h1 className='pb-11'>
          Hey! This is <span>MRA</span>
        </h1>
        <p className='max-w-4xl leading-10 pb-16'>
          I&#39;m <span>M</span>ohammad Al <span>Ra</span>mis, a UX/UI designer
          with background in software engineering. I strive to connect the dots
          between software development and UX.
        </p>
        <Scroll to='about' spy={true} smooth={true}>
          <button className='text-3xl font-medium text-[#6FC2FF] box-border flex flex-row justify-center items-center px-10 py-4 gap-2.5 border-[3px] border-solid border-[#6FC2FF] hover:bg-[#6FC2FF] hover:text-[#F8F9FA] transition-all duration-300'>
            More about me!
          </button>
        </Scroll>
      </div>

      {/* Image */}
      <div className='absolute 2xl:right-[10%] right-[5%] bottom-0 z-[99] 4xl:w-[600px] 3xl:w-[470px] 1.5xl:w-[400px] w-[380px] object-contain animate-show'>
        <Image
          src={Me}
          alt='image'
          sizes='(min-width: 2560px) 600px, (min-width: 1920px) 470px, (min-width: 1440px) 400px, 380px'
          priority={true}
          placeholder='blur'
        />
      </div>

      {/* Background */}
      <div className='flex justify-end w-full h-screen'>
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
