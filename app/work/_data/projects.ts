export type WorkImage = {
  src: string
  width: number
  height: number
}

export type Project = {
  slug: string
  title: string
  client: string
  category: 'Brand Identity' | 'Web' | 'Motion' | 'Art Direction'
  year: string
  description: string
  cover: WorkImage
  gallery: WorkImage[]
  /** 'scroll' (default) stacks every image down the right half. 'carousel' shows
   *  one at a time, click to advance — for things meant to be read in order. */
  layout?: 'scroll' | 'carousel'
}

export const projects: Project[] = [
  {
    slug: 'sos',
    title: 'SOS',
    client: 'Somethings Off Studio',
    category: 'Brand Identity',
    year: '2025',
    description: 'The studio’s own mark — a bold three-colour wordmark, extended into a "Studio Spaces" editorial poster series.',
    cover: { src: '/assets/images/work/sos/cover.jpg', width: 750, height: 1124 },
    gallery: [
      { src: '/assets/images/work/sos/cover.jpg', width: 750, height: 1124 },
      { src: '/assets/images/work/sos/01.jpg', width: 750, height: 1124 },
      { src: '/assets/images/work/sos/02.jpg', width: 750, height: 750 },
      { src: '/assets/images/work/sos/03.jpg', width: 750, height: 1124 },
      { src: '/assets/images/work/sos/04.jpg', width: 750, height: 595 },
    ],
  },
  {
    slug: 'run-for-cover',
    title: 'Run For Cover',
    client: 'Run For Cover Social Running Club',
    category: 'Brand Identity',
    year: '2025',
    description: 'Identity system for a social running club — angular wordmark, colourways, and merch for kit, signage, and digital.',
    cover: { src: '/assets/images/work/run-for-cover/cover.jpg', width: 750, height: 750 },
    gallery: [
      { src: '/assets/images/work/run-for-cover/cover.jpg', width: 750, height: 750 },
      { src: '/assets/images/work/run-for-cover/01.jpg', width: 750, height: 1124 },
      { src: '/assets/images/work/run-for-cover/02.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/run-for-cover/03.jpg', width: 750, height: 750 },
      { src: '/assets/images/work/run-for-cover/04.jpg', width: 750, height: 595 },
    ],
  },
  {
    slug: 'auntie-simas-biltong',
    title: "Auntie Sima's Biltong",
    client: "Auntie Sima's Biltong",
    category: 'Brand Identity',
    year: '2024',
    description: 'Hand-lettered wordmark and packaging illustration for an artisanal Cape Town biltong brand.',
    cover: { src: '/assets/images/work/auntie-simas-biltong/cover.jpg', width: 750, height: 750 },
    gallery: [
      { src: '/assets/images/work/auntie-simas-biltong/cover.jpg', width: 750, height: 750 },
      { src: '/assets/images/work/auntie-simas-biltong/01.jpg', width: 750, height: 1124 },
      { src: '/assets/images/work/auntie-simas-biltong/02.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/auntie-simas-biltong/03.jpg', width: 750, height: 1124 },
    ],
  },
  {
    slug: '786-foods',
    title: '786 Foods',
    client: '786 Foods',
    category: 'Brand Identity',
    year: '2025',
    description: 'A pot-and-lettering mark for a family food brand established in 1996.',
    cover: { src: '/assets/images/work/786-foods/cover.jpg', width: 750, height: 1124 },
    gallery: [
      { src: '/assets/images/work/786-foods/cover.jpg', width: 750, height: 1124 },
      { src: '/assets/images/work/786-foods/01.jpg', width: 750, height: 1124 },
      { src: '/assets/images/work/786-foods/02.jpg', width: 750, height: 750 },
      { src: '/assets/images/work/786-foods/03.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/786-foods/04.jpg', width: 750, height: 750 },
      { src: '/assets/images/work/786-foods/05.jpg', width: 750, height: 1124 },
    ],
  },
  {
    slug: 'left-overs-in-abu-dhabi',
    title: 'Left Overs in Abu Dhabi',
    client: 'Self-initiated',
    category: 'Art Direction',
    year: '2025',
    description: 'A self-published photo zine documenting the overlooked corners of Abu Dhabi.',
    layout: 'carousel',
    cover: { src: '/assets/images/work/abu-dhabi-zine/cover.jpg', width: 750, height: 1124 },
    gallery: [
      { src: '/assets/images/work/abu-dhabi-zine/cover.jpg', width: 750, height: 1124 },
      { src: '/assets/images/work/abu-dhabi-zine/01.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/abu-dhabi-zine/02.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/abu-dhabi-zine/03.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/abu-dhabi-zine/04.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/abu-dhabi-zine/05.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/abu-dhabi-zine/06.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/abu-dhabi-zine/07.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/abu-dhabi-zine/08.jpg', width: 750, height: 595 },
    ],
  },
  {
    slug: 'velo-coffee-club',
    title: 'Velo Coffee Club',
    client: 'Velo Coffee Club',
    category: 'Brand Identity',
    year: '2025',
    description: 'A playful, hand-drawn wordmark for a coffee brand, set against warm, textural photography.',
    cover: { src: '/assets/images/work/velo-coffee-club.jpg', width: 751, height: 596 },
    gallery: [{ src: '/assets/images/work/velo-coffee-club.jpg', width: 751, height: 596 }],
  },
]
