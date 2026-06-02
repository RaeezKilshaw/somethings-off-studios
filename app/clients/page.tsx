import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { clients } from '@/app/clients/_data/clients'

export const metadata: Metadata = {
  title: 'Clients — Somethings Off Studio',
}

export default function ClientsPage() {
  return (
    <div className="min-h-screen px-6 lg:pl-[38%] lg:pr-8 pt-28 lg:pt-20 pb-16">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {clients.map((client) => (
          <Link
            key={client.slug}
            href={`/clients/${client.slug}`}
            className="block group"
          >
            <div className="relative overflow-hidden aspect-square">
              {/* Client image — default */}
              <Image
                src={client.imageSrc}
                alt={client.name}
                fill
                className="object-cover transition-opacity duration-300"
                sizes="33vw"
              />
              {/* Logo overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6">
                {client.logoSrc ? (
                  <Image
                    src={client.logoSrc}
                    alt={`${client.name} logo`}
                    width={160}
                    height={80}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-sm font-medium text-center">{client.name}</span>
                )}
              </div>
            </div>
            <p className="text-xs mt-2 tracking-wide uppercase" style={{ color: 'var(--color-muted)' }}>
              {client.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
