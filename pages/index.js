import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
export default function Home() {
  return (
    <div>
      <Head>
        <title className=''>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <div class='flex flex-row-reverse'>
          <div class='w-2/3 border-solid border-transparent border-r-[40vw] border-b-[100vh] border-b-[#f2f2f2] rotate-180'></div>
        </div>
      </body>
    </div>
  );
}
