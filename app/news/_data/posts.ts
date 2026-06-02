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
    imageSrc: '/assets/images/home.jpg',
    content: `Somethings Off Studio was recently featured in Open Metaphors Magazine's June issue, exploring how restraint and refusal can be a design strategy in themselves. The piece covers three recent projects and the studio's approach to working with clients who understand that the right answer is often doing less.`,
  },
  {
    slug: 'design-awards-finalist',
    title: 'Somethings Off selected as a finalist',
    type: 'Finalist',
    date: 'May 2025',
    excerpt: 'Selected as a finalist in the 2025 Design Awards, Brand Identity category.',
    imageSrc: '/assets/images/about.jpg',
    content: `The studio has been selected as a finalist in the 2025 Design Awards in the Brand Identity category for our work on the Orbital visual identity system. The awards ceremony takes place in August 2025.`,
  },
  {
    slug: 'on-working-slowly',
    title: 'On working slowly',
    type: 'Blog',
    date: 'April 2025',
    excerpt: 'Some thoughts on pace, process, and why we deliberately limit the number of projects we take on.',
    imageSrc: '/assets/images/80a31bf00e1a3dec102512afd9878c16.jpg',
    content: `There's a version of design practice that optimises for throughput. We've never been interested in that. This piece is an attempt to articulate why we work the way we work — slowly, carefully, with as few clients as we can afford to have.`,
  },
  {
    slug: 'new-studio',
    title: 'We moved',
    type: 'Blog',
    date: 'March 2025',
    excerpt: 'After two years working out of a shared space in the CBD, we finally have a place of our own.',
    imageSrc: '/assets/images/3868e2e310df6472ec9155f73fea0e00.jpg',
    content: `We moved into our own studio in March. It's smaller than the last space and that's deliberate. A room that fits three people well is better than one that fits twelve people loosely. The new address is in De Waterkant. Come say hello.`,
  },
  {
    slug: 'print-quarterly-issue',
    title: 'Print Quarterly — Issue 12',
    type: 'Feature',
    date: 'February 2025',
    excerpt: 'Our work on the Haven brand system is featured in the latest issue of Print Quarterly.',
    imageSrc: '/assets/images/41047403a1acc78d27dab58b29ce7600.jpg',
    content: `Print Quarterly's twelfth issue includes a four-page spread on our work for Haven Wellness, focusing on how the identity translates across environmental applications — signage, packaging, and printed collateral. The piece was written by the editors and draws on a conversation we had over two sessions in late 2024.`,
  },
  {
    slug: 'working-with-constraints',
    title: 'On constraints',
    type: 'Blog',
    date: 'January 2025',
    excerpt: 'A short essay on why limitations are often the most useful thing a brief can give you.',
    imageSrc: '/assets/images/a63f72ec23ce88aa49c434df62638266.jpg',
    content: `The briefs we find hardest to work with are the open ones. Unlimited budget, no fixed direction, do whatever you think is best. This sounds like freedom and it almost never is. The briefs we find most generative are the ones with sharp edges — a fixed colour, a single typeface, a narrow audience. Constraints are not the enemy of creativity. They are often the only thing that makes it possible.`,
  },
]
