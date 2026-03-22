import ContactCTA from "@/components/contact-cta"
import ContentRow from "@/components/content-rows"
import ExperienceTimeline from "@/components/experience-timeline"
import FeaturedProject from "@/components/featured-project"
import Hero from "@/components/hero"
import ScrollReveal from "@/components/scroll-reveal"
import { load } from "outstatic/server"

export default async function Index() {
  const recentPosts = await getRecentPosts()

  return (
    <>
      <Hero />
      <ScrollReveal>
        <FeaturedProject />
      </ScrollReveal>
      <ScrollReveal>
        <ExperienceTimeline />
      </ScrollReveal>
      {recentPosts.length > 0 && (
        <ScrollReveal>
          <div className="max-w-5xl mx-auto px-6">
            <ContentRow
              title="Some ideas"
              items={recentPosts}
              collection="posts"
              priority
            />
          </div>
        </ScrollReveal>
      )}
      <ScrollReveal>
        <ContactCTA />
      </ScrollReveal>
    </>
  )
}

async function getRecentPosts() {
  const db = await load()

  const posts = await db
    .find(
      { collection: "posts", status: "published" },
      [
        "title",
        "publishedAt",
        "slug",
        "coverImage",
        "description",
        "tags",
      ]
    )
    .sort({ publishedAt: -1 })
    .limit(3)
    .toArray()

  return posts
}
