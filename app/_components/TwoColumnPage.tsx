import Image from 'next/image'
import ImageCarousel from './ImageCarousel'
import type { WorkImage } from '@/app/work/_data/projects'

type Props = {
  children: React.ReactNode
  imageSrc: string
  imageAlt: string
  images?: WorkImage[]
  randomStart?: boolean
}

export default function TwoColumnPage({ children, imageSrc, imageAlt, images, randomStart }: Props) {
  const isCarousel = Boolean(images && images.length > 1)

  return (
    <div className={`flex flex-col lg:flex-row ${isCarousel ? 'h-screen overflow-hidden' : 'min-h-screen'}`}>
      {/* Left column — content */}
      <div className="w-full min-w-0 lg:w-[38%] lg:shrink-0 px-6 pt-40 lg:pt-72 pb-8 lg:pb-16 flex flex-col">
        {children}
      </div>

      {/* Right column — image with ample white space. Same box regardless of single image or carousel. */}
      <div
        className={`flex-1 flex items-center justify-center px-6 pb-16 lg:p-10 ${isCarousel ? 'min-h-0' : 'min-h-[50vh] lg:min-h-0'}`}
      >
        {isCarousel ? (
          <ImageCarousel images={images as WorkImage[]} alt={imageAlt} randomStart={randomStart} />
        ) : (
          <div className="relative w-full h-full min-h-[50vh] lg:min-h-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>
        )}
      </div>
    </div>
  )
}
