'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/work', label: 'Work' },
  { href: '/clients', label: 'Clients' },
  { href: '/news', label: 'News' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteShell() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [time, setTime] = useState('')
  const router = useRouter()

  useEffect(() => {
    function tick() {
      setTime(new Date().toLocaleTimeString('en-ZA', {
        timeZone: 'Africa/Johannesburg',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  function handleNavClick(href: string) {
    setMenuOpen(false)
    router.push(href)
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">

      {/* White backdrop — full screen on mobile, left column on desktop */}
      <div
        className="absolute inset-y-0 left-0 w-full lg:w-[38%] bg-white transition-opacity duration-200"
        style={{ opacity: menuOpen ? 1 : 0 }}
      />

      {/* Wordmark — full-width white bar on mobile (prevents scroll bleed), transparent on desktop */}
      <div className="absolute top-0 left-0 right-0 lg:right-auto lg:top-6 lg:left-6 pointer-events-auto bg-white lg:bg-transparent px-6 pt-6 pb-4 lg:p-0">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="block leading-none select-none hover:opacity-60 transition-opacity"
          style={{
            opacity: menuOpen ? 0 : 1,
            transition: 'opacity 0.15s ease',
            fontFamily: 'var(--font-space-grotesk)',
          }}
        >
          <span className="block text-2xl font-bold leading-tight">Somethings</span>
          <span className="block text-2xl font-bold leading-tight">Off</span>
        </Link>

        {/* Nav links — appear in wordmark position when menu open */}
        {menuOpen && (
          <nav className="flex flex-col gap-0.5" aria-label="Site navigation">
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`fade-up fade-up-delay-${i + 1} text-left text-sm font-normal leading-relaxed hover:opacity-50 transition-opacity cursor-pointer bg-transparent border-0 p-0`}
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* Live clock — bottom right, SAST */}
      {time && (
        <div
          className="absolute bottom-6 right-6 text-xs tabular-nums pointer-events-none"
          style={{ color: 'var(--color-muted)' }}
        >
          {time}
        </div>
      )}

      {/* Menu toggle — bottom left */}
      <button
        onClick={() => setMenuOpen((v) => !v)}
        className="absolute bottom-6 left-6 pointer-events-auto text-2xl font-light leading-none select-none hover:opacity-50 transition-opacity bg-transparent border-0 cursor-pointer"
        style={{
          transform: menuOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s ease',
          fontFamily: 'var(--font-space-grotesk)',
        }}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        +
      </button>
    </div>
  )
}
