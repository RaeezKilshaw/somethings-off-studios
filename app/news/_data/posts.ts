export type Post = {
  slug: string
  title: string
  type: 'Press' | 'Blog' | 'Feature' | 'Finalist'
  date: string
  excerpt: string
  imageSrc: string
  content: string
}

export const posts: Post[] = [
  {
    slug: 'open-metaphors-feature',
    title: 'Open Metaphors — Feature',
    type: 'Press',
    date: 'June 2025',
    excerpt: 'Somethings Off Studio is featured in the June issue of Open Metaphors Magazine.',
    imageSrc: '/images/home.jpg',
    content: `Somethings Off Studio was recently featured in Open Metaphors Magazine's June issue, exploring how restraint and refusal can be a design strategy in themselves. The piece covers three recent projects and the studio's approach to working with clients who understand that the right answer is often doing less.`,
  },
  {
    slug: 'design-awards-finalist',
    title: 'Somethings Off selected as a finalist',
    type: 'Finalist',
    date: 'May 2025',
    excerpt: 'Selected as a finalist in the 2025 Design Awards, Brand Identity category.',
    imageSrc: '/images/contact.jpg',
    content: `The studio has been selected as a finalist in the 2025 Design Awards in the Brand Identity category for our work on the Orbital visual identity system. The awards ceremony takes place in August 2025.`,
  },
  {
    slug: 'on-working-slowly',
    title: 'On working slowly',
    type: 'Blog',
    date: 'April 2025',
    excerpt: 'Some thoughts on pace, process, and why we deliberately limit the number of projects we take on.',
    imageSrc: '/images/about.jpg',
    content: `There's a version of design practice that optimises for throughput. We've never been interested in that. This piece is an attempt to articulate why we work the way we work — slowly, carefully, with as few clients as we can afford to have.`,
  },
]
