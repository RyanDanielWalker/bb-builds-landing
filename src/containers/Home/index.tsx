import useMediaQuery from "@/hooks/useMediaQuery"
import { NavBarProps, SelectedPage } from "@/shared/types"
import { FC } from "react"
import { motion } from "framer-motion"
import HomeLogo from "@/assets/photo/logo_large.png"
import HomePageGraphic from "@/assets/photo/halo-homepage.jpg"

export const Home: FC<Pick<NavBarProps, "setSelectedPage">> = ({
  setSelectedPage,
}) => {
  const isLargeScreen = useMediaQuery("(min-width: 1060px)")

  return (
    <section id="home" className="gap-16 bg-light-gray py-10 md:h-full md:pb-0">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="md:before:content-evolvetext before:absolute before:-left-20 before:-top-20 before:z-[-1]">
                <img alt="logo" src={HomeLogo} />
              </div>
            </div>
            <p className="mt-8 text-xl font-medium">
              Portland based design and fabrication studio.
            </p>
          </motion.div>
        </div>
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img
            className="-scale-x-100 transform"
            alt="home-pageGraphic"
            src={HomePageGraphic}
          />
        </div>
      </motion.div>
    </section>
  )
}
