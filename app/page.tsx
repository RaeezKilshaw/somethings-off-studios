'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [time, setTime] = useState('')

  useEffect(() => {
    function tick() {
      setTime(new Date().toLocaleTimeString('en-ZA', {
        timeZone: 'Africa/Johannesburg',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* Left column — white, empty (logo sits here via fixed overlay) */}
        <div className="w-full lg:w-[38%] lg:shrink-0 h-16 lg:h-auto" />

        {/* Right column — image inset 40px from all edges on desktop */}
        <div className="flex-1 relative min-h-[60vh] lg:min-h-0">
          <div className="absolute inset-0 lg:inset-10">
            <Image
              src="/assets/images/home.jpg"
              alt="Somethings Off Studio"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>
        </div>

      </div>

      {/* Fixed overlay — logo, clock, + */}
      <div className="fixed inset-0 pointer-events-none z-50">

        {/* Logo — top-left, matching the image's inset-10 (40px) on desktop */}
        <div className="absolute top-0 left-0 right-0 lg:right-auto lg:top-10 lg:left-10 bg-white lg:bg-transparent px-6 pt-4 pb-3 lg:p-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/icons/asset-1.svg"
            alt="Somethings Off Studio"
            className="w-40 lg:w-64 h-auto"
          />
        </div>

        {/* Live clock — bottom right, SAST */}
        {time && (
          <div
            className="absolute bottom-6 right-6 text-xs tabular-nums"
            style={{ color: 'var(--color-muted)' }}
          >
            {time}
          </div>
        )}

        {/* Static + — bottom left, decorative only */}
        <div className="absolute bottom-6 left-6 text-2xl font-light leading-none select-none" style={{ color: 'var(--color-text)' }}>
          +
        </div>

      </div>
    </>
  )
}
