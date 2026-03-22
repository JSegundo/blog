import Link from "next/link"
import { Badge } from "./ui/badge"
import { load } from "outstatic/server"

async function getFeaturedProject() {
  const db = await load()

  const project = await db
    .find(
      { collection: "projects", status: "published" },
      [
        "title",
        "description",
        "tags",
        "coverImage",
        "slug",
        "content",
      ]
    )
    .sort({ publishedAt: -1 })
    .first()

  return project
}

export default async function FeaturedProject() {
  const project = await getFeaturedProject()

  if (!project) return null

  const tags = Array.isArray(project.tags) ? project.tags : []
  const customRoutes: Record<string, string> = {
    "plaiatech-healthcare-platform": "/projects/plaiatech",
  }
  const href = customRoutes[project.slug] || `/projects/${project.slug}`

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-10 text-[var(--text-primary)]">
        Featured project
      </h2>

      <Link href={href}>
        <div className="group flex flex-col md:flex-row gap-8 p-6 md:p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--accent)] transition-colors duration-300">
          {/* Live Preview */}
          <div className="relative w-full md:w-1/2 h-64 md:h-80 flex-shrink-0">
            {/* Desktop/Tablet: overlapping layout */}
            <div className="hidden md:block relative w-full h-full">
              {/* Dashboard frame (behind, shifted right) */}
              <div className="absolute top-0 right-0 w-[75%] h-full rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] shadow-lg overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
                  <span className="w-2 h-2 rounded-full bg-red-400/60" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
                  <span className="w-2 h-2 rounded-full bg-green-400/60" />
                  <span className="ml-2 text-[8px] text-[var(--text-secondary)] bg-[var(--bg-primary)] rounded px-2 py-0.5 flex-1 max-w-[120px] truncate">app.plaiatech.com</span>
                </div>
                {/* Stats row */}
                <div className="flex gap-2 px-3 py-2">
                  <div className="flex-1 rounded bg-[var(--bg-secondary)] p-1.5">
                    <p className="text-[7px] text-[var(--text-secondary)]">Patients</p>
                    <p className="text-[11px] font-semibold text-[var(--text-primary)]">128</p>
                  </div>
                  <div className="flex-1 rounded bg-[var(--bg-secondary)] p-1.5">
                    <p className="text-[7px] text-[var(--text-secondary)]">Pending</p>
                    <p className="text-[11px] font-semibold text-[var(--accent)]">12</p>
                  </div>
                  <div className="flex-1 rounded bg-[var(--bg-secondary)] p-1.5">
                    <p className="text-[7px] text-[var(--text-secondary)]">Complete</p>
                    <p className="text-[11px] font-semibold text-green-500">94%</p>
                  </div>
                </div>
                {/* Patient rows */}
                <div className="px-3 space-y-1.5">
                  <div className="flex items-center justify-between rounded bg-[var(--bg-secondary)] px-2 py-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[6px] text-[var(--accent)] font-bold">M</div>
                      <span className="text-[8px] text-[var(--text-primary)]">María G.</span>
                    </div>
                    <span className="text-[7px] px-1.5 py-0.5 rounded-full bg-green-500/10 text-green-500">Complete</span>
                  </div>
                  <div className="flex items-center justify-between rounded bg-[var(--bg-secondary)] px-2 py-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[6px] text-[var(--accent)] font-bold">J</div>
                      <span className="text-[8px] text-[var(--text-primary)]">Juan P.</span>
                    </div>
                    <span className="text-[7px] px-1.5 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500">In Progress</span>
                  </div>
                  <div className="flex items-center justify-between rounded bg-[var(--bg-secondary)] px-2 py-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[6px] text-[var(--accent)] font-bold">A</div>
                      <span className="text-[8px] text-[var(--text-primary)]">Ana R.</span>
                    </div>
                    <span className="text-[7px] px-1.5 py-0.5 rounded-full bg-green-500/10 text-green-500">Complete</span>
                  </div>
                </div>
              </div>

              {/* Phone frame (in front, shifted left) */}
              <div className="absolute top-4 left-0 w-[42%] h-[90%] rounded-2xl border-2 border-[var(--border)] bg-[var(--bg-primary)] shadow-xl overflow-hidden z-10">
                {/* Phone status bar */}
                <div className="flex items-center justify-between px-3 py-1 bg-[var(--bg-secondary)]">
                  <span className="text-[7px] text-[var(--text-secondary)]">9:41</span>
                  <div className="flex gap-1">
                    <span className="text-[7px] text-[var(--text-secondary)]">●●●</span>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="px-3 pt-2 pb-1">
                  <div className="w-full h-1 rounded-full bg-[var(--bg-secondary)]">
                    <div className="w-2/3 h-1 rounded-full bg-[var(--accent)]" />
                  </div>
                  <p className="text-[7px] text-[var(--text-secondary)] mt-1">Question 4 of 6</p>
                </div>
                {/* Question */}
                <div className="px-3 py-2">
                  <p className="text-[9px] font-medium text-[var(--text-primary)] leading-tight">
                    Are you currently taking any blood thinners?
                  </p>
                </div>
                {/* Yes/No buttons */}
                <div className="flex gap-2 px-3">
                  <div className="flex-1 py-1.5 rounded-lg bg-[var(--accent)] text-center">
                    <span className="text-[8px] font-medium text-white">Yes</span>
                  </div>
                  <div className="flex-1 py-1.5 rounded-lg border border-[var(--border)] text-center">
                    <span className="text-[8px] font-medium text-[var(--text-primary)]">No</span>
                  </div>
                </div>
                {/* AI detection badge */}
                <div className="mx-3 mt-3 px-2 py-1.5 rounded-lg bg-[var(--accent)]/5 border border-[var(--accent)]/20">
                  <div className="flex items-center gap-1">
                    <svg className="w-2.5 h-2.5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
                    </svg>
                    <span className="text-[7px] text-[var(--accent)] font-medium">AI detected: Warfarin</span>
                  </div>
                  <p className="text-[6px] text-[var(--text-secondary)] mt-0.5">Blood thinner — flagged for anesthesia review</p>
                </div>
              </div>
            </div>

            {/* Mobile: stacked layout */}
            <div className="flex md:hidden flex-col gap-3 h-full">
              {/* Phone frame */}
              <div className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] shadow-md overflow-hidden">
                <div className="flex items-center justify-between px-3 py-1 bg-[var(--bg-secondary)]">
                  <span className="text-[8px] text-[var(--text-secondary)]">9:41</span>
                  <span className="text-[8px] text-[var(--text-secondary)]">●●●</span>
                </div>
                <div className="px-3 pt-2 pb-1">
                  <div className="w-full h-1 rounded-full bg-[var(--bg-secondary)]">
                    <div className="w-2/3 h-1 rounded-full bg-[var(--accent)]" />
                  </div>
                  <p className="text-[7px] text-[var(--text-secondary)] mt-1">Question 4 of 6</p>
                </div>
                <div className="px-3 py-1">
                  <p className="text-[9px] font-medium text-[var(--text-primary)]">Are you currently taking any blood thinners?</p>
                </div>
                <div className="flex gap-2 px-3 pb-2">
                  <div className="flex-1 py-1 rounded-lg bg-[var(--accent)] text-center">
                    <span className="text-[8px] font-medium text-white">Yes</span>
                  </div>
                  <div className="flex-1 py-1 rounded-lg border border-[var(--border)] text-center">
                    <span className="text-[8px] font-medium text-[var(--text-primary)]">No</span>
                  </div>
                </div>
              </div>
              {/* Dashboard frame */}
              <div className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] shadow-md overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
                  <span className="w-2 h-2 rounded-full bg-red-400/60" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
                  <span className="w-2 h-2 rounded-full bg-green-400/60" />
                  <span className="ml-2 text-[8px] text-[var(--text-secondary)] bg-[var(--bg-primary)] rounded px-2 py-0.5">app.plaiatech.com</span>
                </div>
                <div className="flex gap-2 px-3 py-1.5">
                  <div className="flex-1 rounded bg-[var(--bg-secondary)] p-1.5">
                    <p className="text-[7px] text-[var(--text-secondary)]">Patients</p>
                    <p className="text-[10px] font-semibold text-[var(--text-primary)]">128</p>
                  </div>
                  <div className="flex-1 rounded bg-[var(--bg-secondary)] p-1.5">
                    <p className="text-[7px] text-[var(--text-secondary)]">Pending</p>
                    <p className="text-[10px] font-semibold text-[var(--accent)]">12</p>
                  </div>
                  <div className="flex-1 rounded bg-[var(--bg-secondary)] p-1.5">
                    <p className="text-[7px] text-[var(--text-secondary)]">Complete</p>
                    <p className="text-[10px] font-semibold text-green-500">94%</p>
                  </div>
                </div>
                <div className="px-3 pb-2 space-y-1">
                  <div className="flex items-center justify-between rounded bg-[var(--bg-secondary)] px-2 py-1">
                    <span className="text-[8px] text-[var(--text-primary)]">María G.</span>
                    <span className="text-[7px] px-1.5 py-0.5 rounded-full bg-green-500/10 text-green-500">Complete</span>
                  </div>
                  <div className="flex items-center justify-between rounded bg-[var(--bg-secondary)] px-2 py-1">
                    <span className="text-[8px] text-[var(--text-primary)]">Juan P.</span>
                    <span className="text-[7px] px-1.5 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500">In Progress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center flex-1">
            <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-medium mb-2">
              Solo Developer &amp; Architect
            </p>
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--text-primary)] mb-4">
              {project.title}
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Patients complete their pre-surgery health assessment from their phone — AI
              detects medications, classifies airways, and generates the evaluation report.
              Doctors review everything from a multi-tenant dashboard.
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag: { label: string; value: string }, i: number) => (
                <Badge key={i} variant="secondary" size="sm">
                  {tag.label}
                </Badge>
              ))}
            </div>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] group-hover:gap-3 transition-all duration-200">
              View case study
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </section>
  )
}
