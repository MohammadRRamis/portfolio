import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
export default function Home() {
  return (
    <div>
      <Head>
        <title className=''>Create Next App</title>
      </Head>
      <Navbar />
      <div class='flex flex-row-reverse'>
        <div class='md:w-[65vw] md:border-solid md:border-transparent md:border-r-[487px] md:border-b-[100vh] md:border-b-[#f2f2f2] md:rotate-180'></div>
      </div>
    </div>
  );
}
