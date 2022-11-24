import React from 'react';
import Image from 'next/image';
import Duration from '../public/assets/duration.png';
import Role from '../public/assets/role.png';

const ProjectDesktop = ({
  backgroundColor,
  image,
  width,
  height,
  title,
  description,
  duration,
  role,
}) => {
  return (
    <div
      className={`flex ${backgroundColor} text-tBlack w-[840px] h-[336px] pr-8`}
    >
      <div className='flex items-center w-full h-[336px] pr-10'>
        <Image src={image} alt='Project image' width={width} height={height} />
      </div>

      <div className='flex flex-col py-8 space-y-4'>
        <h2>{title}</h2>
        <p className='text-xl'>{description}</p>
        <div className='pt-2 space-y-4'>
          <div className='flex'>
            <Image src={Duration} alt='Duration' width={28} height={28} />
            <p className='text-xl font-semibold pl-1'>
              Duration:
              <span className='text-xl font-semibold text-white'>
                {duration}
              </span>
            </p>
          </div>
          <div className='flex'>
            <Image src={Role} alt='Duration' width={28} height={28} />
            <p className='text-xl font-semibold pl-1'>
              Role:
              <span className='text-xl font-semibold text-white'>{role}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDesktop;
