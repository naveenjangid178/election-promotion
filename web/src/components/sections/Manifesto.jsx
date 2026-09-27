import { motion } from "framer-motion"
import {
  Droplet,
  GraduationCap,
  Heart,
  Building2,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react"

const manifestos = [
  {
    icon: Droplet,
    category: "CLEAN WATER & DRAINAGE",
    title: "पेयजल एवं स्वच्छता",
    description: "स्वच्छ पानी और बेहतर स्वच्छता व्यवस्था से जुड़ी प्राथमिकताएँ।",
    points: [
      "हर घर नल — साप्ताहिक जल परीक्षण",
      "नालियों की मासिक सफाई रोस्टर",
      "गाँव में 4 नए RO वाटर पॉइंट",
    ],
  },
  {
    icon: GraduationCap,
    category: "EDUCATION & SPORTS",
    title: "युवा एवं शिक्षा",
    description: "शिक्षा, डिजिटल सुविधाओं और युवाओं के अवसरों पर केंद्रित प्रस्ताव।",
    points: [
      "डिजिटल लाइब्रेरी + फ्री वाई-फाई",
      "स्कूल अपग्रेडेशन व स्मार्ट क्लास",
      "खेल मैदान व रक्षा भर्ती कोचिंग",
    ],
  },
  {
    icon: Heart,
    category: "WOMEN EMPOWERMENT",
    title: "महिला सशक्तिकरण",
    description: "महिलाओं के कौशल, आजीविका और सुरक्षित आवागमन से जुड़ी पहल।",
    points: [
      "स्वयं सहायता समूह — ऋण सहायता",
      "सोलर स्ट्रीट लाइट — सुरक्षित रास्ते",
      "सिलाई-कढ़ाई कौशल केंद्र",
    ],
  },
  {
    icon: Building2,
    category: "TRANSPARENT GOVERNANCE",
    title: "पारदर्शी प्रशासन",
    description: "ग्राम सभा, शिकायतों और पंचायत से जुड़े कार्यों में पारदर्शिता।",
    points: [
      "खुली ग्राम सभा — हर माह",
      "डिजिटल फंड ट्रैकिंग बोर्ड",
      "72 घंटे शिकायत निवारण गारंटी",
    ],
  },
]

export default function ManifestoSection() {
  return (
    <section
      id="manifesto"
      className="relative overflow-hidden bg-[#FAF7F2] px-6 py-24 text-zinc-900 md:px-16 lg:py-32"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#172747]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-10 bg-amber-600/40" />

            <span className="text-[11px] font-bold tracking-[0.22em] text-amber-700">
              MANIFESTO · मेनिफेस्टो
            </span>

            <span className="h-px w-10 bg-amber-600/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl font-bold leading-tight tracking-tight text-[#172747] sm:text-4xl md:text-5xl"
          >
            गाँव के विकास का
            <span className="text-amber-600"> ब्लूप्रिंट</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-600 sm:text-base"
          >
            4 स्तंभ · 12 ठोस वादे · 100 दिन का एक्शन प्लान
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-2 text-xs text-zinc-400"
          >
            हर वादा लिखित संकल्प पत्र में।
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {manifestos.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex min-h-[470px] flex-col overflow-hidden rounded-3xl border border-zinc-200/80 bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-500/30 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
              >
                {/* Top Accent */}
                <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  {/* Icon */}
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#172747] text-amber-400 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-white">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <span className="text-xs font-semibold text-zinc-300">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Category */}
                  <p className="text-[9px] font-bold tracking-[0.18em] text-amber-700">
                    {item.category}
                  </p>

                  {/* Title */}
                  <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-[#172747]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-6 text-zinc-500">
                    {item.description}
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px bg-zinc-100" />

                  {/* Points */}
                  <ul className="space-y-4">
                    {item.points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        initial={{ opacity: 0, x: -5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.25 + pointIndex * 0.08,
                        }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2
                          size={16}
                          strokeWidth={2}
                          className="mt-0.5 shrink-0 text-emerald-600"
                        />

                        <span className="text-xs leading-6 text-zinc-700">
                          {point}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Bottom */}
                <div className="mt-auto border-t border-zinc-100 pt-5">
                  <a
                    href="#details"
                    className="group/link inline-flex cursor-pointer items-center gap-2 text-xs font-bold text-[#172747] transition-colors duration-200 hover:text-amber-700"
                  >
                    <span>विस्तार से देखें</span>

                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#172747]/10 bg-[#172747] px-6 py-6 text-center sm:flex-row sm:text-left sm:px-8"
        >
          <div>
            <p className="text-xs font-semibold tracking-wide text-amber-400">
              विकास के चार प्रमुख क्षेत्र
            </p>

            <p className="mt-1 text-sm text-white/70">
              पेयजल · शिक्षा · महिला सशक्तिकरण · पारदर्शी प्रशासन
            </p>
          </div>

          <a
            href="#details"
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-white px-5 py-3 text-xs font-bold text-[#172747] transition-all duration-300 hover:bg-amber-500 hover:text-white"
          >
            पूरा संकल्प पत्र
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}