import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { OstDocument } from "outstatic"
import PostPreview from "./PostPreview"
import { Badge } from "./ui/badge"

export type Item = {
  tags?: { value: string; label: string }[]
} & OstDocument

type Props = {
  collection: string
  title?: string
  items: Item[]
  priority?: boolean
  viewAll?: boolean
}

const ContentRow = ({
  title = "More",
  items,
  collection,
  priority = false,
  viewAll = false,
}: Props) => {
  return (
    <section id={collection} className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex gap-4 md:gap-6 items-end">
        <h2 className="text-lg md:text-xl font-medium tracking-tight leading-tight text-[var(--text-secondary)]">
          {title}
        </h2>
        {viewAll ? (
          <Button asChild variant="outline" className="hidden md:flex">
            <Link href={`/${collection}`} className="gap-2">
              View all <ArrowRight size={16} />
            </Link>
          </Button>
        ) : null}
      </div>
      <div className="grid gap-y-2 mt-4">
        {items.map((item, id) => (
          <Link key={item.slug} href={`/${collection}/${item.slug}`}>
            <div
              className="reveal-stagger-item px-4 py-3 cursor-pointer md:w-full transition-colors duration-200 rounded-lg hover:bg-[var(--bg-secondary)]"
              style={{ "--stagger-delay": `${id * 80}ms` } as React.CSSProperties}
            >
              <h3 className="text-sm font-medium leading-snug text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-[var(--text-muted)] mt-1 line-clamp-1">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {viewAll ? (
        <Button asChild variant="secondary" className="md:hidden w-full mt-4">
          <Link href={`/${collection}`} className="gap-2">
            View all {title}
            <ArrowRight size={16} />
          </Link>
        </Button>
      ) : null}
    </section>
  )
}

export default ContentRow
