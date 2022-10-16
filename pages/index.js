import Head from 'next/head';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Work from '../components/Work';
export default function Home() {
  return (
    <div>
      <Head>
        <title className=''>Create Next App</title>
      </Head>
      <Navbar />
      <Main />
      <Work />
    </div>
  );
}
