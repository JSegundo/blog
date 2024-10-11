import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { OstDocument } from "outstatic"
import PostPreview from "./PostPreview"

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
  // const ContentRow = ({
  title = "More",
  items,
  collection,
  priority = false,
  viewAll = false,
}: Props) => {
  return (
    <section id={collection} className="pt-24 mb-24">
      <div className="flex gap-4 md:gap-6 items-end">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-tight capitalize">
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
      <div className="grid  sm:gap-x-6 lg:gap-x-8 gap-y-5 sm:gap-y-6 lg:gap-y-8 mt-8 md:mt-8 lg:mt-20">
        {items.map((item, id) => (
          <Link key={item.slug} href={`/${collection}/${item.slug}`}>
            <div className="cursor-pointer  md:w-full scale-100 hover:scale-[1.01] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100 hover:shadow overflow-hidden h-full">
              <h3 className="text-xl mb-2 leading-snug font-bold hover:underline">
                {item.title}
              </h3>

              <p className="text-md leading-relaxed text-slate-400 mb-4">
                {item.description}
              </p>
              {Array.isArray(item?.tags)
                ? item.tags.map(({ label }) => (
                    <span
                      key={label}
                      className="inline-block bg-gray-700  px-2 py-0 text-sm font-semibold text-gray-200 mr-2 mb-4"
                    >
                      {label}
                    </span>
                  ))
                : null}
            </div>
            {/* </div> */}
            {id < items.length - 1 && <hr></hr>}
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