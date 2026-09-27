import { motion } from "framer-motion"
import {
  Trash2,
  Accessibility,
  TreePine,
  HeartPulse,
  Dumbbell,
  PawPrint,
} from "lucide-react"

const events = [
  {
    title: "स्वच्छ ढींगरिया अभियान",
    category: "स्वच्छता",
    description:
      "घर-घर डस्टबिन वितरण, नालियों की नियमित सफ़ाई और जल निकासी का पक्का समाधान।",
    icon: Trash2,
    image: "./events/swachh-dhingariya.png",
  },
  {
    title: "सामूहिक शौचालय निर्माण",
    category: "स्वच्छता एवं सुलभता",
    description:
      "सार्वजनिक स्थलों पर स्वच्छ सामूहिक शौचालयों का निर्माण, सुलभ सुविधा और नियमित रख-रखाव।",
    icon: Accessibility,
    image: "./events/community-toilet.png",
  },
  {
    title: "हरियाली और वृक्षारोपण",
    category: "पर्यावरण",
    description:
      "पंचायत परिसर व सार्वजनिक मार्गों पर छायादार एवं फलदार पौधों का रोपण तथा सुरक्षा व्यवस्था।",
    icon: TreePine,
    image: "./events/tree-plantation.png",
  },
  {
    title: "गोवंश संरक्षण अभियान",
    category: "गोसेवा",
    description:
      "बेसहारा गोवंश के लिए गौशाला व्यवस्था और संक्रामक बीमारियों से बचाव का नि:शुल्क टीकाकरण।",
    icon: PawPrint,
    image: "./events/cow-protection.png",
  },
  {
    title: "निरोगी गाँव, स्वस्थ परिवार",
    category: "स्वास्थ्य",
    description:
      "ग्रामीणों के लिए नि:शुल्क स्वास्थ्य जांच शिविर, दवा वितरण व शुद्ध पेयजल की व्यवस्था।",
    icon: HeartPulse,
    image: "./events/health-camp.png",
  },
  {
    title: "पार्क एवं ओपन जिम निर्माण",
    category: "खेल व फिटनेस",
    description:
      "ग्रामवासियों के उत्तम स्वास्थ्य और युवाओं व बच्चों के मनोरंजन हेतु सार्वजनिक पार्क का सौंदर्यकरण एवं आधुनिक ओपन जिम की स्थापना।",
    icon: Dumbbell,
    image: "./events/open-gym.png",
  },
]

export default function StepsTowardsChange() {
  const duplicatedEvents = [...events, ...events, ...events]

  return (
    <section
      id="initiatives"
      className="relative w-full overflow-hidden bg-[#FAF7F2] py-20 text-zinc-900 md:py-24"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#172747]/5 blur-3xl" />

      {/* Section Header */}
      <div className="relative z-10 mx-auto mb-12 max-w-7xl px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 1, 1],
          }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-amber-600" />

            <span className="text-xs font-semibold tracking-[0.18em] text-amber-700">
              ग्राम विकास · प्रमुख पहल
            </span>
          </div>

          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-[#172747] sm:text-4xl md:text-5xl">
            बदलाव की ओर कदम —{" "}
            <span className="text-amber-600">प्रमुख पहल</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
            स्वच्छता, पर्यावरण, स्वास्थ्य, गोसेवा और खेल जैसे क्षेत्रों से जुड़ी
            ग्राम विकास की प्रमुख पहल।
          </p>
        </motion.div>
      </div>

      {/* Slider */}
      <div className="relative z-10 w-full overflow-hidden">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#FAF7F2] to-transparent md:w-28" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#FAF7F2] to-transparent md:w-28" />

        <motion.div
          className="flex w-max gap-6 pl-6 md:pl-16"
          animate={{
            x: ["0%", "-33.333333%"],
          }}
          transition={{
            duration: 45,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedEvents.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={`${item.title}-${index}`}
                whileHover={{ y: -5 }}
                className="group relative flex w-[320px] shrink-0 flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl sm:w-[370px] lg:w-[390px]"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-zinc-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#172747]/90 px-3.5 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
                    <Icon size={14} strokeWidth={2} />
                    <span>{item.category}</span>
                  </div>

                  {/* Number */}
                  <div className="absolute bottom-4 right-5 font-display text-4xl font-bold text-white/30">
                    {String((index % events.length) + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6">
                  {/* Icon */}
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold leading-snug text-[#172747]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-zinc-600">
                    {item.description}
                  </p>

                  {/* Bottom Label */}
                  <div className="mt-6 border-t border-zinc-100 pt-5">
                    <span className="text-xs font-medium text-zinc-400">
                      ग्राम विकास पहल
                    </span>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>

      {/* Slider Indicator */}
      <div className="relative z-10 mx-auto mt-10 flex max-w-7xl items-center justify-center gap-3 px-6">
        <span className="h-1.5 w-8 rounded-full bg-amber-500" />
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
      </div>
    </section>
  )
}