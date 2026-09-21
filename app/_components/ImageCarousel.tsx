'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import type { WorkImage } from '@/app/work/_data/projects'

type Props = {
  images: WorkImage[]
  alt: string
  randomStart?: boolean
}

export default function ImageCarousel({ images, alt, randomStart = false }: Props) {
  const [index, setIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (randomStart) {
      setIndex(Math.floor(Math.random() * images.length))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function advance() {
    setIndex((i) => (i + 1) % images.length)
  }

  // object-contain can letterbox within this box — only advance when the
  // click actually lands on the visible picture, not the empty margin.
  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const el = containerRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const current = images[index]
    const boxRatio = rect.width / rect.height
    const imageRatio = current.width / current.height

    const contentWidth = boxRatio > imageRatio ? rect.height * imageRatio : rect.width
    const contentHeight = boxRatio > imageRatio ? rect.height : rect.width / imageRatio
    const marginX = (rect.width - contentWidth) / 2
    const marginY = (rect.height - contentHeight) / 2

    const clickX = e.clientX - rect.left
    const clickY = e.clientY - rect.top
    const onImage =
      clickX >= marginX && clickX <= rect.width - marginX && clickY >= marginY && clickY <= rect.height - marginY

    if (onImage) advance()
  }

  const current = images[index]

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') advance()
      }}
      className="relative w-full h-full cursor-pointer"
      aria-label="Show next image"
    >
      <Image
        src={current.src}
        alt={`${alt} ${index + 1}`}
        fill
        className="object-contain"
        priority
        sizes="(max-width: 1024px) 100vw, 40vw"
      />
    </div>
  )
}
