import { Metadata } from "next"
import { absoluteUrl, ogUrl } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Career Chat | Segundo Juan",
  description: "AI chat with knowledge about my career and tools to contact me",
  openGraph: {
    title: "Career Chat | Segundo Juan",
    description: "AI chat with knowledge about my career and tools to contact me",
    type: "article",
    url: absoluteUrl("/career-chat"),
    images: [
      {
        url: ogUrl("Career Chat"),
        width: 1200,
        height: 630,
        alt: "Career Chat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Chat | Segundo Juan",
    description: "AI chat with knowledge about my career and tools to contact me",
    images: ogUrl("Career Chat"),
  },
}

export default function CareerChatPage() {
  return (
    <article className="mb-32 py-24">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
            Career Chat
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            AI chat with knowledge about my career and tools to help you contact me
          </p>
        </div>

        {/* Chat Interface */}
        <div className="mb-16">
          <div className="content-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-white">
                AI Career Assistant
              </h2>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-[var(--border-light)] rounded-full"></div>
                <div className="w-3 h-3 bg-[var(--border-light)] rounded-full"></div>
                <div className="w-3 h-3 bg-[var(--border-light)] rounded-full"></div>
              </div>
            </div>
            
            <div className="relative">
              <iframe
                src="https://seguj-career-conversation.hf.space"
                title="Hugging Face Career Chat Space"
                className="w-full rounded-md border-0"
                style={{ height: '600px' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Information Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="content-card">
            <h3 className="text-xl font-medium mb-6 text-white">
              What it knows
            </h3>
            <ul className="space-y-4 text-[var(--text-secondary)]">
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-medium">•</span>
                <span>My work experience and career path</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-medium">•</span>
                <span>Technical skills and expertise</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-medium">•</span>
                <span>Projects and achievements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-medium">•</span>
                <span>Background and interests</span>
              </li>
            </ul>
          </div>

          <div className="content-card">
            <h3 className="text-xl font-medium mb-6 text-white">
              Contact tools
            </h3>
            <ul className="space-y-4 text-[var(--text-secondary)]">
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-medium">•</span>
                <span>Help you reach out to me</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-medium">•</span>
                <span>Provide contact information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-medium">•</span>
                <span>Schedule meetings or calls</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-medium">•</span>
                <span>Connect on professional platforms</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="content-card text-center">
          <h3 className="text-lg font-medium mb-4 text-white">Important Note</h3>
          <p className="text-[var(--text-secondary)] text-base leading-relaxed">
            This is an AI tool trained on my career information. While it strives to be accurate, 
            it may make mistakes. Always verify important information and feel free to reach out directly.
          </p>
        </div>
      </div>
    </article>
  )
}
