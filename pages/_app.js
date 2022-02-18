import "../styles/globals.css";
import Providers from "../components/global/Providers";
import  { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Toaster/>
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
