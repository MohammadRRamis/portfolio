import React from 'react';
import Image from 'next/image';
import competitors from '../../public/assets/miskhub/competitors.webp';
import monshaat from '../../public/assets/miskhub/monshaat.webp';
import thkaa from '../../public/assets/miskhub/thkaa.webp';
import futurelearn from '../../public/assets/miskhub/future_learn.webp';
import futureskills from '../../public/assets/miskhub/future_skills.webp';
import bootcamp from '../../public/assets/miskhub/bootcamp.webp';
import edraaktab from '../../public/assets/miskhub/edraaktab.webp';
import courseratab from '../../public/assets/miskhub/courseratab.webp';
import futurelearntab from '../../public/assets/miskhub/futurelearntab.webp';
import content1 from '../../public/assets/miskhub/content1.webp';
import content2 from '../../public/assets/miskhub/content2.webp';
import content3 from '../../public/assets/miskhub/content3.webp';
import form from '../../public/assets/miskhub/form.webp';
import result1 from '../../public/assets/miskhub/result1.webp';
import result2 from '../../public/assets/miskhub/result2.webp';
import findings from '../../public/assets/miskhub/findings.webp';

const Research = () => {
  return (
    <div className='flex flex-col items-center w-full space-y-8'>
      <h1 className='text-[#FAA436] pb-8'>Research</h1>
      <h2>1- Business Research (Competitive Analysis)</h2>
      <h3>Business Competitors</h3>
      <p>
        Direct competitors are non-profitable educational organizations in Saudi
        Arabia. Indirect competitors are any educational organizations in the
        world.
      </p>
      <Image src={competitors} alt='image' />
      <h3>Main Findings</h3>
      <ol className='space-y-16'>
        <li className='space-y-4'>
          <h4 className='inline'>
            Most common card details between competitors:
          </h4>
          <ul>
            <li>Start & end date / Duration of the program.</li>
            <li>Format of the program (Physical / Online) and the location.</li>
            <div className='flex justify-center space-x-4 pt-4'>
              <Image src={monshaat} alt='image' />
              <Image src={thkaa} alt='image' />
            </div>
            <div className='flex justify-center space-x-4'>
              <Image src={futurelearn} alt='image' />
              <Image src={futureskills} alt='image' />
              <Image src={bootcamp} alt='image' />
            </div>
          </ul>
        </li>
        <li className='space-y-4'>
          <h4 className='inline'>Tab scrollers in the specific program page</h4>
          <p>
            Many competitors include a tab scroller section that allows the user
            to navigate through different sections in the specific program page
            easily.
          </p>
          <div className='flex flex-col items-center space-y-4'>
            <Image src={edraaktab} alt='image' />
            <Image src={courseratab} alt='image' />
            <Image src={futurelearntab} alt='image' />
          </div>
        </li>
        <li className='space-y-4'>
          <h4 className='inline'>
            Organization of content in the specific program page
          </h4>
          <p>
            Most competitors prioritize having a brief description and the
            outcomes of the program at the top of the specific program page.
          </p>
          <div className='flex space-x-4'>
            <Image src={content1} alt='image' />
            <Image src={content2} alt='image' />
          </div>
          <div className='flex justify-center'>
            <Image src={content3} alt='image' />
          </div>
        </li>
        <li className='space-y-4'>
          <h4 className='inline'>
            Sections for each type of questions in the application form page
          </h4>
          <p>
            Organized application forms that are divided into different
            sections.
          </p>
          <div className='flex justify-center'>
            <Image src={form} alt='image' />
          </div>
        </li>
      </ol>
      <h2 className='pt-8'>2- User Research</h2>
      <h3>Specifying the Target Audience</h3>
      <p className='text-green'>
        Our target users are people who applied to one or more Misk Hub programs
        previously.
      </p>
      <h3>Designing the Screener Survey</h3>
      <div className='flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center space-y-4'>
          <h4>Goals</h4>
          <ul>
            <li>To find user research subject to interview.</li>

            <li>To identify the strongest competitors.</li>
            <li>
              To identify the most common categories of programs and the most
              common programs.
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-center justify-center space-y-4'>
          <h4>Details</h4>
          <ul>
            <li>Number of Questions: 5.</li>

            <li>Type of Questions: Quantitive.</li>
            <li>
              Qulification for an interview criteria: being a target user
              (people who applied to one or more Misk Hub programs previously).
            </li>
          </ul>
        </div>
      </div>
      <h3 className='pt-4'>Screener Results</h3>
      <ul>
        <li>The most common track in the Misk Hub platform is Skills</li>
        <li>Doroob is one of the strongest direct competitors to Misk Hub</li>
      </ul>
      <Image src={result1} alt='image' />
      <Image src={result2} alt='image' />
      <h3>User Interviews</h3>
      <div className='flex space-x-8 '>
        <div className='flex flex-col items-center space-y-4 item'>
          <h4>Goals</h4>
          <ul className='max-w-[600px]'>
            <li>
              To better understand the motivations behind enrolling in Mish Hub
              programs.
            </li>

            <li>
              To identify the pain points/ struggles in the enrollment journey
              of Misk Hub programs.
            </li>
            <li>To Identify the business competitors.</li>
            <li>To Identify the users’ needs</li>
          </ul>
        </div>

        <div className='flex flex-col items-center space-y-4 conte'>
          <h4>Details</h4>
          <ul>
            <li>Number of Interviews: 24 (8 of them Conducted by me).</li>
            <li>Number of Questions: 12.</li>

            <li>Type of Questions: Qualitative.</li>
          </ul>
        </div>
      </div>
      <h3 className='pt-4'>Main Findings</h3>
      <Image src={findings} alt='image' />
    </div>
  );
};

export default Research;
