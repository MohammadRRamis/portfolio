import '../styles/globals.css';
import { useState, useEffect } from 'react';
import Preloader from '../components/Preloader';
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 2500);
    }
  }, [loading]);

  return (
    <>
      <div>
        {loading ? (
          <Preloader />
        ) : (
          <>
            <Component {...pageProps} />
          </>
        )}
      </div>
    </>
  );
}

export default MyApp;
