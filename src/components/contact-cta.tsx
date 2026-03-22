import Link from "next/link"

export default function ContactCTA() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-4">
        Let&apos;s talk
      </h2>
      <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-lg mx-auto">
        Have a project in mind or just want to chat? Reach out.
      </p>
      <Link
        href="mailto:segundojuanok@gmail.com"
        className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors duration-200 shadow-sm"
      >
        Get in touch
      </Link>
    </section>
  )
}
