import Link from "next/link"
import { Badge } from "./ui/badge"
import Image from "next/image"
import { load } from "outstatic/server"

type Project = {
  title: string
  description: string
  tags?: { value: string; label: string }[]
  externalLink?: string
  status: 'completed' | 'in-progress' | 'planned'
  coverImage?: string
  slug: string
  featured?: boolean
}

async function getProjects(): Promise<Project[]> {
  const db = await load()
  
  const projects = await db
    .find({ collection: "projects", status: "published" }, [
      "title",
      "description",
      "tags",
      "externalLink",
      "status",
      "coverImage",
      "slug",
      "featured"
    ])
    .sort({ publishedAt: -1 })
    .toArray()

  // Transform and filter projects to ensure they have required fields
  return projects
    .filter(project => project.title && project.description)
    .map(project => ({
      title: project.title || '',
      description: project.description || '',
      tags: Array.isArray(project.tags) ? project.tags : [],
      externalLink: project.externalLink as string | undefined,
      status: project.status as 'completed' | 'in-progress' | 'planned',
      coverImage: project.coverImage,
      slug: project.slug || '',
      featured: project.featured as boolean | undefined
    }))
}

const getStatusColor = (status: Project['status']) => {
  switch (status) {
    case 'completed':
      return 'text-green-400'
    case 'in-progress':
      return 'text-yellow-400'
    case 'planned':
      return 'text-gray-400'
    default:
      return 'text-gray-400'
  }
}

// const getStatusText = (status: Project['status']) => {
//   switch (status) {
//     case 'completed':
//       return '✓ Completed'
//     case 'in-progress':
//       return '🔄 In Progress'
//     case 'planned':
//       return '📋 Planned'
//     default:
//       return '📋 Planned'
//   }
// }

// Style 1: Image on top, content below (Classic Card)
const ClassicCard = ({ project, index }: { project: Project; index: number }) => (
  <div className="p-0 border border-[var(--border)] rounded-xl transition-all duration-500 ease-out overflow-hidden bg-[var(--bg-secondary)] cursor-pointer hover:bg-[var(--bg-secondary)] hover:border-[var(--accent)] hover:shadow-lg project-card">
    {project.coverImage ? (
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover project-image shadow-lg"
        />
        {/* <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-md bg-[var(--bg-primary)]/80 backdrop-blur-sm ${getStatusColor(project.status)}`}>
            {getStatusText(project.status)}
          </span>
        </div> */}
      </div>
    ) : (
      <div className="h-48 w-full bg-[var(--bg-tertiary)] flex items-center justify-center">
        <span className="text-[var(--text-muted)] text-sm">No image</span>
      </div>
    )}
    <div className="p-6">
      <h3 className="text-lg font-semibold text-white mb-3">
        {project.title}
      </h3>
      <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags?.map((tag, tagIndex) => (
          <Badge key={tagIndex} variant="tag" size="sm">
            {tag.label}
          </Badge>
        ))}
      </div>
    </div>
  </div>
)

export default async function ProjectsGrid() {
  const projects = await getProjects()

  if (projects.length === 0) {
    return (
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Projects
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            No projects published yet. Check back soon!
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-white">
          Projects
        </h2>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          A collection of my work and experiments
        </p>
      </div>

      {/* Classic Cards Grid */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Link key={project.slug} href={project.externalLink || `/projects/${project.slug}`}>
              <ClassicCard project={project} index={index} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
