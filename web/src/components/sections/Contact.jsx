import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  UserPlus,
  MessageSquare,
  ArrowRight,
  Download,
  CheckCircle2,
} from "lucide-react"

export default function ContactAndFooter() {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    mobile: "",
    village: "",
    ward: "",
    image: null,
  })

  const [idCardData, setIdCardData] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]

    if (file) {
      const imageUrl = URL.createObjectURL(file)

      setFormData((prev) => ({
        ...prev,
        image: imageUrl,
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.mobile) {
      alert("कृपया नाम और मोबाइल नंबर दर्ज करें।")
      return
    }

    setIdCardData(formData)
  }

  const handlePrintPdf = () => {
    window.print()
  }

  return (
    <>
      {/* =========================
          PRINT STYLES
      ========================== */}
      <style jsx global>{`
        @media print {
          @page {
            size: 400px 300px;
            margin: 0;
          }

          html,
          body {
            width: 400px !important;
            height: 300px !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
            background: #18181b !important;
          }

          /*
           * Hide everything visually.
           * We use visibility instead of display:none
           * because display:none can also hide the
           * printable element when it is nested.
           */
          body * {
            visibility: hidden !important;
          }

          /*
           * Make the ID card and everything inside it visible.
           */
          #printable-id-card,
          #printable-id-card * {
            visibility: visible !important;
          }

          /*
           * Remove the normal website layout from
           * the printing flow.
           */
          #contact {
            position: static !important;
            width: 400px !important;
            height: 300px !important;
            min-height: 0 !important;

            margin: 0 !important;
            padding: 0 !important;

            overflow: visible !important;
          }

          #contact > div {
            position: static !important;
            width: 400px !important;
            height: 300px !important;
            min-height: 0 !important;

            margin: 0 !important;
            padding: 0 !important;

            overflow: visible !important;
          }

          /*
           * The ID card itself becomes the
           * only printable object.
           */
          #printable-id-card {
            position: fixed !important;

            left: 0 !important;
            top: 0 !important;

            width: 400px !important;
            height: 300px !important;

            max-width: none !important;

            margin: 0 !important;
            padding: 24px !important;

            box-sizing: border-box !important;

            border: 0 !important;
            border-radius: 0 !important;

            box-shadow: none !important;

            overflow: hidden !important;

            background: #18181b !important;
            color: white !important;

            page-break-before: avoid !important;
            page-break-after: avoid !important;
            page-break-inside: avoid !important;

            break-before: avoid !important;
            break-after: avoid !important;
            break-inside: avoid !important;

            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          /*
           * Make sure all ID card children
           * retain their colors.
           */
          #printable-id-card * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          /*
           * Make sure the ID card image prints.
           */
          #printable-id-card img {
            display: block !important;
            visibility: visible !important;

            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>

      {/* =========================
          FOOTER
      ========================== */}
      <footer
        id="contact"
        className="bg-[#FAF7F2] text-zinc-950"
      >
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:px-16">

          <div className="grid grid-cols-1 gap-8 items-stretch lg:grid-cols-12">

            {/* =================================
                LEFT CARD — JOIN SOCIAL CHANNELS
            ================================== */}
            <div
              className="
                relative
                flex
                flex-col
                justify-between
                overflow-hidden
                rounded-3xl
                bg-[#1a202c]
                p-8
                text-white
                shadow-xl
                md:p-10
                lg:col-span-6
              "
            >

              {/* Background decoration */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-64
                  w-64
                  rounded-full
                  bg-amber-600/20
                  blur-3xl
                "
              />

              <div>

                {/* Badge */}
                <div
                  className="
                    mb-6
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white/10
                    px-3
                    py-1
                    text-xs
                    font-medium
                    text-amber-400
                  "
                >
                  <span>JOIN • जुड़िए</span>
                </div>

                {/* Heading */}
                <h3
                  className="
                    mb-3
                    font-display
                    text-3xl
                    font-bold
                    tracking-tight
                    text-white
                    sm:text-4xl
                  "
                >
                  बदलाव के सिपाही बनें
                </h3>

                {/* Description */}
                <p
                  className="
                    mb-6
                    max-w-md
                    text-sm
                    leading-relaxed
                    text-zinc-300
                  "
                >
                  युवा साथी, बूथ समन्वयक या डिजिटल योद्धा के रूप में जुड़ें।
                  हर सप्ताह प्रशिक्षण व सेवा कार्य में भाग लें।
                </p>

                {/* Members */}
                <div className="mb-8 flex items-center gap-3">

                  <div className="flex -space-x-2 overflow-hidden">

                    <div
                      className="
                        inline-block
                        h-8
                        w-8
                        overflow-hidden
                        rounded-full
                        bg-zinc-700
                        ring-2
                        ring-[#1a202c]
                      "
                    >
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                        alt="User"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div
                      className="
                        inline-block
                        h-8
                        w-8
                        overflow-hidden
                        rounded-full
                        bg-zinc-700
                        ring-2
                        ring-[#1a202c]
                      "
                    >
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                        alt="User"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div
                      className="
                        inline-block
                        h-8
                        w-8
                        overflow-hidden
                        rounded-full
                        bg-zinc-700
                        ring-2
                        ring-[#1a202c]
                      "
                    >
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
                        alt="User"
                        className="h-full w-full object-cover"
                      />
                    </div>

                  </div>

                  <span
                    className="
                      inline-flex
                      items-center
                      rounded-full
                      bg-amber-500
                      px-2.5
                      py-0.5
                      text-xs
                      font-bold
                      text-zinc-950
                    "
                  >
                    850+
                  </span>

                  <span className="text-xs text-zinc-400">
                    युवा पहले ही जुड़ चुके हैं
                  </span>

                </div>

              </div>

              {/* Social links */}
              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                  border-t
                  border-white/10
                  pt-4
                "
              >

                <a
                  href="#"
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    bg-[#25D366]
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-zinc-950
                    transition-transform
                    hover:scale-105
                  "
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp चैनल</span>
                </a>

                <a
                  href="#"
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-white/15
                    bg-white/5
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-white
                    transition-colors
                    hover:bg-white/10
                  "
                >
                  <span>Facebook</span>
                </a>

                <a
                  href="#"
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-white/15
                    bg-white/5
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-white
                    transition-colors
                    hover:bg-white/10
                  "
                >
                  <span>Instagram</span>
                </a>

              </div>

            </div>

            {/* =================================
                RIGHT CARD
            ================================== */}
            <div
              className="
                flex
                flex-col
                justify-between
                rounded-3xl
                border
                border-zinc-200/80
                bg-white
                p-8
                shadow-sm
                md:p-10
                lg:col-span-6
              "
            >

              {/* =================================
                  REGISTRATION FORM
              ================================== */}
              {!idCardData ? (

                <form
                  onSubmit={handleSubmit}
                  className="
                    flex
                    h-full
                    flex-col
                    justify-between
                    space-y-4
                  "
                >

                  <div>

                    {/* Form heading */}
                    <div
                      className="
                        mb-6
                        flex
                        items-center
                        gap-2.5
                        text-sm
                        font-bold
                        text-amber-600
                      "
                    >
                      <UserPlus size={18} />

                      <span>
                        स्वयंसेवक पंजीकरण (ID Card Generator)
                      </span>
                    </div>

                    {/* Name + Father name */}
                    <div
                      className="
                        mb-4
                        grid
                        grid-cols-1
                        gap-4
                        sm:grid-cols-2
                      "
                    >

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="पूरा नाम"
                        required
                        className="
                          w-full
                          rounded-xl
                          border
                          border-zinc-200
                          bg-zinc-50/50
                          px-4
                          py-3
                          text-sm
                          text-zinc-900
                          outline-none
                          transition-colors
                          focus:border-amber-600
                          focus:bg-white
                        "
                      />

                      <input
                        type="text"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleInputChange}
                        placeholder="पिता का नाम"
                        required
                        className="
                          w-full
                          rounded-xl
                          border
                          border-zinc-200
                          bg-zinc-50/50
                          px-4
                          py-3
                          text-sm
                          text-zinc-900
                          outline-none
                          transition-colors
                          focus:border-amber-600
                          focus:bg-white
                        "
                      />

                    </div>

                    {/* Mobile + Village */}
                    <div
                      className="
                        mb-4
                        grid
                        grid-cols-1
                        gap-4
                        sm:grid-cols-2
                      "
                    >

                      <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="मोबाइल नंबर"
                        required
                        className="
                          w-full
                          rounded-xl
                          border
                          border-zinc-200
                          bg-zinc-50/50
                          px-4
                          py-3
                          text-sm
                          text-zinc-900
                          outline-none
                          transition-colors
                          focus:border-amber-600
                          focus:bg-white
                        "
                      />

                      <input
                        type="text"
                        name="village"
                        value={formData.village}
                        onChange={handleInputChange}
                        placeholder="गाँव"
                        required
                        className="
                          w-full
                          rounded-xl
                          border
                          border-zinc-200
                          bg-zinc-50/50
                          px-4
                          py-3
                          text-sm
                          text-zinc-900
                          outline-none
                          transition-colors
                          focus:border-amber-600
                          focus:bg-white
                        "
                      />

                    </div>

                    {/* Ward + Image */}
                    <div
                      className="
                        mb-4
                        grid
                        grid-cols-1
                        gap-4
                        sm:grid-cols-2
                      "
                    >

                      <input
                        type="text"
                        name="ward"
                        value={formData.ward}
                        onChange={handleInputChange}
                        placeholder="वार्ड"
                        className="
                          w-full
                          rounded-xl
                          border
                          border-zinc-200
                          bg-zinc-50/50
                          px-4
                          py-3
                          text-sm
                          text-zinc-900
                          outline-none
                          transition-colors
                          focus:border-amber-600
                          focus:bg-white
                        "
                      />

                      <label
                        className="
                          flex
                          w-full
                          cursor-pointer
                          items-center
                          justify-between
                          rounded-xl
                          border
                          border-dashed
                          border-zinc-300
                          bg-zinc-50
                          px-4
                          py-3
                          text-xs
                          text-zinc-500
                          hover:bg-zinc-100
                        "
                      >
                        <span>
                          {formData.image
                            ? "फोटो चुनी गई"
                            : "अपनी फोटो अपलोड करें"}
                        </span>

                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                      </label>

                    </div>

                  </div>

                  {/* Submit */}
                  <div className="pt-4">

                    <Button
                      type="submit"
                      className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-[#1a202c]
                        py-6
                        text-sm
                        font-semibold
                        text-white
                        shadow-md
                        hover:bg-zinc-800
                      "
                    >
                      <span>
                        मैं तैयार हूँ — जुड़ें & ID कार्ड बनाएं
                      </span>

                      <ArrowRight size={16} />
                    </Button>

                    <p
                      className="
                        mt-3
                        text-center
                        text-[11px]
                        text-zinc-400
                      "
                    >
                      जुड़ते ही WhatsApp ग्रुप लिंक SMS पर मिलेगा
                    </p>

                  </div>

                </form>

              ) : (

                /* =================================
                   GENERATED ID CARD
                ================================== */
                <div
                  className="
                    flex
                    h-full
                    flex-col
                    items-center
                    justify-center
                    space-y-6
                  "
                >

                  {/* Success message */}
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-emerald-600
                    "
                  >
                    <CheckCircle2 size={18} />

                    <span>
                      आपका स्वयंसेवक पहचान पत्र तैयार है!
                    </span>
                  </div>

                  {/* =================================
                      PRINTABLE ID CARD
                  ================================== */}
                  <div
                    id="printable-id-card"
                    className="
                      relative
                      w-full
                      max-w-sm
                      overflow-hidden
                      rounded-2xl
                      border
                      border-amber-500/30
                      bg-zinc-900
                      p-6
                      text-white
                      shadow-2xl
                    "
                  >

                    {/* Card Header */}
                    <div
                      className="
                        mb-4
                        flex
                        items-center
                        justify-between
                        border-b
                        border-white/10
                        pb-4
                      "
                    >

                      <div>

                        <span
                          className="
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-widest
                            text-amber-400
                          "
                        >
                          स्वयंसेवक पहचान पत्र
                        </span>

                        <h4
                          className="
                            font-display
                            text-base
                            font-bold
                          "
                        >
                          कैप्टन रघुवीर सिंह अभियान
                        </h4>

                      </div>

                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-amber-500
                          text-xs
                          font-extrabold
                          text-zinc-950
                        "
                      >
                        ID
                      </div>

                    </div>

                    {/* Card Body */}
                    <div className="mb-4 flex items-center gap-4">

                      {/* Photo */}
                      <div
                        className="
                          h-20
                          w-20
                          shrink-0
                          overflow-hidden
                          rounded-xl
                          border-2
                          border-amber-500/50
                          bg-zinc-800
                        "
                      >

                        {idCardData.image ? (

                          <img
                            src={idCardData.image}
                            alt="Volunteer"
                            className="
                              h-full
                              w-full
                              object-cover
                            "
                          />

                        ) : (

                          <div
                            className="
                              flex
                              h-full
                              w-full
                              items-center
                              justify-center
                              text-xs
                              text-zinc-500
                            "
                          >
                            Photo
                          </div>

                        )}

                      </div>

                      {/* User Information */}
                      <div className="space-y-1 text-xs">

                        <p>
                          <span className="text-zinc-400">
                            नाम:
                          </span>{" "}
                          <strong className="text-white">
                            {idCardData.name}
                          </strong>
                        </p>

                        <p>
                          <span className="text-zinc-400">
                            पिता का नाम:
                          </span>{" "}
                          <strong className="text-white">
                            {idCardData.fatherName || "—"}
                          </strong>
                        </p>

                        <p>
                          <span className="text-zinc-400">
                            गाँव/वार्ड:
                          </span>{" "}
                          <strong className="text-white">
                            {idCardData.village}{" "}
                            {idCardData.ward
                              ? `(वार्ड ${idCardData.ward})`
                              : ""}
                          </strong>
                        </p>

                        <p>
                          <span className="text-zinc-400">
                            मोबाइल:
                          </span>{" "}
                          <strong className="text-white">
                            {idCardData.mobile}
                          </strong>
                        </p>

                      </div>

                    </div>

                    {/* Card Footer */}
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        border-t
                        border-white/10
                        pt-3
                        text-[10px]
                        text-zinc-400
                      "
                    >

                      <span>
                        मान्यता प्राप्त स्वयंसेवक
                      </span>

                      <span
                        className="
                          font-semibold
                          text-amber-400
                        "
                      >
                        VALID 2026
                      </span>

                    </div>

                  </div>

                  {/* =================================
                      ACTION BUTTONS
                  ================================== */}
                  <div className="flex w-full gap-3">

                    <Button
                      onClick={handlePrintPdf}
                      className="
                        flex
                        flex-1
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-amber-600
                        py-3
                        text-xs
                        font-bold
                        text-zinc-950
                        hover:bg-amber-500
                      "
                    >
                      <Download size={14} />

                      <span>
                        ID कार्ड PDF डाउनलोड करें
                      </span>
                    </Button>

                    <Button
                      variant="outline"
                      onClick={() => setIdCardData(null)}
                      className="
                        rounded-xl
                        border-zinc-300
                        py-3
                        text-xs
                        font-semibold
                        text-zinc-700
                        hover:bg-zinc-50
                      "
                    >
                      नया फॉर्म भरें
                    </Button>

                  </div>

                </div>

              )}

            </div>

          </div>

        </div>
      </footer>
    </>
  )
}