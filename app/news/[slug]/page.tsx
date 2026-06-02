import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts } from '@/app/news/_data/posts'

type PageProps = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return { title: `${post.title} — Somethings Off Studio` }
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen px-6 lg:pl-[38%] lg:pr-8 pt-28 lg:pt-20 pb-16 max-w-4xl">
      <Link
        href="/news"
        className="text-xs tracking-wide uppercase mb-10 block hover:opacity-50 transition-opacity"
        style={{ color: 'var(--color-muted)' }}
      >
        ← News
      </Link>

      <p className="text-[10px] tracking-widest uppercase mb-2" style={{ color: 'var(--color-muted)' }}>
        {post.type} — {post.date}
      </p>
      <h1 className="text-xl font-bold leading-tight mb-8">{post.title}</h1>

      <div className="relative w-full aspect-[4/3] mb-10">
        <Image
          src={post.imageSrc}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>

      <p className="text-sm leading-relaxed">{post.content}</p>
    </div>
  )
}
