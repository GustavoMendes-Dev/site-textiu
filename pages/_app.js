import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
     <title>Textiu - Oportunidades da Indústria Têxtil</title>
     <meta name="description" content="Textiu - Oportunidades da Indústria Têxtil" />
     <link rel="icon" href="" />
  </Head>
 <Component {...pageProps} />
 </>
}

export default MyApp
