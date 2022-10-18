import React, { useState } from 'react';
import Image from 'next/future/image';

const About = () => {
  const [about, setAbout] = useState(true);

  const handleAbout = () => {
    setAbout(!about);
  };

  return (
    <div id='about' className='bg-[#272727]'>
      <h1 className='uppercase text-center text-[#6FC2FF]  py-20'>ABOUT ME</h1>
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
                  ? 'transition-opacity duration-500 ease-in'
                  : 'transition-opacity duration-500 ease-in opacity-60'
              }
            >
              MRA
            </h1>

            <ul
              role='list'
              className={
                about
                  ? 'marker:text-[#212529] list-disc p-11 space-y-20 animate-show'
                  : 'hidden'
              }
            >
              <li>
                Front end web developer with interest in blockchain technologies
              </li>
              <li>Loves exploring new fields and knowing more about them</li>
              <li>Utilizes all the tools available to maximize productivity</li>

              <li>
                Likes to expand his knowledge by reading articles related to UX
                design
              </li>
            </ul>

            <div className='absolute top-0 left-0'>
              <div
                className={
                  about
                    ? 'flex flex-row-reverse items-end w-[80vw] h-[750px] transition-all duration-500 ease-in opacity-100'
                    : 'flex flex-row-reverse items-end w-[20vw] h-[750px] transition-all duration-500 ease-in opacity-20'
                }
              >
                <Image
                  src='/../public/assets/mra.png'
                  alt='image'
                  width='220'
                  height='61'
                />
              </div>
            </div>
          </li>

          <li
            onClick={handleAbout}
            className={
              about
                ? 'bg-gblack table-cell relative w-[20%] h-[750px] transition-all duration-500 ease-in p-11'
                : 'bg-gblack table-cell relative w-[80%] h-[750px] transition-all duration-500 ease-in p-11'
            }
          >
            <h1
              className={
                about
                  ? 'text-[#F8F9FA] text-right transition-opacity duration-500 ease-in opacity-60'
                  : 'text-[#F8F9FA] text-right transition-opacity duration-500 ease-in'
              }
            >
              DeadEye
            </h1>
            <div className='pl-72 py-11 space-y-20'>
              <div className={about ? 'hidden' : 'space-y-20 animate-show'}>
                <ul
                  role='list'
                  className='marker:text-[#F8F9FA] list-disc  space-y-10 text-left'
                >
                  <li className='text-[#F8F9FA]'>Competitive esports player</li>

                  <li className='text-[#F8F9FA]'>Anime enthusiast</li>

                  <li className='text-[#F8F9FA]'>Likes to play the piano</li>
                </ul>
                <div className='space-y-10'>
                  <h3 className='text-[#6FC2FF]'>Learnings:</h3>
                  <div className='flex justify-evenly'>
                    <div className='flex justify-center items-center w-[200px] h-[200px] bg-[#212529] rounded-full text-center text-[#F8F9FA]'>
                      Teamwork skills
                    </div>
                    <div className='flex justify-center items-center w-[200px] h-[200px] bg-[#212529] rounded-full text-center text-[#F8F9FA]'>
                      Always strive to become the best
                    </div>
                    <div className='flex justify-center items-center w-[200px] h-[200px] bg-[#212529] rounded-full text-center text-[#F8F9FA]'>
                      Never give up
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute top-0 left-0'>
              <div
                className={
                  about
                    ? 'flex items-end justify-start w-[20vw] h-[750px] opacity-20'
                    : 'flex items-end justify-start w-[80vw] h-[750px] opacity-100'
                }
              >
                <Image
                  className='select-none'
                  src='/../public/assets/deadeye.png'
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
