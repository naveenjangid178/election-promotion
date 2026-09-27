import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import {
  Shield,
  Sprout,
  Landmark,
  Flag,
} from "lucide-react"

const journey = [
  {
    year: "2002",
    title: "भारतीय सेना में सेवा की शुरुआत",
    text: "वर्ष 2002 में भारतीय सेना में सेवा की शुरुआत की और राष्ट्र सेवा के अपने सफर की शुरुआत की।",
    icon: Shield,
    image: "./timeline/army-start.png",
  },
  {
    year: "2002 – मार्च 2018",
    title: "भारतीय सेना में सेवा",
    text: "लगभग 16 वर्षों तक भारतीय सेना में सेवा देने के बाद मार्च 2018 में सैन्य सेवा पूर्ण की।",
    icon: Shield,
    image: "./timeline/army-service.png",
  },
  {
    year: "2018 – वर्तमान",
    title: "प्राकृतिक एवं जैविक कृषि",
    text: "सेना से सेवा पूर्ण करने के बाद वर्ष 2018 से प्राकृतिक, जैविक एवं गौ-आधारित कृषि से जुड़े हुए हैं।",
    icon: Sprout,
    image: "./timeline/farming.png",
  },
  {
    year: "सितंबर 2020 – वर्तमान",
    title: "सरपंच, ग्राम पंचायत ढींगरिया",
    text: "सितंबर 2020 से ग्राम पंचायत ढींगरिया के सरपंच के रूप में ग्राम पंचायत से संबंधित जिम्मेदारियों का निर्वहन कर रहे हैं।",
    icon: Landmark,
    image: "./timeline/sarpanch.png",
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
      id="journey"
      ref={timelineRef}
      className="relative overflow-hidden bg-[#172747] px-6 py-24 text-white md:px-16 md:py-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-10 mx-auto mb-20 max-w-7xl"
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-orange-500" />

          <span className="text-sm font-semibold tracking-wide text-orange-400">
            जीवन यात्रा
          </span>
        </div>

        <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          राष्ट्र सेवा से
          <span className="text-orange-500"> ग्राम सेवा तक</span>
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
          भारतीय सेना में सेवा से लेकर कृषि और ग्राम पंचायत की जिम्मेदारियों
          तक की यात्रा।
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Background Timeline Line */}
        <div className="absolute left-[17px] top-0 h-full w-px bg-white/15 md:left-1/2 md:-translate-x-1/2" />

        {/* Growing Timeline Line */}
        <motion.div
          style={{
            scaleY: scrollYProgress,
            transformOrigin: "top",
          }}
          className="absolute left-[17px] top-0 h-full w-[2px] bg-orange-500 md:left-1/2 md:-translate-x-1/2"
        />

        <ul className="space-y-20 md:space-y-28">
          {journey.map((item, index) => {
            const Icon = item.icon
            const isLeft = index % 2 === 0

            return (
              <motion.li
                key={`${item.year}-${item.title}`}
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
                <div className="absolute left-[4px] top-2 z-20 flex h-7 w-7 items-center justify-center rounded-full border-4 border-[#172747] bg-orange-500 text-white shadow-lg md:left-1/2 md:-translate-x-1/2">
                  <Icon size={11} strokeWidth={2.5} />
                </div>

                {isLeft ? (
                  <>
                    {/* Content - Left */}
                    <div className="md:pr-10 md:text-right">
                      <span className="inline-block rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-orange-400">
                        {item.year}
                      </span>

                      <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-white/55 sm:text-base">
                        {item.text}
                      </p>
                    </div>

                    {/* Image - Right */}
                    <div className="md:pl-10">
                      <TimelineImage item={item} />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image - Left */}
                    <div className="order-2 md:order-1 md:pr-10">
                      <TimelineImage item={item} />
                    </div>

                    {/* Content - Right */}
                    <div className="order-1 md:order-2 md:pl-10">
                      <span className="inline-block rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-orange-400">
                        {item.year}
                      </span>

                      <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-white/55 sm:text-base">
                        {item.text}
                      </p>
                    </div>
                  </>
                )}
              </motion.li>
            )
          })}

          {/* Current Status */}
          <motion.li
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
            className="relative pl-12 md:pl-0"
          >
            {/* Final Timeline Dot */}
            <div className="absolute left-[4px] top-2 z-20 flex h-7 w-7 items-center justify-center rounded-full border-4 border-[#172747] bg-orange-500 text-white shadow-lg md:left-1/2 md:-translate-x-1/2">
              <Flag size={11} strokeWidth={2.5} />
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:mx-auto md:max-w-xl md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                  <Flag size={18} />
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-wide text-orange-400">
                    वर्तमान
                  </p>

                  <h3 className="mt-1 font-display text-xl font-semibold text-white">
                    ग्राम पंचायत ढींगरिया
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/55">
                ग्राम पंचायत से जुड़ी जिम्मेदारियों के साथ ग्रामीण समाज,
                कृषि और गाँव से जुड़े कार्यों की यात्रा जारी है।
              </p>
            </div>
          </motion.li>
        </ul>
      </div>
    </section>
  )
}

function TimelineImage({ item }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        margin: "-50px",
      }}
      transition={{
        duration: 0.8,
        delay: 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
    >
      <div className="relative h-64 overflow-hidden md:h-72">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#172747]/60 via-transparent to-transparent" />
      </div>
    </motion.div>
  )
}