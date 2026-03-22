import Link from "next/link"

const experience = [
  {
    company: "Critical Techworks / BMW",
    role: "Node.js Developer",
    period: "2024 – 2025",
  },
  {
    company: "Ourworld Meta",
    role: "Frontend Developer",
    period: "2023",
  },
  {
    company: "Ceibo Digital",
    role: "Full Stack Developer",
    period: "2022 – 2023",
  },
]

export default function ExperienceTimeline() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
          Where I&apos;ve worked
        </h2>
        <Link
          href="/about"
          className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
        >
          More about me
        </Link>
      </div>
      <div className="relative border-l border-[var(--border)] pl-6 space-y-6">
        {experience.map((job) => (
          <div key={job.company} className="relative">
            <div className="absolute -left-[25px] top-1.5 w-2 h-2 rounded-full bg-[var(--accent)]" />
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                {job.company}
              </h3>
              <span className="text-sm text-[var(--text-muted)]">
                {job.period}
              </span>
            </div>
            <p className="text-sm text-[var(--accent)] mt-0.5">{job.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
