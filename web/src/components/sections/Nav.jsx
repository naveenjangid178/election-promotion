import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"

const links = [
  ["हमारे बारे में", "about"],
  ["घोषणापत्र", "manifesto"],
  ["संपर्क करें", "connect"],
]

const galleryLinks = [
  ["तस्वीरें", "gallery-images"],
  ["वीडियो", "gallery-videos"],
  ["सभी", "gallery"],
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Navigate to homepage section
  const scrollToSection = (id) => {
    setMobileOpen(false)
    setGalleryOpen(false)

    // Already on homepage
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      })

      return
    }

    // Coming from another page
    navigate(`/#${id}`)

    // Wait for homepage to render
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      })
    }, 300)
  }

  // Navigate to Jan-Sujhav portal
  const openJanSujhav = () => {
    setMobileOpen(false)
    setGalleryOpen(false)
    navigate("/jan-sujhav")
  }

  // Navigate home
  const goHome = () => {
    setMobileOpen(false)
    setGalleryOpen(false)

    if (location.pathname === "/") {
      scrollToSection("home")
    } else {
      navigate("/")
    }
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#172747]/70 shadow-lg backdrop-blur-xl"
          : "bg-white/5 backdrop-blur-md"
      }`}
    >
      {/* MAIN NAVBAR */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10"
            : "border-b border-white/5"
        }`}
      >
        <div className="mx-auto flex h-[64px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

          {/* LOGO */}
          <button
            onClick={goHome}
            className="flex cursor-pointer items-center gap-3"
            aria-label="मुख्य पृष्ठ"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-md">
              <img
                src="./logo.png"
                alt="रविंद्र कुमार"
                className="h-full w-full rounded-full object-cover"
              />
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
                className="flex cursor-pointer items-center gap-1.5 text-sm font-medium text-white/90 transition-colors duration-200 hover:text-orange-400"
              >
                गैलरी

                <ChevronDown
                  size={15}
                  className={`transition-all duration-200 ${
                    galleryOpen
                      ? "rotate-180 text-orange-400"
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
                    {galleryLinks.map(([label, id]) => (
                      <button
                        key={id}
                        onClick={() =>
                          scrollToSection(id)
                        }
                        className="block w-full cursor-pointer rounded-lg px-4 py-3 text-left text-sm text-gray-700 transition-colors duration-200 hover:bg-orange-50 hover:text-orange-600"
                      >
                        {label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* NAVIGATION LINKS */}
            {links.map(([label, id]) => (
              <button
                key={id}
                onClick={() =>
                  scrollToSection(id)
                }
                className="cursor-pointer text-sm font-medium text-white/90 transition-colors duration-200 hover:text-orange-400"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* JAN-SUJAV PORTAL */}
          <Button
            onClick={openJanSujhav}
            className="hidden cursor-pointer rounded-lg bg-orange-500 px-5 font-semibold text-white shadow-md transition-all duration-200 hover:bg-orange-600 hover:shadow-lg lg:flex"
          >
            जन-सुझाव पोर्टल
          </Button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() =>
              setMobileOpen((prev) => !prev)
            }
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-white transition-colors duration-200 hover:text-orange-400 lg:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
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
            className="overflow-hidden border-b border-white/10 bg-[#172747]/85 backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4">

              {/* MOBILE GALLERY */}
              <button
                onClick={() =>
                  setGalleryOpen((prev) => !prev)
                }
                className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium text-white/90 transition-colors duration-200 hover:bg-white/5 hover:text-orange-400"
              >
                <span>गैलरी</span>

                <ChevronDown
                  size={17}
                  className={`transition-all duration-200 ${
                    galleryOpen
                      ? "rotate-180 text-orange-400"
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
                    transition={{
                      duration: 0.2,
                    }}
                    className="ml-4 overflow-hidden"
                  >
                    {galleryLinks.map(([label, id]) => (
                      <button
                        key={id}
                        onClick={() =>
                          scrollToSection(id)
                        }
                        className="block w-full cursor-pointer rounded-lg px-4 py-2.5 text-left text-sm text-white/60 transition-colors duration-200 hover:bg-white/5 hover:text-orange-400"
                      >
                        {label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* MOBILE NAVIGATION LINKS */}
              {links.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() =>
                    scrollToSection(id)
                  }
                  className="cursor-pointer rounded-lg px-3 py-3 text-left text-sm font-medium text-white/90 transition-colors duration-200 hover:bg-white/5 hover:text-orange-400"
                >
                  {label}
                </button>
              ))}

              {/* MOBILE JAN-SUJAV */}
              <button
                onClick={openJanSujhav}
                className="mt-3 cursor-pointer rounded-lg bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-orange-600"
              >
                जन-सुझाव पोर्टल
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}