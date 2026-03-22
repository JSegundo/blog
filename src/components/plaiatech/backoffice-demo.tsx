'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'

type PatientReport = {
  cardiovascular: string
  medication: string
  sex: string
  airway: string
  asa: string
  risk: string
  documents: string
}

type Patient = {
  name: string
  date: string
  status: 'Completed' | 'In Progress' | 'Pending'
  report?: PatientReport
}

const patients: Patient[] = [
  {
    name: 'María García',
    date: '2024-11-18',
    status: 'Completed',
    report: {
      cardiovascular: 'No significant history',
      medication: 'Daily medication',
      sex: 'Female',
      airway: 'Class II',
      asa: 'Standard Risk',
      risk: 'Standard — no additional precautions',
      documents: '3 files uploaded — verified',
    },
  },
  {
    name: 'Carlos López',
    date: '2024-11-19',
    status: 'In Progress',
  },
  {
    name: 'Ana Rodríguez',
    date: '2024-11-20',
    status: 'Pending',
  },
  {
    name: 'Jorge Martínez',
    date: '2024-11-20',
    status: 'Completed',
    report: {
      cardiovascular: 'Managed condition',
      medication: 'Daily medications (2)',
      sex: 'Male',
      airway: 'Class I',
      asa: 'Moderate Risk',
      risk: 'Moderate — additional monitoring recommended',
      documents: '2 files uploaded — verified',
    },
  },
]

const statusStyle: Record<string, string> = {
  Completed:
    'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  'In Progress':
    'border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400',
  Pending:
    'border-zinc-400/30 bg-zinc-400/10 text-zinc-500 dark:text-zinc-400',
}

const stats = [
  { label: 'Total', value: 4 },
  { label: 'Completed', value: 2 },
  { label: 'In Progress', value: 1 },
]

export default function BackofficeDemo() {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)

  return (
    <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-tertiary)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 rounded-md bg-[var(--bg-secondary)] px-3 py-1">
          <span className="text-[11px] text-[var(--text-muted)]">
            app.example.com/dashboard
          </span>
        </div>
      </div>

      {/* Content area */}
      <div className="bg-[var(--bg-primary)]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)] bg-[var(--bg-secondary)]">
          <span className="text-xs font-medium text-[var(--accent)]">
            Dashboard
          </span>
          <span className="text-xs text-[var(--text-muted)]">
            Pre-Anesthesia Evaluations
          </span>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-3 px-5 py-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-2 text-center"
            >
              <div className="text-lg font-semibold text-[var(--text-primary)]">
                {s.value}
              </div>
              <div className="text-[10px] text-[var(--text-muted)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-t border-[var(--border)] text-left text-xs text-[var(--text-muted)]">
                <th className="px-5 py-3 font-medium">Patient</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((p) => {
                const isClickable = p.status === 'Completed'
                const isSelected = selectedPatient?.name === p.name
                return (
                  <tr
                    key={p.name}
                    onClick={isClickable ? () => setSelectedPatient(p) : undefined}
                    className={`border-b border-[var(--border)] last:border-b-0 transition-colors ${
                      isClickable
                        ? 'cursor-pointer hover:bg-[var(--bg-tertiary)]'
                        : ''
                    } ${isSelected ? 'bg-[var(--bg-tertiary)]' : ''}`}
                  >
                    <td className="px-5 py-3 text-[var(--text-primary)] font-medium">
                      {p.name}
                    </td>
                    <td className="px-5 py-3 text-[var(--text-muted)]">
                      {p.date}
                    </td>
                    <td className="px-5 py-3 text-right">
                      <Badge
                        variant="secondary"
                        size="sm"
                        className={statusStyle[p.status]}
                      >
                        {p.status}
                      </Badge>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Report panel */}
        {selectedPatient?.report && (
          <div className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
            {/* Report header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)]">
              <div>
                <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                  {selectedPatient.name}
                </h4>
                <p className="text-[11px] text-[var(--text-muted)]">
                  Pre-Anesthesia Evaluation Report
                </p>
              </div>
              <button
                onClick={() => setSelectedPatient(null)}
                className="rounded-md border border-[var(--border)] px-2 py-1 text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] transition-colors"
              >
                Close
              </button>
            </div>

            {/* Report content */}
            <div className="px-5 py-4 space-y-2">
              {[
                { label: 'Cardiovascular', value: selectedPatient.report.cardiovascular },
                {
                  label: 'Current Medication',
                  value: selectedPatient.report.medication,
                  tag: 'AI-detected',
                },
                { label: 'Biological Sex', value: selectedPatient.report.sex },
                { label: 'Airway Classification', value: selectedPatient.report.airway },
                {
                  label: 'Risk Classification',
                  value: selectedPatient.report.asa,
                  accent: true,
                },
                {
                  label: 'Risk Level',
                  value: selectedPatient.report.risk,
                  emerald: true,
                },
                { label: 'Documents', value: selectedPatient.report.documents },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-2 gap-1"
                >
                  <span className="text-xs text-[var(--text-muted)]">
                    {row.label}
                  </span>
                  <span className="text-sm font-medium text-[var(--text-primary)] flex items-center gap-2">
                    {row.accent ? (
                      <Badge
                        variant="secondary"
                        size="sm"
                        className="border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)]"
                      >
                        {row.value}
                      </Badge>
                    ) : row.emerald ? (
                      <Badge
                        variant="secondary"
                        size="sm"
                        className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      >
                        {row.value}
                      </Badge>
                    ) : (
                      <>
                        {row.value}
                        {row.tag && (
                          <span className="text-[10px] text-[var(--accent)] font-normal">
                            ({row.tag})
                          </span>
                        )}
                      </>
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Report footer */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-[var(--border)]">
              <span className="text-[11px] text-[var(--text-muted)]">
                Generated automatically from patient questionnaire
              </span>
              <Badge
                variant="secondary"
                size="sm"
                className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              >
                Ready for review
              </Badge>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
