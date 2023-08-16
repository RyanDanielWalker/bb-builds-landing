import { FC, useState } from "react"
import eye_logo from "@/assets/photo/logo_large.png"
import useMediaQuery from "@/hooks/useMediaQuery"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"

type NavBarProps = {
  isTopOfPage: boolean
  selectedPage: SelectedPage
  setSelectedPage: (page: SelectedPage) => void
}

const NavBar: FC<NavBarProps> = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}) => {
  const flexBetween = "flex items-center justify-between"

  return (
    <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          <img style={{ height: "30px" }} alt="logo" src={eye_logo} />

          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Services"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            <div className={`${flexBetween} gap-8`}>
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
