import type { Metadata } from 'next'
import TwoColumnPage from '@/app/_components/TwoColumnPage'

export const metadata: Metadata = {
  title: 'About — Somethings Off Studio',
}

export default function AboutPage() {
  return (
    <TwoColumnPage imageSrc="/assets/images/about.jpg" imageAlt="Somethings Off Studio">
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
    </TwoColumnPage>
  )
}
