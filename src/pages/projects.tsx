import { MainLayout } from 'layouts/MainLayout'
import { v4 as uuidv4 } from 'uuid'
import { ProjectData } from 'data/projects'
import { ProjectCard } from 'components/ProjectCard'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation('common')
  return (
    <MainLayout
      title="Projects"
      description={t('projects_desc')}
    >
      <div className="grid gap-6">
        {ProjectData.map((project) => (
          <ProjectCard
            key={uuidv4()}
            title={project.title}
            description={project.description}
            icon={project.icon}
            href={project.href}
          />
        ))}
      </div>
    </MainLayout>
  )
}

export default Projects
