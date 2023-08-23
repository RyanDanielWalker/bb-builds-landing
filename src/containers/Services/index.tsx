import { SelectedPage, ServiceContent } from "@/shared/types"
import {
  PaintBrushIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import { FC } from "react"
import { Service } from "./Service"
import HomeLogo from "@/assets/photo/logo_large.png"

const SERVICES: Array<ServiceContent> = [
  {
    icon: <PaintBrushIcon className="h-6 w-6" />,
    title: "Design",
    description: [
      "Art Direction",
      "Architectural Design",
      "Environmental Design",
      "Experiential Design",
      "Retail Design",
      "Graphic Design",
      "Sculpture/Fine Arts",
      "3D Modeling",
    ],
  },
  {
    icon: <WrenchScrewdriverIcon className="h-6 w-6" />,
    title: "Build",
    description: [""],
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

export const Services: FC<{
  setSelectedPage: (value: SelectedPage) => void
}> = ({ setSelectedPage }) => {
  return (
    <section id="services" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Services)}>
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className=" basis-3/5 text-3xl font-bold">Services</h1>
          <p className="my-5 text-sm">
            We partner with architects, interior designers, builders and artists
            to bring client visions to life.
          </p>
        </motion.div>

        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {SERVICES.map((service: ServiceContent) => (
            <Service
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img className="mx-auto" alt="benefits-page-graphic" src={HomeLogo} />
        </div>
      </motion.div>
    </section>
  )
}
