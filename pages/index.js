import Head from 'next/head';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
export default function Home() {
  return (
    <div>
      <Head>
        <title className=''>Create Next App</title>
      </Head>
      <Navbar />
      <Main />
    </div>
  );
}
