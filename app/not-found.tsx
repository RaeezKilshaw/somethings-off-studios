import Link from 'next/link'
import TwoColumnPage from '@/app/_components/TwoColumnPage'

export default function NotFound() {
  return (
    <TwoColumnPage imageSrc="/assets/images/home.jpg" imageAlt="Page not found">
      <div className="flex flex-col gap-4 pt-2">
        <p className="text-xs" style={{ color: 'var(--color-muted)' }}>404</p>
        <p className="text-sm">Page not found.</p>
        <Link
          href="/"
          className="text-sm hover:opacity-50 transition-opacity"
          style={{ color: 'var(--color-muted)' }}
        >
          ← Home
        </Link>
      </div>
    </TwoColumnPage>
  )
}
