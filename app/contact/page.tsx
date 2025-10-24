// app/contact/page.tsx
"use client"; // Form hook use karne ke liye yeh zaroori hai

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mwprjwkr"); // Aapka Formspree ID

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
    // --- YAHAN CHANGE KIYA HAI ---
    // Added: my-12 bg-white rounded-lg shadow-lg
    // p-6 ko p-8 kar diya hai behtar spacing ke liye
    <div className="container mx-auto p-8 max-w-2xl my-12 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="mb-8 text-center text-slate-700">
        Get in touch with us for admissions, inquiries, or any other information.
      </p>

      {/* --- Formspree React Form --- */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Your Name (Required) */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-800">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 p-3"
          />
        </div>

        {/* Your Email (Required) */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-800">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 p-3"
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
          <label htmlFor="contact_number" className="block text-sm font-medium text-slate-800">
            Contact Number
          </label>
          <input
            id="contact_number"
            type="tel"
            name="contact_number"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 p-3"
          />
        </div>

        {/* WhatsApp Number (Optional) */}
        <div>
          <label htmlFor="whatsapp_number" className="block text-sm font-medium text-slate-800">
            WhatsApp Number <span className="text-sm text-gray-500">(Optional)</span>
          </label>
          <input
            id="whatsapp_number"
            type="tel"
            name="whatsapp_number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 p-3"
          />
        </div>

        {/* Your Message (Required) */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-800">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 p-3"
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
            className="w-full px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold 
                       text-lg shadow-md hover:bg-orange-700 hover:scale-105 
                       transition-all duration-300 ease-in-out
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
}