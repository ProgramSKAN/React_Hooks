import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import '../public/static/site.css';

//next.js includes this in every javascript launched from pages folder
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
