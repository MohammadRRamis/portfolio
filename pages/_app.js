import '../styles/globals.css';
import Preloader from '../components/Preloader';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <Component {...pageProps} />
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default MyApp;
