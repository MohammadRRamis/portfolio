import Head from 'next/head';
import About from '../components/About';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Work from '../components/Work';
import Navbar from '../components/Navbar';

export default function Home() {
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
        <Navbar />
        <Main />
        <Work />
        <About />
        <Footer />
      </div>
    </>
  );
}
