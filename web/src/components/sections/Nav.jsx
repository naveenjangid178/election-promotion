import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react"

const links = [
  ["About Us", "about"],
  ["Manifesto", "manifesto"],
  ["Connect", "connect"],
]

const galleryLinks = [
  ["Images", "gallery-images"],
  ["Videos", "gallery-videos"],
  ["All", "gallery"],
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })

    setMobileOpen(false)
    setGalleryOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      {/* TOP INFORMATION BAR */}
      <div className="hidden bg-[#0d1b35] px-6 py-2 text-xs text-white/80 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            Your Name
          </div>

          <div className="flex items-center gap-6">
            <span>Gallery</span>
            <span>About Us</span>
            <span>Connect</span>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="border-b border-white/10 bg-[#172747]">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

          {/* LOGO / NAME */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3"
          >
            {/* Logo Box */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white shadow-md">
              <span className="text-xl font-bold">
                Y
              </span>
            </div>

            {/* Original Content */}
            <div className="hidden text-left sm:block">
              <div className="font-display text-lg font-semibold leading-tight text-white">
                Your Name
              </div>

              <div className="text-[11px] tracking-wide text-white/60">
                Your Original Content
              </div>
            </div>
          </button>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-7 lg:flex">

            {/* GALLERY */}
            <div
              className="relative"
              onMouseEnter={() => setGalleryOpen(true)}
              onMouseLeave={() => setGalleryOpen(false)}
            >
              <button
                onClick={() =>
                  setGalleryOpen((prev) => !prev)
                }
                className="flex items-center gap-1.5 text-sm font-medium text-white/85 transition-colors hover:text-white"
              >
                Gallery

                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    galleryOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {/* GALLERY DROPDOWN */}
              <AnimatePresence>
                {galleryOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="absolute left-1/2 mt-4 w-44 -translate-x-1/2 rounded-xl border border-black/10 bg-white p-2 shadow-xl"
                  >
                    {galleryLinks.map(
                      ([label, id]) => (
                        <button
                          key={id}
                          onClick={() =>
                            scrollToSection(id)
                          }
                          className="block w-full rounded-lg px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-orange-50 hover:text-orange-600"
                        >
                          {label}
                        </button>
                      )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ORIGINAL LINKS */}
            {links.map(([label, id]) => (
              <button
                key={id}
                onClick={() =>
                  scrollToSection(id)
                }
                className="text-sm font-medium text-white/85 transition-colors hover:text-white"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <Button
            onClick={() =>
              scrollToSection("jan-sujav")
            }
            className="hidden rounded-lg bg-orange-500 px-5 font-semibold text-white shadow-md transition-all hover:bg-orange-600 hover:shadow-lg lg:flex"
          >
            Jan-Sujav Portal
          </Button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() =>
              setMobileOpen((prev) => !prev)
            }
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden border-b border-white/10 bg-[#172747] lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-5">

              {/* GALLERY */}
              <button
                onClick={() =>
                  setGalleryOpen((prev) => !prev)
                }
                className="flex items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium text-white/90 hover:bg-white/5"
              >
                <span>Gallery</span>

                <ChevronDown
                  size={17}
                  className={`transition-transform ${
                    galleryOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {/* MOBILE GALLERY DROPDOWN */}
              <AnimatePresence>
                {galleryOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    className="ml-4 overflow-hidden"
                  >
                    {galleryLinks.map(
                      ([label, id]) => (
                        <button
                          key={id}
                          onClick={() =>
                            scrollToSection(id)
                          }
                          className="block w-full rounded-lg px-4 py-2.5 text-left text-sm text-white/60 hover:bg-white/5 hover:text-white"
                        >
                          {label}
                        </button>
                      )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ORIGINAL LINKS */}
              {links.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() =>
                    scrollToSection(id)
                  }
                  className="rounded-lg px-3 py-3 text-left text-sm font-medium text-white/90 transition-colors hover:bg-white/5"
                >
                  {label}
                </button>
              ))}

              {/* JAN-SUJAV PORTAL */}
              <button
                onClick={() =>
                  scrollToSection("jan-sujav")
                }
                className="mt-3 rounded-lg bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Jan-Sujav Portal
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}