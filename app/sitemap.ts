import type { MetadataRoute } from 'next'
import { projects } from '@/app/work/_data/projects'

const BASE_URL = 'https://somethingsoffstudio.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/work', '/about', '/contact'].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }))

  const workRoutes = projects.map((project) => ({
    url: `${BASE_URL}/work/${project.slug}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...workRoutes]
}
