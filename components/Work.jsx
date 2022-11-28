import React from 'react';
import Misk from '../public/assets/misk.webp';
import Abha from '../public/assets/abha.webp';
import Joon from '../public/assets/joon.webp';
import ProjectMobile from './ProjectMobile';
import ProjectDesktop from './ProjectDesktop';

const Work = () => {
  return (
    <div id='work' className='bg-[#272727] relative px-44 py-16 space-y-10'>
      <h1 className='text-blue text-center pb-4'>UX CASE STUDIES</h1>
      <div className='flex flex-col items-center'>
        <ProjectMobile
          backgroundColor='bg-[#21B592]'
          image={Misk}
          width={295}
          height={318}
          title={'Misk Hub Program Enrollment'}
          description={
            'Enhancing the enrollment journey of all program tracks in the Misk Hub platform.'
          }
          duration={' 3 Weeks'}
          role={' UX designer'}
        />
      </div>
      <div className='flex flex-col items-center'>
        <ProjectMobile
          backgroundColor='bg-[#5C97D2]'
          image={Abha}
          width={295}
          height={317}
          title={'Bahiya Adventures'}
          description={
            'Designing an app that enhances the experience of sports activities in Abha.'
          }
          duration={' 3 Weeks'}
          role={' UX/UI designer'}
        />
      </div>
      <div className='flex flex-col items-center'>
        <ProjectDesktop
          backgroundColor='bg-[#C8B036]'
          image={Joon}
          width={420}
          height={290}
          title={'Joon Pet Supplies Store'}
          description={
            'Designing a website that enhances the experience of shopping for pet supplies.'
          }
          duration={' 2 Weeks'}
          role={' UX designer'}
        />
      </div>
    </div>
  );
};

export default Work;
