'use client';

import Link from 'next/link';
import { useForm, ValidationError } from '@formspree/react';
import { FaInfoCircle, FaCheckCircle } from 'react-icons/fa';
import { trialDates } from '@/lib/data/trials';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';

const STEPS = [
  {
    title: 'Submit Application Online',
    desc: 'Fill in the form below with your details. It takes less than 5 minutes.',
  },
  {
    title: 'Initial Assessment Call',
    desc: 'Our coaching staff will contact you within 48 hours to discuss your application.',
  },
  {
    title: 'Trial Session at the Academy',
    desc: 'Attend a structured trial session on the pitch with our licensed coaches.',
  },
  {
    title: 'Offer & Onboarding',
    desc: 'Successful applicants receive a formal offer and begin their induction programme.',
  },
];

const inputClass =
  'mt-1 block w-full rounded-lg border border-gray-200 shadow-sm focus:border-crimson focus:ring-crimson p-3 text-charcoal text-sm outline-none transition-colors';
const labelClass = 'block text-sm font-semibold text-charcoal mb-1';

const MONTH_NAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function formatDate(iso: string) {
  const [, m, d] = iso.split('-');
  return `${parseInt(d, 10)} ${MONTH_NAMES[parseInt(m, 10) - 1]} 2026`;
}

