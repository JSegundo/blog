"use client"

import { useState } from "react"
import Cal from "@calcom/embed-react"
import Link from "next/link"

type FormData = {
  projectType: string | null
  description: string
  budget: string | null
  timeline: string | null
}

const projectTypes = [
  { value: "mvp", label: "MVP / New product", description: "Build something from scratch" },
  { value: "feature", label: "Feature / Enhancement", description: "Add to an existing product" },
  { value: "consulting", label: "Consulting / Strategy", description: "Product discovery or technical guidance" },
]

const budgetOptions = [
  { value: "<5k", label: "<$5k" },
  { value: "5-15k", label: "$5–15k" },
  { value: "15-50k", label: "$15–50k" },
  { value: "50k+", label: "$50k+" },
  { value: "not-sure", label: "Not sure" },
]

const timelineOptions = [
  { value: "asap", label: "ASAP" },
  { value: "1-3mo", label: "1–3 months" },
  { value: "3-6mo", label: "3–6 months" },
  { value: "flexible", label: "Flexible" },
]

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-2 rounded-full transition-all duration-300 ${
            i + 1 <= current
              ? "w-8 bg-[var(--accent)]"
              : "w-2 bg-[var(--bg-tertiary)]"
          }`}
        />
      ))}
    </div>
  )
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors duration-200 mb-6"
    >
      &larr; Back
    </button>
  )
}

export default function ContactCTA() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormData>({
    projectType: null,
    description: "",
    budget: null,
    timeline: null,
  })

  // Step 0: Initial CTA (same look as before)
  if (step === 0) {
    return (
      <section id="contact" className="scroll-mt-24 max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-4">
          Let&apos;s talk
        </h2>
        <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-lg mx-auto">
          Have a project in mind or just want to chat? Tell me a bit about what you need.
        </p>
        <button
          onClick={() => setStep(1)}
          className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors duration-200 shadow-sm"
        >
          Get started
        </button>
      </section>
    )
  }

  return (
    <section id="contact" className="scroll-mt-24 max-w-2xl mx-auto px-6 py-16 md:py-24">
      <StepIndicator current={step} total={4} />

      {/* Step 1: Project Type */}
      {step === 1 && (
        <div key="step-1" className="step-enter">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--text-primary)] mb-2 text-center">
            What are you looking for?
          </h2>
          <p className="text-[var(--text-secondary)] text-center mb-8">
            Pick the option that best describes your project.
          </p>
          <div className="grid gap-3">
            {projectTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => {
                  setData((d) => ({ ...d, projectType: type.value }))
                  setStep(2)
                }}
                className={`text-left p-5 rounded-lg border transition-colors duration-200 ${
                  data.projectType === type.value
                    ? "border-[var(--accent)] bg-[var(--accent-glow)]"
                    : "border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--border-light)]"
                }`}
              >
                <span className="block font-medium text-[var(--text-primary)]">
                  {type.label}
                </span>
                <span className="block text-sm text-[var(--text-secondary)] mt-1">
                  {type.description}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Description */}
      {step === 2 && (
        <div key="step-2" className="step-enter">
          <BackButton onClick={() => setStep(1)} />
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--text-primary)] mb-2 text-center">
            Tell me about your project
          </h2>
          <p className="text-[var(--text-secondary)] text-center mb-8">
            A few sentences is plenty.
          </p>
          <textarea
            value={data.description}
            onChange={(e) => setData((d) => ({ ...d, description: e.target.value }))}
            placeholder="What are you building? What problem are you solving?"
            rows={4}
            className="w-full p-4 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-colors duration-200 resize-none"
          />
          <div className="mt-6 text-center">
            <button
              onClick={() => setStep(3)}
              disabled={!data.description.trim()}
              className="inline-flex items-center px-8 py-3 text-base font-semibold rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors duration-200 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Budget & Timeline */}
      {step === 3 && (
        <div key="step-3" className="step-enter">
          <BackButton onClick={() => setStep(2)} />
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--text-primary)] mb-8 text-center">
            Budget &amp; timeline
          </h2>

          <div className="mb-8">
            <p className="text-sm font-medium text-[var(--text-primary)] mb-3">Budget range</p>
            <div className="flex flex-wrap gap-2">
              {budgetOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setData((d) => ({ ...d, budget: opt.value }))}
                  className={`px-4 py-2 text-sm rounded-lg border transition-colors duration-200 ${
                    data.budget === opt.value
                      ? "border-[var(--accent)] bg-[var(--accent-glow)] text-[var(--text-primary)]"
                      : "border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:border-[var(--border-light)]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="text-sm font-medium text-[var(--text-primary)] mb-3">Timeline</p>
            <div className="flex flex-wrap gap-2">
              {timelineOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setData((d) => ({ ...d, timeline: opt.value }))}
                  className={`px-4 py-2 text-sm rounded-lg border transition-colors duration-200 ${
                    data.timeline === opt.value
                      ? "border-[var(--accent)] bg-[var(--accent-glow)] text-[var(--text-primary)]"
                      : "border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:border-[var(--border-light)]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setStep(4)}
              disabled={!data.budget || !data.timeline}
              className="inline-flex items-center px-8 py-3 text-base font-semibold rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors duration-200 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Book a Call */}
      {step === 4 && (
        <div key="step-4" className="step-enter">
          <BackButton onClick={() => setStep(3)} />
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--text-primary)] mb-2 text-center">
            Pick a time
          </h2>
          <div className="rounded-lg border border-[var(--border)] overflow-hidden">
            <Cal
              calLink="segundo-juan-o7omwp/15min"
              config={{
                layout: "month_view",
                theme: "dark",
                locale: "en",
              }}
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
            />
          </div>

          <p className="mt-6 text-center">
            <Link
              href="mailto:segundojuanok@gmail.com"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors duration-200"
            >
              Or email me directly
            </Link>
          </p>
        </div>
      )}
    </section>
  )
}
