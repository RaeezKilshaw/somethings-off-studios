import TwoColumnPage from '@/app/_components/TwoColumnPage'

const homeImages = [
  '/assets/images/home-carousel/run-for-cover.jpg',
  '/assets/images/home-carousel/auntie-simas-biltong.jpg',
  '/assets/images/home-carousel/left-overs-in-abu-dhabi.jpg',
  '/assets/images/home-carousel/pixel-runner.jpg',
]

export default function Home() {
  return (
    <TwoColumnPage imageSrc="/assets/images/home.jpg" imageAlt="Somethings Off Studio" images={homeImages}>
      <div />
    </TwoColumnPage>
  )
}
