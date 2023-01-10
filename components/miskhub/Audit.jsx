import React from 'react';
import Image from 'next/image';
import Pages from '../../public/assets/miskhub/pages.png';
import leadership from '../../public/assets/miskhub/leadership.webp';
import entrepreneurship from '../../public/assets/miskhub/entrepreneurship.webp';
import skills from '../../public/assets/miskhub/skills.webp';
import community from '../../public/assets/miskhub/community.webp';
import ex1 from '../../public/assets/miskhub/ex1.webp';
import ex2 from '../../public/assets/miskhub/ex2.webp';
import ex3 from '../../public/assets/miskhub/ex3.webp';
import ex4 from '../../public/assets/miskhub/ex4.webp';
import ex5 from '../../public/assets/miskhub/ex5.webp';
import innovation from '../../public/assets/miskhub/innovation.webp';
import space from '../../public/assets/miskhub/entrepreneurship_space.webp';
import clutter from '../../public/assets/miskhub/clutter.webp';
import status_1 from '../../public/assets/miskhub/status_1.webp';
import status_2 from '../../public/assets/miskhub/status_2.webp';

const Audit = () => {
  return (
    <div className='flex flex-col items-center space-y-16'>
      <h1 className='text-[#F36D50]'>Audit</h1>
      <div className='flex space-x-32 py-8 justify-center'>
        <p className='max-w-[400px]'>
          In order to identify the current usability problems in the product, I
          examined the design of the current enrollment journey in Misk Hub
          programs. I found the following main issues in the enrollment journey.
        </p>
        <div>
          <Image src={Pages} alt='image' />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center space-y-4'>
        <h2 className='pb-4'>All Programs Page</h2>
        <h3>Tracks Description</h3>
        <p>
          There is no description for each track on the all programs page.
          However, the description exists on the home page instead.
        </p>
        <div className='grid grid-cols-2 gap-x-5 gap-y-5 items-center justify-center content-center'>
          <div>
            <Image src={leadership} alt='image' width={588} height={214} />
          </div>
          <div>
            <Image
              src={entrepreneurship}
              alt='image'
              width={588}
              height={214}
            />
          </div>
          <div>
            <Image src={skills} alt='image' width={588} height={214} />
          </div>
          <div>
            <Image src={community} alt='image' width={588} height={214} />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center space-y-8'>
        <h2 className='pb-4'>Specific Program Page</h2>
        <ol>
          <li>
            <h3>Content Structure & Language</h3>
          </li>
          <p>
            for the specific program page, I noticed that the content inside it
            doesn’t have a unified structure and language.
          </p>
          <div className='flex items-center justify-center space-x-4'>
            <div>
              <Image src={ex1} alt='image' />
            </div>
            <div>
              <Image src={ex2} alt='image' />
            </div>
          </div>
          <div className='flex items-center justify-center space-x-4'>
            <div>
              <Image src={ex3} alt='image' />
            </div>
            <div>
              <Image src={ex4} alt='image' />
            </div>
            <div>
              <Image src={ex5} alt='image' />
            </div>
          </div>
          <li>
            <h3 className='pt-8'>External Websites</h3>
          </li>
          <p>
            I noticed that there are many programs on Misk Hub that requires the
            user to complete the enrollment process through a Misk subsidiary
            website.
          </p>
          <div className='flex space-x-4 justify-center item'>
            <Image src={innovation} alt='image' />

            <Image
              src={space}
              alt='
            image'
            />
          </div>
        </ol>
      </div>
      <div className='flex flex-col items-center'>
        <h2 className='pb-4'>Application Forms</h2>
        <ol>
          <li>
            <h3>Cluttered Forms</h3>
          </li>
          <p>
            The application form page can be a long scrollable page with many
            questions.
          </p>
          <div className='flex justify-center items-center'>
            <Image src={clutter} alt='image' />
          </div>
          <li className='pt-8'>
            <h3>Enrollment Status</h3>
          </li>
          <p>
            After submitting the application form, the user isn’t directed to
            the profile page where they can check their enrollment status.
          </p>
          <div className='flex items-center justify-center space-x-4'>
            <Image src={status_1} alt='image' />
            <Image src={status_2} alt='image' />
          </div>
        </ol>
      </div>
    </div>
  );
};

export default Audit;
