import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="px-6 py-28 md:px-16">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="aspect-[4/5] w-full rounded-2xl bg-sand-dark"
        >
          {/* Replace with a real portrait photo */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <span className="font-body text-sm text-clay">About</span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
            A short story about where this journey began.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/70">
            <p>
              Use this space for a genuine biography — background, formative
              experiences, and what led to public service. Keep it specific
              and personal rather than generic.
            </p>
            <p>
              A second paragraph can cover values and the guiding
              philosophy behind the work — what issues matter most, and why.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {[
              ["2023", "Elected"],
              ["200+", "Villages engaged"],
              ["12", "Core initiatives"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl text-clay">{value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-ink/50">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
