'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/work', label: 'Work' },
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

      {/* Click-outside overlay — closes menu when clicking outside the nav panel */}
      {menuOpen && (
        <div
          className="absolute inset-0 pointer-events-auto"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* White backdrop — full screen on mobile, left column on desktop */}
      <div
        className="absolute inset-y-0 left-0 w-full lg:w-[38%] bg-white transition-opacity duration-200"
        style={{ opacity: menuOpen ? 1 : 0 }}
      />

      {/* Logo — transparent at every breakpoint, floats over scrolled content */}
      <div className="absolute top-0 left-0 right-0 lg:right-auto pointer-events-auto px-4 py-3 lg:p-6">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="block leading-none select-none hover:opacity-60 transition-opacity"
          style={{
            opacity: menuOpen ? 0 : 1,
            transition: 'opacity 0.15s ease',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/icons/asset-1.svg" alt="Somethings Off Studio" className="h-16 lg:h-20 w-auto" />
        </Link>
      </div>

      {/* Nav links — upper portion of the white panel when menu open */}
      {menuOpen && (
        <nav
          className="absolute inset-y-0 left-0 w-full lg:w-[38%] flex flex-col items-start justify-start pt-40 lg:pt-56 gap-0.5 px-6 lg:px-10 pointer-events-none"
          aria-label="Site navigation"
        >
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`fade-up fade-up-delay-${i + 1} text-left text-sm font-normal leading-relaxed hover:opacity-50 transition-opacity cursor-pointer bg-transparent border-0 p-0 pointer-events-auto`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}

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
        }}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        +
      </button>
    </div>
  )
}
