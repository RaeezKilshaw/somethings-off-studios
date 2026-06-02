import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'
import { projectId, dataset } from '../env'

const imageBuilder = createImageUrlBuilder({ projectId, dataset })

export function urlForImage(source: SanityImageSource) {
  return imageBuilder.image(source).auto('format').fit('max')
}
