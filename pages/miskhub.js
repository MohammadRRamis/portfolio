import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/assets/logo.png';
import MiskScreen from '../public/assets/miskhub/misk_screen.webp';
import Overview from '../components/miskhub/Overview';
import Audit from '../components/miskhub/Audit';
import Research from '../components/miskhub/Research';
import Empathize from '../components/miskhub/Empathize';
import Ideate from '../components/miskhub/Ideate';
import Design from '../components/miskhub/Design';
import Test from '../components/miskhub/Test';
import NextSteps from '../components/miskhub/NextSteps';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>Misk Hub UX Case Study</title>
        <meta name='description' content='Misk Hub UX Case Study' />

        <link rel='icon' href='/favicon.png' />
      </Head>

      <div className='hidden md:w-full md:block'>
        <div className='w-full h-full py-6 pb-16 2xl:px-16 lg:px-12 '>
          <div className='fixed z-50'>
            <div className='top-0 left-0 flex items-center pb-12 '>
              <Link href='/'>
                <div className='lg:w-[140px] w-[98px] cursor-pointer'>
                  <Image src={Logo} alt='image' priority={true} />
                </div>
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center space-y-20'>
            <div className='flex items-center justify-center w-full space-x-52 '>
              <h1 className='text-[#21B592] w-72 '>
                Misk Hub Program Enrollment
              </h1>

              <div className='w-[450px]'>
                <Image src={MiskScreen} alt='image' priority={true} />
              </div>
            </div>
            <div className='flex flex-col items-center justify-center w-full space-y-32 max-w-7xl'>
              <Overview />
              <Audit />
              <Research />
              <Empathize />
              <Ideate />
              <Design />
              <Test />
              <NextSteps />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div className='md:hidden flex flex-col space-y-16 justify-center items-center w-full h-screen text-center p-11'>
        <h2>Sorry, this page is not yet optimized for mobile devices 😥</h2>
        <Link href='/'>
          <Button text='Back to Home' />
        </Link>
      </div>
    </>
  );
}
