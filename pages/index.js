import Head from 'next/head';
import About from '../components/About';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Work from '../components/Work';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <div className='hidden lg:block'>
        <Head>
          <title>Mohammad Al Ramis | UX designer</title>
          <meta
            name='description'
            content='I&#39;m Mohammad Al Ramis, a UX/UI designer with background in software engineering. I strive to connect the dots between software development and UX.'
          />
          <link rel='icon' href='/favicon.png' />
        </Head>
        <Navbar />
        <Main />
        <Work />
        <About />
        <Footer />
      </div>
      <div className='lg:hidden flex justify-center items-center w-full h-screen text-center p-11'>
        <h2>Sorry, this website is not yet optimized for mobile devices 😥</h2>
      </div>
    </>
  );
}
