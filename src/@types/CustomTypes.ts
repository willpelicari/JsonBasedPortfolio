// Header
export type Button = {
  text: string
  link: string
}

export type MenuAnchor = {
  text: string
  link: string
  target?: string
}

export type Header = {
  logo: string
  menu: MenuAnchor[]
  buttonCv: Button
}

// Greetings
export type Greetings = {
  picture: string
  message: string
}

// Values
export type Card = {
  icon: string
  title: string
  description: string
}

export type Values = {
  title: string
  description: string
  cards: Card[]
}

// Toolbox
export type Toolbox = {
  title: string
  description: string
}

// Experiences
export type Company = {
  logo: string
  name: string
  link: string
}

export type ThirdParty = {
  name: string
  link: string
  ribbonBgColor: string
  ribbonFontColor: string
  ribbonDescription: string
}

export type TechStack = {
  category: string
  stack: string[]
}

export type Job = {
  title: string
  duration: string
  techStack: TechStack[]
  description: string
}

export type Entry = {
  company: Company
  thirdParty: ThirdParty
  job: Job
}

export type Experiences = {
  title: string
  entries: Entry[]
}

// Footer
export type SocialMedia = {
  icon: string
  link: string
}

export type Footer = {
  message: string
  link: string
  socialMedia: SocialMedia[]
}

// Portfolio
export type Portfolio = {
  header: Header
  greeting: Greetings
  values: Values
  toolbox: Toolbox
  experiences: Experiences
  footer: Footer
}

export const DefaultPortfolio = {
  header: {
    logo: '',
    menu: [],
    buttonCv: {
      text: '',
      link: ''
    }
  },
  greeting: {
    picture: '',
    message: ''
  },
  values: {
    title: '',
    description: '',
    cards: []
  },
  toolbox: {
    title: '',
    description: ''
  },
  experiences: {
    title: '',
    entries: []
  },
  footer: {
    message: '',
    link: '',
    socialMedia: []
  }
}

export type FilterContextType = {
  filteredTags: string[]
  setTags: React.Dispatch<React.SetStateAction<string[]>>
}

export enum Themes {
  dark = 'dark',
  light = 'light'
}
