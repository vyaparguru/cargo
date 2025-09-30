"use client";
import Image from "next/image";
import { FiTruck } from "react-icons/fi";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 text-center px-6 py-4">
      {/* Icon / Illustration */}
      <div className="mb-6 animate-bounce">
        <FiTruck className="text-[var(--color-main)] text-6xl" />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Cargo on the Way! 
      </h1>

      {/* Subheading */}
      <p className="text-lg text-gray-700 max-w-2xl mb-6">
        Our website is currently under construction, but we’ll be arriving at your destination soon!
      </p>

      {/* Optional image */}
      <div className="mb-8">
        <Image
          src="/logo.png" 
          alt="Cargo Illustration"
          width={400}
          height={250}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
