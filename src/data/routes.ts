import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Route {
  name: string
  href: string
  type?: string
  icon?: IconProp
}

export const RouteData: Route[] = [
  {
    name: '\tHome',
    href: '/',
    icon: ['fas', 'home'],
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Setup',
    href: '/setup',
    type: 'dropdown',
  },
]
