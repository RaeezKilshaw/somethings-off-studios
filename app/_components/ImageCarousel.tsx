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
  const [hoveringImage, setHoveringImage] = useState(false)
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

  // object-contain can letterbox within this box — the visible picture's rendered
  // rect (not the full box) is what should drive both the cursor and the click.
  function isOnImage(e: { clientX: number; clientY: number }) {
    const el = containerRef.current
    if (!el) return false

    const rect = el.getBoundingClientRect()
    const current = images[index]
    const boxRatio = rect.width / rect.height
    const imageRatio = current.width / current.height

    const contentWidth = boxRatio > imageRatio ? rect.height * imageRatio : rect.width
    const contentHeight = boxRatio > imageRatio ? rect.height : rect.width / imageRatio
    const marginX = (rect.width - contentWidth) / 2
    const marginY = (rect.height - contentHeight) / 2

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    return x >= marginX && x <= rect.width - marginX && y >= marginY && y <= rect.height - marginY
  }

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (isOnImage(e)) advance()
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    setHoveringImage(isOnImage(e))
  }

  const current = images[index]

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveringImage(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') advance()
      }}
      className={`relative w-full h-full ${hoveringImage ? 'cursor-pointer' : 'cursor-default'}`}
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
