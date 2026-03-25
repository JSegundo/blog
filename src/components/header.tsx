import Link from "next/link"
import { MobileMenu } from "./mobile-menu"

const navLinks = [
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Projects", href: "/projects" },
  // { title: "Blog", href: "/blog" },
]

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-20 border-b border-[var(--border)] backdrop-blur-md bg-[var(--bg-primary)]/80">
      <nav className="max-w-5xl mx-auto w-full flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-heading font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-200"
        >
          Segundo Juan
        </Link>
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ title, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 font-medium text-sm"
              >
                {title}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#contact"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors duration-200"
            >
              Get in touch
            </Link>
          </li>
        </ul>
        <MobileMenu />
      </nav>
    </header>
  )
}

export default Header
