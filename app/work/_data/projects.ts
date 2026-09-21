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

// Order here drives the grid layout (app/work/page.tsx uses a CSS multi-column
// masonry, which fills column-by-column) — deliberately alternates portrait/
// square/landscape covers so neighbouring tiles don't share the same shape.
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
    slug: 'velo-coffee-club',
    title: 'Velo Coffee Club',
    client: 'Velo Coffee Club',
    category: 'Brand Identity',
    year: '2025',
    description: 'A hand-drawn wordmark and launch-event campaign for a new coffee spot in Plumstead, Cape Town.',
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
    slug: 'sealand',
    title: 'Sealand',
    client: 'Sealand',
    category: 'Brand Identity',
    year: '2025',
    description: 'Illustrated botanical mark and surf-inspired identity for the Sealand "Familia" line, applied across totes and boards.',
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
    slug: 'left-overs-in-abu-dhabi',
    title: 'Left Overs in Abu Dhabi',
    client: 'Self-initiated',
    category: 'Art Direction',
    year: '2025',
    description: 'A self-published photo zine documenting the overlooked corners of Abu Dhabi.',
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
    slug: 'sealand-crew',
    title: 'Sealand Crew',
    client: 'Sealand',
    category: 'Brand Identity',
    year: '2025',
    description: 'Apparel line-extension for Sealand — a hand-drawn embrace mark and merch mockups.',
    cover: { src: '/assets/images/work/sealand-crew/cover.jpg', width: 750, height: 595 },
    gallery: [
      { src: '/assets/images/work/sealand-crew/cover.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/sealand-crew/01.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/sealand-crew/02.jpg', width: 750, height: 595 },
    ],
  },
  {
    slug: 'runna',
    title: 'RUNA',
    client: 'RUNA Social Running Club',
    category: 'Brand Identity',
    year: '2025',
    description: 'Identity and campaign poster series for a Cape Town / Johannesburg social running club — a running wordmark and a set of stark, high-contrast editorial posters.',
    cover: { src: '/assets/images/work/runna/cover.jpg', width: 750, height: 1061 },
    gallery: [
      { src: '/assets/images/work/runna/cover.jpg', width: 750, height: 1061 },
      { src: '/assets/images/work/runna/01.jpg', width: 750, height: 1061 },
      { src: '/assets/images/work/runna/02.jpg', width: 750, height: 595 },
      { src: '/assets/images/work/runna/03.jpg', width: 750, height: 595 },
    ],
  },
]
