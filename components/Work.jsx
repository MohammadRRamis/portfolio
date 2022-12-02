import React from 'react';
import Misk from '../public/assets/misk.png';
import Abha from '../public/assets/abha.png';
import Joon from '../public/assets/joon.png';
import ProjectMobile from './ProjectMobile';
import ProjectDesktop from './ProjectDesktop';

const Work = () => {
  return (
    <div
      id='work'
      className='bg-[#272727] relative lg:px-44 lg:py-16 py-8 space-y-10'
    >
      <h1 className='text-blue lg:text-6xl text-[38px] text-center lg:pb-4'>
        UX CASE STUDIES
      </h1>
      <div className='flex flex-col items-center lg:space-y-10 space-y-4'>
        <ProjectMobile
          backgroundColor='bg-[#21B592]'
          image={Misk}
          title={'Misk Hub Program Enrollment'}
          description={
            'Enhancing the enrollment journey of all program tracks in the Misk Hub platform.'
          }
          duration={'3 Weeks'}
          role={'UX designer'}
          link={'/'}
        />

        <ProjectMobile
          backgroundColor='bg-[#5C97D2]'
          image={Abha}
          title={'Bahiya Adventures'}
          description={
            'Designing an app that enhances the experience of sports activities in Abha.'
          }
          duration={'3 Weeks'}
          role={'UX/UI designer'}
          link={
            'https://bootcamp.uxdesign.cc/case-study-improving-the-experience-of-sports-activities-in-abha-47bd3d0415d'
          }
        />
        <ProjectDesktop
          backgroundColor='bg-[#C8B036]'
          image={Joon}
          title={'Joon Pet Supplies Store'}
          description={
            'Designing a website that enhances the experience of shopping for pet supplies.'
          }
          duration={'2 Weeks'}
          role={'UX designer'}
          link={
            'https://bootcamp.uxdesign.cc/ux-case-study-designing-a-website-for-a-pet-store-7d14e68750cd'
          }
        />
      </div>
    </div>
  );
};

export default Work;
