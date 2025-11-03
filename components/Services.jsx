"use client";

import React from 'react';

import { FaShoppingCart, FaIndustry, FaCar, FaHardHat, FaTractor } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";

const servicesTop = [
  {
    title: 'Flatbed Freight Shipping',
    description: 'Reliable transport for oversized and heavy-duty cargo. Ideal for machinery, construction materials, vehicles, and equipment. Open-deck trailers for easy loading and unloading. Experienced carriers ensuring proper load securement and safety compliance. Custom routing options for over-dimensional freight.',
    image: '/service1.jpg',
  },
  {
    title: 'Full Truckload (FTL) Freight Shipping',
    description: 'Dedicated capacity for large, time-sensitive shipments. Exclusive truck space — no mixing with other cargo. Faster delivery with minimal handling or transfers. Ideal for bulk, palletized, or high-value freight. Real-time tracking and updates from pickup to delivery.',
    image: '/service2.jpg',
  },
  {
    title: 'Less-Than-Truckload (LTL) Freight Shipping',
    description: 'Cost-effective shipping for smaller or partial loads. Share trailer space and save on shipping costs. Ideal for frequent, small, or regional deliveries. Flexible pickup and drop-off scheduling. Real-time shipment visibility and secure handling.',
    image: '/service3.jpg',
  },
  {
    title: 'Heavy Haul & Oversize Freight',
    description: 'Expert handling for over-dimensional and overweight shipments. Specialized trailers such as RGNs, lowboys, and extendables. Route planning, permits, and escort coordination included. Carriers experienced in hauling construction, energy, and industrial equipment. Compliance with all state and federal heavy-haul regulations.',
    image: '/service4.jpg',
  },
  {
    title: 'Long-Haul Trucking & Logistics',
    description: 'Reliable coast-to-coast freight movement across the United States. End-to-end logistics for long-distance shipping. Dependable, pre-screened carrier network. Cost-efficient routes for heavy or full-load shipments. Optimized planning to reduce transit time and maximize safety.',
    image: '/service5.jpg',
  },
  {
    title: 'Hazmat Freight Shipping',
    description: 'Certified and compliant transport for hazardous materials. Licensed hazmat carriers for all DOT-regulated classes. Proper documentation, labeling, and secure containment. Specialized handling for chemicals, batteries, and flammable goods. Safety-first approach ensuring full regulatory compliance.',
    image: '/service6.webp',
  }
];

const industries = [
  { name: "Retail & E-Commerce", icon: <FaShoppingCart /> },
  { name: "Manufacturing", icon: <FaIndustry /> },
  { name: "Food & Beverage", icon: <GiForkKnifeSpoon /> },
  { name: "Automotive", icon: <FaCar /> },
  { name: "Construction", icon: <FaHardHat /> },
  { name: "Agriculture", icon: <FaTractor /> },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-12 px-4 lg:px-40">
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-3xl font-bold text-black">Full Truckload (FTL) & Less-Than-Truckload (LTL) Freight Brokers in U.S.A, Washington</h2>
        {/* <p className="text-md md:text-lg text-[var(--color-main)] mt-2">Non-Stop Service, Fast & Reliable Delivery</p> */}
      </div>

      {/* Top Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {servicesTop.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-xl hover:shadow-2xl flex flex-col overflow-hidden "
          >
            <div className="w-full h-56 flex-none">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full p-4 md:p-5 flex-1 min-w-0">
              <h3 className="font-semibold text-xl text-black">{service.title}</h3>
              <ul className="list-disc list-inside text-gray-800 text-sm mt-2 space-y-1">
                {Array.isArray(service.description) 
                  ? service.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))
                  : service.description.split('. ').map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
              </ul>
              {/* <a
                href="/our-services"
                className="text-[var(--color-main)] text-md font-semibold mt-4 inline-block"
              >
                Learn More →
              </a> */}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Grid */}
      <section className="text-center">
        {/* Heading */}
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
            Industries Served By <span className="text-[var(--color-main)]">Trivon</span>
          </h2>

          {/* Grid Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-7xl mx-auto px-6">
            {industries.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-[var(--color-main)] transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="text-5xl mb-3 opacity-70 group-hover:opacity-100 transition-all">
                  {item.icon}
                </div>

                {/* Text */}
                <p className="text-xs md:text-sm font-semibold uppercase tracking-wide text-gray-800">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
