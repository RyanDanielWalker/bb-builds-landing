export enum SelectedPage {
  Home = "home",
  About = "about",
  Projects = "projects",
  Services = "services",
  Contact = "contact",
}

export type LinkProps = {
  page: string
  selectedPage: SelectedPage
  setSelectedPage: (page: SelectedPage) => void
}

export interface NavBarProps extends Omit<LinkProps, "page"> {
  isTopOfPage: boolean
}

export const PAGE_NAMES = ["Home", "About", "Projects", "Services"] as const
export type PageName = (typeof PAGE_NAMES)[number]

export type ServiceContent = {
  icon: JSX.Element
  title: string
  description: string
}

export interface ServiceProps extends ServiceContent {
  setSelectedPage: (value: SelectedPage) => void
}