export default function AdmissionsPage() {
  const [state, handleSubmit] = useForm('ADMISSIONS_FORM_ID');

  return (
    <>
      <PageHero
        title="Join the Academy"
        subtitle="Apply for trials and begin your journey with Kota FA."
        svgSrc="/SVG/admissions-graphic.svg"
      />

      {/* ── Success State ── */}
      {state.succeeded ? (
        <div className="container mx-auto max-w-2xl px-6 py-24 text-center">
          <FaCheckCircle className="text-crimson text-7xl mx-auto mb-6" />
          <h2 className="text-3xl font-black text-charcoal">Application Received!</h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto leading-relaxed">
            Thank you! We&apos;ll be in touch within 48 hours to schedule your assessment.
            In the meantime, please prepare a birth certificate and medical clearance for your trial session.
          </p>
          <Link
            href="/"
            className="inline-block mt-8 px-8 py-3 bg-crimson text-white rounded-xl font-bold hover:bg-crimson-dark transition-colors"
          >
            Back to Home
          </Link>
        </div>
      ) : (
        <>
          {/* ── 2-column main content ── */}
          <div className="container mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">

            {/* LEFT — How It Works */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-black text-charcoal mb-8">How It Works</h2>

              <div className="flex flex-col gap-6">
                {STEPS.map((step, i) => (
                  <div key={step.title} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-crimson rounded-full flex items-center justify-center text-white font-black flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-bold text-charcoal">{step.title}</p>
                      <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info box */}
              <div className="bg-crimson/5 border border-crimson/20 rounded-xl p-4 mt-8 flex items-start gap-3">
                <FaInfoCircle className="text-crimson text-lg flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600 leading-relaxed">
                  Please bring a valid <strong>birth certificate</strong> and{' '}
                  <strong>medical clearance certificate</strong> to your trial session.
                </p>
              </div>
            </div>

            {/* RIGHT — Application Form */}
            <div className="md:col-span-3 bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-black text-charcoal mb-6">Application Form</h2>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Player's Full Name */}
                <div>
                  <label htmlFor="player_name" className={labelClass}>
                    Player&apos;s Full Name <span className="text-crimson">*</span>
                  </label>
                  <input type="text" id="player_name" name="player_name" required className={inputClass} />
                </div>

                {/* Date of Birth */}
                <div>
                  <label htmlFor="dob" className={labelClass}>
                    Date of Birth <span className="text-crimson">*</span>
                  </label>
                  <input type="date" id="dob" name="dob" required className={inputClass} />
                </div>

                {/* Age Group */}
                <div>
                  <label htmlFor="age_group" className={labelClass}>
                    Age Group Applying For <span className="text-crimson">*</span>
                  </label>
                  <select id="age_group" name="age_group" required className={inputClass}>
                    <option value="">— Select —</option>
                    <option value="U-12">U-12 (Ages 8–12)</option>
                    <option value="U-18">U-18 (Ages 13–17)</option>
                    <option value="Senior">Senior (Ages 18+)</option>
                  </select>
                </div>

                {/* Parent / Guardian Name */}
                <div>
                  <label htmlFor="guardian_name" className={labelClass}>
                    Parent / Guardian Name <span className="text-crimson">*</span>
                  </label>
                  <input type="text" id="guardian_name" name="guardian_name" required className={inputClass} />
                </div>

                {/* Contact Number & WhatsApp — 2 cols on md+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact_number" className={labelClass}>
                      Contact Number <span className="text-crimson">*</span>
                    </label>
                    <input type="tel" id="contact_number" name="contact_number" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="whatsapp_number" className={labelClass}>
                      WhatsApp Number <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <input type="tel" id="whatsapp_number" name="whatsapp_number" className={inputClass} />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address <span className="text-crimson">*</span>
                  </label>
                  <input type="email" id="email" name="email" required className={inputClass} />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-red-500" />
                </div>

                {/* School */}
                <div>
                  <label htmlFor="school" className={labelClass}>
                    Current School / Institution <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input type="text" id="school" name="school" className={inputClass} />
                </div>

                {/* Previous Experience */}
                <div>
                  <label htmlFor="experience" className={labelClass}>
                    Previous Football Experience <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <textarea id="experience" name="experience" rows={3} className={inputClass} placeholder="e.g. Played for school team 2 years, attended coaching camps…" />
                </div>

                {/* Preferred Position */}
                <div>
                  <label htmlFor="position" className={labelClass}>
                    Preferred Position <span className="text-crimson">*</span>
                  </label>
                  <select id="position" name="position" required className={inputClass}>
                    <option value="">— Select —</option>
                    <option value="Goalkeeper">Goalkeeper</option>
                    <option value="Defender">Defender</option>
                    <option value="Midfielder">Midfielder</option>
                    <option value="Forward">Forward</option>
                    <option value="Any">Any / Not Sure</option>
                  </select>
                </div>

                {/* Medical */}
                <div>
                  <label htmlFor="medical" className={labelClass}>
                    Medical Conditions / Allergies <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <textarea id="medical" name="medical" rows={2} className={inputClass} placeholder="List any relevant medical conditions or allergies…" />
                </div>

                {/* How did you hear */}
                <div>
                  <label htmlFor="referral" className={labelClass}>
                    How did you hear about us? <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <select id="referral" name="referral" className={inputClass}>
                    <option value="">— Select —</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Word of Mouth">Word of Mouth</option>
                    <option value="School">School</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 w-4 h-4 accent-crimson flex-shrink-0 cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                    I agree to the academy&apos;s <span className="text-crimson font-semibold">terms and code of conduct</span> and confirm that all information provided is accurate.
                    <span className="text-crimson"> *</span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4 bg-crimson hover:bg-crimson-dark text-white rounded-xl font-bold text-lg
                             transition-all duration-300 hover:scale-[1.01] shadow-md
                             disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {state.submitting ? 'Submitting…' : 'Submit Application'}
                </button>

              </form>
            </div>
          </div>

          {/* ── Upcoming Trial Dates ── */}
          <section className="container mx-auto max-w-6xl px-6 pb-20">
            <SectionHeader
              title="Upcoming Trial Dates"
              subtitle="Register your interest and secure a spot at one of our upcoming trials."
              align="center"
            />

            <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-sm">
                  <thead>
                    <tr className="bg-charcoal text-white text-xs font-bold uppercase tracking-wider">
                      {['Date', 'Age Group', 'Time', 'Venue', 'Availability'].map((col) => (
                        <th key={col} className="py-4 px-4 text-left whitespace-nowrap">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {trialDates.map((trial, i) => (
                      <tr
                        key={trial.id}
                        className={`hover:bg-crimson/5 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                      >
                        <td className="py-3 px-4 font-semibold text-charcoal whitespace-nowrap">
                          {formatDate(trial.date)}
                        </td>
                        <td className="py-3 px-4 text-charcoal">{trial.ageGroup}</td>
                        <td className="py-3 px-4 text-gray-600 whitespace-nowrap">{trial.time}</td>
                        <td className="py-3 px-4 text-gray-600">{trial.venue}</td>
                        <td className="py-3 px-4">
                          {trial.isFull ? (
                            <Badge label="FULL" variant="charcoal" />
                          ) : (
                            <Badge label={`${trial.spotsLeft} spots left`} variant="crimson" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
