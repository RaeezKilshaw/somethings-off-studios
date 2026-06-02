import TwoColumnPage from '@/app/_components/TwoColumnPage'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { homePageQuery, type HomePage } from '@/sanity/lib/queries'

export default async function Home() {
  const page = await client.fetch<HomePage | null>(
    homePageQuery,
    {},
    { next: { tags: ['homePage'] } },
  )

  const imageSrc = page?.homeImage
    ? urlForImage(page.homeImage).width(1400).url()
    : '/images/home.jpg'

  return (
    <TwoColumnPage imageSrc={imageSrc} imageAlt="Somethings Off Studio">
      <div />
    </TwoColumnPage>
  )
}
