"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Truck,
  Heart,
  Gem,
  Award,
  ArrowRight,
  Phone,
  Instagram,
  Home,
  ShoppingBag,
  ShoppingCart,
  User,
} from "lucide-react";
import Footer from "@/components/Footer";

const R2_BASE = "https://pub-ce8688bc6c654bcfb99716f7c9373bcd.r2.dev/vijay-jewellery";
const LOGO_R2_URL = `${R2_BASE}/logo.png`;
const INSTA_URL = "https://www.instagram.com/vijay_jewellerycollections?utm_source=qr&igsi=bjZiNW14azV1ODRv";
const PHONE_NUMBER = "7095917492";

export default function AboutPage() {
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
            <span className="text-white text-base font-serif font-medium">About Us</span>
          </div>

          <div className="w-10" />
        </header>

        {/* Hero Banner */}
        <section className="px-5 pt-6 pb-4">
          <div className="relative p-6 rounded-[24px] bg-gradient-to-br from-[#1a1408] via-[#0e0e0e] to-[#080808] border border-[#3d2f16] shadow-2xl text-center space-y-3 overflow-hidden">
            <div className="w-16 h-16 mx-auto relative rounded-full overflow-hidden border-2 border-[#e5a93c]/40 shadow-lg">
              <Image
                src={LOGO_R2_URL}
                alt="Vijay Jewellery"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            <span className="text-[#e5a93c] text-[11px] font-semibold tracking-[0.25em] uppercase block">
              SPARKLES BEYOND ORDINARY
            </span>
            <h1 className="text-white text-[24px] font-serif font-medium leading-tight">
              Vijay Jewellery Collection
            </h1>
            <p className="text-[#c0c0c0] text-xs leading-relaxed max-w-[340px] mx-auto">
              India's premier online jewellery house, committed to crafting timeless pieces with unmatched elegance, anti-tarnish durability, and everyday luxury.
            </p>
          </div>
        </section>

        {/* Brand Mission & Story */}
        <section className="px-5 py-3 space-y-4">
          <div className="p-5 rounded-2xl bg-[#0d0d0d] border border-[#222] space-y-3">
            <div className="flex items-center gap-2.5 text-[#e5a93c]">
              <Gem className="w-5 h-5" />
              <h3 className="text-white text-base font-serif font-medium">Our Story</h3>
            </div>
            <p className="text-[#a8a8a8] text-xs leading-relaxed">
              Vijay Jewellery Collection was born from a passion for handcrafted perfection and modern aesthetics. We believe that fine jewellery is not just an ornament, but an enduring expression of grace, confidence, and individuality.
            </p>
            <p className="text-[#a8a8a8] text-xs leading-relaxed">
              Every necklace, bracelet, earring, and ring is thoughtfully designed and finished with premium anti-tarnish coating to ensure it sparkles as vibrantly today as it will years from now.
            </p>
          </div>

          {/* Pillars of Quality */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-[#0e0e0e] border border-[#222] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#1c160c] border border-[#e5a93c]/30 flex items-center justify-center text-[#e5a93c]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-white text-xs font-semibold">Anti-Tarnish</h4>
              <p className="text-[#8e8e93] text-[11px] leading-normal">
                Engineered for daily wear with long-lasting brilliant shine.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0e0e0e] border border-[#222] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#1c160c] border border-[#e5a93c]/30 flex items-center justify-center text-[#e5a93c]">
                <Award className="w-4 h-4" />
              </div>
              <h4 className="text-white text-xs font-semibold">Direct B2C Value</h4>
              <p className="text-[#8e8e93] text-[11px] leading-normal">
                No middleman markup. Exquisite jewellery at honest prices.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0e0e0e] border border-[#222] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#1c160c] border border-[#e5a93c]/30 flex items-center justify-center text-[#e5a93c]">
                <Truck className="w-4 h-4" />
              </div>
              <h4 className="text-white text-xs font-semibold">Pan-India Delivery</h4>
              <p className="text-[#8e8e93] text-[11px] leading-normal">
                Safe, insured doorstep courier shipping across all pin codes.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0e0e0e] border border-[#222] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#1c160c] border border-[#e5a93c]/30 flex items-center justify-center text-[#e5a93c]">
                <Heart className="w-4 h-4" />
              </div>
              <h4 className="text-white text-xs font-semibold">Handpicked Quality</h4>
              <p className="text-[#8e8e93] text-[11px] leading-normal">
                Each item undergoes rigorous inspection before dispatch.
              </p>
            </div>
          </div>

          {/* Connect Banner */}
          <div className="p-5 rounded-2xl bg-[#0e0e0e] border border-[#2a2a2a] space-y-3">
            <h4 className="text-white text-sm font-serif font-medium">Connect With Us</h4>
            <p className="text-[#8e8e93] text-xs">
              Follow our latest collections on Instagram or speak directly with our team.
            </p>
            <div className="flex gap-2.5 pt-1">
              <a
                href={INSTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 h-10 rounded-xl bg-[#181308] border border-[#e5a93c]/40 hover:bg-[#e5a93c] hover:text-black text-[#e5a93c] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>

              <a
                href={`tel:+91${PHONE_NUMBER}`}
                className="flex-1 h-10 rounded-xl bg-[#181308] border border-[#e5a93c]/40 hover:bg-[#e5a93c] hover:text-black text-[#e5a93c] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <button
              onClick={() => router.push("/shop")}
              className="w-full h-12 rounded-xl bg-gradient-to-r from-[#e5a93c] to-[#f5c767] hover:brightness-105 active:scale-[0.99] text-black font-semibold text-xs flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

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
