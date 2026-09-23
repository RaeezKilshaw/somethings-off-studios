export type WorkImage = {
  src: string
  width: number
  height: number
}

export type Project = {
  slug: string
  title: string
  client: string
  category: string
  year: string
  description: string
  cover: WorkImage
  gallery: WorkImage[]
  /** 'scroll' (default) stacks every image down the right half. 'carousel' shows
   *  one at a time, click to advance — for things meant to be read in order. */
  layout?: 'scroll' | 'carousel'
}

// Order here drives the grid layout (app/work/page.tsx uses a CSS multi-column
// masonry, which fills column-by-column) — deliberately alternates portrait/
// square/landscape covers so no two neighbouring tiles share the same shape.
export const projects: Project[] = [
  {
    slug: 'sos',
    title: 'SOS',
    client: 'Somethings Off Studio',
    category: 'Poster Series',
    year: '2025',
    description: 'The studio’s own mark - a bold three-colour wordmark that spills into "Studio Spaces," a run of type-led posters pairing raw texture with hard graphic shape.',
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
    category: 'Logo Design',
    year: '2025',
    description: 'Identity system for a social running club, built for movement - an angular wordmark, a tight colourway, and merch that reads at a sprint across kit, signage, and digital.',
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
    slug: '786-foods',
    title: '786 Foods',
    client: '786 Foods',
    category: 'Brand Identity',
    year: '2025',
    description: 'A pot-and-lettering mark, built stout and legible for a family food brand that’s been trading since 1996.',
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
    slug: 'velo-coffee-club',
    title: 'Velo Coffee Club',
    client: 'Velo Coffee Club',
    category: 'Concept Brand Identity',
    year: '2025',
    description: 'A loose, hand-drawn wordmark and a full launch-day campaign for a new coffee spot in Plumstead, Cape Town - signage, flyers, the whole opening morning.',
    cover: { src: '/assets/images/work/velo-coffee-club/cover.jpg', width: 750, height: 595 },
    gallery: [
      { src: '/assets/images/work/velo-coffee-club/cover.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/velo-coffee-club/01.jpg', width: 750, height: 1124 },
      { src: '/assets/images/work/velo-coffee-club/02.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/velo-coffee-club/03.jpg', width: 750, height: 1124 },
      { src: '/assets/images/work/velo-coffee-club/04.jpg', width: 750, height: 750 },
      { src: '/assets/images/work/velo-coffee-club/05.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/velo-coffee-club/06.jpg', width: 750, height: 1124 },
    ],
  },
  {
    slug: 'left-overs-in-abu-dhabi',
    title: 'Left Overs in Abu Dhabi',
    client: 'Self-initiated',
    category: 'Zine',
    year: '2025',
    description: 'A self-published photo zine, shot and laid out solo - the parts of Abu Dhabi that don’t make the postcards: service roads, half-built lots, the in-between.',
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
    slug: 'auntie-simas-biltong',
    title: "Auntie Sima's Biltong",
    client: "Auntie Sima's Biltong",
    category: 'Logo Design',
    year: '2024',
    description: 'A hand-lettered wordmark and packaging illustration for an artisanal Cape Town biltong brand - cursive, warm, unmistakably home-made.',
    cover: { src: '/assets/images/work/auntie-simas-biltong/cover.jpg', width: 750, height: 750 },
    gallery: [
      { src: '/assets/images/work/auntie-simas-biltong/cover.jpg', width: 750, height: 750 },
      { src: '/assets/images/work/auntie-simas-biltong/01.jpg', width: 750, height: 1124 },
      { src: '/assets/images/work/auntie-simas-biltong/02.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/auntie-simas-biltong/03.jpg', width: 750, height: 1124 },
    ],
  },
  {
    slug: 'runna',
    title: 'RUNNA',
    client: 'RUNNA Social Running Club',
    category: 'Concept Brand Identity',
    year: '2025',
    description: 'Identity and campaign posters for a Cape Town / Johannesburg running club - a hard-edged wordmark and a set of stark, high-contrast editorials built to move at pace.',
    cover: { src: '/assets/images/work/runna/cover.jpg', width: 750, height: 1061 },
    gallery: [
      { src: '/assets/images/work/runna/cover.jpg', width: 750, height: 1061 },
      { src: '/assets/images/work/runna/01.jpg', width: 750, height: 1061 },
      { src: '/assets/images/work/runna/02.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/runna/03.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/runna/04.jpg', width: 750, height: 595 },
    ],
  },
  {
    slug: 'sealand',
    title: 'Sealand',
    client: 'Sealand',
    category: 'Illustration',
    year: '2025',
    description: 'Illustration made for end of year party tote bags.',
    cover: { src: '/assets/images/work/sealand/cover.jpg', width: 750, height: 595 },
    gallery: [
      { src: '/assets/images/work/sealand/cover.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/sealand/01.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/sealand/02.jpg', width: 750, height: 1124 },
      { src: '/assets/images/work/sealand/03.jpg', width: 750, height: 1124 },
      { src: '/assets/images/work/sealand/04.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/sealand/05.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/sealand/06.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/sealand/07.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/sealand/08.jpg', width: 750, height: 595 },
    ],
  },
  {
    slug: 'type-work',
    title: 'Type Work',
    client: 'Self-initiated',
    category: 'Type Exploration',
    year: '2025',
    description: 'Ongoing typographic experiments made for no one in particular - custom display faces, hand lettering, and layout studies that exist because a phrase wouldn’t leave me alone.',
    cover: { src: '/assets/images/work/type-work/cover.jpg', width: 750, height: 1444 },
    gallery: [
      { src: '/assets/images/work/type-work/cover.jpg', width: 750, height: 1444 },
      { src: '/assets/images/work/type-work/01.jpg', width: 750, height: 750 },
      { src: '/assets/images/work/type-work/02.jpg', width: 750, height: 750 },
      { src: '/assets/images/work/type-work/03.jpg', width: 750, height: 750 },
      { src: '/assets/images/work/type-work/04.jpg', width: 750, height: 750 },
      { src: '/assets/images/work/type-work/05.jpg', width: 750, height: 750 },
      { src: '/assets/images/work/type-work/06.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/type-work/07.jpg', width: 750, height: 750 },
      { src: '/assets/images/work/type-work/08.jpg', width: 750, height: 750 },
      { src: '/assets/images/work/type-work/09.jpg', width: 750, height: 750 },
      { src: '/assets/images/work/type-work/10.jpg', width: 750, height: 750 },
    ],
  },
  {
    slug: 'sealand-crew',
    title: 'Sealand Crew',
    client: 'Sealand',
    category: 'Type Illustration',
    year: '2025',
    description: 'Illustration made for the production team at Sealand factory and dispatch centre.',
    cover: { src: '/assets/images/work/sealand-crew/cover.jpg', width: 750, height: 595 },
    gallery: [
      { src: '/assets/images/work/sealand-crew/cover.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/sealand-crew/01.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/sealand-crew/02.jpg', width: 750, height: 595 },
    ],
  },
]
