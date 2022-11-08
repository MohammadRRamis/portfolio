import Image from 'next/future/image';
import React from 'react';
import { Link as Scroll } from 'react-scroll';
import Me from '../public/assets/me.png';

const Main = () => {
  return (
    <div className='relative flex items-center'>
      <div className='px-12 2xl:px-16'>
        <h1 className='pb-11'>
          Hey! This is <span>MRA</span>
        </h1>
        <p className='max-w-4xl leading-10 pb-16'>
          I&#39;m <span>M</span>ohammad Al <span>Ra</span>mis, a UX/UI designer
          with a background in software engineering. I strive to connect the dots
          between software development and UX.
        </p>
        <Scroll to='about' spy={true} smooth={true}>
          <button className='text-3xl font-medium text-[#6FC2FF] box-border flex flex-row justify-center items-center px-10 py-4 gap-2.5 border-[3px] border-solid border-[#6FC2FF] hover:bg-[#6FC2FF] hover:text-[#F8F9FA] transition-all duration-300'>
            More about me!
          </button>
        </Scroll>
      </div>
      <div className='absolute 2xl:right-[200px] lg:right-[100px] bottom-0 z-[99] 2xl:w-[500px] w-[389px] object-contain'>
        <Image src={Me} alt='image' layout='fill' />
      </div>

      <div className='flex justify-end w-full h-screen'>
        <div className='absolute flex flex-row-reverse content-center justify-center items-center'>
          <div className='md:w-[65vw] md:border-solid md:border-transparent md:border-r-[350px] md:border-b-[100vh] md:border-b-[#f2f2f2] md:rotate-180'></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
