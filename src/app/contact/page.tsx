"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  Instagram,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
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

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build whatsapp text message
    const msg = `Hello Vijay Jewellery Collection,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent(msg)}`;
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

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
            <span className="text-white text-base font-serif font-medium">Contact Us</span>
          </div>

          <div className="w-10" />
        </header>

        {/* Hero Section */}
        <section className="px-5 pt-6 pb-4">
          <div className="p-6 rounded-[24px] bg-gradient-to-br from-[#181308] via-[#0d0d0d] to-[#080808] border border-[#3a2c16] shadow-xl text-center space-y-2">
            <span className="text-[#e5a93c] text-[11px] font-semibold tracking-[0.2em] uppercase">
              WE ARE HERE FOR YOU
            </span>
            <h1 className="text-white text-[24px] font-serif font-medium">
              Get in Touch
            </h1>
            <p className="text-[#a0a0a0] text-xs leading-relaxed max-w-[320px] mx-auto">
              Have questions about jewellery designs, custom pieces, or orders? Reach out directly via Call, WhatsApp, or Instagram.
            </p>
          </div>
        </section>

        {/* Quick Contact Buttons */}
        <section className="px-5 py-2 space-y-3">
          {/* Call Us Button */}
          <a
            href={`tel:+91${PHONE_NUMBER}`}
            className="w-full p-4 rounded-2xl bg-[#0e0e0e] border border-[#2a2a2a] hover:border-[#e5a93c] flex items-center gap-4 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#1c160c] border border-[#e5a93c]/40 flex items-center justify-center text-[#e5a93c] group-hover:scale-105 transition-transform shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-[#8e8e93] text-[11px] uppercase tracking-wider">Phone Support</p>
              <p className="text-white text-[15px] font-semibold tracking-wide">+91 {PHONE_NUMBER}</p>
            </div>
            <span className="px-3 py-1.5 rounded-full bg-[#e5a93c] text-black text-xs font-semibold">
              Call Now
            </span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/91${PHONE_NUMBER}?text=Hello%20Vijay%20Jewellery%20Collection%2C%20I%20have%20an%20inquiry.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-4 rounded-2xl bg-[#0e0e0e] border border-[#2a2a2a] hover:border-emerald-500/50 flex items-center gap-4 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-[#8e8e93] text-[11px] uppercase tracking-wider">Instant Chat</p>
              <p className="text-white text-[15px] font-semibold">WhatsApp Assistance</p>
            </div>
            <span className="px-3 py-1.5 rounded-full bg-emerald-500 text-black text-xs font-semibold">
              Chat
            </span>
          </a>

          {/* Instagram Button */}
          <a
            href={INSTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-4 rounded-2xl bg-[#0e0e0e] border border-[#2a2a2a] hover:border-[#e5a93c] flex items-center gap-4 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#1c160c] border border-[#e5a93c]/40 flex items-center justify-center text-[#e5a93c] group-hover:scale-105 transition-transform shrink-0">
              <Instagram className="w-5 h-5" />
            </div>
            <div className="flex-1 text-left truncate">
              <p className="text-[#8e8e93] text-[11px] uppercase tracking-wider">Instagram</p>
              <p className="text-white text-[14px] font-semibold truncate">@vijay_jewellerycollections</p>
            </div>
            <span className="px-3 py-1.5 rounded-full bg-[#1c160c] border border-[#e5a93c] text-[#e5a93c] text-xs font-semibold shrink-0">
              Follow
            </span>
          </a>
        </section>

        {/* Operating Hours & Location Info */}
        <section className="px-5 py-3">
          <div className="p-5 rounded-2xl bg-[#0d0d0d] border border-[#222] space-y-4">
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#e5a93c] shrink-0 mt-0.5" />
              <div>
                <p className="text-white text-xs font-semibold">Working Hours</p>
                <p className="text-[#a0a0a0] text-[12px] mt-0.5">
                  Monday – Saturday: 10:00 AM – 8:30 PM<br />
                  Sunday: 11:00 AM – 6:00 PM (IST)
                </p>
              </div>
            </div>

            <div className="h-[1px] bg-[#1a1a1a]" />

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#e5a93c] shrink-0 mt-0.5" />
              <div>
                <p className="text-white text-xs font-semibold">Vijay Jewellery Collection</p>
                <p className="text-[#a0a0a0] text-[12px] mt-0.5">
                  Online B2C Jewellery Store · Shipping Pan-India
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Send Inquiry Form */}
        <section className="px-5 py-4">
          <div className="p-5 rounded-[22px] bg-[#0d0d0d] border border-[#262626] space-y-4 shadow-lg">
            <h3 className="text-white text-base font-serif font-medium">
              Send us a Message
            </h3>

            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-600/40 text-emerald-300 text-xs flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Thank you! Redirecting you to WhatsApp to complete your message.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block text-[#a0a0a0] mb-1 font-medium">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full bg-[#141414] border border-[#2c2c2c] rounded-xl px-3.5 py-2.5 text-white placeholder-[#555] focus:outline-none focus:border-[#e5a93c]"
                  />
                </div>

                <div>
                  <label className="block text-[#a0a0a0] mb-1 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your 10-digit mobile number"
                    className="w-full bg-[#141414] border border-[#2c2c2c] rounded-xl px-3.5 py-2.5 text-white placeholder-[#555] focus:outline-none focus:border-[#e5a93c]"
                  />
                </div>

                <div>
                  <label className="block text-[#a0a0a0] mb-1 font-medium">Subject / Inquiry Type</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Order Tracking, Custom Ring, Product Details"
                    className="w-full bg-[#141414] border border-[#2c2c2c] rounded-xl px-3.5 py-2.5 text-white placeholder-[#555] focus:outline-none focus:border-[#e5a93c]"
                  />
                </div>

                <div>
                  <label className="block text-[#a0a0a0] mb-1 font-medium">Message</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you today?"
                    className="w-full bg-[#141414] border border-[#2c2c2c] rounded-xl p-3.5 text-white placeholder-[#555] focus:outline-none focus:border-[#e5a93c] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-11 rounded-xl bg-gradient-to-r from-[#e5a93c] to-[#f5c767] hover:brightness-105 active:scale-[0.99] text-black font-semibold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            )}
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
