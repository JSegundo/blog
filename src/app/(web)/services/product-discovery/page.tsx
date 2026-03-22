import ContactCTA from "@/components/contact-cta"
import { Badge } from "@/components/ui/badge"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Product Discovery",
  description:
    "A structured engagement that turns your idea into validated decisions. Assumption mapping, user research, experiment design, and a clear go/no-go recommendation.",
}

const deliverables = [
  "Validated problem statement",
  "Assumption map (ranked by impact x uncertainty)",
  "Interview insights (8-12 Mom Test interviews)",
  "Experiment results with success metrics",
  "Opportunity solution tree",
  "Prioritized feature backlog",
  "Technical feasibility assessment",
  "Go/no-go recommendation with quantified criteria",
]

const timeline = [
  {
    week: "Week 1",
    title: "Interviews + Landing Page",
    description:
      "Run 4-5 interviews from your target audience. Build a landing page with pricing tiers to test willingness to pay. Share in relevant communities.",
  },
  {
    week: "Week 2",
    title: "Expand + Experiment",
    description:
      "Run 3-4 more interviews expanding reach. Recruit users for Wizard of Oz tests. Record prototype preference videos for key architecture decisions.",
  },
  {
    week: "Week 3",
    title: "Analyze + Synthesize",
    description:
      "Complete remaining interviews (8-12 total). Deliver experiment results. Compile all data: interview logs, landing page metrics, satisfaction scores.",
  },
  {
    week: "Week 4",
    title: "Decide + Deliver",
    description:
      "Go/no-go decisions with quantified criteria. Define MVP scope based on discovery findings. Clear recommendation on what to build, how to price it, and where to start.",
  },
]

const audiences = [
  {
    title: "Founders with an idea",
    description:
      "You have a concept but haven't validated whether people will pay for it. Discovery tells you before you spend months building.",
  },
  {
    title: "Teams considering a new product",
    description:
      "Your company wants to expand into a new area. Discovery reduces the risk of committing engineering resources to the wrong thing.",
  },
  {
    title: "Anyone before committing dev budget",
    description:
      "If you're about to spend $50K+ on development, spending a fraction on discovery first is the highest-ROI decision you can make.",
  },
]

export default function ProductDiscoveryPage() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-6 pt-16 md:pt-24">
        {/* ─── Breadcrumb + Hero ─── */}
        <section className="mb-20">
          <p className="text-sm text-[var(--text-secondary)] mb-6">
            <Link
              href="/services"
              className="hover:text-[var(--accent)] transition-colors duration-200"
            >
              Services
            </Link>
            {" / "}
            Product Discovery
          </p>
          <div className="flex items-center gap-3 mb-4">
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
              Product Discovery
            </h1>
            <Badge variant="outline" size="sm">
              Standalone engagement
            </Badge>
          </div>
          <p className="text-[var(--text-secondary)] text-xl md:text-2xl leading-relaxed">
            Before writing a line of code, know what to build and why. A
            structured engagement that turns your idea into validated decisions.
          </p>
        </section>

        {/* ─── The Problem ─── */}
        <section className="mb-20">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6 text-[var(--text-primary)]">
            What happens when you skip discovery
          </h2>
          <div className="border-l-2 border-[var(--accent)] pl-5 space-y-5 text-[var(--text-secondary)] text-lg leading-relaxed">
            <p>
              You build for three months, launch, and nobody signs up. Not
              because the engineering was bad — because the problem
              wasn&apos;t validated. The features you prioritized weren&apos;t
              the ones users actually needed.
            </p>
            <p>
              Or you discover a deal-breaker halfway through development — a
              regulatory constraint, a pricing model that doesn&apos;t work, a
              technical limitation that changes everything. By then you&apos;ve
              already burned budget and momentum.
            </p>
            <p>
              Discovery exists to surface these risks before they become
              expensive. It&apos;s cheaper to kill a bad idea in week two than
              in month six.
            </p>
          </div>
        </section>

        {/* ─── How It Works ─── */}
        <section className="mb-20">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6 text-[var(--text-primary)]">
            How it works
          </h2>
          <div className="space-y-8">
            <div className="border-l-2 border-[var(--accent)] pl-5">
              <p className="text-sm font-medium text-[var(--accent)] mb-2 uppercase tracking-wide">
                Step 1
              </p>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                Assumption Mapping
              </h3>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                Identify risks across four dimensions: value (does anyone
                care?), usability (can they use it?), viability (can it be a
                business?), and feasibility (can you build it?). Rank each
                assumption by impact x uncertainty to know what to test first.
              </p>
            </div>
            <div className="border-l-2 border-[var(--accent)] pl-5">
              <p className="text-sm font-medium text-[var(--accent)] mb-2 uppercase tracking-wide">
                Step 2
              </p>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                User Research
              </h3>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                Mom Test interviews (8-12), not surveys. Real behavior, not
                hypothetical preferences. We talk to your target users about
                their actual workflows, pain points, and existing workarounds —
                without pitching or leading.
              </p>
            </div>
            <div className="border-l-2 border-[var(--accent)] pl-5">
              <p className="text-sm font-medium text-[var(--accent)] mb-2 uppercase tracking-wide">
                Step 3
              </p>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                Experiment Design
              </h3>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                Landing page tests, Wizard of Oz tests, prototype preference
                tests. Each experiment has a clear hypothesis and a
                quantified success metric — no gut feelings, no
                &quot;seems promising.&quot;
              </p>
            </div>
            <div className="border-l-2 border-[var(--accent)] pl-5">
              <p className="text-sm font-medium text-[var(--accent)] mb-2 uppercase tracking-wide">
                Step 4
              </p>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                Synthesis &amp; Decision
              </h3>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                A go/no-go recommendation with quantified criteria.
                Green/yellow/red per assumption. You get a clear answer: build
                this, pivot to that, or don&apos;t build at all — backed by
                data, not opinion.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Deliverables ─── */}
        <section className="mb-20">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6 text-[var(--text-primary)]">
            What you get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] p-5"
              >
                <p className="text-[var(--text-secondary)] text-sm">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Timeline ─── */}
        <section className="mb-20">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4 text-[var(--text-primary)]">
            Timeline
          </h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
            A typical engagement runs 3-4 weeks.
          </p>
          <div className="space-y-8">
            {timeline.map((item) => (
              <div key={item.week} className="border-l-2 border-[var(--accent)] pl-5">
                <p className="text-sm font-medium text-[var(--accent)] mb-2 uppercase tracking-wide">
                  {item.week}
                </p>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[var(--text-secondary)] text-base leading-relaxed mt-8">
            The timeline flexes based on your context — industry, audience
            accessibility, and how quickly we can run experiments.
          </p>
        </section>

        {/* ─── Who This Is For ─── */}
        <section className="mb-20">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6 text-[var(--text-primary)]">
            Who this is for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {audiences.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] p-5"
              >
                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <ContactCTA />
    </>
  )
}
