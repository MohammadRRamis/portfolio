import React from 'react';
import Image from 'next/future/image';
import Link from 'next/link';
import Misk from '../public/assets/misk.png';
import Abha from '../public/assets/abha.png';
import Pets from '../public/assets/pets.png';
import Kids from '../public/assets/kids.png';
import Duration from '../public/assets/duration.png';
import Role from '../public/assets/role.png';

const Work = () => {
  return (
    <div id='work' className='bg-[#272727] relative px-44'>
      <div className='flex flex-col items-center'>
        <h1 className='uppercase text-[#6FC2FF]  py-20'>UX CASE STUDIES</h1>
        <div className='flex'>
          <Link href='/misk'>
            <div className='relative w-auto object-contain cursor-pointer group '>
              <Image
                className='transition-opacity duration-500 ease-in-out group-hover:opacity-20'
                src={Misk}
                alt='image'
                layout='fill'
              />
              <div className='absolute top-0 left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100'>
                <div className='flex flex-col text-center items-center justify-evenly w-[500px] h-[500px] px-11 py-11'>
                  <h2>Misk Hub Program Enrollment</h2>
                  <p>
                    Enhancing the enrollment journey of all program tracks in
                    the Misk Hub platform.
                  </p>
                  <div className='flex items-center'>
                    <Image src={Duration} alt='image' layout='fill' />
                    <h3>
                      <span>Duration:</span> 3 Weeks
                    </h3>
                  </div>
                  <div className='flex items-center'>
                    <Image src={Role} alt='image' layout='fill' />
                    <h3>
                      <span>Role:</span> UX designer
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <a
            target='_blank'
            href='https://bootcamp.uxdesign.cc/case-study-improving-the-experience-of-sports-activities-in-abha-47bd3d0415d'
            rel='noopener noreferrer'
          >
            <div className='relative w-auto object-contain cursor-pointer group '>
              <Image
                className='transition-opacity duration-500 ease-in-out group-hover:opacity-20'
                src={Abha}
                alt='image'
                layout='fill'
              />
              <div className='absolute top-0 left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100'>
                <div className='flex flex-col text-center items-center justify-evenly w-[500px] h-[500px] px-11 py-11'>
                  <h2>Bahiya Adventures</h2>
                  <p>
                    Designing an app that enhances the experience of sports
                    activities in Abha.
                  </p>
                  <div className='flex items-center'>
                    <Image src={Duration} alt='image' layout='fill' />
                    <h3>
                      <span>Duration:</span> 3 Weeks
                    </h3>
                  </div>
                  <div className='flex items-center'>
                    <Image src={Role} alt='image' layout='fill' />
                    <h3>
                      <span>Role:</span> UX/UI designer
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className='flex'>
          <a
            target='_blank'
            href='https://bootcamp.uxdesign.cc/ux-case-study-designing-a-website-for-a-pet-store-7d14e68750cd'
            rel='noopener noreferrer'
          >
            <div className='relative w-auto object-contain cursor-pointer group '>
              <Image
                className='transition-opacity duration-500 ease-in-out group-hover:opacity-20'
                src={Pets}
                alt='image'
                layout='fill'
              />
              <div className='absolute top-0 left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100'>
                <div className='flex flex-col text-center items-center justify-evenly w-[500px] h-[500px] px-11 py-11'>
                  <h2>Joon Pet Supplies Store</h2>
                  <p>
                    Designing a website that enhances the experience of the
                    customers.
                  </p>
                  <div className='flex items-center'>
                    <Image src={Duration} alt='image' layout='fill' />
                    <h3>
                      <span>Duration:</span> 2 Weeks
                    </h3>
                  </div>
                  <div className='flex items-center'>
                    <Image src={Role} alt='image' layout='fill' />
                    <h3>
                      <span>Role:</span> UX designer
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            target='_blank'
            href='https://bootcamp.uxdesign.cc/ux-case-study-task-management-application-for-kids-c9525066ddc8'
            rel='noopener noreferrer'
          >
            <div className='relative w-auto object-contain cursor-pointer group '>
              <Image
                className='transition-opacity duration-500 ease-in-out group-hover:opacity-20'
                src={Kids}
                alt='image'
                layout='fill'
              />
              <div className='absolute top-0 left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100'>
                <div className='flex flex-col text-center items-center justify-evenly w-[500px] h-[500px] px-11 py-11'>
                  <h2>Kids Tasks</h2>
                  <p>
                    Designing an app that facilitates the process of assigning
                    tasks to kids.
                  </p>
                  <div className='flex items-center'>
                    <Image src={Duration} alt='image' layout='fill' />
                    <h3>
                      <span>Duration:</span> 1 Week
                    </h3>
                  </div>
                  <div className='flex items-center'>
                    <Image src={Role} alt='image' layout='fill' />
                    <h3>
                      <span>Role:</span> UX designer
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
