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
                ? 'bg-gwhite table-cell relative w-[80%] h-[750px] transition-all duration-500 ease-in p-11'
                : 'bg-gwhite table-cell relative w-[20%] h-[750px] transition-all duration-500 ease-in p-11'
            }
          >
            <h1
              className={
                about
                  ? 'transition-opacity 1.5xl:text-6xl xl:text-5xl duration-500 ease-in pb-20'
                  : 'transition-opacity 1.5xl:text-6xl xl:text-5xl duration-500 ease-in pb-20 opacity-60'
              }
            >
              MRA
            </h1>
            <div className={'flex justify-center space-x-10'}>
              <div className='space-y-10'>
                <div
                  className={
                    about
                      ? 'w-60 h-60 text-white text-center animate-show'
                      : 'hidden'
                  }
                >
                  <div className='flex items-center w-full h-full px-3 bg-gblack font-medium text-xl'>
                    Front end web developer with interest in blockchain
                    technologies
                  </div>
                </div>
                <div
                  className={
                    about
                      ? 'w-60 h-60  text-white text-center animate-show'
                      : 'hidden'
                  }
                >
                  <div className='flex items-center w-full h-full px-3 bg-gblack font-medium text-xl'>
                    Loves exploring new fields and knowing more about them
                  </div>
                </div>
              </div>
              <div className='space-y-10'>
                <div
                  className={
                    about
                      ? 'w-60 h-60 text-white text-center animate-show'
                      : 'hidden'
                  }
                >
                  <div className='flex items-center w-full h-full px-3 bg-gblack font-medium text-xl'>
                    Utilizes all the tools available to maximize productivity
                  </div>
                </div>
                <div
                  className={
                    about
                      ? 'w-60 h-60  text-white text-center animate-show'
                      : 'hidden'
                  }
                >
                  <div className='flex items-center w-full h-full px-3 bg-gblack font-medium text-xl'>
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
                <Image src={Mra} alt='image' width='220' height='61' />
              </div>
            </div>
          </li>

          <li
            onClick={handleAbout}
            className={
              about
                ? 'bg-gblack font-medium text-xl table-cell relative w-[20%] h-[750px] transition-all duration-500 ease-in p-11'
                : 'bg-gblack font-medium text-xl table-cell relative w-[80%] h-[750px] transition-all duration-500 ease-in p-11'
            }
          >
            <h1
              className={
                about
                  ? 'text-[#F8F9FA] 1.5xl:text-6xl xl:text-5xl text-right transition-opacity duration-500 ease-in pb-20 opacity-60'
                  : 'text-[#F8F9FA] 1.5xl:text-6xl xl:text-5xl text-right transition-opacity duration-500 ease-in pb-20'
              }
            >
              DeadEye
            </h1>
            <div className='pl-60'>
              <div className={about ? 'hidden' : 'space-y-14 animate-show'}>
                <div className='flex w-full justify-center space-x-5'>
                  <div className='w-60 h-60 text-white text-center animate-show'>
                    <div className='flex items-center justify-center w-full h-full px-3 bg-gwhite font-medium text-xl text-black'>
                      Competitive esports player
                    </div>
                  </div>
                  <div className='w-60 h-60 text-white text-center animate-show'>
                    <div className='flex items-center justify-center w-full h-full px-3 bg-gwhite font-medium text-xl text-black'>
                      Anime enthusiast
                    </div>
                  </div>
                  <div className='w-60 h-60 text-white text-center animate-show'>
                    <div className='flex items-center justify-center w-full h-full px-3 bg-gwhite font-medium text-xl text-black'>
                      Likes to build PCs
                    </div>
                  </div>
                </div>

                <div className='flex w-full items-center justify-center space-x-10'>
                  <h3 className='text-[#6FC2FF]'>Learnings:</h3>
                  <div className='flex space-x-5'>
                    <div className='flex justify-center items-center w-[200px] h-[200px] bg-[#212529] rounded-full text-center text-white'>
                      Teamwork skills
                    </div>
                    <div className='flex justify-center items-center w-[200px] h-[200px] bg-[#212529] rounded-full text-center text-white'>
                      Always strive to become the best
                    </div>
                    <div className='flex justify-center items-center w-[200px] h-[200px] bg-[#212529] rounded-full text-center text-white'>
                      Never give up
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
                <Image
                  className='select-none'
                  src={Deadeye}
                  alt='image'
                  width='220'
                  height='61'
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
