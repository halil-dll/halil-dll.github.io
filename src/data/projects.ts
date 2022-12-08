import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Project {
  title: string
  description: string
  href?: string
  icon: IconProp
}

export const ProjectData: Project[] = [
  {
    title: 'connor.is-a.dev',
    description:
      "You're currently here!",
    href: '/projects',
    icon: ['fas', 'home'],
  },
  {
    title: 'VALORANT',
    description:
      "A 5v5 character-based tactical shooter",
    href: 'https://discord.com/api/oauth2/authorize?client_id=968290486102143036&permissions=2147863552&scope=applications.commands%20bot',
    icon: ['fas', 'robot'],
  },
  {
    title: 'placeholder',
    description:
      "still writing this. just wanted to finish the design first",
    href: 'https://placeholder.com',
    icon: ['fas', 'pen'],
  },
  {
    title: 'placeholder',
    description:
      "same as above",
    href: 'https://placeholder.com',
    icon: ['fas', 'pen'],
  },
]
