"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  FileText,
  Home,
  ShoppingBag,
  ShoppingCart,
  User,
} from "lucide-react";
import Footer from "@/components/Footer";

const R2_BASE = "https://pub-ce8688bc6c654bcfb99716f7c9373bcd.r2.dev/vijay-jewellery";
const LOGO_R2_URL = `${R2_BASE}/logo.png`;

export default function PrivacyPolicyPage() {
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
            <span className="text-white text-base font-serif font-medium">Privacy Policy</span>
          </div>

          <div className="w-10" />
        </header>

        {/* Content Section */}
        <div className="px-5 py-6 space-y-5">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#181308] to-[#0c0c0c] border border-[#3a2c16] space-y-2">
            <div className="flex items-center gap-2 text-[#e5a93c]">
              <Shield className="w-5 h-5" />
              <span className="text-xs font-semibold uppercase tracking-wider">Your Trust Matters</span>
            </div>
            <h1 className="text-white text-xl font-serif font-medium">
              Privacy Policy
            </h1>
            <p className="text-[#a0a0a0] text-xs leading-relaxed">
              Last updated: September 2026. At Vijay Jewellery Collection, we are deeply committed to protecting your privacy and personal data.
            </p>
          </div>

          {/* Section 1 */}
          <div className="p-5 rounded-2xl bg-[#0d0d0d] border border-[#222] space-y-2">
            <h3 className="text-white text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e5a93c]" />
              1. Information We Collect
            </h3>
            <p className="text-[#a0a0a0] text-xs leading-relaxed">
              When you browse our store or place an order, we may collect the following details:
            </p>
            <ul className="list-disc pl-5 text-[#8e8e93] text-xs space-y-1">
              <li>Full Name and contact details</li>
              <li>Delivery address, city, state, and pin code</li>
              <li>Phone number (for OTP verification and delivery SMS updates)</li>
              <li>Order history and cart preferences</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="p-5 rounded-2xl bg-[#0d0d0d] border border-[#222] space-y-2">
            <h3 className="text-white text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e5a93c]" />
              2. How We Use Your Data
            </h3>
            <p className="text-[#a0a0a0] text-xs leading-relaxed">
              Your information is exclusively utilized to:
            </p>
            <ul className="list-disc pl-5 text-[#8e8e93] text-xs space-y-1">
              <li>Process and fulfill your jewellery orders accurately</li>
              <li>Provide order tracking notifications and WhatsApp/SMS updates</li>
              <li>Offer direct customer support via phone (+91 7095917492)</li>
              <li>Improve catalog offerings and enhance user shopping experience</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="p-5 rounded-2xl bg-[#0d0d0d] border border-[#222] space-y-2">
            <h3 className="text-white text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e5a93c]" />
              3. Data Security & Storage
            </h3>
            <p className="text-[#a0a0a0] text-xs leading-relaxed">
              We take information security seriously. All network communications are encrypted with industry-standard 256-bit SSL protocols. We do not sell, rent, or trade your personal information to any third parties for advertising purposes.
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-5 rounded-2xl bg-[#0d0d0d] border border-[#222] space-y-2">
            <h3 className="text-white text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e5a93c]" />
              4. Third-Party Courier Services
            </h3>
            <p className="text-[#a0a0a0] text-xs leading-relaxed">
              To deliver your products promptly across India, we share your name, phone number, and shipping address strictly with authorized delivery courier partners.
            </p>
          </div>

          {/* Section 5 */}
          <div className="p-5 rounded-2xl bg-[#0d0d0d] border border-[#222] space-y-2">
            <h3 className="text-white text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e5a93c]" />
              5. Contact Us Regarding Privacy
            </h3>
            <p className="text-[#a0a0a0] text-xs leading-relaxed">
              If you have any questions or wish to delete your account data, please call our support team at <a href="tel:+917095917492" className="text-[#e5a93c] underline font-medium">+91 70959 17492</a> or message us on Instagram.
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
