import type { SanityImageObject } from '@sanity/image-url'

type SanityImage = SanityImageObject & { alt?: string }

// --- Projects ---

export const projectsQuery = `
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    "slug": slug.current,
    title,
    client,
    category,
    year,
    description,
    mainImage,
  }
`

export type ProjectSummary = {
  _id: string
  slug: string
  title: string
  client: string
  category: 'Brand Identity' | 'Web' | 'Motion' | 'Art Direction'
  year: string
  description: string
  mainImage: SanityImage | null
}

export const projectBySlugQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    title,
    client,
    category,
    year,
    description,
    mainImage,
    images,
  }
`

export type ProjectDetail = ProjectSummary & {
  images: SanityImage[] | null
}

export const projectSlugsQuery = `*[_type == "project"]{ "slug": slug.current }`

// --- Clients ---

export const clientsQuery = `
  *[_type == "client"] | order(_createdAt desc) {
    _id,
    "slug": slug.current,
    name,
    industry,
    description,
    mainImage,
    logo,
  }
`

export type ClientSummary = {
  _id: string
  slug: string
  name: string
  industry: string
  description: string
  mainImage: SanityImage | null
  logo: SanityImage | null
}

export const clientBySlugQuery = `
  *[_type == "client" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    name,
    industry,
    description,
    mainImage,
    logo,
  }
`

export type ClientDetail = ClientSummary

export const clientSlugsQuery = `*[_type == "client"]{ "slug": slug.current }`

// --- Posts ---

export const postsQuery = `
  *[_type == "post"] | order(date desc) {
    _id,
    "slug": slug.current,
    title,
    type,
    date,
    excerpt,
    mainImage,
  }
`

export type PostSummary = {
  _id: string
  slug: string
  title: string
  type: 'Press' | 'Blog' | 'Feature' | 'Finalist'
  date: string
  excerpt: string
  mainImage: SanityImage | null
}

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    title,
    type,
    date,
    excerpt,
    mainImage,
    content,
  }
`

// content is Portable Text — typed as unknown[] to avoid coupling to @portabletext/react internals
export type PostDetail = PostSummary & { content: unknown[] | null }

export const postSlugsQuery = `*[_type == "post"]{ "slug": slug.current }`

// --- Page Singletons ---

export const homePageQuery = `*[_type == "homePage" && _id == "homePage"][0]{ homeImage }`
export type HomePage = { homeImage: SanityImage | null }

export const aboutPageQuery = `*[_type == "aboutPage" && _id == "aboutPage"][0]{ aboutImage, body }`
export type AboutPage = { aboutImage: SanityImage | null; body: unknown[] | null }

export const contactPageQuery = `
  *[_type == "contactPage" && _id == "contactPage"][0] {
    contactImage,
    email,
    instagramUrl,
    linkedinUrl,
    formspreeId,
  }
`
export type ContactPage = {
  contactImage: SanityImage | null
  email: string | null
  instagramUrl: string | null
  linkedinUrl: string | null
  formspreeId: string | null
}
