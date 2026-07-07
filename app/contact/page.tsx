// app/contact/page.tsx
"use client"; // Form hook use karne ke liye yeh zaroori hai

import { useForm, ValidationError } from '@formspree/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { siteConfig } from '@/lib/siteConfig';

export default function ContactPage() {
  const [state, handleSubmit] = useForm(siteConfig.formspreeIds.contact);

  if (state.succeeded) {
    return (
      <div className="container mx-auto p-6 max-w-2xl text-center">
        {/* Thank you message pehle se hi white bg mein hai */}
        <div className="bg-white p-8 rounded-lg shadow-lg my-12">
          <h3 className="text-2xl font-bold text-slate-800">Thank you!</h3>
          <p className="text-slate-600 mt-2">
            Your message has been sent successfully. We&apos;ll get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    // OLD: <div className="container mx-auto p-8 max-w-2xl my-12 bg-white rounded-lg shadow-lg">
    // NEW: Ek bada container banaya taaki 2 column aa sakein
    <div className="container mx-auto max-w-6xl p-6 py-20">
      {/* Naya 2-column grid (5-column layout use karke 2/3 split) */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* --- NAYA PART (Left Column) --- */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold text-slate-900">Get in Touch</h1>
          <p className="mt-4 mb-8 text-lg text-slate-700">
            We&apos;re here to help. Use the form or contact us directly using
            the details below.
          </p>

          {/* Direct Contact Info (Updated) */}
          <div className="space-y-6">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-4 group"
            >
              <FaPhone className="text-crimson text-xl" />
              <span className="text-lg text-slate-800 group-hover:text-crimson">
                {siteConfig.phone}
              </span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 group"
            >
              <FaEnvelope className="text-crimson text-xl" />
              <span className="text-lg text-slate-800 group-hover:text-crimson">
                {siteConfig.email}
              </span>
            </a>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-crimson text-xl mt-1" />
              <span className="text-lg text-slate-800">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </span>
            </div>
          </div>

          {/* --- Map (Updated for Gurugram) --- */}
          <div className="mt-10">
            <iframe
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>

        {/* --- PURANA PART (Right Column) --- */}
        {/* Form ko ab right column mein daal diya hai */}
        <div className="md:col-span-3 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">
            Send us a Message
          </h2>

          {/* --- Formspree React Form (No change) --- */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Your Name (Required) */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-800"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-crimson focus:ring-crimson p-3"
              />
            </div>

            {/* Your Email (Required) */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-800"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-crimson focus:ring-crimson p-3"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="mt-2 text-sm text-red-600"
              />
            </div>

            {/* Contact Number (Required) */}
            <div>
              <label
                htmlFor="contact_number"
                className="block text-sm font-medium text-slate-800"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contact_number"
                name="contact_number"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-crimson focus:ring-crimson p-3"
              />
            </div>

            {/* WhatsApp Number (Optional) */}
            <div>
              <label
                htmlFor="whatsapp_number"
                className="block text-sm font-medium text-slate-800"
              >
                WhatsApp Number{' '}
                <span className="text-sm text-gray-500">(Optional)</span>
              </label>
              <input
                type="tel"
                id="whatsapp_number"
                name="whatsapp_number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-crimson focus:ring-crimson p-3"
              />
            </div>

            {/* Your Message (Required) */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-800"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-crimson focus:ring-crimson p-3"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="mt-2 text-sm text-red-600"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full px-8 py-3 bg-crimson text-white rounded-lg font-semibold 
                           text-lg shadow-md hover:bg-crimson-dark hover:scale-105 
                           transition-all duration-300 ease-in-out
                           disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}