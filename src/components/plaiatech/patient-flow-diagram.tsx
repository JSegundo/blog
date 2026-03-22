'use client'

import { useState } from 'react'

type Answers = {
  cardiovascular: 'yes' | 'no' | null
  sex: 'male' | 'female' | null
}

const TOTAL_STEPS = 5

export default function PatientFlowDiagram() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({
    cardiovascular: null,
    sex: null,
  })
  const [subStep, setSubStep] = useState(false)

  const next = () => {
    if (subStep) {
      setSubStep(false)
      setStep((s) => s + 1)
      return
    }
    // Check if we need a sub-step
    if (step === 0 && answers.cardiovascular === 'yes') {
      setSubStep(true)
      return
    }
    if (step === 2 && answers.sex === 'female') {
      setSubStep(true)
      return
    }
    setStep((s) => s + 1)
  }

  const restart = () => {
    setStep(0)
    setAnswers({ cardiovascular: null, sex: null })
    setSubStep(false)
  }

  const canProceed = () => {
    if (step === 0) return answers.cardiovascular !== null
    if (step === 2) return answers.sex !== null
    return true
  }

  const renderStep = () => {
    // Sub-steps (branching)
    if (subStep && step === 0) {
      return (
        <div className="space-y-4">
          <p className="text-sm text-[var(--text-secondary)]">
            Since the patient has cardiovascular history, we ask follow-up
            questions:
          </p>
          <div className="space-y-2">
            {['Hypertension', 'Arrhythmia', 'Heart failure', 'Pacemaker'].map(
              (item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-2.5 text-sm text-[var(--text-primary)]"
                >
                  <div className="h-4 w-4 rounded border border-[var(--border)] bg-[var(--bg-secondary)]" />
                  {item}
                </label>
              )
            )}
          </div>
        </div>
      )
    }

    if (subStep && step === 2) {
      return (
        <div className="space-y-4">
          <p className="text-sm text-[var(--text-secondary)]">
            Additional questions for female patients:
          </p>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-medium text-[var(--text-muted)] mb-1 block">
                Pregnancy status
              </label>
              <div className="h-9 rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)]" />
            </div>
            <div>
              <label className="text-xs font-medium text-[var(--text-muted)] mb-1 block">
                Last menstrual period
              </label>
              <div className="h-9 rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)]" />
            </div>
          </div>
        </div>
      )
    }

    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <p className="text-sm text-[var(--text-secondary)]">
              Does the patient have any cardiovascular history?
            </p>
            <div className="flex gap-3">
              {(['yes', 'no'] as const).map((val) => (
                <button
                  key={val}
                  onClick={() =>
                    setAnswers((a) => ({ ...a, cardiovascular: val }))
                  }
                  className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                    answers.cardiovascular === val
                      ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]'
                      : 'border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--text-muted)]'
                  }`}
                >
                  {val === 'yes' ? 'Yes' : 'No'}
                </button>
              ))}
            </div>
          </div>
        )

      case 1:
        return (
          <div className="space-y-4">
            <p className="text-sm text-[var(--text-secondary)]">
              Take a photo of the medication box for AI detection.
            </p>
            <div className="relative rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border)] h-28 flex items-center justify-center">
              {/* Camera viewfinder corners */}
              {[
                'top-2 left-2 border-t-2 border-l-2',
                'top-2 right-2 border-t-2 border-r-2',
                'bottom-2 left-2 border-b-2 border-l-2',
                'bottom-2 right-2 border-b-2 border-r-2',
              ].map((pos) => (
                <div
                  key={pos}
                  className={`absolute w-4 h-4 border-[var(--text-muted)]/40 ${pos}`}
                />
              ))}
              <span className="text-xs text-[var(--text-muted)]">
                Point camera here
              </span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400">
                AI detected: Medication A, 20mg
              </span>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <p className="text-sm text-[var(--text-secondary)]">
              Select the patient&apos;s biological sex.
            </p>
            <div className="space-y-2">
              {(['male', 'female'] as const).map((val) => (
                <button
                  key={val}
                  onClick={() => setAnswers((a) => ({ ...a, sex: val }))}
                  className={`w-full flex items-center gap-3 rounded-lg border px-4 py-2.5 text-sm transition-colors text-left ${
                    answers.sex === val
                      ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]'
                      : 'border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--text-muted)]'
                  }`}
                >
                  <div
                    className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${
                      answers.sex === val
                        ? 'border-[var(--accent)]'
                        : 'border-[var(--border)]'
                    }`}
                  >
                    {answers.sex === val && (
                      <div className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                    )}
                  </div>
                  {val === 'male' ? 'Male' : 'Female'}
                </button>
              ))}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <p className="text-sm text-[var(--text-secondary)]">
              Take a photo of the patient&apos;s open mouth for airway
              classification.
            </p>
            <div className="relative rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border)] h-28 flex items-center justify-center">
              <span className="absolute top-2 right-3 text-[10px] font-bold text-[var(--text-muted)]/40 tracking-wider">
                CLASSIFICATION
              </span>
              {[
                'top-2 left-2 border-t-2 border-l-2',
                'top-2 right-2 border-t-2 border-r-2',
                'bottom-2 left-2 border-b-2 border-l-2',
                'bottom-2 right-2 border-b-2 border-r-2',
              ].map((pos) => (
                <div
                  key={pos}
                  className={`absolute w-4 h-4 border-[var(--text-muted)]/40 ${pos}`}
                />
              ))}
              <span className="text-xs text-[var(--text-muted)]">
                Point camera here
              </span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400">
                AI classified: Class II — Normal
              </span>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <p className="text-sm text-[var(--text-secondary)]">
              Pre-anesthesia evaluation complete. Summary ready for review.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-2">
                <span className="text-[var(--text-muted)]">
                  Cardiovascular
                </span>
                <span className="text-[var(--text-primary)] font-medium">
                  {answers.cardiovascular === 'yes' ? 'Yes — details recorded' : 'No'}
                </span>
              </div>
              <div className="flex justify-between rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-2">
                <span className="text-[var(--text-muted)]">Medication</span>
                <span className="text-[var(--text-primary)] font-medium">
                  Medication A, 20mg
                </span>
              </div>
              <div className="flex justify-between rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-2">
                <span className="text-[var(--text-muted)]">
                  Biological sex
                </span>
                <span className="text-[var(--text-primary)] font-medium capitalize">
                  {answers.sex ?? '—'}
                  {answers.sex === 'female' && ' — pregnancy info recorded'}
                </span>
              </div>
              <div className="flex justify-between rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-2">
                <span className="text-[var(--text-muted)]">Classification</span>
                <span className="text-[var(--text-primary)] font-medium">
                  Class II
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1.5">
                <span className="text-xs font-bold text-[var(--accent)]">
                  Risk Level: Standard
                </span>
              </div>
              <span className="text-xs font-medium text-emerald-400">
                Ready for review
              </span>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const stepLabels = [
    'Cardiovascular',
    'Medication',
    'Biological Sex',
    'Airway',
    'Summary',
  ]

  const currentLabel = subStep
    ? step === 0
      ? 'Cardiac Detail'
      : 'Pregnancy Info'
    : stepLabels[step]

  return (
    <div className="flex justify-center">
      {/* Phone shell */}
      <div className="w-full max-w-[320px] rounded-[2.5rem] border-[6px] border-[var(--border)] bg-[var(--bg-secondary)] overflow-hidden shadow-2xl">
        {/* Status bar */}
        <div className="flex items-center justify-between px-6 py-2 bg-[var(--bg-primary)]">
          <span className="text-[10px] font-medium text-[var(--text-muted)]">
            9:41
          </span>
          {/* Dynamic island */}
          <div className="h-[14px] w-[72px] rounded-full bg-black" />
          {/* Battery & signal */}
          <div className="flex items-center gap-1">
            <div className="flex gap-[2px]">
              {[10, 8, 6, 4].map((h) => (
                <div
                  key={h}
                  className="w-[3px] rounded-sm bg-[var(--text-muted)]"
                  style={{ height: h }}
                />
              ))}
            </div>
            <div className="ml-1 h-[10px] w-[20px] rounded-sm border border-[var(--text-muted)] relative">
              <div className="absolute inset-[2px] rounded-[1px] bg-[var(--text-muted)]" />
            </div>
          </div>
        </div>

        {/* Screen content */}
        <div className="bg-[var(--bg-primary)]">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--bg-tertiary)]">
            <span className="text-xs font-medium text-[var(--accent)]">
              Interactive Demo
            </span>
            <span className="text-xs text-[var(--text-muted)]">
              {currentLabel} · Step {step + 1}/{TOTAL_STEPS}
            </span>
          </div>

          {/* Progress bar */}
          <div className="flex gap-1 px-4 pt-4">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i <= step
                    ? 'bg-[var(--accent)]'
                    : 'bg-[var(--border)]'
                }`}
              />
            ))}
          </div>

          {/* Content */}
          <div className="px-4 py-5 min-h-[260px]">
            <h3 className="text-base font-semibold text-[var(--text-primary)] mb-4">
              {currentLabel}
            </h3>
            {renderStep()}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-[var(--border)]">
            {step === 4 && !subStep ? (
              <button
                onClick={restart}
                className="text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
              >
                Restart
              </button>
            ) : (
              <div />
            )}
            {step < 4 || subStep ? (
              <button
                onClick={next}
                disabled={!canProceed()}
                className="rounded-lg bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-[var(--bg-primary)] transition-opacity disabled:opacity-30"
              >
                {subStep ? 'Continue' : 'Next'}
              </button>
            ) : null}
          </div>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center py-2 bg-[var(--bg-primary)]">
          <div className="h-1 w-28 rounded-full bg-[var(--text-muted)]/30" />
        </div>
      </div>
    </div>
  )
}
