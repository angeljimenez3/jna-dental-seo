"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

const JNA_BLUE = "#2299dd";
const JNA_BLUE_DARK = "#1a7fb8";

const BUDGET_OPTIONS = [
  { value: "", label: "Monthly marketing budget..." },
  { value: "under-1000", label: "Under $1,000/month" },
  { value: "1000-3000", label: "$1,000 - $3,000/month" },
  { value: "3000-plus", label: "$3,000+/month" },
];

const CHALLENGE_OPTIONS = [
  { value: "", label: "Biggest challenge right now..." },
  { value: "need-patients", label: "Need more new patients" },
  { value: "patient-quality", label: "Patient quality is poor" },
  { value: "roi-low", label: "Marketing ROI is too low" },
  { value: "no-online-presence", label: "Weak online presence" },
];

const inputClass =
  "flex h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2299dd] focus:border-[#2299dd]";

const selectClass =
  "flex h-12 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2299dd] focus:border-[#2299dd]";

export default function JnaDentalPage() {
  const [step, setStep] = useState<"form" | "calendar" | "waitlist">("form");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const data = new FormData(e.currentTarget);
    const budget = data.get("budget") as string;

    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);

    if (budget === "under-1000") {
      setStep("waitlist");
    } else {
      setStep("calendar");
    }
  }

  return (
    <main
      className="flex min-h-screen flex-col items-center bg-white text-gray-900"
      style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      {/* ── Logo only ── */}
      <div className="w-full border-b border-gray-100 px-6 py-4 text-center">
        <img
          src="https://jna.org/icons/JNA_LOGO.png"
          alt="JNA"
          className="mx-auto h-9"
        />
      </div>

      {/* ── Hero + Form (everything above the fold) ── */}
      <section className="w-full px-6 pb-16 pt-12 md:pt-20">
        <div className="mx-auto max-w-2xl text-center">
          {/* Urgency badge */}
          <p
            className="mb-5 inline-block rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{
              borderColor: "rgba(34,153,221,0.3)",
              backgroundColor: "rgba(34,153,221,0.06)",
              color: JNA_BLUE,
            }}
          >
            Limited Territories &mdash; First Come, First Served
          </p>

          {/* Headline */}
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-[2.75rem] lg:text-5xl">
            Get <span style={{ color: JNA_BLUE }}>Exclusive</span> New Patients
            <br className="hidden md:block" /> Without Paying for Ads
          </h1>

          {/* One-liner proof */}
          <p className="mx-auto mt-5 max-w-xl text-lg text-gray-500 md:text-xl">
            We rank <span className="font-semibold text-gray-900">120+ of our own websites</span> on
            Google generating{" "}
            <span className="font-semibold text-gray-900">780,000+ visits/month</span> with{" "}
            <span className="font-semibold text-gray-900">zero paid ads</span>. Now we&rsquo;re
            doing it for dental clinics.
          </p>

          {/* Trust line */}
          <p className="mt-4 text-sm text-gray-400">
            The same SEO system behind AT&T, Xfinity, DirecTV &amp; 6,000+ dealers.
          </p>
        </div>

        {/* ── THE FORM ── */}
        <div className="mx-auto mt-10 max-w-md">
          {step === "form" && (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/50 md:p-8">
              <h2 className="mb-1 text-center text-lg font-bold md:text-xl">
                See If Your Territory Is Open
              </h2>
              <p className="mb-6 text-center text-sm text-gray-400">
                Takes 30 seconds. No obligation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  name="name"
                  placeholder="Full name"
                  required
                  className={inputClass}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                  className={inputClass}
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  required
                  className={inputClass}
                />
                <input
                  name="clinic"
                  placeholder="Clinic name"
                  required
                  className={inputClass}
                />
                <select
                  name="budget"
                  required
                  className={selectClass}
                  defaultValue=""
                >
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} disabled={!opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <select
                  name="challenge"
                  required
                  className={selectClass}
                  defaultValue=""
                >
                  {CHALLENGE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} disabled={!opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-lg text-base font-bold text-white transition-all disabled:opacity-60"
                  style={{
                    backgroundColor: JNA_BLUE,
                    boxShadow: "0 6px 30px rgba(34,153,221,0.35)",
                  }}
                  onMouseEnter={(e) => {
                    if (!submitting) e.currentTarget.style.backgroundColor = JNA_BLUE_DARK;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = JNA_BLUE;
                  }}
                >
                  {submitting ? (
                    "Checking..."
                  ) : (
                    <>
                      Check Availability
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>

              <p className="mt-4 text-center text-[11px] text-gray-400">
                No spam. No obligation. We&rsquo;ll never share your info.
              </p>
            </div>
          )}

          {step === "calendar" && (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/50 md:p-8 text-center">
              <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-green-500" />
              <h2 className="mb-2 text-2xl font-bold">
                Your Territory May Be{" "}
                <span style={{ color: JNA_BLUE }}>Available</span>
              </h2>
              <p className="mb-6 text-sm text-gray-500">
                Pick a time below. You&rsquo;ll get an SMS + email reminder.
              </p>

              {/* ── CALENDAR PLACEHOLDER ── */}
              <div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-16">
                <p className="text-lg font-bold text-gray-300">
                  Calendar Embed Goes Here
                </p>
              </div>

              <p className="mt-5 text-xs text-gray-400">
                This is a <span className="font-semibold text-gray-600">Territory Strategy Session</span>{" "}
                &mdash; we&rsquo;ll show you live traffic data, not a sales pitch.
              </p>
            </div>
          )}

          {step === "waitlist" && (
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl shadow-gray-200/50 text-center">
              <div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(34,153,221,0.1)" }}
              >
                <Phone className="h-7 w-7" style={{ color: JNA_BLUE }} />
              </div>
              <h2 className="mb-2 text-2xl font-bold">We&rsquo;ll Reach Out</h2>
              <p className="text-sm text-gray-500">
                Our team will contact you to discuss options that fit your practice.
                Check your inbox.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Footer (minimal) ── */}
      <footer className="mt-auto w-full border-t border-gray-100 px-6 py-6">
        <p className="mx-auto max-w-xl text-center text-[10px] leading-relaxed text-gray-300">
          &copy; {new Date().getFullYear()} JNA. Not affiliated with Google or Facebook.
          Results vary based on market and competition.
        </p>
      </footer>
    </main>
  );
}
