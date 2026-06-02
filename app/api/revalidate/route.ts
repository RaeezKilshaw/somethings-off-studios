import { revalidateTag } from 'next/cache'
import { parseBody } from 'next-sanity/webhook'
import { type NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    )

    if (!isValidSignature) {
      return Response.json({ message: 'Invalid signature' }, { status: 401 })
    }

    if (!body?._type) {
      return Response.json({ message: 'Missing _type in body' }, { status: 400 })
    }

    revalidateTag(body._type, { expire: 0 })

    return Response.json({ revalidated: true, type: body._type })
  } catch (err) {
    return Response.json({ message: String(err) }, { status: 500 })
  }
}
