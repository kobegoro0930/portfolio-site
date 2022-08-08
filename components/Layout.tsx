import Head from '../node_modules/next/head'
import Script from '../node_modules/next/script'
import Image from '../node_modules/next/image'
import Header from './modules/Header'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./css/style.css" />
        <title>KEN TERAMOTO｜Portfolio-Site</title>
        <meta name="description" content="#" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <Header />

      <main>{children}</main>

      <footer className="footer"></footer>
    </>
  )
}
