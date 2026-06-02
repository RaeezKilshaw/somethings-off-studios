import type { Metadata } from 'next'
import { PortableText } from '@portabletext/react'
import TwoColumnPage from '@/app/_components/TwoColumnPage'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { aboutPageQuery, type AboutPage } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'About — Somethings Off Studio',
}

const fallbackAbout = (
  <div className="flex flex-col gap-6 pt-2">
    <p className="text-sm leading-relaxed">
      Somethings Off Studio is a digital design practice focused on brand identity, web, and motion.
      We work with founders, agencies, and organisations who believe the way something looks is the way something is.
    </p>
    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
      We approach every project as a set of problems worth solving carefully — moving between strategy,
      visual language, and execution without losing the thread. Our work tends toward the restrained
      and the considered.
    </p>
    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
      We take on a small number of projects at a time. That&apos;s intentional.
    </p>
  </div>
)

export default async function AboutPage() {
  const page = await client.fetch<AboutPage | null>(
    aboutPageQuery,
    {},
    { next: { tags: ['aboutPage'] } },
  )

  const imageSrc = page?.aboutImage
    ? urlForImage(page.aboutImage).width(1400).url()
    : '/images/about.jpg'

  return (
    <TwoColumnPage imageSrc={imageSrc} imageAlt="About Somethings Off Studio">
      {page?.body && page.body.length > 0 ? (
        <div className="flex flex-col gap-6 pt-2 text-sm leading-relaxed [&_p]:mb-4">
          <PortableText value={page.body as Parameters<typeof PortableText>[0]['value']} />
        </div>
      ) : (
        fallbackAbout
      )}
    </TwoColumnPage>
  )
}
