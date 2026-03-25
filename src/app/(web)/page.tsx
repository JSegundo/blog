import ContactCTA from "@/components/contact-cta"
import ContentRow from "@/components/content-rows"
import ExperienceTimeline from "@/components/experience-timeline"
import FeaturedProject from "@/components/featured-project"
import Hero from "@/components/hero"
import ScrollReveal from "@/components/scroll-reveal"
import Link from "next/link"
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
          {recentPosts.length === 1 ? (
            <section className="max-w-3xl mx-auto px-6 py-16">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--text-primary)] mb-6">
                Latest writing
              </h2>
              <Link
                href={`/posts/${recentPosts[0].slug}`}
                className="block p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--border-light)] transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {recentPosts[0].title}
                </h3>
                {recentPosts[0].description && (
                  <p className="text-sm text-[var(--text-secondary)] mb-0">
                    {recentPosts[0].description}
                  </p>
                )}
              </Link>
            </section>
          ) : (
            <div className="max-w-5xl mx-auto px-6">
              <ContentRow
                title="Some ideas"
                items={recentPosts}
                collection="posts"
                priority
              />
            </div>
          )}
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
