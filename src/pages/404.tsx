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
      'about',
    ])),
  },
})

const Custom404 = () => {
  const { t } = useTranslation('common')
  return (
    <div className="w-full flex flex-col justify-center max-w-3xl mx-auto mb-16 sm:px-0">
      <div>
        <h1 className="font-bold text-5xl">404</h1>
      </div>
      <p>
        {t('404')}
      </p>
    </div>
  )
}

export default Custom404
