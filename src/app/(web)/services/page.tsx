import ContactCTA from "@/components/contact-cta"
import { Badge } from "@/components/ui/badge"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Product discovery, MVP development, and fullstack engineering — from validating the idea to shipping production code.",
}

const discoveryDeliverables = [
  "Validated problem statement",
  "Opportunity solution tree",
  "Prioritized feature backlog",
  "Technical feasibility assessment",
]

const mvpStack = ["Next.js", "Node.js", "AWS", "Serverless"]

export default function ServicesPage() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Hero */}
        <section className="mb-20">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-8 text-[var(--text-primary)]">
            Services
          </h1>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            I work across the full product lifecycle — from validating what to
            build to shipping production code. Whether you need clarity on your
            next move or hands-on development, here&apos;s how I can help.
          </p>
        </section>

        {/* Product Discovery */}
        <section className="mb-20">
          <div className="border-l-2 border-[var(--accent)] pl-6">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
                Product Discovery
              </h2>
              <Badge variant="outline" size="sm">
                Start here
              </Badge>
            </div>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Before writing code, validate what to build. A structured
                discovery engagement that delivers a clear roadmap — user
                research, assumption mapping, experiment design, and a
                prioritized backlog.
              </p>
              <p>
                This is a standalone paid engagement. If you want to continue
                into development afterward, the discovery output becomes the
                foundation — but there&apos;s no obligation.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-sm uppercase tracking-widest text-[var(--accent)] font-medium mb-3">
                What you get
              </h3>
              <ul className="space-y-2">
                {discoveryDeliverables.map((item) => (
                  <li
                    key={item}
                    className="text-[var(--text-secondary)] text-sm flex items-start gap-2"
                  >
                    <span className="text-[var(--accent)] mt-0.5">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="mt-8">
              <Link
                href="/services/product-discovery"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors duration-200 shadow-sm"
              >
                Learn more
              </Link>
            </div> */}
          </div>
        </section>

        {/* MVP Development */}
        <section className="mb-20">
          <div className="border-l-2 border-[var(--accent)] pl-6">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4 text-[var(--text-primary)]">
              MVP Development
            </h2>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Go from validated idea to working product. Focused builds scoped
                to prove the core value proposition — real users, real feedback,
                no feature bloat.
              </p>
              <p>
                I built{" "}
                <Link
                  href="/projects/plaiatech"
                  className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors duration-200 underline underline-offset-2"
                >
                  Plaiatech
                </Link>{" "}
                this way — a digital intake system for pre-anesthesia visits,
                taken from discovery through to a working product used by
                doctors.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {mvpStack.map((tech) => (
                <Badge key={tech} variant="tag" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="mailto:segundojuanok@gmail.com"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors duration-200 shadow-sm"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>

        {/* Fullstack Development */}
        <section className="mb-20">
          <div className="border-l-2 border-[var(--accent)] pl-6">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4 text-[var(--text-primary)]">
              Fullstack Development
            </h2>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Ongoing development for existing products. New features,
                integrations, performance improvements, and infrastructure work.
              </p>
              <p>
                In practice, this looks like embedding with your team — picking
                up tickets, shipping code, and contributing to architecture
                decisions. I work best when I understand the product and the
                users, not just the codebase.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="mailto:segundojuanok@gmail.com"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors duration-200 shadow-sm"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </div>

      <ContactCTA />
    </>
  )
}
