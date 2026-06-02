export type Client = {
  slug: string
  name: string
  industry: string
  description: string
  imageSrc: string
  logoSrc?: string
}

export const clients: Client[] = [
  {
    slug: 'orbital-technologies',
    name: 'Orbital Technologies',
    industry: 'Consumer Tech',
    description: 'A Cape Town-based hardware company designing tools for creative professionals.',
    imageSrc: '/images/home.jpg',
  },
  {
    slug: 'meridian-architecture',
    name: 'Meridian Architecture',
    industry: 'Architecture',
    description: 'An international architecture and urbanism practice with studios in Johannesburg and London.',
    imageSrc: '/images/contact.jpg',
  },
  {
    slug: 'haven-wellness',
    name: 'Haven Wellness',
    industry: 'Hospitality',
    description: 'A hospitality group operating retreats across southern Africa.',
    imageSrc: '/images/home.jpg',
  },
  {
    slug: 'fieldwork-films',
    name: 'Fieldwork Films',
    industry: 'Film & Media',
    description: 'An independent production company making documentary and short-form content.',
    imageSrc: '/images/about.jpg',
  },
]
