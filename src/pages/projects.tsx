import { MainLayout } from 'layouts/MainLayout'
import { v4 as uuidv4 } from 'uuid'
import { ProjectData } from 'data/projects'
import { ProjectCard } from 'components/ProjectCard'
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
      'projects'
    ])),
  },
})

const Projects = () => {
  const { t } = useTranslation('projects')
  return (
    <MainLayout
      title={t('title')}
      description={t('desc')}
    >
      <div className="grid gap-6">
        {ProjectData.map((project) => (
          <ProjectCard
            key={uuidv4()}
            title={project.title}
            description={t(`${project.title}`)}
            icon={project.icon}
            href={project.href}
          />
        ))}
      </div>
    </MainLayout>
  )
}

export default Projects
