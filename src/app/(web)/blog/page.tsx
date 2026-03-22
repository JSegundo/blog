import ContentRow from "@/components/content-rows"
import { Metadata } from "next"
import { load } from "outstatic/server"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing about software engineering, AI tools, Node.js, AWS, and building products.",
}

async function getAllPosts() {
  const db = await load()

  const posts = await db
    .find(
      { collection: "posts", status: "published" },
      ["title", "publishedAt", "slug", "coverImage", "description", "tags"]
    )
    .sort({ publishedAt: -1 })
    .toArray()

  return posts
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-4 text-[var(--text-primary)]">
        Blog
      </h1>
      <p className="text-lg text-[var(--text-secondary)] mb-12">
        Thoughts on software engineering, AI tools, and building products.
      </p>

      {posts.length > 0 ? (
        <ContentRow
          title=""
          items={posts}
          collection="posts"
          priority
        />
      ) : (
        <p className="text-[var(--text-secondary)]">No posts yet.</p>
      )}
    </div>
  )
}
