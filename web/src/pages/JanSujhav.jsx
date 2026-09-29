import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  MapPin,
  Search,
  ShieldCheck,
  Clock3,
  AlertCircle,
  Droplets,
  Route,
  Lightbulb,
  Trash2,
  Trees,
  GraduationCap,
  HeartPulse,
  Zap,
  Building2,
  Copy,
  Check,
} from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import {
  submitProblem,
  verifyProblem,
} from "../services/problemApi"

const steps = [
  {
    number: "01",
    title: "आपकी जानकारी",
    shortTitle: "आवेदक",
    description: "पहले हमें आपके बारे में बताएं",
  },
  {
    number: "02",
    title: "समस्या की जानकारी",
    shortTitle: "समस्या",
    description: "समस्या को बेहतर समझने में मदद करें",
  },
  {
    number: "03",
    title: "अतिरिक्त जानकारी",
    shortTitle: "अतिरिक्त",
    description: "कुछ और जानकारी साझा करें",
  },
]

const categories = [
  {
    id: "पेयजल",
    label: "पेयजल",
    icon: Droplets,
  },
  {
    id: "सड़क",
    label: "सड़क",
    icon: Route,
  },
  {
    id: "नाली",
    label: "नाली",
    icon: Droplets,
  },
  {
    id: "स्ट्रीट लाइट",
    label: "स्ट्रीट लाइट",
    icon: Lightbulb,
  },
  {
    id: "सफाई",
    label: "सफाई",
    icon: Trash2,
  },
  {
    id: "पार्क",
    label: "पार्क",
    icon: Trees,
  },
  {
    id: "शिक्षा",
    label: "शिक्षा",
    icon: GraduationCap,
  },
  {
    id: "स्वास्थ्य",
    label: "स्वास्थ्य",
    icon: HeartPulse,
  },
  {
    id: "बिजली",
    label: "बिजली",
    icon: Zap,
  },
  {
    id: "अन्य",
    label: "अन्य",
    icon: Building2,
  },
]

const wards = Array.from(
  { length: 15 },
  (_, index) => `वार्ड ${index + 1}`,
)

const villages = ["जयसिंहवास", "ढींगड़िया"]

function Required() {
  return <span className="ml-1 text-red-500">*</span>
}

function FormField({
  label,
  required = false,
  children,
  hint,
  className = "",
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-sm font-semibold text-[#172747]">
        {label}
        {required && <Required />}
      </label>

      {children}

      {hint && (
        <p className="mt-1.5 text-xs leading-5 text-slate-400">
          {hint}
        </p>
      )}
    </div>
  )
}

function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#172747] outline-none transition placeholder:text-slate-400 focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10 ${className}`}
    />
  )
}

function Select({
  className = "",
  children,
  ...props
}) {
  return (
    <select
      {...props}
      className={`h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#172747] outline-none transition focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10 ${className}`}
    >
      {children}
    </select>
  )
}

function Textarea({
  className = "",
  ...props
}) {
  return (
    <textarea
      {...props}
      className={`min-h-[120px] w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm leading-6 text-[#172747] outline-none transition placeholder:text-slate-400 focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10 ${className}`}
    />
  )
}

