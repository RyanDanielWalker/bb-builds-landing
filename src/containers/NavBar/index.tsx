import { FC, useState } from "react"
import eye_logo from "@/assets/photo/logo_large.png"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import useMediaQuery from "@/hooks/useMediaQuery"
import { NavBarProps } from "@/shared/types"
import { renderLinks } from "@/utils/renderLinks"

const NavBar: FC<NavBarProps> = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}) => {
  const flexBetween = "flex items-center justify-between"
  const isLargeScreen = useMediaQuery("(min-width: 1060px)")
  const [menuIsToggled, setMenuIsToggled] = useState<boolean>(false)

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img style={{ height: "30px" }} alt="logo" src={eye_logo} />

            {isLargeScreen ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-lg`}>
                  {renderLinks({ selectedPage, setSelectedPage })}
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Contact</p>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-orange p-2"
                onClick={() => setMenuIsToggled(!menuIsToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-cream" />
              </button>
            )}
          </div>
        </div>
      </div>

      {!isLargeScreen && menuIsToggled && (
        <div className="bg-primary-100 fixed bottom-0 right-0 z-40 h-full w-[300px] drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setMenuIsToggled(!menuIsToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            {renderLinks({ selectedPage, setSelectedPage })}
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
