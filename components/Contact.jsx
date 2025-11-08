"use client";

import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-6 mt-32 md:mt-10">
      <div className="max-w-7xl mx-auto bg-white py-8 px-6 shadow-xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl text-black font-bold mb-10 text-center">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-0 items-start">
          {/* Contact Info */}
          <div>
            <div className="flex items-center mb-4 text-[var(--color-main)] text-lg font-semibold">
              <FaPhoneAlt className="mr-3" />
              <a href="tel:7788389611" className="hover:underline">
                7788389611
              </a>
            </div>

            <div className="flex items-center mb-4 text-[var(--color-main)] text-lg font-semibold">
              <FaEnvelope className="mr-3" />
              <a href="mailto:Operations@trivonsolutions.com" className="hover:underline text-black">
                Operations@trivonsolutions.com
              </a>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3 ">
                <FaMapMarkerAlt className="text-[var(--color-main)] flex-none" size={20} aria-hidden="true" />
                <p className="m-0 text-black">
                  <span className="font-bold mr-2 underline">USA Office:</span>
                  <span>Suite104 9407 NE Vancouver Mall Dr, Vancouver, WA 98662, USA.</span>
                </p>
              </div>

              {/* <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[var(--color-main)] flex-none" size={20} aria-hidden="true" />
                <p className="m-0 text-black">
                  <span className="font-bold mr-2 underline">Canada Office:</span>
                  <span>236 1A-12830 96 Ave, Surrey BC&nbsp;V3V0C2, Canada.</span>
                </p>
              </div> */}
            </div>
          </div>

          {/* Embedded Map */}
          <div className="flex justify-center items-center w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172153.9622243629!2d-122.65160387862174!3d47.60852405764992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA%2C%20USA!5e0!3m2!1sen!2sin!4v1762621487191!5m2!1sen!2sin"
              
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="rounded-md min-h-[300px] md:min-h-[400px]"
              style={{ minWidth: "300px" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}