function StepHeader({ step }) {
  const current = steps[step - 1]

  return (
    <div className="mb-7">
      <div className="mb-5 flex items-center gap-2">
        {steps.map((item, index) => {
          const stepNumber = index + 1
          const completed = stepNumber < step
          const active = stepNumber === step

          return (
            <div
              key={item.number}
              className="flex flex-1 items-center gap-2"
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all ${
                  completed
                    ? "bg-[#172747] text-white"
                    : active
                      ? "bg-[#f59e0b] text-[#172747] shadow-lg shadow-[#f59e0b]/20"
                      : "bg-slate-100 text-slate-400"
                }`}
              >
                {completed ? (
                  <Check size={15} />
                ) : (
                  item.number
                )}
              </div>

              <div className="hidden min-w-0 sm:block">
                <p
                  className={`truncate text-xs font-bold ${
                    active || completed
                      ? "text-[#172747]"
                      : "text-slate-400"
                  }`}
                >
                  {item.shortTitle}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="mx-1 h-px flex-1 bg-slate-200">
                  <motion.div
                    className="h-full bg-[#172747]"
                    initial={{ width: 0 }}
                    animate={{
                      width: completed ? "100%" : "0%",
                    }}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div>
        <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-[#f59e0b]">
          चरण {current.number}
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-[#172747] sm:text-3xl">
          {current.title}
        </h2>

        <p className="mt-1.5 text-sm text-slate-500">
          {current.description}
        </p>
      </div>
    </div>
  )
}

function HeroFeature({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#f59e0b]">
        <Icon size={19} />
      </div>

      <div>
        <p className="text-sm font-semibold text-white">
          {title}
        </p>

        <p className="mt-0.5 text-xs text-white/55">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function JanSujhav() {
  const navigate = useNavigate()

  const [step, setStep] = useState(1)

  const [selectedCategory, setSelectedCategory] =
    useState("")

  const [statusId, setStatusId] = useState("")
  const [statusLoading, setStatusLoading] =
    useState(false)
  const [statusResult, setStatusResult] =
    useState(null)

  const [submitting, setSubmitting] =
    useState(false)

  const [successId, setSuccessId] =
    useState("")

  const [copied, setCopied] =
    useState(false)

  const [submitError, setSubmitError] =
    useState("")

  const [form, setForm] = useState({
    fullName: "",
    fatherName: "",
    mobile: "",
    residentWard: "",
    village: "",

    problemWard: "",
    location: "",
    duration: "",
    affectedFamilies: "",
    description: "",

    affectsOthers: "",
    previousComplaintNumber: "",
    additionalInformation: "",
    confirmation: false,
  })

  const updateField = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }))
  }

  const scrollToForm = () => {
    document
      .getElementById("problem-form")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
  }

  const validateStep = () => {
    if (step === 1) {
      const cleanMobile = form.mobile
        .replace(/\D/g, "")
        .trim()

      if (
        !form.fullName.trim() ||
        !form.fatherName.trim() ||
        !cleanMobile ||
        !form.residentWard ||
        !form.village
      ) {
        setSubmitError(
          "कृपया सभी आवश्यक जानकारी भरें।",
        )

        return false
      }

      if (
        cleanMobile.length !== 10 ||
        !/^[6-9]\d{9}$/.test(cleanMobile)
      ) {
        setSubmitError(
          "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।",
        )

        return false
      }

      if (cleanMobile !== form.mobile) {
        updateField("mobile", cleanMobile)
      }
    }

    if (step === 2) {
      if (
        !form.problemWard ||
        !form.location.trim() ||
        !selectedCategory ||
        !form.duration ||
        !form.description.trim()
      ) {
        setSubmitError(
          "कृपया समस्या से जुड़ी सभी आवश्यक जानकारी भरें।",
        )

        return false
      }
    }

    if (step === 3) {
      if (!form.confirmation) {
        setSubmitError(
          "कृपया दी गई जानकारी सही होने की पुष्टि करें।",
        )

        return false
      }
    }

    setSubmitError("")

    return true
  }

  const handleNext = () => {
    if (!validateStep()) return

    setStep((previous) =>
      Math.min(previous + 1, 3),
    )

    setSubmitError("")

    setTimeout(scrollToForm, 80)
  }

  const handleBack = () => {
    setStep((previous) =>
      Math.max(previous - 1, 1),
    )

    setSubmitError("")

    setTimeout(scrollToForm, 80)
  }

  const handleStatusCheck = async () => {
    const cleanId = statusId
      .trim()
      .toUpperCase()

    if (!cleanId) {
      setStatusResult({
        type: "error",
        message:
          "कृपया अपना Problem ID दर्ज करें।",
      })

      return
    }

    setStatusLoading(true)
    setStatusResult(null)

    try {
      const data =
        await verifyProblem(cleanId)

      setStatusResult({
        type: "success",
        id:
          data.problemId ||
          cleanId,
        data,
      })
    } catch (error) {
      setStatusResult({
        type: "error",
        id: cleanId,
        message:
          error.message ||
          "Problem ID की जानकारी प्राप्त नहीं हो सकी।",
      })
    } finally {
      setStatusLoading(false)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!validateStep()) return

    setSubmitting(true)
    setSubmitError("")

    try {
      const cleanMobile = form.mobile
        .replace(/\D/g, "")
        .trim()

      const payload = {
        fullName: form.fullName.trim(),

        fatherName:
          form.fatherName.trim(),

        mobile: cleanMobile,

        residentWard:
          form.residentWard,

        village:
          form.village,

        problemWard:
          form.problemWard,

        location:
          form.location.trim(),

        category:
          selectedCategory,

        duration:
          form.duration,

        affectedFamilies:
          form.affectedFamilies
            ? Number(form.affectedFamilies)
            : null,

        description:
          form.description.trim(),

        affectsOthers:
          form.affectsOthers || null,

        previousComplaintNumber:
          form.previousComplaintNumber.trim() ||
          null,

        additionalInformation:
          form.additionalInformation.trim() ||
          null,

        confirmation:
          form.confirmation,
      }

      const data =
        await submitProblem(payload)

      const problemId =
        data?.problemId

      if (!problemId) {
        throw new Error(
          "Backend से Problem ID प्राप्त नहीं हुई।",
        )
      }

      setSuccessId(problemId)

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } catch (error) {
      setSubmitError(
        error.message ||
          "समस्या दर्ज नहीं हो सकी। कृपया कुछ समय बाद पुनः प्रयास करें।",
      )
    } finally {
      setSubmitting(false)
    }
  }

  const handleCopyId = async () => {
    if (!successId) return

    try {
      await navigator.clipboard.writeText(
        successId,
      )

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch {
      setCopied(false)
    }
  }

  /*
   * SUCCESS SCREEN
   */
  if (successId) {
    return (
      <div className="min-h-screen bg-[#f7f3eb]">
        <header className="border-b border-white/10 bg-[#172747]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-left"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-[#f59e0b]">
                ग्राम पंचायत ढींगरिया
              </p>

              <p className="mt-0.5 text-lg font-bold text-white">
                जन समस्या पोर्टल
              </p>
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <ArrowLeft size={16} />
              होम
            </button>
          </div>
        </header>

        <main className="mx-auto flex min-h-[calc(100vh-73px)] max-w-3xl items-center justify-center px-5 py-16">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="w-full rounded-[28px] border border-slate-200 bg-white p-7 text-center shadow-xl shadow-slate-900/5 sm:p-12"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={42} />
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
              सफल पंजीकरण
            </p>

            <h1 className="mt-2 text-3xl font-bold text-[#172747] sm:text-4xl">
              आपकी समस्या दर्ज हो गई है
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
              आपकी समस्या के लिए एक Unique Problem ID
              बनाई गई है। इसे सुरक्षित रखें ताकि आप
              बाद में अपनी समस्या की स्थिति देख सकें।
            </p>

            <div className="mx-auto mt-8 max-w-md rounded-2xl border border-[#f59e0b]/30 bg-[#fffaf0] p-5">
              <p className="text-xs font-semibold text-slate-500">
                आपकी Problem ID
              </p>

              <div className="mt-2 flex items-center justify-center gap-3">
                <p className="text-2xl font-black tracking-wider text-[#172747]">
                  {successId}
                </p>

                <button
                  type="button"
                  onClick={handleCopyId}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-[#f59e0b] hover:text-[#172747]"
                  title="Problem ID copy करें"
                >
                  {copied ? (
                    <Check size={16} />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {copied && (
                <p className="mt-2 text-xs font-semibold text-emerald-600">
                  Problem ID copy हो गई
                </p>
              )}
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  setStatusId(successId)
                  setSuccessId("")
                  setStatusResult(null)

                  setTimeout(() => {
                    document
                      .getElementById(
                        "status-check",
                      )
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }, 100)
                }}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#172747] px-6 text-sm font-bold text-white transition hover:bg-[#22365f]"
              >
                <Search size={17} />
                स्थिति देखें
              </button>

              <button
                type="button"
                onClick={() => navigate("/")}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-bold text-[#172747] transition hover:border-[#172747]"
              >
                होम पर जाएँ
                <ArrowRight size={17} />
              </button>
            </div>
          </motion.div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f7f3eb] text-[#172747]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#172747]/95 shadow-lg shadow-[#172747]/5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="group flex items-center gap-3 text-left"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f59e0b] font-black text-[#172747]">
              RK
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-white/50">
                ग्राम पंचायत ढींगरिया
              </p>

              <p className="text-base font-bold text-white">
                जन समस्या पोर्टल
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
          >
            <ArrowLeft size={16} />

            <span className="hidden sm:inline">
              मुख्य पृष्ठ
            </span>

            <span className="sm:hidden">
              होम
            </span>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#172747]">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f59e0b]/10 blur-3xl" />

        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-14 sm:px-6 sm:pb-16 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/10 px-4 py-2 text-xs font-bold text-[#f59e0b]"
            >
              <ClipboardCheck size={15} />
              नागरिक समस्या पंजीकरण
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.08,
              }}
              className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              जन समस्या दर्ज करें
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
              }}
              className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base"
            >
              आपके गाँव की समस्या, आपकी आवाज़ — सही
              जानकारी के साथ अपनी समस्या दर्ज करें।
              आपकी शिकायत को एक unique Problem ID दी
              जाएगी, जिससे आप बाद में उसका status देख
              सकते हैं।
            </motion.p>
          </div>

          <div className="mt-10 grid max-w-4xl gap-5 sm:grid-cols-3">
            <HeroFeature
              icon={ShieldCheck}
              title="सुरक्षित पंजीकरण"
              description="आपकी जानकारी सुरक्षित"
            />

            <HeroFeature
              icon={FileText}
              title="Unique Problem ID"
              description="हर समस्या की अलग पहचान"
            />

            <HeroFeature
              icon={Clock3}
              title="स्थिति देखें"
              description="ID से अपनी समस्या ट्रैक करें"
            />
          </div>
        </div>
      </section>

      {/* STATUS CHECK */}
      <section
        id="status-check"
        className="relative px-5 py-10 sm:px-6 lg:px-8 lg:py-14"
      >
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative overflow-hidden bg-[#172747] p-7 sm:p-9">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#f59e0b]/10 blur-2xl" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f59e0b] text-[#172747]">
                    <Search size={22} />
                  </div>

                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#f59e0b]">
                    पहले से समस्या दर्ज की है?
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    समस्या की स्थिति देखें
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-white/60">
                    अपनी Unique Problem ID दर्ज करके
                    अपनी शिकायत की वर्तमान स्थिति देखें।
                  </p>
                </div>
              </div>

              <div className="p-7 sm:p-9">
                <FormField
                  label="Unique Problem ID"
                  hint="उदाहरण: DG-20260930-0001"
                >
                  <Input
                    value={statusId}
                    onChange={(event) =>
                      setStatusId(
                        event.target.value.toUpperCase(),
                      )
                    }
                    placeholder="DG-XXXXXXXX"
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        handleStatusCheck()
                      }
                    }}
                  />
                </FormField>

                <button
                  type="button"
                  onClick={handleStatusCheck}
                  disabled={statusLoading}
                  className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#172747] px-5 text-sm font-bold text-white transition hover:bg-[#22365f] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {statusLoading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      जाँच की जा रही है...
                    </>
                  ) : (
                    <>
                      <Search size={17} />
                      स्थिति देखें
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {statusResult && (
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
                      className="overflow-hidden"
                    >
                      <div
                        className={`mt-5 rounded-xl border p-4 ${
                          statusResult.type ===
                          "success"
                            ? "border-emerald-200 bg-emerald-50"
                            : "border-red-200 bg-red-50"
                        }`}
                      >
                        {statusResult.type ===
                        "success" ? (
                          <div>
                            <div className="flex items-start gap-3">
                              <CheckCircle2
                                size={20}
                                className="mt-0.5 shrink-0 text-emerald-600"
                              />

                              <div className="min-w-0">
                                <p className="text-sm font-bold text-[#172747]">
                                  समस्या की जानकारी मिल गई
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                  Problem ID:{" "}
                                  <span className="font-bold text-[#172747]">
                                    {
                                      statusResult.id
                                    }
                                  </span>
                                </p>
                              </div>
                            </div>

                            {statusResult
                              .data
                              ?.status && (
                              <div className="mt-4 rounded-xl bg-white p-4">
                                <p className="text-xs font-semibold text-slate-400">
                                  वर्तमान स्थिति
                                </p>

                                <p className="mt-1 text-base font-bold text-[#172747]">
                                  {
                                    statusResult
                                      .data
                                      .status
                                  }
                                </p>
                              </div>
                            )}

                            {statusResult
                              .data
                              ?.message && (
                              <p className="mt-3 text-xs leading-5 text-slate-600">
                                {
                                  statusResult
                                    .data
                                    .message
                                }
                              </p>
                            )}
                          </div>
                        ) : (
                          <div className="flex gap-3">
                            <AlertCircle
                              size={19}
                              className="mt-0.5 shrink-0 text-red-500"
                            />

                            <div>
                              {statusResult.id && (
                                <p className="text-sm font-bold text-[#172747]">
                                  {
                                    statusResult.id
                                  }
                                </p>
                              )}

                              <p className="mt-1 text-xs leading-5 text-slate-600">
                                {
                                  statusResult.message
                                }
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-5 sm:px-6 lg:px-8">
        <div className="h-px flex-1 bg-slate-200" />

        <span className="text-xs font-semibold text-slate-400">
          या
        </span>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      {/* FORM */}
      <main
        id="problem-form"
        className="scroll-mt-24 px-5 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-14"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f59e0b]">
              नई समस्या
            </p>

            <h2 className="mt-2 text-3xl font-black text-[#172747] sm:text-4xl">
              अपनी समस्या दर्ज करें
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
              केवल 3 आसान चरणों में अपनी समस्या पंचायत
              तक पहुँचाएँ।
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
              <div className="p-6 sm:p-9 lg:p-10">
                <AnimatePresence mode="wait">
                  {/* STEP 1 */}
                  {step === 1 && (
                    <motion.div
                      key="step-1"
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: -20,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <StepHeader step={1} />

                      <div className="grid gap-5 sm:grid-cols-2">
                        <FormField
                          label="पूरा नाम"
                          required
                        >
                          <Input
                            value={form.fullName}
                            onChange={(event) =>
                              updateField(
                                "fullName",
                                event.target.value,
                              )
                            }
                            placeholder="अपना पूरा नाम लिखें"
                          />
                        </FormField>

                        <FormField
                          label="पिता/पति का नाम"
                          required
                        >
                          <Input
                            value={form.fatherName}
                            onChange={(event) =>
                              updateField(
                                "fatherName",
                                event.target.value,
                              )
                            }
                            placeholder="पिता/पति का नाम"
                          />
                        </FormField>

                        <FormField
                          label="मोबाइल नंबर"
                          required
                        >
                          <Input
                            type="tel"
                            inputMode="numeric"
                            maxLength={10}
                            value={form.mobile}
                            onChange={(event) => {
                              const value =
                                event.target.value
                                  .replace(/\D/g, "")
                                  .slice(0, 10)

                              updateField(
                                "mobile",
                                value,
                              )
                            }}
                            placeholder="10 अंकों का मोबाइल नंबर"
                          />
                        </FormField>

                        <FormField
                          label="आप किस वार्ड के निवासी हैं?"
                          required
                        >
                          <Select
                            value={
                              form.residentWard
                            }
                            onChange={(event) =>
                              updateField(
                                "residentWard",
                                event.target.value,
                              )
                            }
                          >
                            <option value="">
                              वार्ड चुनें
                            </option>

                            {wards.map(
                              (ward) => (
                                <option
                                  key={ward}
                                  value={ward}
                                >
                                  {ward}
                                </option>
                              ),
                            )}
                          </Select>
                        </FormField>

                        <FormField
                          label="गाँव"
                          required
                          className="sm:col-span-2"
                        >
                          <div className="grid gap-3 sm:grid-cols-2">
                            {villages.map(
                              (village) => {
                                const selected =
                                  form.village ===
                                  village

                                return (
                                  <button
                                    key={village}
                                    type="button"
                                    onClick={() =>
                                      updateField(
                                        "village",
                                        village,
                                      )
                                    }
                                    className={`flex h-14 items-center gap-3 rounded-xl border px-4 text-left transition ${
                                      selected
                                        ? "border-[#f59e0b] bg-[#fff8e8] ring-2 ring-[#f59e0b]/10"
                                        : "border-slate-200 bg-white hover:border-slate-300"
                                    }`}
                                  >
                                    <div
                                      className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                                        selected
                                          ? "bg-[#f59e0b] text-[#172747]"
                                          : "bg-slate-100 text-slate-400"
                                      }`}
                                    >
                                      <MapPin
                                        size={
                                          16
                                        }
                                      />
                                    </div>

                                    <span
                                      className={`text-sm font-semibold ${
                                        selected
                                          ? "text-[#172747]"
                                          : "text-slate-600"
                                      }`}
                                    >
                                      {village}
                                    </span>

                                    {selected && (
                                      <CheckCircle2
                                        size={
                                          17
                                        }
                                        className="ml-auto text-[#f59e0b]"
                                      />
                                    )}
                                  </button>
                                )
                              },
                            )}
                          </div>
                        </FormField>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2 */}
                  {step === 2 && (
                    <motion.div
                      key="step-2"
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: -20,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <StepHeader step={2} />

                      <div className="space-y-6">
                        <div className="grid gap-5 sm:grid-cols-2">
                          <FormField
                            label="समस्या किस वार्ड में है?"
                            required
                          >
                            <Select
                              value={
                                form.problemWard
                              }
                              onChange={(event) =>
                                updateField(
                                  "problemWard",
                                  event.target.value,
                                )
                              }
                            >
                              <option value="">
                                वार्ड चुनें
                              </option>

                              {wards.map(
                                (ward) => (
                                  <option
                                    key={ward}
                                    value={ward}
                                  >
                                    {ward}
                                  </option>
                                ),
                              )}
                            </Select>
                          </FormField>

                          <FormField
                            label="समस्या का स्थान"
                            required
                          >
                            <Input
                              value={
                                form.location
                              }
                              onChange={(event) =>
                                updateField(
                                  "location",
                                  event.target.value,
                                )
                              }
                              placeholder="जैसे — मुख्य सड़क के पास"
                            />
                          </FormField>
                        </div>

                        <div>
                          <label className="mb-3 block text-sm font-semibold text-[#172747]">
                            समस्या की श्रेणी
                            <Required />
                          </label>

                          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                            {categories.map(
                              (category) => {
                                const Icon =
                                  category.icon

                                const selected =
                                  selectedCategory ===
                                  category.id

                                return (
                                  <button
                                    key={
                                      category.id
                                    }
                                    type="button"
                                    onClick={() =>
                                      setSelectedCategory(
                                        category.id,
                                      )
                                    }
                                    className={`group relative flex min-h-[88px] flex-col items-center justify-center gap-2 rounded-2xl border p-3 text-center transition-all ${
                                      selected
                                        ? "border-[#f59e0b] bg-[#fff8e8] shadow-sm"
                                        : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
                                    }`}
                                  >
                                    <div
                                      className={`flex h-9 w-9 items-center justify-center rounded-xl transition ${
                                        selected
                                          ? "bg-[#f59e0b] text-[#172747]"
                                          : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                                      }`}
                                    >
                                      <Icon
                                        size={
                                          17
                                        }
                                      />
                                    </div>

                                    <span
                                      className={`text-xs font-bold ${
                                        selected
                                          ? "text-[#172747]"
                                          : "text-slate-600"
                                      }`}
                                    >
                                      {
                                        category.label
                                      }
                                    </span>

                                    {selected && (
                                      <CheckCircle2
                                        size={
                                          14
                                        }
                                        className="absolute right-2 top-2 text-[#f59e0b]"
                                      />
                                    )}
                                  </button>
                                )
                              },
                            )}
                          </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <FormField
                            label="समस्या कब से है?"
                            required
                          >
                            <Select
                              value={
                                form.duration
                              }
                              onChange={(event) =>
                                updateField(
                                  "duration",
                                  event.target.value,
                                )
                              }
                            >
                              <option value="">
                                समय अवधि चुनें
                              </option>

                              <option value="कुछ दिन">
                                कुछ दिन
                              </option>

                              <option value="कुछ महीने">
                                कुछ महीने
                              </option>

                              <option value="1 वर्ष से अधिक">
                                1 वर्ष से अधिक
                              </option>

                              <option value="पता नहीं">
                                पता नहीं
                              </option>
                            </Select>
                          </FormField>

                          <FormField label="अनुमानित कितने परिवार प्रभावित हैं?">
                            <Input
                              type="number"
                              min="0"
                              value={
                                form.affectedFamilies
                              }
                              onChange={(event) =>
                                updateField(
                                  "affectedFamilies",
                                  event.target.value,
                                )
                              }
                              placeholder="जैसे — 25"
                            />
                          </FormField>
                        </div>

                        <FormField
                          label="समस्या का विवरण"
                          required
                        >
                          <Textarea
                            value={
                              form.description
                            }
                            onChange={(event) =>
                              updateField(
                                "description",
                                event.target.value,
                              )
                            }
                            placeholder="अपनी समस्या को विस्तार से लिखें..."
                          />
                        </FormField>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3 */}
                  {step === 3 && (
                    <motion.div
                      key="step-3"
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: -20,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <StepHeader step={3} />

                      <div className="space-y-6">
                        <FormField label="क्या इस समस्या से अन्य लोगों को भी परेशानी है?">
                          <div className="grid gap-3 sm:grid-cols-3">
                            {[
                              "हाँ",
                              "नहीं",
                              "पता नहीं",
                            ].map(
                              (option) => {
                                const selected =
                                  form.affectsOthers ===
                                  option

                                return (
                                  <button
                                    key={
                                      option
                                    }
                                    type="button"
                                    onClick={() =>
                                      updateField(
                                        "affectsOthers",
                                        option,
                                      )
                                    }
                                    className={`h-12 rounded-xl border text-sm font-semibold transition ${
                                      selected
                                        ? "border-[#f59e0b] bg-[#fff8e8] text-[#172747]"
                                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                                    }`}
                                  >
                                    {option}

                                    {selected && (
                                      <CheckCircle2
                                        size={
                                          15
                                        }
                                        className="ml-2 inline text-[#f59e0b]"
                                      />
                                    )}
                                  </button>
                                )
                              },
                            )}
                          </div>
                        </FormField>

                        <FormField
                          label="पुरानी शिकायत/आवेदन संख्या"
                          hint="यदि पहले शिकायत दर्ज की है तो उसकी संख्या दें।"
                        >
                          <Input
                            value={
                              form.previousComplaintNumber
                            }
                            onChange={(event) =>
                              updateField(
                                "previousComplaintNumber",
                                event.target.value,
                              )
                            }
                            placeholder="पुरानी शिकायत संख्या"
                          />
                        </FormField>

                        <FormField label="कोई अतिरिक्त जानकारी?">
                          <Textarea
                            value={
                              form.additionalInformation
                            }
                            onChange={(event) =>
                              updateField(
                                "additionalInformation",
                                event.target.value,
                              )
                            }
                            placeholder="यदि कोई अन्य जानकारी है तो यहाँ लिखें..."
                          />
                        </FormField>

                        <label className="flex cursor-pointer gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300">
                          <input
                            type="checkbox"
                            checked={
                              form.confirmation
                            }
                            onChange={(event) =>
                              updateField(
                                "confirmation",
                                event.target
                                  .checked,
                              )
                            }
                            className="mt-1 h-4 w-4 shrink-0 accent-[#172747]"
                          />

                          <span className="text-xs leading-6 text-slate-600">
                            मैं प्रमाणित करता/करती
                            हूँ कि मेरे द्वारा दी गई
                            जानकारी मेरी जानकारी के
                            अनुसार सही है।
                          </span>
                        </label>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* FORM ERROR */}
              <AnimatePresence>
                {submitError && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="mx-6 mb-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 sm:mx-9 lg:mx-10"
                  >
                    <AlertCircle
                      size={18}
                      className="mt-0.5 shrink-0 text-red-500"
                    />

                    <p className="text-sm leading-6 text-red-700">
                      {submitError}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* FORM FOOTER */}
              <div className="flex flex-col-reverse gap-3 border-t border-slate-100 bg-slate-50/70 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-9 sm:py-5">
                <div>
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      disabled={submitting}
                      className="inline-flex h-11 items-center gap-2 rounded-xl px-4 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-[#172747] disabled:opacity-50"
                    >
                      <ArrowLeft size={16} />
                      पीछे
                    </button>
                  )}
                </div>

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#172747] px-6 text-sm font-bold text-white shadow-lg shadow-[#172747]/10 transition hover:-translate-y-0.5 hover:bg-[#22365f]"
                  >
                    आगे बढ़ें
                    <ArrowRight size={17} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#f59e0b] px-6 text-sm font-bold text-[#172747] shadow-lg shadow-[#f59e0b]/15 transition hover:-translate-y-0.5 hover:bg-[#f7b52c] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#172747]/30 border-t-[#172747]" />
                        समस्या दर्ज हो रही है...
                      </>
                    ) : (
                      <>
                        समस्या दर्ज करें
                        <ArrowRight size={17} />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:text-left">
          <div>
            <p className="text-sm font-bold text-[#172747]">
              ग्राम पंचायत ढींगरिया
            </p>

            <p className="mt-1 text-xs text-slate-400">
              नागरिक समस्या एवं जन-सुझाव पोर्टल
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="mx-auto text-xs font-semibold text-[#172747] underline-offset-4 hover:underline lg:mx-0"
          >
            मुख्य पृष्ठ पर वापस जाएँ
          </button>
        </div>
      </footer>
    </div>
  )
}