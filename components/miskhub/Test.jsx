import React from 'react';
import Image from 'next/image';
import test1 from '../../public/assets/miskhub/test1.webp';
import test2 from '../../public/assets/miskhub/test2.webp';
import test3 from '../../public/assets/miskhub/test3.webp';
import test4 from '../../public/assets/miskhub/test4.webp';
import test5 from '../../public/assets/miskhub/test5.webp';
import test6 from '../../public/assets/miskhub/test6.webp';

const Test = () => {
  return (
    <div className='flex flex-col items-center w-full space-y-8'>
      <h1 className='text-[#A55DD6] pb-8'>Test & Prototype</h1>
      <h2 className='pb-8'>User Testing</h2>
      <ul className='space-y-24'>
        <li className='list-outside'>
          <h4>Most of the users didn’t notice the existence of the tab</h4>

          <div className='flex items-center justify-center space-x-4 pt-8'>
            <div className='text-center'>
              <h2>Before</h2>
              <Image src={test1} alt='image' />
            </div>
            <div className='text-center'>
              <h2>After</h2>
              <Image
                src={test2}
                alt='
            image'
              />
            </div>
          </div>
        </li>
        <li className='list-outside'>
          <h4>
            Show the user that there are updates in the card of the profile page
          </h4>
          <div className='flex items-center justify-center space-x-4 pt-8'>
            <div className='text-center'>
              <h2>Before</h2>

              <Image src={test3} alt='image' />
            </div>
            <div className='text-center'>
              <h2>After</h2>

              <Image src={test4} alt='image' />
            </div>
          </div>
        </li>
        <li className='list-outside'>
          <h4>
            Confirmation of the scheduling of the interview after answering with
            yes in the popup
          </h4>
          <div className='flex items-center justify-center space-x-4 pt-8'>
            <Image src={test5} alt='image' />
            <Image src={test6} alt='image' />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Test;
