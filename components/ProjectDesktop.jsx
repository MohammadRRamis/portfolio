import React from 'react';
import Button from './Button';
import Image from 'next/image';
import Duration from '../public/assets/duration.png';
import Role from '../public/assets/role.png';

const ProjectDesktop = ({
  backgroundColor,
  image,
  title,
  description,
  duration,
  role,
  link,
}) => {
  return (
    <a target='_blank' href={link} rel='noopener noreferrer'>
      <div
        className={`flex relative ${backgroundColor} text-tBlack lg:w-[840px] w-full lg:h-[336px] h-[180px] lg:pr-8 cursor-pointer hover:bg-black group transition-all duration-500`}
      >
        <div className='absolute top-0 left-0 w-full h-full hidden group-hover:block'>
          <div className='flex items-center justify-center w-full h-full'>
            <Button text={'VIEW CASE STUDY'} />
          </div>
        </div>

        <div className='flex group-hover:hidden'>
          <div className='flex items-center'>
            <div className='lg:w-[420px] w-[215px] lg:pr-10 pr-2'>
              <Image
                src={image}
                alt='Project image'
                sizes='(min-width: 1024px) 420px, 215px'
              />
            </div>
          </div>

          <div className='flex flex-col lg:py-8 lg:space-y-4 py-4 space-y-1 lg:mr-2'>
            <h2 className='lg:text-3xl text-[20.5px] leading-normal'>
              {title}
            </h2>
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
      </div>
    </a>
  );
};

export default ProjectDesktop;
