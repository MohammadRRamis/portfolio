import React from 'react';
import Image from 'next/image';
import Duration from '../public/assets/duration.png';
import Role from '../public/assets/role.png';

const ProjectMobile = ({
  backgroundColor,
  image,
  width,
  mobileWidth,
  title,
  description,
  duration,
  role,
  link,
}) => {
  return (
    <a target='_blank' href={link} rel='noopener noreferrer'>
      <div
        className={`flex ${backgroundColor} text-tBlack lg:w-[840px] w-full lg:h-[336px] h-[180px] pt-2 px-8 cursor-pointer lg:hover:pt-0 transition-all duration-200`}
      >
        <div className='flex items-end'>
          <div className={`lg:w-[${width}] w-[${mobileWidth}] `}>
            <Image
              src={image}
              alt='Project image'
              sizes={`(min-width: 1024px) ${width}, ${mobileWidth}`}
              // placeholder='blur'
            />
          </div>
        </div>

        <div className='flex flex-col lg:py-8 lg:space-y-4 py-4 space-y-1'>
          <h2 className='lg:text-3xl text-[20.5px] leading-normal'>{title}</h2>
          <p className='lg:text-xl text-[9.2px] leading-normal'>
            {description}
          </p>
          <div className='pt-2 lg:space-y-4 space-y-2'>
            <div className='flex items-center lg:h-[28px] h-[14.3px]'>
              <div className='lg:w-[28px] w-[14.3px]'>
                <Image src={Duration} alt='Duration' />
              </div>
              <p className='lg:text-xl text-[10.2px] font-semibold pl-1'>
                Duration:
                <span className='lg:text-xl text-[10.2px] font-semibold text-white'>
                  {' ' + duration}
                </span>
              </p>
            </div>
            <div className='flex items-center lg:h-[28px] h-[14.3px]'>
              <div className='lg:w-[28px] w-[14.3px]'>
                <Image src={Role} alt='Duration' />
              </div>
              <p className='lg:text-xl text-[10.2px] font-semibold pl-1'>
                Role:
                <span className='lg:text-xl text-[10.2px] font-semibold text-white'>
                  {' ' + role}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectMobile;
