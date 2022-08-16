import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>KEN TERAMOTO｜Portfolio-Site</title>
        <meta name="description" content="ポートフォリオ用に作成したサイトです。使用技術：React.js・Next.js・TypeScript・microCMS" />
      </Head>

      <Header />

      <main>{children}</main>

      <footer className="footer"></footer>
    </>
  )
}
