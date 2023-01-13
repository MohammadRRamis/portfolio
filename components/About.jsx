import React, { useState } from 'react';
import Image from 'next/image';
import Mra from '../public/assets/mra.webp';
import Deadeye from '../public/assets/deadeye.webp';

const About = () => {
  const [about, setAbout] = useState(true);

  const handleAbout = () => {
    setAbout(!about);
  };

  return (
    <div id='about' className='bg-[#272727]'>
      <div className='w-full h-[750px] overflow-hidden block'>
        <ul className='w-full table table-fixed m-0 p-0'>
          <li
            onClick={handleAbout}
            className={
              about
                ? 'bg-gwhite table-cell relative lg:w-[80%] w-[60%] h-[750px] transition-all duration-500 ease-in p-11 cursor-pointer font-medium text-xl'
                : 'bg-gwhite table-cell relative lg:w-[20%] w-[40%] h-[750px] transition-all duration-500 ease-in p-11 cursor-pointer font-medium text-xl'
            }
          >
            <h1
              className={
                about
                  ? 'transition-opacity 1.5xl:text-6xl lg:text-5xl text-3xl duration-500 ease-in lg:pb-10 pb-2 text-tBlack'
                  : 'transition-opacity 1.5xl:text-6xl lg:text-5xl text-3xl duration-500 ease-in lg:pb-10 pb-2 opacity-60 text-tBlack'
              }
            >
              MRA
            </h1>
            <div
              className={
                'lg:flex lg:justify-center lg:space-x-10 lg:space-y-0 space-y-1'
              }
            >
              <div className='lg:space-y-10 space-y-1'>
                <div
                  className={
                    about
                      ? 'lg:w-60 lg:h-60 w-24 h-24 text-white text-center animate-show'
                      : 'hidden'
                  }
                >
                  <div className='flex items-center w-full h-full px-3 bg-gblack font-medium lg:text-xl text-[8px] leading-normal'>
                    Full stack web developer with interest in cloud computing
                  </div>
                </div>
                <div
                  className={
                    about
                      ? 'lg:w-60 lg:h-60 w-24 h-24  text-white text-center animate-show'
                      : 'hidden'
                  }
                >
                  <div className='flex items-center w-full h-full px-3 bg-gblack font-medium lg:text-xl text-[8px] leading-normal'>
                    Loves exploring new fields and knowing more about them
                  </div>
                </div>
              </div>
              <div className='lg:space-y-10 space-y-1'>
                <div
                  className={
                    about
                      ? 'lg:w-60 lg:h-60 w-24 h-24 text-white text-center animate-show'
                      : 'hidden'
                  }
                >
                  <div className='flex items-center w-full h-full px-3 bg-gblack font-medium lg:text-xl text-[8px] leading-normal'>
                    Likes to utilize all the tools available to maximize
                    productivity
                  </div>
                </div>
                <div
                  className={
                    about
                      ? 'lg:w-60 lg:h-60 w-24 h-24 text-white text-center animate-show'
                      : 'hidden'
                  }
                >
                  <div className='flex items-center w-full h-full px-3 bg-gblack font-medium lg:text-xl text-[8px] leading-normal'>
                    Likes to expand his knowledge by reading articles related to
                    software engineering
                  </div>
                </div>
              </div>
            </div>

            <div className='absolute top-0 left-0 w-full'>
              <div
                className={
                  about
                    ? 'flex flex-row-reverse items-end w-full h-[750px] transition-all duration-500 ease-in opacity-100'
                    : 'flex flex-row-reverse items-end w-full h-[750px] transition-all duration-500 ease-in opacity-20'
                }
              >
                <div className='lg:w-[220px] w-[150px]'>
                  <Image
                    src={Mra}
                    alt='image'
                    sizes='(min-width: 1024px) 220px, 160px'
                  />
                </div>
              </div>
            </div>
          </li>

          <li
            onClick={handleAbout}
            className={
              about
                ? 'bg-gblack font-medium text-xl table-cell relative lg:w-[20%] w-[40%] h-[750px] transition-all duration-500 ease-in lg:p-11 cursor-pointer'
                : 'bg-gblack font-medium text-xl table-cell relative lg:w-[80%] w-[60%] h-[750px] transition-all duration-500 ease-in lg:p-11 cursor-pointer'
            }
          >
            <h1
              className={
                about
                  ? 'text-[#F8F9FA] 1.5xl:text-6xl lg:text-5xl text-3xl lg:text-right text-center transition-opacity duration-500 ease-in lg:pb-20 pb-2 opacity-60'
                  : 'text-[#F8F9FA] 1.5xl:text-6xl lg:text-5xl text-3xl lg:text-right text-center transition-opacity duration-500 ease-in lg:pb-20 pb-2'
              }
            >
              DeadEye
            </h1>
            <div className='lg:pl-60 lg:py-16'>
              <div className={about ? 'hidden' : 'space-y-14 animate-show'}>
                <div className='flex lg:flex-row flex-col w-full lg:justify-center lg:items-start items-center lg:space-x-5 lg:space-y-0 space-y-1'>
                  <div className='lg:w-60 lg:h-60 w-24 h-24 text-white text-center animate-show'>
                    <div className='flex items-center justify-center w-full h-full px-3 bg-gwhite font-medium lg:text-xl text-[8px] leading-normal text-black'>
                      Competitive esports player
                    </div>
                  </div>
                  <div className='lg:w-60 lg:h-60 w-24 h-24 text-white text-center animate-show'>
                    <div className='flex items-center justify-center w-full h-full px-3 bg-gwhite font-medium lg:text-xl text-[8px] leading-normal text-black'>
                      Anime enthusiast
                    </div>
                  </div>
                  <div className='lg:w-60 lg:h-60 w-24 h-24 text-white text-center animate-show'>
                    <div className='flex items-center justify-center w-full h-full px-3 bg-gwhite font-medium lg:text-xl text-[8px] leading-normal text-black'>
                      Likes to build PCs
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute top-0 left-0 w-full'>
              <div
                className={
                  about
                    ? 'flex items-end justify-start w-full h-[750px] opacity-20'
                    : 'flex items-end justify-start w-full h-[750px] opacity-100'
                }
              >
                <div className='lg:w-[220px] w-[150px]'>
                  <Image
                    src={Deadeye}
                    alt='image'
                    sizes='(min-width: 1024px) 220px, 160px'
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
