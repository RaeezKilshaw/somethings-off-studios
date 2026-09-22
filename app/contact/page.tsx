import type { Metadata } from 'next'
import TwoColumnPage from '@/app/_components/TwoColumnPage'
import ContactForm from '@/app/_components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact - Somethings Off Studio',
}

export default function ContactPage() {
  return (
    <TwoColumnPage imageSrc="/assets/images/contact.jpg" imageAlt="Contact Somethings Off Studio">
      <div className="flex flex-col gap-8 pt-2 -mt-12 lg:-mt-28 min-w-0">
        {/* Links */}
        <div className="flex flex-col gap-2">
          <a
            href="mailto:idrisnoordien18@gmail.com"
            className="text-sm hover:opacity-50 transition-opacity"
          >
            idrisnoordien18@gmail.com
          </a>
          <a
            href="https://www.instagram.com/the_neuestudio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:opacity-50 transition-opacity"
            style={{ color: 'var(--color-muted)' }}
          >
            Instagram ↗
          </a>
          <a
            href="https://www.behance.net/idrisnoordien"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:opacity-50 transition-opacity"
            style={{ color: 'var(--color-muted)' }}
          >
            Behance ↗
          </a>
          <a
            href="https://dribbble.com/IdrisNoordien"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:opacity-50 transition-opacity"
            style={{ color: 'var(--color-muted)' }}
          >
            Dribbble ↗
          </a>
        </div>

        {/* Form */}
        <div>
          <p className="text-xs tracking-wide uppercase mb-4" style={{ color: 'var(--color-muted)' }}>
            Start a project
          </p>
          <ContactForm />
        </div>
      </div>
    </TwoColumnPage>
  )
}
