'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

// Replace YOUR_FORM_ID with your Formspree form ID from formspree.io
const FORMSPREE_ID = 'YOUR_FORM_ID'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setState('success')
        form.reset()
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
        Message sent. We&apos;ll be in touch.
      </p>
    )
  }

  const inputClass = 'w-full border-b border-black/20 bg-transparent py-2 text-sm outline-none focus:border-black transition-colors placeholder:text-[var(--color-muted)]'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className={inputClass}
        disabled={state === 'submitting'}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className={inputClass}
        disabled={state === 'submitting'}
      />
      <select
        name="project_type"
        required
        className={inputClass}
        defaultValue=""
        disabled={state === 'submitting'}
      >
        <option value="" disabled>Project type</option>
        <option value="Brand Identity">Brand Identity</option>
        <option value="Web">Web</option>
        <option value="Motion">Motion</option>
        <option value="Other">Other</option>
      </select>
      <textarea
        name="message"
        placeholder="Tell us about your project"
        required
        rows={4}
        className={`${inputClass} resize-none`}
        disabled={state === 'submitting'}
      />

      {state === 'error' && (
        <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
          Something went wrong. Try emailing us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="w-fit text-sm hover:opacity-50 transition-opacity disabled:opacity-30"
      >
        {state === 'submitting' ? 'Sending...' : 'Send →'}
      </button>
    </form>
  )
}
