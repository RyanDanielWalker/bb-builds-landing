import { FC } from "react"
import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"

type LinkProps = {
  page: string
  selectedPage: SelectedPage
  setSelectedPage: (page: SelectedPage) => void
}

const Link: FC<LinkProps> = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-orange" : ""}
        cursor-pointer transition duration-500 hover:text-blue
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link
