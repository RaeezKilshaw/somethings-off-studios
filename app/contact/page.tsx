import type { Metadata } from 'next'
import TwoColumnPage from '@/app/_components/TwoColumnPage'
import ContactForm from '@/app/_components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Somethings Off Studio',
}

export default function ContactPage() {
  return (
    <TwoColumnPage imageSrc="/assets/images/contact.jpg" imageAlt="Contact Somethings Off Studio">
      <div className="flex flex-col gap-8 pt-2">
        {/* Links */}
        <div className="flex flex-col gap-2">
          <a
            href="mailto:hello@somethingsoffstudio.com"
            className="text-sm hover:opacity-50 transition-opacity"
          >
            hello@somethingsoffstudio.com
          </a>
          <a
            href="https://instagram.com/somethingsoffstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:opacity-50 transition-opacity"
            style={{ color: 'var(--color-muted)' }}
          >
            Instagram ↗
          </a>
          <a
            href="https://linkedin.com/company/somethingsoffstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:opacity-50 transition-opacity"
            style={{ color: 'var(--color-muted)' }}
          >
            LinkedIn ↗
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
