import { MainLayout } from 'layouts/MainLayout'
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

const About = () => {
  const { t } = useTranslation('about')
  return (
    <MainLayout title={t('header')} description={t('description')}>
      <article className="max-w-none w-full prose prose-lg dark:prose-dark">
        <h2>{t('programming.header')}</h2>
        <div>
          <h3>{t('programming.subheader')}</h3>
            <p>
              {t('programming.entrystory')}
            </p>
        </div>
        <div>
            <h3>{t('programming.technologies.header')}</h3>
            <p>
            {t('programming.technologies.subheader')}
            </p>
            <ul>
                <li>JavaScript/TypeScript (NodeJS, TSW)</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Express</li>
                <li>GraphQL</li>
                <li>PostgreSQL</li>
                <li>Datadog</li>
                <li>Sentry</li>
                <li>Git</li>
                <li>C#</li>
                <li>C++</li>
                <li><strong>SAP ABAP</strong></li>
                <li>IDA Debugging & Reverse Engineering</li>
                <li>HeapMemView</li>
            </ul>
        </div>
        <div>
          <h4>{t('programming.technologies.learn.header')}</h4>
          <p>
            {t('programming.technologies.learn.story')}
          </p>
        </div>
        <div>
            <h3>{t('programming.goals.header')}</h3>
            <p>
              {t('programming.goals.story')}
            </p>
        </div>
      </article>
      {/* <article className="max-w-none w-full prose prose-lg dark:prose-dark">
        <h2>Photography</h2>
        <div>
          <h3>How I got into Photography</h3>
            <p>
            I became interested in photography because I was drawn to remembering moments in time and telling stories with pictures. I first began as a hobbyist, using a point-and-shoot camera to capture images of my friends and family. As I became more educated about photography and began experimenting with various methods, I came to appreciate the creative process and the capacity to capture moments in time. I invested a lot of money in a good camera and began taking photography more seriously. I also attended workshops and classes to improve my abilities. I began adopting the methods of well-known photographers and attempting new things on my own after being inspired by their work.
            </p>
        </div>
        <div>
            <h3>My Gear</h3>
            <p>
            Camera: Canon EOS 850D + EF-S 18-55 f/4-5,6 IS STM
            </p>
        </div>
        <div>
            <h3>My Goals</h3>
            <p>
            In order to improve as a photographer, I have several objectives: 
            </p>
            <ul>
                <li>I want to keep getting better at technical things like lighting, composition, and editing.</li>
                <li>Create an unique and recognizable style that will set me apart from other professionals in the field.</li>
                <li>Team up with other photographers and creatives to share ideas and skills.</li>
                <li>develop a solid portfolio that showcases my greatest work and draws in new customers.</li>
                <li>Provide customers with exceptional services that go above and beyond their expectations and their needs.</li>
                <li>Use the newest tools and technologies to improve my work, staying up to date with industry trends.</li>
                <li>Using my photographic skills to support good causes and non-profit organizations, I would like to give back to the community.</li>
                <li>Expand my skill set, explore into new areas of photography, and keep pushing myself to get better.</li>
            </ul>
            <p>
              ...and I have high hopes for my future as a programmer and photographer.
            </p>
        </div>
      </article> */}
      <article className="max-w-none w-full prose prose-lg dark:prose-dark">
        <h2>
          {t('personal.header')}
        </h2>
        <div>
            <h3>
              {t('personal.hobbies.header')}
            </h3>
            <p>
              {t('personal.hobbies.keys')}
            </p>
        </div>
        <div>
          <h3>
            {t('persona.header')}
          </h3>
          <p>
              {t('persona.keys')}
            </p>
        </div>
      </article>
    </MainLayout>
  )
}

export default About
