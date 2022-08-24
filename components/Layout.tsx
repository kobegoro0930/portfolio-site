import Head from 'next/head'
import Script from 'next/script'
import { Box } from '@mui/material';
import Dashboard from '../pages/dashboard/Dashboard';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>KEN TERAMOTO｜Portfolio-Site</title>
        <meta name="description" content="ポートフォリオ用に作成したサイトです。使用技術：React.js・Next.js・TypeScript・microCMS" />
      </Head>

      <Dashboard pageProps={ children } />
    </>
  )
}
