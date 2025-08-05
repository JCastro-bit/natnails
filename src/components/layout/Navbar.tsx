import React, { useState, useEffect } from 'react'

interface NavbarProps {
  transparent?: boolean
}

export default function Navbar({ transparent = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    if (target.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(target)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  const socialLinks = [
    {
      href: 'https://www.instagram.com/natnails_profesional/',
      icon: '/icons/instagram-brands-solid-full.svg',
      alt: 'Instagram',
    },
    {
      href: 'https://www.tiktok.com/@natalia_natnails',
      icon: '/icons/tiktok-brands-solid-full.svg',
      alt: 'TikTok',
    },
    {
      href: 'https://wa.link/emgwzy',
      icon: '/icons/whatsapp-brands-solid-full.svg',
      alt: 'WhatsApp',
    },
    {
      href: 'https://linktr.ee/natnails_profesional',
      icon: '/icons/linktree-brands-solid-full.svg',
      alt: 'Linktree',
    },
  ]

  return (
    <>
      {/* Logo - separate positioning */}
      <div className="fixed top-4 left-4 z-50">
        <a href="/" className="flex items-center">
          <img
            src="https://natnails.cloud/wp-content/uploads/2023/11/cropped-Natnails-logo-mini.png"
            alt="NatNails Logo"
            className="h-8 w-auto transition-transform hover:scale-105"
          />
        </a>
      </div>

      {/* Centered Floating Pill Menu - Desktop */}
      <nav className="fixed top-4 left-1/2 z-50 hidden -translate-x-1/2 transform items-center space-x-4 rounded-full border border-white/40 bg-white/30 px-6 py-3 shadow-lg backdrop-blur-md md:flex">
        <a
          href="/"
          className="text-sm font-semibold text-black transition-colors hover:text-pink-600"
        >
          Inicio
        </a>
        <a
          href="https://natnails.cloud"
          className="text-sm font-semibold text-black transition-colors hover:text-pink-600"
        >
          Cursos
        </a>
        <div className="flex items-center space-x-3 border-l border-white/40 pl-4">
          {socialLinks.map(({ href, icon, alt }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-5 w-5 opacity-80 transition-opacity hover:opacity-100"
            >
              <img
                src={icon}
                alt={alt}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile menu button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-full border border-white/40 bg-white/30 p-2 text-gray-600 backdrop-blur-md transition-all hover:bg-white/50"
        >
          <span className="sr-only">Abrir menú</span>
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 right-4 left-4 z-40 md:hidden">
          <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/90 shadow-xl backdrop-blur-md">
            <div className="space-y-3 px-6 py-4">
              <a
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-base font-medium text-gray-700 transition-colors hover:text-pink-600"
              >
                Inicio
              </a>
              <a
                href="https://natnails.cloud"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-base font-medium text-gray-700 transition-colors hover:text-pink-600"
              >
                Cursos
              </a>

              {/* Mobile Social Icons */}
              <div className="border-t border-gray-200 pt-4">
                <p className="mb-3 text-sm text-gray-500">Síguenos en:</p>
                <div className="flex space-x-4">
                  {socialLinks.map(({ href, icon, alt }) => (
                    <a
                      key={alt}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-6 w-6 opacity-80 transition-opacity hover:opacity-100"
                    >
                      <img
                        src={icon}
                        alt={alt}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
