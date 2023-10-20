// Header
export type Button = {
  Text: string,
  Link: string
}

export type MenuAnchor = {
  Text: string,
  Link: string,
  Target?: string
}

export type Header = {
  Logo: string,
  Menu: MenuAnchor[],
  ButtonCv: Button
}

// Greetings
export type Greetings = {
  Picture: string,
  Message: string
}

// Values
export type Card = {
  Icon: string,
  Title: string,
  Description: string
}

export type Values = {
  Title: string,
  Description: string,
  Cards: Card[]
}

// Toolbox
export type Toolbox = {
  Title: string,
  Description: string
}

// Experiences
export type Company = {
  Logo: string,
  Name: string,
  Link: string
}

export type ThirdParty = {
  Name: string,
  Link: string,
  RibbonBgColor: string,
  RibbonFontColor: string,
  RibbonDescription: string
}

export type TechStack = {
  Category: string,
  Stack: string[]
}

export type Job = {
  Title: string,
  Duration: string,
  TechStack: TechStack[],
  Description: string
}

export type Entry = {
  Company: Company,
  ThirdParty: ThirdParty,
  Job: Job
}

export type Experiences = {
  Title: string,
  Entries: Entry[]
}

// Footer
export type SocialMedia = {
  Icon: string,
  Link: string
}

export type Footer = {
  Message: string,
  Link: string,
  SocialMedia: SocialMedia[]
}


// Portfolio
export type Portfolio = {
  Header: Header,
  Greeting: Greetings,
  Values: Values,
  Toolbox: Toolbox,
  Experiences: Experiences,
  Footer: Footer
}

export const DefaultPortfolio = {
  Header: {
    Logo: '',
    Menu: [],
    ButtonCv: {
      Text: '',
      Link: ''
    }
  },
  Greeting: {
    Picture: '',
    Message: ''
  },
  Values: {
    Title: '',
    Description: '',
    Cards: []
  },
  Toolbox: {
    Title: '',
    Description: ''
  },
  Experiences: {
    Title: '',
    Entries: []
  },
  Footer: {
    Message: '',
    Link: '',
    SocialMedia: []
  }
};