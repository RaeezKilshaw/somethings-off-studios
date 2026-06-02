import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import TwoColumnPage from '@/app/_components/TwoColumnPage'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import {
  clientBySlugQuery,
  clientSlugsQuery,
  type ClientDetail,
} from '@/sanity/lib/queries'

type PageProps = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(clientSlugsQuery)
  return slugs.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const c = await client.fetch<ClientDetail | null>(
    clientBySlugQuery,
    { slug },
    { next: { tags: ['client'] } },
  )
  if (!c) return {}
  return { title: `${c.name} — Somethings Off Studio` }
}

export default async function ClientDetailPage({ params }: PageProps) {
  const { slug } = await params
  const c = await client.fetch<ClientDetail | null>(
    clientBySlugQuery,
    { slug },
    { next: { tags: ['client'] } },
  )
  if (!c) notFound()

  const imageSrc = c.mainImage
    ? urlForImage(c.mainImage).width(1200).url()
    : '/images/home.jpg'

  return (
    <TwoColumnPage imageSrc={imageSrc} imageAlt={c.name}>
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-xs mb-1 tracking-wide uppercase" style={{ color: 'var(--color-muted)' }}>
            {c.industry}
          </p>
          <h1 className="text-2xl font-bold leading-tight">{c.name}</h1>
        </div>
        <p className="text-sm leading-relaxed">{c.description}</p>
      </div>
    </TwoColumnPage>
  )
}
