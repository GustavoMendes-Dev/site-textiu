import '../styles/globals.css'
import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';
import { AuthProvider } from '../contexts/AuthContext.tsx'

function MyApp({ Component, pageProps }) {
  return (
   <AuthProvider>
      <Head>
         <title>Textiu - Oportunidades da Indústria Têxtil</title>
         <meta name="description" content="Textiu - Oportunidades da Indústria Têxtil" />
         <link rel="icon" href="" />
      </Head>
      <NextNprogress />
      <Component {...pageProps} />
  </AuthProvider>
  )
  
}

export default MyApp
