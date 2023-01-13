import React from 'react';
import Image from 'next/image';
import Allprograms1 from '../../public/assets/miskhub/Allprograms1.webp';
import Allprograms2 from '../../public/assets/miskhub/Allprograms2.webp';
import Allprograms3 from '../../public/assets/miskhub/Allprograms3.webp';
import Allprograms4 from '../../public/assets/miskhub/Allprograms4.webp';
import Allprograms5 from '../../public/assets/miskhub/Allprograms5.webp';
import Allprograms6 from '../../public/assets/miskhub/Allprograms6.webp';
import Allprograms7 from '../../public/assets/miskhub/Allprograms7.webp';
import Allprograms8 from '../../public/assets/miskhub/Allprograms8.webp';
import Allprograms9 from '../../public/assets/miskhub/Allprograms9.webp';
import specificprogram1 from '../../public/assets/miskhub/specificprogram1.webp';
import specificprogram2 from '../../public/assets/miskhub/specificprogram2.webp';
import specificprogram3 from '../../public/assets/miskhub/specificprogram3.webp';
import applicationpage1 from '../../public/assets/miskhub/applicationpage1.webp';
import applicationpage2 from '../../public/assets/miskhub/applicationpage2.webp';
import applicationpage3 from '../../public/assets/miskhub/applicationpage3.webp';
import applicationpage4 from '../../public/assets/miskhub/applicationpage4.webp';
import applicationpage5 from '../../public/assets/miskhub/applicationpage5.webp';
import applicationpage6 from '../../public/assets/miskhub/applicationpage6.webp';
import profilepage1 from '../../public/assets/miskhub/profilepage1.webp';
import profilepage2 from '../../public/assets/miskhub/profilepage2.webp';
import profilepage3 from '../../public/assets/miskhub/profilepage3.webp';
import profilepage4 from '../../public/assets/miskhub/profilepage4.webp';

const Design = () => {
  return (
    <div className='flex flex-col items-center w-full space-y-8'>
      <h1 className='text-[#3FA2D6] pb-8'>Design</h1>
      <h2>All Programs Page</h2>
      <Image src={Allprograms1} alt='image' />
      <div className='flex items-center justify-center space-x-4 pt-8'>
        <div className='text-center'>
          <h2>Before</h2>
          <Image src={Allprograms2} alt='image' />
        </div>
        <div className='text-center'>
          <h2>After</h2>
          <Image src={Allprograms3} alt='image' />
        </div>
      </div>
      <div className='border-b-2 border-rose-600 w-full'></div>
      <Image src={Allprograms4} alt='image' />
      <div className='flex items-center justify-center space-x-4 pt-8'>
        <div className='text-center'>
          <h2>Before</h2>

          <Image src={Allprograms5} alt='image' />
        </div>
        <div className='text-center'>
          <h2>After</h2>
          <Image src={Allprograms6} alt='image' />
        </div>
      </div>
      <div className='border-b-2 border-rose-600 w-full'></div>
      <Image src={Allprograms7} alt='image' />
      <div className='flex items-center justify-center space-x-4 pt-8'>
        <div className='text-center'>
          <h2>Before</h2>

          <Image src={Allprograms8} alt='image' />
        </div>

        <div className='text-center'>
          <h2>After</h2>
          <Image src={Allprograms9} alt='image' />
        </div>
      </div>

      <h2 className='pt-24'>Specific Program Page</h2>
      <Image src={specificprogram1} alt='image' />
      <div className='flex items-center justify-center space-x-4 pt-8'>
        <div className='text-center'>
          <h2>Before</h2>
          <Image src={specificprogram2} alt='image' />
        </div>

        <div className='text-center'>
          <h2>After</h2>
          <Image src={specificprogram3} alt='image' />
        </div>
      </div>

      <h2 className='pt-24'>Application Form Page</h2>
      <Image src={applicationpage1} alt='image' />
      <div className='flex items-center justify-center space-x-4 pt-8'>
        <div className='text-center'>
          <h2>Before</h2>
          <Image src={applicationpage2} alt='image' />
        </div>
        <div className='text-center'>
          <h2>After</h2>
          <Image src={applicationpage3} alt='image' />
        </div>
      </div>
      <div className='border-b-2 border-rose-600 w-full'></div>
      <Image src={applicationpage4} alt='image' />

      <div className='flex items-center justify-center space-x-4 pt-8'>
        <div className='text-center'>
          <h2>Before</h2>

          <Image src={applicationpage5} alt='image' />
        </div>
        <div className='text-center'>
          <h2>After</h2>

          <Image src={applicationpage6} alt='image' />
        </div>
      </div>

      <h2 className='pt-24'>Profile - My Programs Page</h2>
      <Image src={profilepage1} alt='image' />
      <div className='flex items-center justify-center space-x-4 pt-8'>
        <div className='text-center'>
          <h2>Before</h2>
          <Image src={profilepage2} alt='image' />
        </div>
        <div className='text-center'>
          <h2>After</h2>

          <Image src={profilepage3} alt='image' />
        </div>
      </div>
      <div className='border-b-2 border-rose-600 w-full'></div>
      <div className='text-center space-y-8'>
        <h2>New Pages</h2>
        <Image src={profilepage4} alt='image' />
      </div>
    </div>
  );
};

export default Design;
