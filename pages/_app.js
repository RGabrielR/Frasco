import '../styles/globals.css';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress'
    
Router.onRouteChangeStart = url => {
  NProgress.start();
      };

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <title>Frasco</title>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'/>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    </Head>
  <Component {...pageProps} /> 
  </>
  )
}

export default MyApp
