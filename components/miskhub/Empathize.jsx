import React from 'react';
import Image from 'next/image';
import persona from '../../public/assets/miskhub/persona.webp';
import problem from '../../public/assets/miskhub/problem.webp';
import solution from '../../public/assets/miskhub/solution.webp';
import feature1 from '../../public/assets/miskhub/feature1.webp';
import feature2 from '../../public/assets/miskhub/feature2.webp';

const Empathize = () => {
  return (
    <div className='flex flex-col items-center w-full space-y-8'>
      <h1 className='text-[#B1C437] pb-8'>Empathize</h1>
      <h2>User Persona</h2>
      <p>
        Based on the screener results and the user research findings, we came up
        with a persona that imitates most of our target users.
      </p>
      <Image src={persona} alt='image' />
      <h2>Identifying the Problem</h2>
      <Image src={problem} alt='image' />
      <h2>Designing the Solution</h2>
      <p>
        For our solution, we decided to have the following key features to solve
        the problem that our users are facing
      </p>
      <Image src={solution} alt='image' />
      <h2>Feature Prioritization</h2>
      <Image src={feature1} alt='image' />
      <Image src={feature2} alt='image' />
    </div>
  );
};

export default Empathize;
