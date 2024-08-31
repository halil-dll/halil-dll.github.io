import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Project {
  title: string
  description: string
  href?: string
  icon: IconProp
}

export const ProjectData: Project[] = [
  {
    title: 'halil.is-a.dev',
    description:
      "You're currently here!",
    href: '/projects',
    icon: ['fas', 'home'],
  },
  {
    title: 'Ernst-Reuter-Schule',
    description:
      "Die Ernst-Reuter-Schule ist eine Integrierte Sekundarschule (ISS) mit einer eigenen gymnasialen Oberstufe und ungefähr 1000 Schüler:innen, die von rund 130 Lehrer:innen, Erzieher:innen und Sozialarbeiter:innen unterrichtet und betreut werden.",
    href: 'https://ernst-reuter-schule.berlin/',
    icon: ['fas', 'home'],
  },
  {
    title: 'Jugendhackt',
    description:
      "Mit Freundschaft die Welt verbessern",
    href: 'https://jugendhackt.org',
    icon: ['fas', 'pen'],
  },
  {
    title: 'Cyberthreat Simulator',
    description:
      "Bist du wirklich so sicher vor Cyber-Angriffen, wie du denkst? (unhosted project)",
    href: 'https://placeholder.com',
    icon: ['fas', 'pen'],
  },
]
