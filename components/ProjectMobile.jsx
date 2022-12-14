import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Duration from '../public/assets/duration.png';
import Role from '../public/assets/role.png';
import ProjectButton from './ProjectButton';

const ProjectMobile = ({
  backgroundColor,
  image,
  title,
  description,
  duration,
  role,
  link,
  externalLink,
}) => {
  return (
    <Link
      target={externalLink ? '_blank' : ''}
      href={link}
      rel='noopener noreferrer'
    >
      <div
        className={`flex relative ${backgroundColor} text-tBlack lg:w-[840px] w-full lg:h-[336px] h-[180px] pt-2 px-8 cursor-pointer transition-all duration-500 lg:hover:bg-white group`}
      >
        <div className='absolute top-0 left-0 w-full h-full hidden lg:group-hover:block'>
          <div className='flex items-center justify-center w-full h-full'>
            <ProjectButton text={'VIEW CASE STUDY'} />
          </div>
        </div>
        <div className='flex lg:group-hover:hidden'>
          <div className='flex items-end'>
            <div className='lg:w-[295px] w-[150.66px]'>
              <Image
                src={image}
                alt='Project image'
                sizes='(min-width: 1024px) 295px, 150.66px'
                // placeholder='blur'
              />
            </div>
          </div>

          <div className='flex flex-col lg:py-8 lg:space-y-4 py-4 space-y-1'>
            <h2 className='lg:text-3xl text-[16px] leading-normal'>{title}</h2>
            <p className='lg:text-xl text-[9.2px] leading-normal text-2xl'>
              {description}
            </p>
            <div className='pt-2 lg:space-y-4 space-y-2'>
              <div className='flex items-center lg:h-[28px] h-[14.3px]'>
                <div className='lg:w-[28px] w-[14.3px]'>
                  <Image src={Duration} alt='Duration' />
                </div>
                <p className='lg:text-xl text-[10.2px] font-semibold pl-1 text-2xl'>
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
                <p className='lg:text-xl text-[10.2px] font-semibold pl-1 text-2xl'>
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
    </Link>
  );
};

export default ProjectMobile;
