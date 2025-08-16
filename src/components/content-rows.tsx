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
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight leading-tight text-white">
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
      <div className="grid max-w-fit sm:gap-x-6 lg:gap-x-8 gap-y-5 sm:gap-y-6 lg:gap-y-8 mt-8 md:mt-8 lg:mt-10">
        {items.map((item, id) => (
          <Link key={item.slug} href={`/${collection}/${item.slug}`}>
            <div className="p-6 cursor-pointer md:w-full transition-all duration-300 ease-out border border-[var(--border)] rounded-xl overflow-hidden h-full bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)] hover:border-[var(--accent)] hover:shadow-lg">
              <h3 className="text-base mb-3 font-semibold leading-snug text-white transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-4 transition-colors duration-300">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(item?.tags)
                  ? item.tags.map(({ label }, index) => (
                      <Badge key={index} variant="tag" size="sm">
                        {label}
                      </Badge>
                    ))
                  : null}
              </div>
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
