import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { clientsQuery, type ClientSummary } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Clients — Somethings Off Studio',
}

export default async function ClientsPage() {
  const clients = await client.fetch<ClientSummary[]>(
    clientsQuery,
    {},
    { next: { tags: ['client'] } },
  )

  return (
    <div className="min-h-screen px-6 lg:pl-[38%] lg:pr-8 pt-28 lg:pt-20 pb-16">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {clients.map((c) => (
          <Link
            key={c._id}
            href={`/clients/${c.slug}`}
            className="block group"
          >
            <div className="relative overflow-hidden aspect-square">
              <Image
                src={
                  c.mainImage
                    ? urlForImage(c.mainImage).width(600).url()
                    : '/images/home.jpg'
                }
                alt={c.name}
                fill
                className="object-cover transition-opacity duration-300"
                sizes="33vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6">
                {c.logo ? (
                  <Image
                    src={urlForImage(c.logo).width(320).url()}
                    alt={`${c.name} logo`}
                    width={160}
                    height={80}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-sm font-medium text-center">{c.name}</span>
                )}
              </div>
            </div>
            <p className="text-xs mt-2 tracking-wide uppercase" style={{ color: 'var(--color-muted)' }}>
              {c.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
