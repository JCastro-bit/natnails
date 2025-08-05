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
      {/* Enhanced Logo with better contrast */}
      <div className="fixed top-6 left-6 z-50">
        <a href="/" className="group flex items-center">
          <div className="rounded-lg border border-white/20 bg-white/95 p-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://natnails.cloud/wp-content/uploads/2023/11/cropped-Natnails-logo-mini.png"
              alt="NatNails Logo"
              className="h-8 w-auto"
            />
          </div>
        </a>
      </div>

      {/* Enhanced Centered Floating Menu - Desktop */}
      <nav className="fixed top-6 left-1/2 z-50 hidden -translate-x-1/2 transform md:flex">
        <div className="flex items-center space-x-1 rounded-2xl border border-white/30 bg-white/95 px-2 py-2 shadow-2xl backdrop-blur-md">
          {/* Navigation Links */}
          <a
            href="/"
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-800 transition-all duration-200 hover:scale-105 hover:bg-pink-50 hover:text-pink-600"
          >
            Inicio
          </a>
          <a
            href="https://natnails.cloud"
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-800 transition-all duration-200 hover:scale-105 hover:bg-pink-50 hover:text-pink-600"
          >
            Cursos
          </a>

          {/* Separator */}
          <div className="mx-2 h-8 w-px bg-gray-200"></div>

          {/* Social Icons */}
          <div className="flex items-center space-x-2 pl-2">
            {socialLinks.map(({ href, icon, alt }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-8 w-8 rounded-lg bg-gray-50 p-1.5 transition-all duration-200 hover:scale-110 hover:bg-pink-50"
              >
                <img
                  src={icon}
                  alt={alt}
                  className="h-full w-full object-contain opacity-70 transition-opacity group-hover:opacity-100"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile menu button */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-2xl border border-white/30 bg-white/95 p-3 text-gray-700 shadow-2xl backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white"
        >
          <span className="sr-only">Abrir menú</span>
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed top-20 right-6 left-6 z-40 md:hidden">
            <div className="overflow-hidden rounded-3xl border border-white/30 bg-white/95 shadow-2xl backdrop-blur-md">
              <div className="px-6 py-6">
                {/* Navigation Links */}
                <div className="mb-6 space-y-2">
                  <a
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-gray-800 transition-all duration-200 hover:bg-pink-50 hover:text-pink-600"
                  >
                    Inicio
                  </a>
                  <a
                    href="https://natnails.cloud"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-gray-800 transition-all duration-200 hover:bg-pink-50 hover:text-pink-600"
                  >
                    Cursos
                  </a>
                </div>

                {/* Social Icons Section */}
                <div className="border-t border-gray-200 pt-6">
                  <p className="mb-4 text-sm font-medium text-gray-600">
                    Síguenos en:
                  </p>
                  <div className="grid grid-cols-4 gap-3">
                    {socialLinks.map(({ href, icon, alt }) => (
                      <a
                        key={alt}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center rounded-xl bg-gray-50 p-3 transition-all duration-200 hover:scale-105 hover:bg-pink-50"
                      >
                        <img
                          src={icon}
                          alt={alt}
                          className="mb-1 h-6 w-6 object-contain opacity-70 transition-opacity group-hover:opacity-100"
                          loading="lazy"
                        />
                        <span className="text-xs font-medium text-gray-600 transition-colors group-hover:text-pink-600">
                          {alt}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
