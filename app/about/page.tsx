import type { Metadata } from 'next'
import TwoColumnPage from '@/app/_components/TwoColumnPage'

export const metadata: Metadata = {
  title: 'About — Somethings Off Studio',
}

export default function AboutPage() {
  return (
    <TwoColumnPage imageSrc="/assets/images/about.jpg" imageAlt="Idris — Somethings Off Studio">
      <div className="flex flex-col gap-6 pt-2">
        <p className="text-sm leading-relaxed">
          I&apos;m Idris, the designer behind Somethings Off Studio. My work sits across brand identity,
          art direction, and web — for founders, agencies, and organisations who believe the way something
          looks is the way something is.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
          I approach every project as a set of problems worth solving carefully — moving between strategy,
          visual language, and execution without losing the thread. My work tends toward the restrained
          and the considered.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
          I take on a small number of projects at a time. That&apos;s intentional.
        </p>
      </div>
    </TwoColumnPage>
  )
}
