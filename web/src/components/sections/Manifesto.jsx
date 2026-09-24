import { motion } from "framer-motion"
import { Droplet, GraduationCap, Heart, Building2, CheckCircle2, ArrowRight } from "lucide-react"

const manifestos = [
  {
    icon: Droplet,
    category: "CLEAN WATER & DRAINAGE",
    title: "पेयजल एवं स्वच्छता",
    points: [
      "हर घर नल — साप्ताहिक जल परीक्षण",
      "नालियों की मासिक सफाई रोस्टर",
      "गाँव मे 4 नए RO वाटर पॉइंट",
    ],
  },
  {
    icon: GraduationCap,
    category: "EDUCATION & SPORTS",
    title: "युवा एवं शिक्षा",
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
    points: [
      "खुली ग्राम सभा — हर माह",
      "डिजिटल फंड ट्रैकिंग बोर्ड",
      "72 घंटे शिकायत निवारण गारंटी",
    ],
  },
]

export default function ManifestoSection() {
  return (
    <section className="relative w-full bg-[#FAF7F2] px-6 py-20 md:px-16 lg:py-28 text-zinc-900">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 text-xs md:text-sm font-semibold tracking-widest uppercase text-amber-700 mb-3"
          >
            <span className="h-[1px] w-8 bg-amber-700/40" />
            <span>MANIFESTO • मेनिफेस्टो</span>
            <span className="h-[1px] w-8 bg-amber-700/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-zinc-900 mb-4"
          >
            गाँव के विकास का ब्लू प्रिंट
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm font-medium text-zinc-600 tracking-wide"
          >
            4 स्तंभ • 12 ठोस वादे • 100 दिन का एक्शन प्लान। हर वादा लिखित संकल्प पत्र मे।
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {manifestos.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-zinc-200/80 transition-all duration-300 hover:shadow-md hover:border-amber-600/30"
              >
                <div>
                  {/* Icon Box */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-950 text-amber-500 shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <Icon size={22} />
                  </div>

                  {/* Subtitle / Category */}
                  <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 mb-1">
                    {item.category}
                  </p>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-zinc-900 mb-6">
                    {item.title}
                  </h3>

                  {/* Points Checklist */}
                  <ul className="space-y-3 mb-8">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-zinc-700 leading-relaxed">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Link / Action */}
                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <a
                    href="#details"
                    className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 transition-colors hover:text-amber-800"
                  >
                    <span>Know More</span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}