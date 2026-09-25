"use client";

import React from "react";
import Image from "next/image";
import {
  ChevronRight,
  ChevronUp,
  Instagram,
  Phone,
} from "lucide-react";

import { useRouter } from "next/navigation";

interface FooterProps {
  onNavigateShop?: () => void;
  onNavigateHome?: () => void;
  onNavigateAccount?: () => void;
}

const LOGO_R2_URL = "https://pub-ce8688bc6c654bcfb99716f7c9373bcd.r2.dev/vijay-jewellery/logo.png";

export default function Footer({ onNavigateShop, onNavigateHome, onNavigateAccount }: FooterProps) {
  const router = useRouter();
  const navShop = onNavigateShop || (() => router.push("/shop"));
  const navHome = onNavigateHome || (() => router.push("/home"));
  const navAccount = onNavigateAccount || (() => router.push("/account"));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#050505] text-white pt-10 pb-20 border-t border-[#1a160f] overflow-hidden">
      {/* Decorative Gold Floral Petals Accent on Right */}
      <div 
        className="pointer-events-none absolute right-0 top-0 w-[240px] h-[340px] opacity-25"
        style={{
          backgroundImage: `radial-gradient(ellipse at 100% 20%, rgba(229,169,60,0.3) 0%, rgba(140,88,29,0.15) 45%, transparent 75%)`,
        }}
      />
      {/* SVG Decorative Botanical Accent */}
      <svg
        className="pointer-events-none absolute -right-8 top-4 w-48 h-72 opacity-20 text-[#e5a93c]"
        viewBox="0 0 100 150"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M90,10 C60,40 40,80 90,140" />
        <path d="M85,25 C50,55 35,95 85,130" />
        <path d="M70,45 C45,70 30,105 75,125" />
        <circle cx="75" cy="35" r="3" fill="currentColor" />
        <circle cx="60" cy="65" r="2.5" fill="currentColor" />
        <circle cx="85" cy="85" r="2" fill="currentColor" />
        <polygon points="75,20 78,25 83,26 79,30 80,35 75,32 70,35 71,30 67,26 72,25" fill="currentColor" />
      </svg>

      <div className="relative w-full max-w-[440px] mx-auto px-5 z-10 flex flex-col">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-[62px] h-[62px] relative rounded-full overflow-hidden shrink-0 border border-[#e5a93c]/30">
            <Image
              src={LOGO_R2_URL}
              alt="Vijay Jewellery"
              width={75}
              height={75}
              priority
              unoptimized
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/images/logo.png";
              }}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-[19px] sm:text-[20px] font-sans font-bold tracking-tight leading-tight">
              Vijay Jewellery Collection
            </h3>
            <p className="text-[#e5a93c] text-[10.5px] font-medium tracking-[0.16em] uppercase mt-0.5">
              Sparkles Beyond Ordinary
            </p>
          </div>
        </div>

        {/* Brand Description */}
        <p className="text-[#c5c5c5] text-[13.5px] leading-relaxed font-normal mb-5 max-w-[340px]">
          India’s most trusted online jewelry destination. Discover exquisite
          designs crafted with precision and elegance.
        </p>

        {/* Social Media Links */}
        <div className="flex items-center gap-3.5 mb-5">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/vijay_jewellerycollections?utm_source=qr&igsi=bjZiNW14azV1ODRv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Follow us on Instagram"
            className="w-10 h-10 rounded-full border border-[#e5a93c] flex items-center justify-center text-[#e5a93c] hover:bg-[#e5a93c] hover:text-black transition-all"
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* Call */}
          <a
            href="tel:+917095917492"
            aria-label="Call Us"
            title="Call +91 7095917492"
            className="w-10 h-10 rounded-full border border-[#e5a93c] flex items-center justify-center text-[#e5a93c] hover:bg-[#e5a93c] hover:text-black transition-all"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

        {/* Tagline Motto */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-[1px] bg-[#5a4215]" />
          <span className="text-[#c89736] text-[10px] tracking-[0.25em] font-semibold uppercase">
            SPARKLES BEYOND ORDINARY
          </span>
        </div>

        {/* Section 1: Shop */}
        <div className="mb-7">
          <h4 className="text-white text-[19px] font-serif font-medium tracking-tight mb-2">
            Shop
          </h4>
          <div className="w-full h-[1px] bg-[#3a2c16] mb-3.5" />

          <ul className="space-y-3 text-[14px]">
            <li>
              <button
                onClick={navShop}
                className="flex items-center gap-2 text-[#d1d5db] hover:text-[#e5a93c] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 text-[#e5a93c]" />
                <span>Shop</span>
              </button>
            </li>
            <li>
              <button
                onClick={navAccount}
                className="flex items-center gap-2 text-[#d1d5db] hover:text-[#e5a93c] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 text-[#e5a93c]" />
                <span>Wishlist</span>
              </button>
            </li>
            <li>
              <button
                onClick={navHome}
                className="flex items-center gap-2 text-[#d1d5db] hover:text-[#e5a93c] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 text-[#e5a93c]" />
                <span>B2C Portal</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Section 2: Account & Support */}
        <div className="mb-8">
          <h4 className="text-white text-[19px] font-serif font-medium tracking-tight mb-2">
            Account & Support
          </h4>
          <div className="w-full h-[1px] bg-[#3a2c16] mb-3.5" />

          <ul className="space-y-3 text-[14px]">
            <li>
              <button
                type="button"
                onClick={navAccount}
                className="flex items-center gap-2 text-[#d1d5db] hover:text-[#e5a93c] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 text-[#e5a93c]" />
                <span>My Account</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => router.push("/contact")}
                className="flex items-center gap-2 text-[#d1d5db] hover:text-[#e5a93c] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 text-[#e5a93c]" />
                <span>Contact Us</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => router.push("/about")}
                className="flex items-center gap-2 text-[#d1d5db] hover:text-[#e5a93c] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 text-[#e5a93c]" />
                <span>About Us</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => router.push("/privacy-policy")}
                className="flex items-center gap-2 text-[#d1d5db] hover:text-[#e5a93c] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 text-[#e5a93c]" />
                <span>Privacy Policy</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => router.push("/terms-and-conditions")}
                className="flex items-center gap-2 text-[#d1d5db] hover:text-[#e5a93c] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 text-[#e5a93c]" />
                <span>Terms & Conditions</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => router.push("/refund-policy")}
                className="flex items-center gap-2 text-[#d1d5db] hover:text-[#e5a93c] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 text-[#e5a93c]" />
                <span>Refund Policy</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Scroll To Top Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={scrollToTop}
            title="Scroll to top"
            className="w-12 h-12 rounded-full border border-[#e5a93c] bg-[#0c0c0c] hover:bg-[#e5a93c] hover:text-black text-[#e5a93c] flex items-center justify-center shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <ChevronUp className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Bottom Divider Line */}
        <div className="w-full h-[1px] bg-[#3a2c16] mb-5" />

        {/* Bottom Copyright & Slogan Row */}
        <div className="flex items-center justify-between gap-3 text-xs">
          {/* Left: Copyright */}
          <div className="space-y-0.5">
            <p className="text-[#8e8e93] text-[12px]">
              © 2026 Vijay Jewellery
            </p>
            <p className="text-[#8e8e93] text-[12px]">
              Presented by <span className="text-[#d1d5db]">ShonkuWEB</span>
            </p>
          </div>

          {/* Vertical Divider */}
          <div className="w-[1px] h-9 bg-[#3a2c16]" />

          {/* Right: Tagline */}
          <div className="text-right space-y-0.5">
            <p className="text-[#e5a93c] text-[9.5px] tracking-[0.2em] font-semibold uppercase">
              JEWELRY FOR
            </p>
            <p className="text-[#e5a93c] text-[9.5px] tracking-[0.2em] font-semibold uppercase">
              A BRIGHTER YOU
            </p>
            <div className="w-5 h-[1px] bg-[#e5a93c] ml-auto mt-1" />
          </div>
        </div>
      </div>
    </footer>
  );
}
