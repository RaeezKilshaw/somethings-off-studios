import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/app/work/_data/projects'

export const metadata: Metadata = {
  title: 'Work — Somethings Off Studio',
}

export default function WorkPage() {
  return (
    <div className="min-h-screen pl-[38%] pr-8 pt-20 pb-16">
      <div className="columns-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="block mb-6 break-inside-avoid group"
          >
            <div className="relative overflow-hidden">
              <Image
                src={project.imageSrc}
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
