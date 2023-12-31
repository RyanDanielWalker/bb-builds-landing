import { SelectedPage, ServiceProps } from "@/shared/types"
import { motion } from "framer-motion"
import { FC } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

export const Service: FC<ServiceProps> = ({
  icon,
  title,
  description,
  setSelectedPage,
}) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-light-gray bg-white px-6 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-light-gray bg-orange p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {description.map((item: string) => (
          <div className="my-3 p-4" key={item}>
            <p className="line-clamp-2 text-center">{item}</p>
          </div>
        ))}
      </div>

      <AnchorLink
        className="text-sm font-bold text-orange underline hover:text-blue"
        onClick={() => setSelectedPage(SelectedPage.Contact)}
        href={`#${SelectedPage.Contact}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  )
}
