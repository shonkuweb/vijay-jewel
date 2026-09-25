"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  RotateCcw,
  Video,
  CheckCircle,
  HelpCircle,
  Phone,
  MessageCircle,
  Home,
  ShoppingBag,
  ShoppingCart,
  User,
} from "lucide-react";
import Footer from "@/components/Footer";

const R2_BASE = "https://pub-ce8688bc6c654bcfb99716f7c9373bcd.r2.dev/vijay-jewellery";
const LOGO_R2_URL = `${R2_BASE}/logo.png`;
const PHONE_NUMBER = "7095917492";

export default function RefundPolicyPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-[#050505] text-white flex flex-col items-center justify-start pb-24 select-none">
      <div className="w-full max-w-[480px] flex flex-col">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-[#080808]/95 backdrop-blur-md border-b border-[#1c1c1c] px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => router.push("/home")}
            className="w-10 h-10 rounded-full bg-[#121212] border border-[#2a2a2a] flex items-center justify-center text-[#d1d5db] hover:text-[#e5a93c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 relative rounded-full overflow-hidden border border-[#e5a93c]/30">
              <Image
                src={LOGO_R2_URL}
                alt="Vijay Jewellery"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            <span className="text-white text-base font-serif font-medium">Refund Policy</span>
          </div>

          <div className="w-10" />
        </header>

        {/* Hero Section */}
        <div className="px-5 py-6 space-y-5">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#181308] to-[#0c0c0c] border border-[#3a2c16] space-y-2">
            <div className="flex items-center gap-2 text-[#e5a93c]">
              <RotateCcw className="w-5 h-5" />
              <span className="text-xs font-semibold uppercase tracking-wider">Hassle-Free Assistance</span>
            </div>
            <h1 className="text-white text-xl font-serif font-medium">
              Return & Refund Policy
            </h1>
            <p className="text-[#a0a0a0] text-xs leading-relaxed">
              We stand behind our jewellery with high quality inspection. If you receive a damaged or incorrect piece, we are committed to making it right immediately.
            </p>
          </div>

          {/* Unboxing Video Requirement */}
          <div className="p-5 rounded-2xl bg-[#141007] border border-[#e5a93c]/40 space-y-2.5">
            <div className="flex items-center gap-2 text-[#e5a93c]">
              <Video className="w-4 h-4" />
              <h4 className="text-white text-xs font-semibold uppercase tracking-wide">
                Unboxing Video Requirement
              </h4>
            </div>
            <p className="text-[#c5c5c5] text-xs leading-relaxed">
              To claim a replacement or refund for transit damage or missing items, <strong>a continuous 360-degree unboxing video from sealed package opening</strong> is mandatory. This ensures fast courier insurance claims and immediate resolution.
            </p>
          </div>

          {/* Section 1 */}
          <div className="p-5 rounded-2xl bg-[#0d0d0d] border border-[#222] space-y-2">
            <h3 className="text-white text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e5a93c]" />
              1. Return Window
            </h3>
            <p className="text-[#a0a0a0] text-xs leading-relaxed">
              Any return or damage report must be initiated within <strong>48 hours of parcel delivery</strong>. Please share your order number and unboxing video to our WhatsApp support at <a href={`https://wa.me/91${PHONE_NUMBER}`} className="text-[#e5a93c] underline font-medium">+91 {PHONE_NUMBER}</a>.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-5 rounded-2xl bg-[#0d0d0d] border border-[#222] space-y-2">
            <h3 className="text-white text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e5a93c]" />
              2. Eligible Scenarios
            </h3>
            <ul className="list-disc pl-5 text-[#8e8e93] text-xs space-y-1">
              <li>Item damaged during courier transit</li>
              <li>Incorrect design or color received</li>
              <li>Manufacturing defect verified on arrival</li>
            </ul>
            <p className="text-[#8e8e93] text-[11px] pt-1 italic">
              Note: Used items, worn jewellery, or damage caused by improper chemical/water exposure are not eligible for return.
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-5 rounded-2xl bg-[#0d0d0d] border border-[#222] space-y-2">
            <h3 className="text-white text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e5a93c]" />
              3. Refund Processing
            </h3>
            <p className="text-[#a0a0a0] text-xs leading-relaxed">
              Once approved, refunds are credited back to your original payment mode, bank account, or UPI ID within <strong>3 to 5 business days</strong>. Alternatively, you may choose an instant replacement or store credit.
            </p>
          </div>

          {/* Direct Support Card */}
          <div className="p-5 rounded-2xl bg-[#0e0e0e] border border-[#2a2a2a] space-y-3">
            <h4 className="text-white text-sm font-serif font-medium">Need Assistance with a Return?</h4>
            <p className="text-[#8e8e93] text-xs">
              Our customer care team is available on WhatsApp and phone call to help you swiftly.
            </p>
            <div className="flex gap-2.5 pt-1">
              <a
                href={`https://wa.me/91${PHONE_NUMBER}?text=Hello%20Vijay%20Jewellery%2C%20I%20need%20help%20with%20a%20return%2Frefund.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 h-10 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-emerald-900/50 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:+91${PHONE_NUMBER}`}
                className="flex-1 h-10 rounded-xl bg-[#1c160c] border border-[#e5a93c]/40 text-[#e5a93c] text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-[#e5a93c] hover:text-black transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>

      {/* Fixed Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#1f1f1f] h-[64px] flex items-center justify-center">
        <div className="w-full max-w-[440px] px-3 flex items-center justify-between">
          <button
            onClick={() => router.push("/home")}
            className="flex flex-col items-center justify-center flex-1 text-[#8e8e93] hover:text-[#e5a93c] transition-colors gap-1 cursor-pointer"
          >
            <Home className="w-5 h-5" />
            <span className="text-[11px] font-normal">Home</span>
          </button>

          <button
            onClick={() => router.push("/shop")}
            className="flex flex-col items-center justify-center flex-1 text-[#8e8e93] hover:text-[#e5a93c] transition-colors gap-1 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="text-[11px] font-normal">Shop</span>
          </button>

          <button
            onClick={() => router.push("/cart")}
            className="flex flex-col items-center justify-center flex-1 text-[#8e8e93] hover:text-[#e5a93c] transition-colors gap-1 cursor-pointer"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="text-[11px] font-normal">Cart</span>
          </button>

          <button
            onClick={() => router.push("/account")}
            className="flex flex-col items-center justify-center flex-1 text-[#8e8e93] hover:text-white transition-colors gap-1 cursor-pointer"
          >
            <User className="w-5 h-5" />
            <span className="text-[11px] font-normal">Account</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
