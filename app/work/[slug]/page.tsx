import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import WorkGallery from '@/app/_components/WorkGallery'
import TwoColumnPage from '@/app/_components/TwoColumnPage'
import { projects } from '@/app/work/_data/projects'

type PageProps = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return { title: `${project.title} — Somethings Off Studio` }
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const textBlock = (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-xs mb-1" style={{ color: 'var(--color-muted)' }}>
          {project.category} — {project.year}
        </p>
        <h1 className="text-2xl font-bold leading-tight">{project.title}</h1>
        <p className="text-sm mt-1" style={{ color: 'var(--color-muted)' }}>
          {project.client}
        </p>
      </div>

      <p className="text-sm leading-relaxed">{project.description}</p>
    </div>
  )

  if (project.layout === 'carousel') {
    return (
      <TwoColumnPage imageSrc={project.cover.src} imageAlt={project.title} images={project.gallery}>
        {textBlock}
      </TwoColumnPage>
    )
  }

  return (
    <WorkGallery gallery={project.gallery} alt={project.title}>
      {textBlock}
    </WorkGallery>
  )
}
