import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Ambient glow — positioned relative to viewport, not container */}
      <div className="pointer-events-none absolute top-0 -right-[30vw] md:-right-[15vw] w-[500px] h-[500px]">
        <div className="absolute inset-0 rounded-full bg-[var(--accent)] opacity-[0.05] blur-[120px]" />
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--accent)]/15 animate-pulse-ring"
            style={{
              width: `${80 + i * 72}px`,
              height: `${80 + i * 72}px`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[var(--accent)]"
          style={{ boxShadow: '0 0 10px 2px rgba(84,113,176,0.35), 0 0 28px 6px rgba(84,113,176,0.1)' }}
        />
      </div>
      <p
        className="hero-entrance text-sm text-[var(--text-secondary)] tracking-wide mb-4"
        style={{ "--hero-delay": "0ms" } as React.CSSProperties}
      >
        Segundo Juan
      </p>

      {/* Previous hero text:
      <h1>I ship MVPs and take them to production.</h1>
      <p>Software engineer. I get into the details, talk to the people with the problem, and build from there.</p>
      <p>React · Node.js · AWS</p>
      */}

      <h1
        className="hero-entrance font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-[var(--text-primary)]"
        style={{ "--hero-delay": "50ms" } as React.CSSProperties}
      >
        Fullstack engineer
      </h1>

      <p
        className="hero-entrance text-sm text-[var(--text-secondary)] tracking-wide mb-10"
        style={{ "--hero-delay": "150ms" } as React.CSSProperties}
      >
        React · Node.js · AWS
      </p>

      <div
        className="hero-entrance flex flex-wrap gap-4"
        style={{ "--hero-delay": "300ms" } as React.CSSProperties}
      >
        <Link
          href="#projects"
          className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors duration-200 shadow-sm"
        >
          View my work
        </Link>
        <Link
          href="mailto:segundojuanok@gmail.com"
          className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200"
        >
          Get in touch
        </Link>
      </div>
    </section>
  )
}
