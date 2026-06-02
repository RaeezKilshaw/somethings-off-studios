export type Project = {
  slug: string
  title: string
  client: string
  category: 'Brand Identity' | 'Web' | 'Motion' | 'Art Direction'
  year: string
  description: string
  imageSrc: string
  images?: string[]
}

export const projects: Project[] = [
  {
    slug: 'orbital',
    title: 'Orbital',
    client: 'Orbital Technologies',
    category: 'Brand Identity',
    year: '2025',
    description: 'A complete visual identity system for an emerging consumer tech brand — mark, typography, and motion language.',
    imageSrc: '/images/home.jpg',
  },
  {
    slug: 'meridian',
    title: 'Meridian',
    client: 'Meridian Architecture',
    category: 'Web',
    year: '2025',
    description: 'Digital presence for a global architecture practice. Editorial, image-first, deliberately slow.',
    imageSrc: '/images/contact.jpg',
  },
  {
    slug: 'haven',
    title: 'Haven',
    client: 'Haven Wellness',
    category: 'Brand Identity',
    year: '2024',
    description: 'Brand system for a wellness and hospitality group across print, digital, and environment.',
    imageSrc: '/images/home.jpg',
  },
  {
    slug: 'fieldwork',
    title: 'Fieldwork',
    client: 'Fieldwork Films',
    category: 'Motion',
    year: '2024',
    description: 'Title sequence and motion language for a documentary series. Tactile, analogue-inspired.',
    imageSrc: '/images/about.jpg',
  },
]
