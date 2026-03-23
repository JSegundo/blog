import ContactCTA from "@/components/contact-cta"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description:
    "Segundo Juan — Product-minded fullstack engineer building products with React, Node.js, Python, and AWS.",
}

const experience = [
  {
    company: "Critical Techworks / BMW",
    role: "Node.js Developer",
    location: "Porto, Portugal",
    period: "May 2024 – Dec 2025",
    description:
      "Built and maintained the Spotify integration for BMW's in-car entertainment system. Worked with TypeScript, event-driven architecture, and distributed systems. Troubleshot production incidents reported by drivers worldwide.",
  },
  {
    company: "Ourworld Meta",
    role: "Frontend Developer",
    location: "Remote, Spain",
    period: "Mar 2023 – Dec 2023",
    description:
      "Led UX/UI improvements on a metaverse platform using React, TypeScript, and Redux.",
  },
  {
    company: "Ceibo Digital",
    role: "Full Stack Developer",
    location: "Remote, Argentina",
    period: "Jul 2022 – Mar 2023",
    description:
      "Built Next.js frontends from Figma designs, including the company website. Developed a Node.js email automation system for an agro client's sales process.",
  },
]

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "FastAPI", "REST APIs"],
  },
  {
    category: "Data & Messaging",
    items: ["DynamoDB", "pgvector", "RabbitMQ"],
  },
  {
    category: "Cloud & Infra",
    items: ["AWS (S3, Lambda, CloudFront)", "Serverless", "Vercel", "CI/CD"],
  },
  {
    category: "Tools",
    items: ["Claude", "Cursor", "Git", "Figma"],
  },
]

export default function AboutPage() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Bio */}
        <section className="mb-20">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-8 text-[var(--text-primary)]">
            About
          </h1>
          <div className="space-y-4 text-[var(--text-secondary)] text-lg leading-relaxed">
            <p>
              I&apos;m Segundo, software engineer from Argentina. React, Node.js,
              AWS — full stack.
            </p>
            <p>
              Building a benefits and employee administration platform for
              insurance brokers. Before that I built Plaiatech — a
              digital intake system that replaces in-person pre-anesthesia
              visits — working directly with doctors to get the clinical
              workflows right. I also build my own stuff. Currently into
              AI-powered products and product discovery — the messy part before
              writing code.
            </p>
            <p>
              I use Claude daily and I think a lot about how AI changes the way
              we build software. I write about that sometimes.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-8 text-[var(--text-primary)]">
            Past Experience
          </h2>
          <div className="space-y-10">
            {experience.map((job) => (
              <div key={job.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 mb-1">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {job.company}
                  </h3>
                  <span className="text-sm text-[var(--text-secondary)]">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm text-[var(--accent)] mb-3">
                  {job.role} · {job.location}
                </p>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills/Stack */}
        <section className="mb-20">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-8 text-[var(--text-primary)]">
            Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((group) => (
              <div
                key={group.category}
                className="p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)]"
              >
                <h3 className="text-sm uppercase tracking-widest text-[var(--accent)] font-medium mb-3">
                  {group.category}
                </h3>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-[var(--text-secondary)] text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      <ContactCTA />
    </>
  )
}
