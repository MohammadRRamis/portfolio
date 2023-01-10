import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/assets/logo.png';
import MiskScreen from '../public/assets/miskhub/misk_screen.webp';
import Overview from '../components/miskhub/Overview';
import Audit from '../components/miskhub/Audit';

export default function Home() {
  return (
    <>
      <Head>
        <title>Misk Hub UX Case Study</title>
        <meta name='description' content='Misk Hub UX Case Study' />

        <link rel='icon' href='/favicon.png' />
      </Head>

      <div className='w-full h-full py-6 2xl:px-16 lg:px-12'>
        <div className='fixed z-50'>
          <div className=' top-0 left-0 flex items-center pb-12'>
            <Link href='/'>
              <div className='lg:w-[140px] w-[98px] cursor-pointer'>
                <Image src={Logo} alt='image' priority={true} />
              </div>
            </Link>
          </div>
        </div>
        <div className='space-y-20 flex flex-col justify-center items-center'>
          <div className='flex w-full justify-center items-center space-x-52 '>
            <h1 className='text-[#21B592] w-72 '>
              Misk Hub Program Enrollment
            </h1>

            <div className='w-[450px]'>
              <Image src={MiskScreen} alt='image' priority={true} />
            </div>
          </div>
          <div className=' flex flex-col justify-center items-center w-full max-w-7xl space-y-32'>
            <Overview />
            <Audit />
          </div>
        </div>
      </div>
    </>
  );
}
