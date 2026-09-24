import { useState } from "react"
import { MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button"

const Footer = () => {

  return (
    <div className="bg-[#111827] text-white px-6 pt-16 pb-8 md:px-16 border-t border-zinc-800">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-800/80">
        {/* Column 1: Representative Identity & Office Details */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-600 text-zinc-950">
              <AwardIcon size={20} />
            </div>
            <h4 className="font-display text-xl font-bold tracking-tight">
              कैप्टन रघुवीर सिंह
            </h4>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
            चुनाव कार्यालय: पंचायत भवन के सामने, मुख्य बाज़ार रोड, ग्राम रामपुर
            खेड़ा।
            <br />
            रोज़ सुबह 9 – शाम 7, रविवार ग्राम सभा।
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors"
            >
              <Phone size={16} />
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors"
            >
              <MessageSquare size={16} />
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors"
            >
              <FacebookIcon size={16} />
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors"
            >
              <InstagramIcon size={16} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-3 space-y-3">
          <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
            त्वरित लिंक
          </h5>
          <ul className="space-y-2.5 text-xs text-zinc-300">
            <li>
              <a
                href="#home"
                className="hover:text-amber-500 transition-colors"
              >
                होम
              </a>
            </li>
            <li>
              <a
                href="#manifesto"
                className="hover:text-amber-500 transition-colors"
              >
                मेनिफेस्टो
              </a>
            </li>
            <li>
              <a
                href="#complaints"
                className="hover:text-amber-500 transition-colors"
              >
                शिकायत पोर्टल
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1 space-y-3">
          <h5 className="text-xs font-bold uppercase tracking-widest text-transparent select-none mb-4">
            अन्य
          </h5>
          <ul className="space-y-2.5 text-xs text-zinc-300">
            <li>
              <a
                href="#about"
                className="hover:text-amber-500 transition-colors"
              >
                हमारे बारे में
              </a>
            </li>
            <li>
              <a
                href="#achievements"
                className="hover:text-amber-500 transition-colors"
              >
                उपलब्धियां
              </a>
            </li>
            <li>
              <a
                href="#volunteer"
                className="hover:text-amber-500 transition-colors"
              >
                स्वयंसेवक बनें
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Helpline Box */}
        <div className="md:col-span-3 rounded-2xl bg-zinc-900 border border-zinc-800 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider mb-2">
              <Phone size={14} />
              <span>हेल्पलाइन</span>
            </div>
            <p className="font-display text-2xl font-extrabold text-white tracking-tight mb-1">
              1800-XXX-XXXX
            </p>
            <p className="text-[11px] text-zinc-400 mb-6">
              WhatsApp: +91-98XXX-XXXXX • सुबह 8 – रात 8
            </p>
          </div>

          <Button className="w-full rounded-xl bg-amber-600 py-4 text-xs font-bold text-zinc-950 hover:bg-amber-500 transition-colors">
            अभी कॉल करें
          </Button>
        </div>
      </div>

      {/* Copyright & Disclaimer Bar */}
      <div className="mx-auto max-w-7xl pt-8 flex flex-col items-center justify-between gap-4 text-xs text-zinc-500 md:flex-row">
        <span>
          © 2026 कैप्टन रघुवीर सिंह चुनाव अभियान • सर्वाधिकार सुरक्षित
        </span>
        <span>Designed with pride in India • चुनाव आयोग नियमों के अनुकूल</span>
      </div>
    </div>
  );
};

function AwardIcon({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function FacebookIcon({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default Footer;
