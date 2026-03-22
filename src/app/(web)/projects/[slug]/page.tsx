import DocHero from "@/components/doc-hero"
import MDXComponent from "@/components/mdx/mdx-component"
import MDXServer from "@/lib/mdx-server"
import { absoluteUrl, ogUrl } from "@/lib/utils"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { OstDocument } from "outstatic"
import { getDocumentSlugs, load } from "outstatic/server"

type Project = {
  tags: { value: string; label: string }[]
} & OstDocument

interface Params {
  params: {
    slug: string
  }
}

export async function generateMetadata(params: Params): Promise<Metadata> {
  const project = await getData(params)

  if (!project) return {}

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: absoluteUrl(`/projects/${project.slug}`),
      images: [
        {
          url: ogUrl(
            project?.coverImage || `/api/og?title=${project.title}`
          ),
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

export default async function ProjectPage(params: Params) {
  const project = await getData(params)

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <article className="mb-32">
        <DocHero {...project} />
        <div className="max-w-2xl mx-auto">
          <div className="prose prose-outstatic">
            <MDXComponent content={project.content} />
          </div>
        </div>
      </article>
    </div>
  )
}

async function getData({ params }: Params) {
  const db = await load()

  const project = await db
    .find<Project>(
      { collection: "projects", slug: params.slug },
      [
        "title",
        "publishedAt",
        "description",
        "slug",
        "author",
        "content",
        "coverImage",
        "tags",
      ]
    )
    .first()

  if (!project) {
    notFound()
  }

  const content = await MDXServer(project.content)

  return {
    ...project,
    content,
  }
}

export async function generateStaticParams() {
  const slugs = getDocumentSlugs("projects")
  return slugs.map((slug) => ({ slug }))
}
