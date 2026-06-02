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
    imageSrc: '/assets/images/home.jpg',
  },
  {
    slug: 'meridian',
    title: 'Meridian',
    client: 'Meridian Architecture',
    category: 'Web',
    year: '2025',
    description: 'Digital presence for a global architecture practice. Editorial, image-first, deliberately slow.',
    imageSrc: '/assets/images/3269eb20afc65700ad33a44a56d8e0eb.jpg',
  },
  {
    slug: 'haven',
    title: 'Haven',
    client: 'Haven Wellness',
    category: 'Brand Identity',
    year: '2024',
    description: 'Brand system for a wellness and hospitality group across print, digital, and environment.',
    imageSrc: '/assets/images/3868e2e310df6472ec9155f73fea0e00.jpg',
  },
  {
    slug: 'fieldwork',
    title: 'Fieldwork',
    client: 'Fieldwork Films',
    category: 'Motion',
    year: '2024',
    description: 'Title sequence and motion language for a documentary series. Tactile, analogue-inspired.',
    imageSrc: '/assets/images/41047403a1acc78d27dab58b29ce7600.jpg',
  },
  {
    slug: 'kestrel',
    title: 'Kestrel',
    client: 'Kestrel Capital',
    category: 'Art Direction',
    year: '2025',
    description: 'Art direction and visual language for an independent investment firm. Restrained, authoritative, precise.',
    imageSrc: '/assets/images/80a31bf00e1a3dec102512afd9878c16.jpg',
  },
  {
    slug: 'solace',
    title: 'Solace',
    client: 'Solace Health',
    category: 'Web',
    year: '2024',
    description: 'Digital platform for a preventative health clinic. Warm, clear, human — without leaning clinical.',
    imageSrc: '/assets/images/a025a0f135bc9a7eb381b2ec9fbf341d.jpg',
  },
  {
    slug: 'vantage',
    title: 'Vantage',
    client: 'Vantage Properties',
    category: 'Brand Identity',
    year: '2023',
    description: 'Identity for a boutique property development company. Grounded in materiality, scaled for ambition.',
    imageSrc: '/assets/images/a63f72ec23ce88aa49c434df62638266.jpg',
  },
  {
    slug: 'hollow',
    title: 'Hollow',
    client: 'Hollow Records',
    category: 'Motion',
    year: '2025',
    description: 'Visual identity and motion work for an independent record label. Dark, textural, and alive.',
    imageSrc: '/assets/images/e8602604b0cfb9aadaf684f50faf9982.jpg',
  },
]
