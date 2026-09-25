"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  FileCheck,
  Scale,
  CreditCard,
  Truck,
  AlertCircle,
  Home,
  ShoppingBag,
  ShoppingCart,
  User,
} from "lucide-react";
import Footer from "@/components/Footer";

const R2_BASE = "https://pub-ce8688bc6c654bcfb99716f7c9373bcd.r2.dev/vijay-jewellery";
const LOGO_R2_URL = `${R2_BASE}/logo.png`;

export default function TermsAndConditionsPage() {
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
            <span className="text-white text-base font-serif font-medium">Terms & Conditions</span>
          </div>

          <div className="w-10" />
        </header>

        {/* Hero Section */}
        <div className="px-5 py-6 space-y-5">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#181308] to-[#0c0c0c] border border-[#3a2c16] space-y-2">
            <div className="flex items-center gap-2 text-[#e5a93c]">
              <Scale className="w-5 h-5" />
              <span className="text-xs font-semibold uppercase tracking-wider">Store Agreement</span>
            </div>
            <h1 className="text-white text-xl font-serif font-medium">
              Terms & Conditions
            </h1>
            <p className="text-[#a0a0a0] text-xs leading-relaxed">
              Welcome to Vijay Jewellery Collection. By purchasing or accessing our portal, you agree to comply with the terms detailed below.
            </p>
          </div>

          {/* Section 1 */}
          <div className="p-5 rounded-2xl bg-[#0d0d0d] border border-[#222] space-y-2">
            <h3 className="text-white text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e5a93c]" />
              1. General Use
            </h3>
            <p className="text-[#a0a0a0] text-xs leading-relaxed">
              Vijay Jewellery Collection operates as an online retail and direct-to-consumer store. All jewelry listings, photographs, and descriptions are proprietary. Unapproved reproduction or misuse of our media is strictly prohibited.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-5 rounded-2xl bg-[#0d0d0d] border border-[#222] space-y-2">
            <h3 className="text-white text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e5a93c]" />
              2. Pricing & Payments
            </h3>
            <p className="text-[#a0a0a0] text-xs leading-relaxed">
              All prices displayed on the store are in Indian Rupees (INR ₹) and are inclusive of applicable taxes unless specified otherwise. We reserve the right to correct any inadvertent typographical pricing errors before order fulfillment.
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-5 rounded-2xl bg-[#0d0d0d] border border-[#222] space-y-2">
            <h3 className="text-white text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e5a93c]" />
              3. Order Confirmation & Delivery
            </h3>
            <p className="text-[#a0a0a0] text-xs leading-relaxed">
              Once an order is confirmed, our team dispatches it within 24 to 48 business hours. Delivery timelines typically range from 3 to 7 business days depending on customer delivery location across India.
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-5 rounded-2xl bg-[#0d0d0d] border border-[#222] space-y-2">
            <h3 className="text-white text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e5a93c]" />
              4. Product Care & Disclaimers
            </h3>
            <p className="text-[#a0a0a0] text-xs leading-relaxed">
              Our fashion and demi-fine jewellery is finished with anti-tarnish protective plating. To ensure long life, avoid direct exposure to perfumes, sanitizers, harsh chemicals, and water immersion.
            </p>
          </div>

          {/* Section 5 */}
          <div className="p-5 rounded-2xl bg-[#0d0d0d] border border-[#222] space-y-2">
            <h3 className="text-white text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e5a93c]" />
              5. Customer Support
            </h3>
            <p className="text-[#a0a0a0] text-xs leading-relaxed">
              For any clarification regarding these terms, reach out to Vijay Jewellery Collection support at <a href="tel:+917095917492" className="text-[#e5a93c] underline font-medium">+91 70959 17492</a>.
            </p>
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
