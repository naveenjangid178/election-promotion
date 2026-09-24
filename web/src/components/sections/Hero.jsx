import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const line = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-between overflow-hidden bg-[#121212] px-6 py-12 md:px-16 lg:px-20">
      {/* Background Crowd Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1IcUeg5CcD6yjtnIj1dLgI-a9e60Wh4zGNcoev7hUYHoPIEFLd0zHiE6&s=10')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/90 to-[#121212]/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 grid w-full grid-cols-1 items-center lg:grid-cols-12 gap-8">
        
        {/* Left Column: Headings, Subtitles, and Socials */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <h1 className="font-display text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {["Ravindra Singh Bhati - New", "Voice. New Vision."].map((text, i) => (
              <span key={text} className="block overflow-hidden py-1">
                <motion.span
                  custom={i}
                  variants={line}
                  initial="hidden"
                  animate="visible"
                  className={`block ${i === 0 ? "text-amber-500" : "text-white"}`}
                >
                  {text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 space-y-2"
          >
            <p className="text-xl font-semibold text-white/90">
              Ravindra Singh Bhati
            </p>
            <p className="text-sm font-medium tracking-wide text-white/50">
              MLA Sheo Vidhan Sabha
            </p>
            <p className="pt-2 text-sm text-white/70">
              Youngest MLA of the Rajasthan Legislative Assembly
            </p>
          </motion.div>

          {/* Social Media Icons Box (Using inline SVGs for reliability) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 flex items-center gap-3"
          >
            {/* Instagram */}
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.373 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.581 9 4.75V8z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </motion.div>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <Button
              size="lg"
              onClick={() => document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative flex items-center gap-3 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-6 text-base font-semibold text-zinc-950 shadow-lg transition-all duration-300 hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500/20"
            >
              <span>Join Our Mission</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Button>
          </motion.div>
        </div>

        {/* Right Column: Featured Portrait Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-end justify-center lg:col-span-5 h-[70vh] lg:h-[85vh] w-full mt-8 lg:mt-0"
        >
          <div 
            className="absolute inset-0 bg-contain bg-bottom bg-no-repeat filter drop-shadow-2xl"
            style={{ backgroundImage: `url('/path-to-portrait-image.png')` }}
          />
        </motion.div>

      </div>
    </section>
  )
}