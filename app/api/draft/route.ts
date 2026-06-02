import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

const paths: Record<string, string> = {
  project: '/work',
  client: '/clients',
  post: '/news',
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')
  const type = searchParams.get('type')

  if (secret !== process.env.SANITY_DRAFT_MODE_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }

  const draft = await draftMode()
  draft.enable()

  const base = (type && paths[type]) ?? '/'
  redirect(slug && type ? `${base}/${slug}` : base)
}
