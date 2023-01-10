import React from 'react';
import Image from 'next/image';
import Process from '../../public/assets/miskhub/design_process.png';
const Overview = () => {
  return (
    <div className='flex flex-col items-center space-y-12'>
      <div>
        <dl className='text-center'>
          <dt>
            <h2>The challenge</h2>
          </dt>
          <dd className='w-96 bold'>
            To enhance the enrollment journey of all program tracks in the Misk
            Hub platform.
          </dd>
        </dl>
      </div>
      <div className='flex space-x-8'>
        <ul className='max-w-lg'>
          <h2>Overview of Misk Hub</h2>

          <li className='leading-relaxed'>
            Misk Hub is a platform designed for ambitious Saudi youth to
            explore, engage and experience Misk Foundation’s high-impact
            development programs, insightful content and skill-building
            experiences.
          </li>
          <li className='leading-relaxed'>
            The Misk Hub platform contains four program tracks which are:
            Leadership, Community, Entrepreneurship, and Skills.
          </li>
        </ul>
        <div className='border-l-2 border-green'></div>
        <div className='space-y-4 min-w-max'>
          <h2>Team</h2>

          <p>Jawad Almuttawa</p>

          <p>Khawla Alghamdi</p>

          <p>Mustafa Alsadah</p>

          <p>Sarah Almotairi</p>

          <div>
            <dt>
              <h2>Duration</h2>
            </dt>
            <dl>
              <p>3 Weeks</p>
            </dl>
          </div>
        </div>
        <div className='max-w-md space-y-8'>
          <div>
            <dt>
              <h2>Tools</h2>
            </dt>
            <dl>
              <p>
                FigJam, Google Forms, Google Docs, Google Slides, Google Drive,
                Figma, Zoom, Slack, and Notion.
              </p>
            </dl>
          </div>
          <div>
            <dt>
              <h2>Role & Responsibilities</h2>
            </dt>
            <dl>
              <p>
                Involved in all of the process but mostly focused on auditing and research.
              </p>
            </dl>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center space-y-8'>
        <h2>Design Process</h2>
        <div>
          <Image src={Process} alt='image' />
        </div>
      </div>
    </div>
  );
};

export default Overview;
