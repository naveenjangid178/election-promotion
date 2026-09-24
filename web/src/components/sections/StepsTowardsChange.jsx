import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const events = [
  {
    title: "Jan Samvad Yatra",
    category: "Ravindra's Story of Change",
    description: "About the Campaign Jan Samvad Yatra is a people-focused outreach initiative conducted across more than 200 villages of Sheo Assembly...",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    badgeUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
  },
  {
    title: "Run for Registan",
    category: "Ravindra's Story of Change",
    description: "About the Event Run for Registan was more than just a marathon—it was a movement that brought together sports, social...",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266cf20?w=600&h=400&fit=crop",
    badgeUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    title: "Govansh Bachao Abhiyan",
    category: "Ravindra's Story of Change",
    description: "Govansh Bachao Abhiyan is a free vaccination drive focused on protecting cows from Lumpy Skin Disease, a viral infection that...",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop",
    badgeUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
]

export default function StepsTowardsChange() {
  // Duplicate the array to create a seamless infinite loop effect
  const duplicatedEvents = [...events, ...events, ...events]

  return (
    <section className="relative w-full bg-[#FAF7F2] py-20 overflow-hidden text-zinc-900">
      <div className="mx-auto max-w-7xl px-6 md:px-16 mb-12">
        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Ravindra's Story of Change
        </span>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-zinc-900 mt-2">
          Steps Towards Change — <span className="text-amber-600">Events</span>
        </h2>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="flex w-full overflow-hidden relative">
        <motion.div
          flex
          className="flex gap-6 shrink-0 pl-6"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedEvents.map((item, index) => (
            <div
              key={index}
              className="relative group w-[340px] sm:w-[380px] shrink-0 rounded-2xl bg-white border border-zinc-200/80 p-5 shadow-sm flex flex-col justify-between"
            >
              {/* Floating Circular Badge Image Overlapping the Top */}
              <div className="absolute -top-8 right-6 h-16 w-16 rounded-full border-4 border-[#FAF7F2] bg-white shadow-md overflow-hidden z-10">
                <img
                  src={item.badgeUrl}
                  alt="Badge"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                {/* Main Card Image */}
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-5 bg-zinc-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-zinc-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-zinc-600 leading-relaxed mb-6 line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Read More Link */}
              <div className="pt-4 border-t border-zinc-100">
                <a
                  href="#"
                  className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 transition-colors hover:text-amber-800"
                >
                  <span>Read More</span>
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}