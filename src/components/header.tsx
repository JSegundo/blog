import Link from "next/link"
import { getCollections, load } from "outstatic/server"
import { MobileMenu } from "./mobile-menu"
import { ThemeToggle } from "./theme-toggle"
import { buttonVariants } from "./ui/button"

export type MenuProps = {
  pages: {
    title: string
    slug: string
  }[]
  collections: string[]
}

const Header = async () => {
  const data = await getData()
  const { pages, collections } = data

  return (
    <header className="py-6 fixed bottom-0 border-t border-[#262626] md:bottom-auto md:top-0 w-full z-20 bg-[#0a0a0a] transition-all duration-200">
      <nav className="max-w-4xl mx-auto w-full flex items-center justify-between px-8">
        <Link
          href="/"
          className="text-xl font-medium text-white hover:text-gray-300 transition-all duration-200 hover:scale-105"
        >
         🔵 Segundo Juan
        </Link>
        <ul className="hidden md:flex items-center space-x-8">
          {pages.map(({ title, slug }) => (
            <li key={slug}>
              <Link
                href={`/${slug}`}
                className="text-gray-300 hover:text-white transition-all duration-200 font-medium hover:scale-105"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <MobileMenu pages={pages} collections={collections} />
      </nav>
    </header>
  )
}

async function getData() {
  const db = await load()

  // get all pages
  const pages = await db
    .find(
      {
        collection: "pages",
        slug: { $nin: ["home"] },
        status: "published",
      },
      ["title", "slug"]
    )
    .toArray()

  const collections = getCollections().filter(
    (collection) => collection !== "pages"
  )

  return {
    pages,
    collections,
  } as MenuProps
}

export default Header
