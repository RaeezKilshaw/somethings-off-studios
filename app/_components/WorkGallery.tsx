import Image from 'next/image'
import type { WorkImage } from '@/app/work/_data/projects'

type Props = {
  children: React.ReactNode
  gallery: WorkImage[]
  alt: string
}

export default function WorkGallery({ children, gallery, alt }: Props) {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left column — text. Sticky (not a nested scroll container) so the page
          scrolls normally from anywhere, same as every other page. */}
      <div className="w-full min-w-0 lg:w-[38%] lg:shrink-0 px-6 pt-40 lg:pt-72 pb-8 lg:pb-16 flex flex-col lg:sticky lg:top-0 lg:h-screen">
        {children}
      </div>

      {/* Right column — full gallery, flows in normal document order. Each image keeps
          the same inset/whitespace treatment the single-image layout used. */}
      <div className="flex-1">
        {gallery.map((image, i) => (
          <div
            key={image.src}
            className="flex items-center justify-center px-6 py-16 lg:p-10 h-[60vh] lg:h-screen"
          >
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={`${alt} ${i + 1}`}
                fill
                className="object-contain"
                priority={i === 0}
                sizes="(max-width: 1024px) 100vw, 62vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
