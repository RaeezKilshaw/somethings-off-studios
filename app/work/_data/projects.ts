export type Project = {
  slug: string
  title: string
  client: string
  category: 'Brand Identity' | 'Web' | 'Motion' | 'Art Direction'
  year: string
  description: string
  imageSrc: string
  imageWidth: number
  imageHeight: number
  images?: string[]
}

export const projects: Project[] = [
  {
    slug: 'sos',
    title: 'SOS',
    client: 'Somethings Off Studio',
    category: 'Brand Identity',
    year: '2025',
    description: 'The studio’s own mark — a bold three-colour wordmark built to carry across print, screen, and merch.',
    imageSrc: '/assets/images/work/sos.jpg',
    imageWidth: 751,
    imageHeight: 1126,
  },
  {
    slug: 'run-for-cover',
    title: 'Run For Cover',
    client: 'Run For Cover Social Running Club',
    category: 'Brand Identity',
    year: '2025',
    description: 'Identity system for a social running club — angular wordmark and pixel-run icon for kit, signage, and digital.',
    imageSrc: '/assets/images/work/run-for-cover.jpg',
    imageWidth: 751,
    imageHeight: 750,
    images: ['/assets/images/work/run-for-cover.jpg', '/assets/images/work/run-for-cover-icon.jpg'],
  },
  {
    slug: 'auntie-simas-biltong',
    title: "Auntie Sima's Biltong",
    client: "Auntie Sima's Biltong",
    category: 'Brand Identity',
    year: '2025',
    description: 'Hand-lettered wordmark and packaging illustration for an artisanal biltong brand.',
    imageSrc: '/assets/images/work/auntie-simas-biltong.jpg',
    imageWidth: 751,
    imageHeight: 750,
  },
  {
    slug: '786-foods',
    title: '786 Foods',
    client: '786 Foods',
    category: 'Brand Identity',
    year: '2025',
    description: 'A pot-and-lettering mark for a family food brand established in 1996.',
    imageSrc: '/assets/images/work/786-foods.jpg',
    imageWidth: 751,
    imageHeight: 1126,
  },
  {
    slug: 'mello-coffee-club',
    title: 'Mello Coffee Club',
    client: 'Mello Coffee Club',
    category: 'Brand Identity',
    year: '2025',
    description: 'A playful, hand-drawn wordmark for a coffee brand, set against warm, textural photography.',
    imageSrc: '/assets/images/work/mello-coffee-club.jpg',
    imageWidth: 751,
    imageHeight: 596,
  },
]
