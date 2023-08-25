import { FC } from "react"
import { LinkProps, SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Link: FC<LinkProps> = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-orange" : ""}
        cursor-pointer transition duration-500 hover:text-light-gray
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link
