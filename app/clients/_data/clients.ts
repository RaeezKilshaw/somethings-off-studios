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
    imageSrc: '/assets/images/about.jpg',
  },
  {
    slug: 'meridian-architecture',
    name: 'Meridian Architecture',
    industry: 'Architecture',
    description: 'An international architecture and urbanism practice with studios in Johannesburg and London.',
    imageSrc: '/assets/images/contact.jpg',
  },
  {
    slug: 'haven-wellness',
    name: 'Haven Wellness',
    industry: 'Hospitality',
    description: 'A hospitality group operating retreats across southern Africa.',
    imageSrc: '/assets/images/evrwscda.jpg',
  },
  {
    slug: 'fieldwork-films',
    name: 'Fieldwork Films',
    industry: 'Film & Media',
    description: 'An independent production company making documentary and short-form content.',
    imageSrc: '/assets/images/f54fd829b2bc42d1a478d06fb8efb741.jpg',
  },
  {
    slug: 'kestrel-capital',
    name: 'Kestrel Capital',
    industry: 'Finance',
    description: 'An independent investment firm focused on long-horizon bets in emerging markets.',
    imageSrc: '/assets/images/fwgresthrdmjyht.jpg',
  },
  {
    slug: 'solace-health',
    name: 'Solace Health',
    industry: 'Healthcare',
    description: 'A preventative health clinic built around the idea that medicine should feel like care.',
    imageSrc: '/assets/images/vesdcax.jpg',
  },
  {
    slug: 'vantage-properties',
    name: 'Vantage Properties',
    industry: 'Real Estate',
    description: 'A boutique property development company operating across the Western Cape.',
    imageSrc: '/assets/images/wvdbgfbfwe.jpg',
  },
  {
    slug: 'hollow-records',
    name: 'Hollow Records',
    industry: 'Music',
    description: 'An independent record label releasing electronic, ambient, and experimental music.',
    imageSrc: '/assets/images/3269eb20afc65700ad33a44a56d8e0eb.jpg',
  },
  {
    slug: 'common-ground',
    name: 'Common Ground',
    industry: 'Social Enterprise',
    description: 'A Johannesburg-based organisation building shared creative and civic infrastructure.',
    imageSrc: '/assets/images/a025a0f135bc9a7eb381b2ec9fbf341d.jpg',
  },
]
