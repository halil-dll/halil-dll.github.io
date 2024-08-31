import 'styles/globals.css'
import 'lib/fontawesome'
import { SWRConfig } from 'swr'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { Navbar } from 'components/Nav/Navbar'
import { appWithTranslation } from 'next-i18next'

const App = ({ Component, pageProps }) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(`/api/${url}`).then((res) => res.json()),
      }}
    >
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Toaster position="bottom-left" />
        <div className="flex flex-col min-h-screen">
          <div id="particle-container">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
          <Navbar />
          <div className="h-full lg:px-0 px-10">
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeProvider>
    </SWRConfig>
  )
}

export default appWithTranslation(App)
