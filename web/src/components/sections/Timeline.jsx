import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

const initiatives = [
  {
    year: "2024",
    title: "Oran conservation drive",
    text: "Placeholder — describe an initiative around preserving common grazing/forest land and sustainable management.",
    image: "/images/oran-conservation.jpg",
  },
  {
    year: "2024",
    title: "Health & environment through sport",
    text: "Placeholder — describe a program linking athletics with public health and environmental awareness.",
    image: "/images/health-sport.jpg",
  },
  {
    year: "2023",
    title: "Livestock health campaign",
    text: "Placeholder — describe a free veterinary or vaccination drive for farmers.",
    image: "/images/livestock-health.jpg",
  },
  {
    year: "2023",
    title: "Village listening tour",
    text: "Placeholder — describe a campaign visiting villages to surface local issues directly.",
    image: "/images/village-tour.jpg",
  },
]

export default function Timeline() {
  const timelineRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 30%"],
  })

  return (
    <section
      id="initiatives"
      ref={timelineRef}
      className="bg-sand-dark/40 px-6 py-28 md:px-16"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mb-16 max-w-xl"
      >
        <span className="font-body text-sm text-clay">
          Initiatives
        </span>

        <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
          Work in progress, village by village.
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-5xl">

        {/* Background Timeline Line */}
        <div className="absolute left-4 top-0 h-full w-px bg-ink/15 md:left-1/2 md:-translate-x-1/2" />

        {/* Growing Timeline Line */}
        <motion.div
          style={{
            scaleY: scrollYProgress,
            transformOrigin: "top",
          }}
          className="absolute left-4 top-0 h-full w-[2px] bg-clay md:left-1/2 md:-translate-x-1/2"
        />

        <ul className="space-y-24 md:space-y-32">

          {initiatives.map((item, i) => {
            const isLeft = i % 2 === 0

            return (
              <motion.li
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative grid grid-cols-1 gap-8 pl-12 md:grid-cols-2 md:gap-20 md:pl-0"
              >

                {/* Timeline Dot */}
                <div
                  className={`absolute left-[9px] top-2 z-10 h-3 w-3 rounded-full bg-clay ring-4 ring-sand-dark/40 md:left-1/2 md:-translate-x-1/2`}
                />

                {isLeft ? (
                  <>
                    {/* Content - Left */}
                    <div className="md:pr-10 md:text-right">
                      <span className="font-display text-sm text-clay">
                        {item.year}
                      </span>

                      <h3 className="mt-2 font-display text-xl font-medium text-ink sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-ink/70">
                        {item.text}
                      </p>
                    </div>

                    {/* Image - Right */}
                    <div className="md:pl-10">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: 0.15,
                        }}
                        className="overflow-hidden rounded-sm"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-72"
                        />
                      </motion.div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image - Left */}
                    <div className="order-2 md:order-1 md:pr-10">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: 0.15,
                        }}
                        className="overflow-hidden rounded-sm"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-72"
                        />
                      </motion.div>
                    </div>

                    {/* Content - Right */}
                    <div className="order-1 md:order-2 md:pl-10">
                      <span className="font-display text-sm text-clay">
                        {item.year}
                      </span>

                      <h3 className="mt-2 font-display text-xl font-medium text-ink sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-ink/70">
                        {item.text}
                      </p>
                    </div>
                  </>
                )}
              </motion.li>
            )
          })}

        </ul>
      </div>
    </section>
  )
}