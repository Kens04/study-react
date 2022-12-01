import 'src/styles/globals.css'
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
        <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
    );
}

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

export default MyApp;