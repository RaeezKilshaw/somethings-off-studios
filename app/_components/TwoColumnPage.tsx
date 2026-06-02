import Image from 'next/image'

type Props = {
  children: React.ReactNode
  imageSrc: string
  imageAlt: string
}

export default function TwoColumnPage({ children, imageSrc, imageAlt }: Props) {
  return (
    <div className="flex min-h-screen">
      {/* Left column — content */}
      <div className="w-[38%] shrink-0 px-6 pt-20 pb-16 flex flex-col">
        {children}
      </div>

      {/* Right column — image with ample white space */}
      <div className="flex-1 flex items-center justify-center p-10">
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 58vw"
          />
        </div>
      </div>
    </div>
  )
}
