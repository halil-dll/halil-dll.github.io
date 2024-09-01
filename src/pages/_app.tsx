import 'styles/globals.css'
import 'lib/fontawesome'
import '../../node_modules/flag-icons/css/flag-icons.min.css'
import { SWRConfig } from 'swr'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { Navbar } from 'components/Nav/Navbar'
import { appWithTranslation } from 'next-i18next'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
interface ScriptProps {
  _nextI18Next?: {
    initialI18nStore: any;
    initialLocale: string;
    ns: string[];
  };
}

export const getStaticProps: GetStaticProps<ScriptProps> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
    ])),
  },
})

const App = ({ Component, pageProps }: AppProps) => {
  const { t, i18n } = useTranslation()
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
