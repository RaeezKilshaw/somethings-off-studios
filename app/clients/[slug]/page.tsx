import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import TwoColumnPage from '@/app/_components/TwoColumnPage'
import { clients } from '@/app/clients/_data/clients'

type PageProps = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return clients.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const client = clients.find((c) => c.slug === slug)
  if (!client) return {}
  return { title: `${client.name} — Somethings Off Studio` }
}

export default async function ClientDetailPage({ params }: PageProps) {
  const { slug } = await params
  const client = clients.find((c) => c.slug === slug)
  if (!client) notFound()

  return (
    <TwoColumnPage imageSrc={client.imageSrc} imageAlt={client.name}>
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-xs mb-1 tracking-wide uppercase" style={{ color: 'var(--color-muted)' }}>
            {client.industry}
          </p>
          <h1 className="text-2xl font-bold leading-tight">{client.name}</h1>
        </div>
        <p className="text-sm leading-relaxed">{client.description}</p>
      </div>
    </TwoColumnPage>
  )
}
