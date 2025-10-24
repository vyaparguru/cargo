"use client";

import React from 'react';

const servicesTop = [
  {
    title: 'Flatbeds',
    description: 'When it comes to specialized commodities like heavy equipment and construction materials, Trivon Transport has a flatbed division.',
    image: '/service1.jpg',
  },
  {
    title: 'Hazmats',
    description: 'Trivon Transport’s fleet of trucks includes both heated and refrigerated vans to keep your goods secure throughout the journey.',
    image: '/service2.jpg',
  },
  {
    title: 'Batteries(BESS)',
    description: 'When it comes to specialized commodities like heavy equipment and construction materials, Trivon Transport has a flatbed division.',
    image: '/service3.jpg',
  },
  {
    title: 'Long, Heavy or Wide',
    description: 'Trivon Transport is certified to deliver most hazardous materials, including various chemicals, sensitive materials and dangerous equipment.',
    image: '/service4.jpg',
  },
  {
    title: 'Transport of Wind Energy Components',
    description: 'Trivon Transport is certified to deliver most hazardous materials, including various chemicals, sensitive materials and dangerous equipment.',
    image: '/service5.jpg',
  }
];

const serviceItemsBottom = [
  "Truck Load (TL) Transport",
  "Less-Than-Truck Load (LTL)",
  "Roll Tite Transportation",
  "3PL / Freight Forwarders",
  "Satellite Tracking & 24/7 Dispatch",
  "Rail / Inter-Modal Transportation",
  "Warehousing Services",
  "Rental Services"
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-12 px-4 lg:px-40">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Transportation Services</h2>
        <p className="text-md md:text-lg text-[var(--color-main)] mt-2">Non-Stop Service, Fast & Reliable Delivery</p>
      </div>

      {/* Top Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {servicesTop.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-xl hover:shadow-2xl flex flex-col md:flex-row overflow-hidden "
          >
            {/* Image: occupies ~60% on md+, touches card borders */}
            <div className="w-full md:w-3/5 h-56 md:h-auto flex-none">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text: occupies ~40% on md+, has its own padding */}
            <div className="w-full md:w-2/5 p-6 md:p-8 flex-1 min-w-0">
              <h3 className="font-semibold text-xl text-black">{service.title}</h3>
              <p className="text-gray-800 text-md mt-2">{service.description}</p>
              <a
                href="/our-services"
                className="text-[var(--color-main)] text-md font-semibold mt-3 inline-block"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {serviceItemsBottom.map((item, index) => (
          <div key={index} className="bg-white shadow-xl hover:shadow-2xl flex items-center gap-3 transition">
            <div className="bg-[var(--color-main)] text-white p-6">
              <img
                src={`/${index + 1}.png`}
                alt={item}
                className="w-14 h-14 object-contain"
              />
            </div>
            <p className="text-black text-md font-semibold">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
