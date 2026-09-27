import { motion } from "framer-motion"
import {
  GraduationCap,
  Shield,
  Quote,
} from "lucide-react"

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f7f3eb] px-6 py-24 md:px-16 lg:px-20"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-[#172747]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-14 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-orange-600">
            <span className="h-px w-8 bg-orange-500" />
            हमारे बारे में
          </span>

          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#172747] sm:text-5xl">
            राष्ट्र रक्षा से
            <span className="text-orange-500"> ग्राम सेवा तक</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#172747]/60 sm:text-lg">
            शिक्षा, भारतीय सेना में सेवा, कृषि और ग्राम पंचायत की जिम्मेदारियों
            से जुड़ी एक ग्रामीण जीवन यात्रा।
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#ded7ca] shadow-xl">
                <img
                  src="./about.png"
                  alt="रविंद्र कुमार"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-sm font-medium text-white/75">
                    ग्राम पंचायत ढींगरिया
                  </p>

                  <h3 className="mt-1 text-2xl font-semibold text-white">
                    रविंद्र कुमार
                  </h3>

                  <p className="mt-1 text-sm text-white/70">
                    पूर्व भारतीय सैनिक · कृषक · सरपंच
                  </p>
                </div>
              </div>

              {/* Service Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                }}
                className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl border border-white/70 bg-white px-5 py-4 shadow-xl sm:-right-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                  <Shield size={21} />
                </div>

                <div>
                  <p className="text-lg font-bold text-[#172747]">
                    16+ वर्ष
                  </p>

                  <p className="text-xs text-[#172747]/50">
                    भारतीय सेना में सेवा
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Highlight Quote */}
            <div className="relative overflow-hidden rounded-2xl border border-orange-500/15 bg-white p-6 shadow-sm sm:p-8">
              <div className="absolute right-5 top-5 text-orange-500/10">
                <Quote size={64} strokeWidth={1.5} />
              </div>

              <div className="relative">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                  <Quote size={18} />
                </div>

                <p className="max-w-2xl font-display text-2xl font-medium leading-relaxed text-[#172747] sm:text-3xl">
                  राष्ट्र रक्षा का अनुभव,
                  <span className="text-orange-500">
                    {" "}
                    अब गाँव के विकास और किसानों की समृद्धि{" "}
                  </span>
                  से जुड़े जीवन का हिस्सा है।
                </p>
              </div>
            </div>

            {/* Biography */}
            <div className="mt-9 max-w-2xl">
              <p className="text-lg font-medium leading-8 text-[#172747] sm:text-xl">
                मैं रविंद्र कुमार, झुंझुनूं जिले के ऐतिहासिक गाँव जयसिंहवास
                से हूँ। भारतीय सेना के पूर्व सैनिक के रूप में राष्ट्र सेवा का
                अनुभव प्राप्त किया और मार्च 2018 में सैन्य सेवा पूर्ण की।
              </p>

              <p className="mt-5 text-base leading-8 text-[#172747]/65">
                सेना से लौटने के बाद वर्ष 2018 से मैं प्राकृतिक, जैविक एवं
                गौ-आधारित कृषि से जुड़ा हुआ हूँ। ग्रामीण जीवन, खेती और किसानों
                से निरंतर जुड़े रहने के साथ सितंबर 2020 से ग्राम पंचायत
                ढींगरिया के सरपंच के रूप में ग्राम पंचायत से संबंधित
                जिम्मेदारियों का निर्वहन कर रहा हूँ।
              </p>

              <p className="mt-4 text-base leading-8 text-[#172747]/65">
                राष्ट्र रक्षा के अनुभव के बाद अब मेरा जीवन अपनी माटी, ग्रामीण
                समाज, कृषि और ग्राम पंचायत से जुड़े कार्यों के साथ आगे बढ़ रहा
                है। सेना के दौरान सीखे अनुशासन और जिम्मेदारी की भावना को
                सार्वजनिक जीवन में भी साथ लेकर चलना इस यात्रा का महत्वपूर्ण
                हिस्सा है।
              </p>
            </div>

            {/* Education Card */}
            <div className="mt-9 rounded-2xl border border-[#172747]/10 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#172747]/5 text-[#172747]">
                  <GraduationCap size={23} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                    शिक्षा
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-[#172747]">
                    सरकारी विद्यालय से स्नातक तक
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#172747]/60">
                    वरिष्ठ माध्यमिक — 2002 · स्नातक — 2005
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}