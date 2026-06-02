import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { projectsQuery, type ProjectSummary } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Work — Somethings Off Studio',
}

export default async function WorkPage() {
  const projects = await client.fetch<ProjectSummary[]>(
    projectsQuery,
    {},
    { next: { tags: ['project'] } },
  )

  return (
    <div className="min-h-screen px-6 lg:pl-[38%] lg:pr-8 pt-28 lg:pt-20 pb-16">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project._id}
            href={`/work/${project.slug}`}
            className="block mb-6 break-inside-avoid group"
          >
            <div className="relative overflow-hidden">
              <Image
                src={
                  project.mainImage
                    ? urlForImage(project.mainImage).width(600).url()
                    : '/images/home.jpg'
                }
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover group-hover:opacity-90 transition-opacity"
                sizes="33vw"
              />
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium">{project.title}</p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--color-muted)' }}>
                {project.category} — {project.year}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
