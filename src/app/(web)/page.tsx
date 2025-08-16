import ContentGrid from "@/components/content-grid"
import ContentRow from "@/components/content-rows"
import markdownToHtml from "@/lib/markdownToHtml"
import { load } from "outstatic/server"
import Link from "next/link"
import ProjectsGrid from "@/components/projects-grid"

export default async function Index() {
  const { content, allPosts, otherCollections } = await getData()

  return (
    <>
      <section className="mb-8 justify-center flex">
        <div
          className="home-title prose lg:prose-xl home-intro prose-outstatic"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </section>
      
      {/* Career Chat Button Section */}
      <section className="flex justify-center mb-16">
        <div className="text-center">
          <Link
            href="/career-chat"
            className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg hover:scale-105 transition-all duration-300 ease-out group"
          >
            <span className="text-xl">💬</span>
            <span>Chat with AI Career Assistant</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <p className="mt-6 text-gray-400 text-base max-w-lg mx-auto">
            Ask about my experience, skills, or get help contacting me directly
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsGrid />

      {allPosts.length > 0 && (
        <ContentRow
          title="Notes and half-baked explorations"
          items={allPosts}
          collection="posts"
          priority
        />
      )}
      {/* {Object.keys(otherCollections).map((collection) => {
        if (!collection.length) return null
        return (
          <ContentGrid
            key={collection}
            title={collection}
            items={otherCollections[collection]}
            collection={collection}
            viewAll
          />
        )
      })} */}
    </>
  )
}

async function getData() {
  const db = await load()

  // get content for the homepage
  const page = await db
    .find({ collection: "pages", slug: "home" }, ["content"])
    .first()

  // convert markdown to html
  const content = await markdownToHtml(page.content)

  // get all posts. Example of fetching a specific collection
  const allPosts = await db
    .find({ collection: "posts", status: "published" }, [
      "title",
      "publishedAt",
      "slug",
      "coverImage",
      "description",
      "tags",
    ])
    .sort({ publishedAt: -1 })
    // .limit(3)
    .toArray()

  // get remaining collections
  const collections = await db
    .find(
      {
        // $nor is an operator that means "not or"
        $nor: [{ collection: "posts" }, { collection: "pages" }],
        status: "published",
      },
      [
        "collection",
        "title",
        "publishedAt",
        "slug",
        "coverImage",
        "description",
      ]
    )
    .sort({ publishedAt: -1 })
    // .limit(3)
    .toArray()

  // group remaining collections by collection
  const otherCollections = collections.reduce<{
    [key: string]: (typeof collections)[0][]
  }>((acc, item) => {
    if (!acc[item.collection]) {
      acc[item.collection] = []
    }

    acc[item.collection].push(item)

    return acc
  }, {})

  return {
    content,
    allPosts,
    otherCollections,
  }
}
