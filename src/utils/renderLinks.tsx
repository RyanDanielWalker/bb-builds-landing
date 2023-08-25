import Link from "@/containers/NavBar/Link"
import { LinkProps, PAGE_NAMES } from "@/shared/types"
import { FC } from "react"

export const renderLinks: FC<{
  selectedPage: LinkProps["selectedPage"]
  setSelectedPage: LinkProps["setSelectedPage"]
}> = ({ selectedPage, setSelectedPage }) => {
  return PAGE_NAMES.map((pageName) => (
    <Link
      key={pageName}
      page={pageName}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
  ))
}
