"use client";
import { FiPlay } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center">
      {/* Background Image */}
      <Image
        src="/banner.jpg" 
        alt="banner"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-white px-6">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-snug mb-4">
          Custom-Tailored To Your Unique Transportation Needs
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-200 mb-8">
          Trivon delivers goods safely, reliably and on-time.
        </p>

        {/* Buttons */}
        <div className="flex flex-row justify-center items-center gap-4">
          <a
            href="/about-us"
            className="flex items-center gap-2 px-6 py-3 bg-[var(--color-main)] border-2 border-[var(--color-main)] text-white font-medium rounded-md transition"
          >
            Meet ET Trivon
          </a>
          <a
            href="/our-services"
            className="px-6 py-3 border-2 hover:border-gray-800 hover:bg-gray-800 text-white font-medium rounded-md transition"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
