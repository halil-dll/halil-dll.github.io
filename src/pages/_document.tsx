import Document, { Html, Head, Main, NextScript } from 'next/document' // @next/next/no-document-import-in-page

class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://vitals.vercel-insights.com" />
          <link rel="preconnect" href="https://ws.audioscrobbler.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favico.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favico.ico" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FFFFFF" />
          <meta property="og:url" content="https://halil.is-a.dev" />
          <meta property="og:site_name" content="halil.is-a.dev" />
          <meta property="og:image" content="/img/x.png" />
          <meta name="theme-color" content="#000000" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:image" content="https://halil.is-a.dev/img/x.png" />
        </Head>
        <body className="bg-white dark:bg-black text-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
