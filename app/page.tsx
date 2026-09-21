import TwoColumnPage from '@/app/_components/TwoColumnPage'
import type { WorkImage } from '@/app/work/_data/projects'

const homeImages: WorkImage[] = [
  { src: '/assets/images/home-carousel/run-for-cover.jpg', width: 751, height: 1126 },
  { src: '/assets/images/home-carousel/auntie-simas-biltong.jpg', width: 751, height: 1126 },
  { src: '/assets/images/home-carousel/left-overs-in-abu-dhabi.jpg', width: 751, height: 1126 },
  { src: '/assets/images/home-carousel/pixel-runner.jpg', width: 751, height: 1126 },
]

export default function Home() {
  return (
    <TwoColumnPage
      imageSrc="/assets/images/home.jpg"
      imageAlt="Somethings Off Studio"
      images={homeImages}
      randomStart
    >
      <div />
    </TwoColumnPage>
  )
}
