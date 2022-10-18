import React from 'react';
import Image from 'next/future/image';
import Screen from '../public/assets/misk_screen.png';

const misk = () => {
  return (
    <div className='flex w-full h-screen'>
      <div className='flex w-full justify-center items-center'>
        <div className='relative w-[600px] object-contain'>
          <Image src={Screen} alt='image' layout='fill' />
        </div>
      </div>
    </div>
  );
};

export default misk;
