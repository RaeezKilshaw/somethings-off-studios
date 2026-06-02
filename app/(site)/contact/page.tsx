import type { Metadata } from 'next'
import TwoColumnPage from '@/app/_components/TwoColumnPage'
import ContactForm from '@/app/_components/ContactForm'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { contactPageQuery, type ContactPage } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Contact — Somethings Off Studio',
}

export default async function ContactPage() {
  const page = await client.fetch<ContactPage | null>(
    contactPageQuery,
    {},
    { next: { tags: ['contactPage'] } },
  )

  const imageSrc = page?.contactImage
    ? urlForImage(page.contactImage).width(1400).url()
    : '/images/contact.jpg'

  const email = page?.email ?? 'hello@somethingsoffstudio.com'
  const instagramUrl = page?.instagramUrl ?? 'https://instagram.com/somethingsoffstudio'
  const linkedinUrl = page?.linkedinUrl ?? 'https://linkedin.com/company/somethingsoffstudio'
  const formspreeId = page?.formspreeId ?? 'YOUR_FORM_ID'

  return (
    <TwoColumnPage imageSrc={imageSrc} imageAlt="Contact Somethings Off Studio">
      <div className="flex flex-col gap-8 pt-2">
        <div className="flex flex-col gap-2">
          <a
            href={`mailto:${email}`}
            className="text-sm hover:opacity-50 transition-opacity"
          >
            {email}
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:opacity-50 transition-opacity"
            style={{ color: 'var(--color-muted)' }}
          >
            Instagram ↗
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:opacity-50 transition-opacity"
            style={{ color: 'var(--color-muted)' }}
          >
            LinkedIn ↗
          </a>
        </div>

        <div>
          <p className="text-xs tracking-wide uppercase mb-4" style={{ color: 'var(--color-muted)' }}>
            Start a project
          </p>
          <ContactForm formspreeId={formspreeId} />
        </div>
      </div>
    </TwoColumnPage>
  )
}
