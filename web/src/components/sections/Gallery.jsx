import { motion } from "framer-motion"

const items = [
  { caption: "Village visit", tall: true },
  { caption: "Community meeting" },
  { caption: "Field survey" },
  { caption: "Youth program", tall: true },
  { caption: "Local event" },
  { caption: "Public address" },
]

export default function Gallery() {
  return (
    <section id="gallery" className="px-6 py-28 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mb-16 max-w-xl"
      >
        <span className="font-body text-sm text-clay">Moments</span>
        <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
          On the ground.
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={item.caption}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -6 }}
            className={`group relative overflow-hidden rounded-xl bg-sand-dark ${
              item.tall ? "row-span-2 aspect-[3/4]" : "aspect-square"
            }`}
          >
            {/* Replace with a real photo */}
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-sm font-medium text-sand">
                {item.caption}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
