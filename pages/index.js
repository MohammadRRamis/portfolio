import Head from 'next/head';
import About from '../components/About';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Work from '../components/Work';
import Navbar from '../components/Navbar';
import Preloader from '../components/Preloader';
import { useEffect, useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return (
    <>
      <Head>
        <title>Mohammad Al Ramis | UX designer</title>
        <meta
          name='description'
          content='I&#39;m Mohammad Al Ramis, a UX/UI designer with background in software engineering. I strive to connect the dots between software development and UX.'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div>
        {loading ? (
          <Preloader />
        ) : (
          <>
            <Navbar />
            <Main />
            <Work />
            <div className='hidden'>
              <About />
              <Footer />
            </div>
          </>
        )}
      </div>
    </>
  );
}
