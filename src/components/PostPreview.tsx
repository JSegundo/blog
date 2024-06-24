import React from "react"
import { Item } from "./content-grid"
import Link from "next/link"
import Image from "next/image"
import { readFile } from "fs/promises"
import matter from "gray-matter"

interface Props {
  item: Item
  collection: string
}
export async function PostPreview({ item, collection }: Props) {
  console.log(item)
  const fileContent = await readFile(
    "./outstatic/content/posts/" + item.slug + ".md",
    "utf8"
  )
  const { data, content } = matter(fileContent)
  const wordCount = content.split(" ").filter(Boolean).length
  console.log(wordCount)
  return (
    <Link key={item.slug} href={`/${collection}/${item.slug}`}>
      <div className="cursor-pointer border rounded-md md:w-full scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100 hover:shadow overflow-hidden h-full">
        <Image
          src={item.coverImage || `/api/og?title=${item.title}`}
          alt="cover image"
          className="border-b w-full md:h-[180px] object-cover object-center"
          width={430}
          height={180}
          // layout="fill"
          sizes="(min-width: 768px) 347px, 192px"
          //   priority={priority && id <= 2}
        />
        <div className="p-4">
          {Array.isArray(item?.tags)
            ? item.tags.map(({ label }) => (
                <span
                  key={label}
                  className="inline-block bg-gray-200 rounded-full px-2 py-0 text-sm font-semibold text-gray-700 mr-2 mb-4"
                >
                  {label}
                </span>
              ))
            : null}
          <h3 className="text-xl mb-2 leading-snug font-bold hover:underline">
            {item.title}
          </h3>
          <div className="text-md mb-4 text-slate-700"></div>
          <p className="text-md leading-relaxed mb-4">{item.description}</p>
        </div>
      </div>
    </Link>
  )
}

export default PostPreview
