import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import {
  postBySlugQuery,
  postSlugsQuery,
  type PostDetail,
} from '@/sanity/lib/queries'

type PageProps = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(postSlugsQuery)
  return slugs.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch<PostDetail | null>(
    postBySlugQuery,
    { slug },
    { next: { tags: ['post'] } },
  )
  if (!post) return {}
  return { title: `${post.title} — Somethings Off Studio` }
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params
  const post = await client.fetch<PostDetail | null>(
    postBySlugQuery,
    { slug },
    { next: { tags: ['post'] } },
  )
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
          src={
            post.mainImage
              ? urlForImage(post.mainImage).width(1200).url()
              : '/images/home.jpg'
          }
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>

      {post.content && post.content.length > 0 ? (
        <div className="text-sm leading-relaxed [&_p]:mb-4 [&_h2]:text-base [&_h2]:font-bold [&_h2]:mb-3 [&_a]:underline [&_a]:hover:opacity-50">
          <PortableText value={post.content as Parameters<typeof PortableText>[0]['value']} />
        </div>
      ) : null}
    </div>
  )
}
