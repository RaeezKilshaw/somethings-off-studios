import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { posts } from '@/app/news/_data/posts'

export const metadata: Metadata = {
  title: 'News — Somethings Off Studio',
}

export default function NewsPage() {
  return (
    <div className="min-h-screen pl-[38%] pr-8 pt-20 pb-16">
      <div className="columns-2 gap-10">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/news/${post.slug}`}
            className="block mb-10 break-inside-avoid group"
          >
            <div className="relative overflow-hidden">
              <Image
                src={post.imageSrc}
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
