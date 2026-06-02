import Image from 'next/image'

type Props = {
  children: React.ReactNode
  imageSrc: string
  imageAlt: string
}

export default function TwoColumnPage({ children, imageSrc, imageAlt }: Props) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left column — content */}
      <div className="w-full lg:w-[38%] lg:shrink-0 px-6 pt-40 lg:pt-96 pb-8 lg:pb-16 flex flex-col">
        {children}
      </div>

      {/* Right column — image with ample white space */}
      <div className="flex-1 flex items-center justify-center px-6 pb-16 lg:p-10 min-h-[50vh] lg:min-h-0">
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
      </div>
    </div>
  )
}
