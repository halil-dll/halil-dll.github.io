import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGithub, faDiscord, faApple, faSpotify, faMastodon } from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faSearch,
  faCalendarDay,
  faCaretDown as faSolidCaretDown,
  faHome,
  faCaretRight,
  faLink,
  faRobot,
  faMusic,
  faPen,
} from '@fortawesome/free-solid-svg-icons'
import { faClock, faSun, faMoon } from '@fortawesome/free-regular-svg-icons'

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css'
// Prevent Font Awesome from adding its CSS since we did it manually above:
config.autoAddCss = false

// Import @fortawesome/free-brands-svg-icons
library.add(faTwitter, faGithub, faDiscord, faApple, faSpotify, faMastodon)

// Import @fortawesome/free-solid-svg-icons
library.add(faEnvelope, faSearch, faCalendarDay, faSolidCaretDown, faHome, 
  faCaretRight, faLink, faRobot, faMusic, faPen)

// Import @fortawesome/free-regular-svg-icons
library.add(faClock, faSun, faMoon)
