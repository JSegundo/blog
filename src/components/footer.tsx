import { GithubIcon, LinkedinIcon } from "lucide-react"
import Link from "next/link"
import { LighthouseBadge } from "./lighthouse-badge"

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)] mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Accent divider */}
        <div className="w-12 h-0.5 bg-[var(--accent)] mb-8" />

        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Left: Identity */}
          <div>
            <p className="font-heading text-lg font-semibold text-[var(--text-primary)]">
              Segundo Juan
            </p>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Product-minded software engineer
            </p>
          </div>

          {/* Center: Nav links */}
          <nav className="flex gap-6">
            <Link
              href="/about"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              Blog
            </Link>
          </nav>

          {/* Right: Contact + socials */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <Link
              href="mailto:segundojuanok@gmail.com"
              className="text-sm text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors duration-200"
            >
              segundojuanok@gmail.com
            </Link>
            <div className="flex items-center gap-4">
              <Link
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                href="https://github.com/jsegundo"
                target="_blank"
              >
                <GithubIcon className="h-5 w-5" aria-label="Github" />
              </Link>
              <Link
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                href="https://linkedin.com/in/segundojuan"
                target="_blank"
              >
                <LinkedinIcon className="h-5 w-5" aria-label="LinkedIn" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--text-muted)] mb-0">
            &copy; {new Date().getFullYear()} Segundo Juan
          </p>
          <LighthouseBadge />
        </div>
      </div>
    </footer>
  )
}

export default Footer
