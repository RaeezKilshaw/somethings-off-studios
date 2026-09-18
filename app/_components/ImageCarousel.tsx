'use client'

import { useState } from 'react'
import Image from 'next/image'

type Props = {
  images: string[]
  alt: string
}

export default function ImageCarousel({ images, alt }: Props) {
  const [index, setIndex] = useState(0)

  return (
    <button
      type="button"
      onClick={() => setIndex((i) => (i + 1) % images.length)}
      className="relative w-full h-full cursor-pointer bg-transparent border-0 p-0"
      aria-label="Show next image"
    >
      <Image
        src={images[index]}
        alt={alt}
        fill
        className="object-contain"
        priority
        sizes="(max-width: 1024px) 100vw, 40vw"
      />
    </button>
  )
}
