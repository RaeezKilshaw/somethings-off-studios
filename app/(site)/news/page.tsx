import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { postsQuery, type PostSummary } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'News — Somethings Off Studio',
}

export default async function NewsPage() {
  const posts = await client.fetch<PostSummary[]>(
    postsQuery,
    {},
    { next: { tags: ['post'] } },
  )

  return (
    <div className="min-h-screen px-6 lg:pl-[38%] lg:pr-8 pt-28 lg:pt-20 pb-16">
      <div className="columns-1 lg:columns-2 gap-10">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/news/${post.slug}`}
            className="block mb-10 break-inside-avoid group"
          >
            <div className="relative overflow-hidden">
              <Image
                src={
                  post.mainImage
                    ? urlForImage(post.mainImage).width(600).url()
                    : '/images/home.jpg'
                }
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover group-hover:opacity-90 transition-opacity"
                sizes="50vw"
              />
            </div>
            <div className="mt-3">
              <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: 'var(--color-muted)' }}>
                {post.type}
              </p>
              <p className="text-sm leading-snug">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
