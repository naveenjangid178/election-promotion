import { Phone, MessageSquare, MapPin } from "lucide-react"

const Footer = () => {
  const phoneNumber = "9717222480"

  return (
    <footer className="border-t border-zinc-800 bg-[#111827] px-6 pb-8 pt-16 text-white md:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 border-b border-zinc-800/80 pb-14 md:grid-cols-12">
          {/* Identity */}
          <div className="space-y-5 md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-amber-600 shadow-lg">
                <img
                  src="./logo.png"
                  alt="रविंद्र कुमार"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h4 className="font-display text-xl font-bold tracking-tight">
                  रविंद्र कुमार
                </h4>

                <p className="mt-0.5 text-xs font-medium text-amber-500">
                  सरपंच · ग्राम पंचायत ढींगरिया
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-zinc-400">
              भारतीय सेना के पूर्व सैनिक और वर्तमान में ग्राम पंचायत ढींगरिया
              के सरपंच। वर्ष 2018 से प्राकृतिक, जैविक एवं गौ-आधारित कृषि से
              जुड़े हुए हैं।
            </p>

            {/* Location */}
            <div className="flex items-start gap-3 text-sm text-zinc-400">
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-amber-500"
              />

              <div>
                <p className="font-medium text-zinc-200">
                  गाँव जयसिंहवास
                </p>

                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  ग्राम पंचायत ढींगरिया
                </p>
              </div>
            </div>

            {/* Social / Contact */}
            <div className="flex items-center gap-3 pt-1">
              {/* Phone */}
              <a
                href={`tel:${phoneNumber}`}
                aria-label="फोन करें"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300 transition-all duration-200 hover:bg-amber-600 hover:text-white"
              >
                <Phone size={17} />
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/91${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp पर संपर्क करें"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300 transition-all duration-200 hover:bg-amber-600 hover:text-white"
              >
                <MessageSquare size={17} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/sarpanchanju/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300 transition-all duration-200 hover:bg-amber-600 hover:text-white"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 md:col-span-2">
            <h5 className="mb-5 text-xs font-bold tracking-widest text-zinc-400">
              त्वरित लिंक
            </h5>

            <ul className="space-y-3 text-sm text-zinc-300">
              <li>
                <a
                  href="#home"
                  className="transition-colors duration-200 hover:text-amber-500"
                >
                  होम
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="transition-colors duration-200 hover:text-amber-500"
                >
                  हमारे बारे में
                </a>
              </li>

              <li>
                <a
                  href="#manifesto"
                  className="transition-colors duration-200 hover:text-amber-500"
                >
                  घोषणापत्र
                </a>
              </li>

              <li>
                <a
                  href="#initiatives"
                  className="transition-colors duration-200 hover:text-amber-500"
                >
                  प्रमुख पहल
                </a>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div className="space-y-3 md:col-span-2">
            <h5 className="mb-5 text-xs font-bold tracking-widest text-zinc-400">
              अन्य
            </h5>

            <ul className="space-y-3 text-sm text-zinc-300">
              <li>
                <a
                  href="#gallery"
                  className="transition-colors duration-200 hover:text-amber-500"
                >
                  गैलरी
                </a>
              </li>

              <li>
                <a
                  href="#jan-sujav"
                  className="transition-colors duration-200 hover:text-amber-500"
                >
                  जन-सुझाव पोर्टल
                </a>
              </li>

              <li>
                <a
                  href="#connect"
                  className="transition-colors duration-200 hover:text-amber-500"
                >
                  संपर्क करें
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Box */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 md:col-span-3">
            <div className="mb-5 flex items-center gap-2 text-amber-500">
              <Phone size={15} />

              <span className="text-xs font-bold tracking-wider">
                संपर्क
              </span>
            </div>

            <p className="font-display text-2xl font-extrabold tracking-tight text-white">
              9717222480
            </p>

            <p className="mt-2 text-xs leading-5 text-zinc-500">
              ग्राम पंचायत ढींगरिया से जुड़े सुझाव, संपर्क एवं जन-संवाद के लिए
              संपर्क करें।
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {/* Call */}
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-3 py-3 text-xs font-bold text-zinc-950 transition-colors duration-200 hover:bg-amber-500"
              >
                <Phone size={14} />
                कॉल करें
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/91${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-3 text-xs font-bold text-white transition-colors duration-200 hover:border-amber-600 hover:bg-amber-600"
              >
                <MessageSquare size={14} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-xs text-zinc-500">
              © 2026 रविंद्र कुमार · ग्राम पंचायत ढींगरिया
            </p>

            <p className="text-[11px] text-zinc-600">
              गाँव जयसिंहवास · ग्राम पंचायत ढींगरिया
            </p>
          </div>

          <a
            href="https://www.instagram.com/sarpanchanju/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-zinc-500 transition-colors duration-200 hover:text-amber-500"
          >
            <InstagramIcon size={15} />
            <span>@sarpanchanju</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

/* Instagram Brand Icon */
function InstagramIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
      />
    </svg>
  )
}

export default Footer