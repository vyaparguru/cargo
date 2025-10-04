// components/TransportationServices.jsx
import React from 'react';

const servicesTop = [
  {
    title: 'Dry Vans',
    description: 'ET Transport’s Dry Vans ready to deliver your goods wherever you need them – short-haul, long-haul, or regional, across the lower 48 states and Canada.',
    image: '/service1.jpg',
  },
  {
    title: 'Reefers & Heaters',
    description: 'ET Transport’s fleet of trucks includes both heated and refrigerated vans to keep your goods secure throughout the journey.',
    image: '/service2.jpg',
  },
  {
    title: 'Flatbeds & Roll Tites',
    description: 'When it comes to specialized commodities like heavy equipment and construction materials, ET Transport has a flatbed division.',
    image: '/service3.jpg',
  },
  {
    title: 'Hazardous Materials',
    description: 'ET Transport is certified to deliver most hazardous materials, including various chemicals, sensitive materials and dangerous equipment.',
    image: '/service4.jpg',
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
        <p className="text-[var(--color-main)] mt-2">Non-Stop Service, Fast & Reliable Delivery</p>
      </div>

      {/* Top Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {servicesTop.map((service, index) => (
          <div key={index} className="bg-white shadow-md p-10 flex gap-4">
            <img src={service.image} alt={service.title} className="w-80 h-auto object-contain" />
            <div>
              <h3 className="font-semibold text-xl text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{service.description}</p>
              <a href="/our-services" className="text-[var(--color-main)] text-sm font-medium mt-3 inline-block">Learn More →</a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {serviceItemsBottom.map((item, index) => (
          <div key={index} className="bg-white shadow flex items-center gap-3 hover:bg-blue-50 transition">
            <div className="bg-blue-700 text-white p-6">
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
