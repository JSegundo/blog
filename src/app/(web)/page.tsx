import ContentGrid from "@/components/content-grid"
import ContentRow from "@/components/content-rows"
import markdownToHtml from "@/lib/markdownToHtml"
import { load } from "outstatic/server"

export default async function Index() {
  const { content, allPosts, otherCollections } = await getData()

  return (
    <>
      <section className="mb-1 justify-center flex">
        {/* <section className="mb-1 md:min-h-[calc(100vh-256px)] items-center flex"> */}
        <div
          className="home-title prose lg:prose-xl home-intro prose-outstatic"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </section>
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
