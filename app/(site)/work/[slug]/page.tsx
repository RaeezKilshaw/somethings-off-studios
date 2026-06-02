import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import TwoColumnPage from '@/app/_components/TwoColumnPage'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import {
  projectBySlugQuery,
  projectSlugsQuery,
  type ProjectDetail,
} from '@/sanity/lib/queries'

type PageProps = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(projectSlugsQuery)
  return slugs.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await client.fetch<ProjectDetail | null>(
    projectBySlugQuery,
    { slug },
    { next: { tags: ['project'] } },
  )
  if (!project) return {}
  return { title: `${project.title} — Somethings Off Studio` }
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = await client.fetch<ProjectDetail | null>(
    projectBySlugQuery,
    { slug },
    { next: { tags: ['project'] } },
  )
  if (!project) notFound()

  const imageSrc = project.mainImage
    ? urlForImage(project.mainImage).width(1200).url()
    : '/images/home.jpg'

  return (
    <TwoColumnPage imageSrc={imageSrc} imageAlt={project.title}>
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
    </TwoColumnPage>
  )
}
