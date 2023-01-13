import React from 'react';
import Image from 'next/image';
import oldUserFlow from '../../public/assets/miskhub/oldUserFlow.webp';
import newUserFlow from '../../public/assets/miskhub/newUserFlow.webp';

const Ideate = () => {
  return (
    <div className='flex flex-col items-center w-full space-y-8'>
      <h1 className='text-[#2CBEB8] pb-8'>Ideate</h1>
      <h2>Old user flow (Before our solution)</h2>
      <Image src={oldUserFlow} alt='image' />
      <h2>New user flow (After our solution)</h2>
      <Image src={newUserFlow} alt='image' />
    </div>
  );
};

export default Ideate;
