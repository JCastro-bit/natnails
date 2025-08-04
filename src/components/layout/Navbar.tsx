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

  const navClasses = [
    'fixed top-0 w-full z-50 transition-all duration-300',
    transparent && !isScrolled
      ? 'bg-transparent'
      : 'bg-white/95 backdrop-blur-sm shadow-sm',
  ]
    .filter(Boolean)
    .join(' ')

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

  return (
    <nav className={navClasses}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                src="https://natnails.cloud/wp-content/uploads/2023/11/cropped-Natnails-logo-mini.png"
                alt="NatNails Logo"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#contenido"
                onClick={(e) => handleSmoothScroll(e, '#contenido')}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-pink-600"
              >
                Contenido
              </a>
              <a
                href="#bonos"
                onClick={(e) => handleSmoothScroll(e, '#bonos')}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-pink-600"
              >
                Bonos
              </a>
              <a
                href="#detalles"
                onClick={(e) => handleSmoothScroll(e, '#detalles')}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-pink-600"
              >
                Detalles
              </a>
              <a
                href="https://natnails.cloud"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-pink-600"
              >
                Más Cursos
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-pink-500 focus:outline-none"
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
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 bg-white px-2 pt-2 pb-3 shadow-lg sm:px-3">
            <a
              href="#contenido"
              onClick={(e) => {
                handleSmoothScroll(e, '#contenido')
                setIsMenuOpen(false)
              }}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-600"
            >
              Contenido
            </a>
            <a
              href="#bonos"
              onClick={(e) => {
                handleSmoothScroll(e, '#bonos')
                setIsMenuOpen(false)
              }}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-600"
            >
              Bonos
            </a>
            <a
              href="#detalles"
              onClick={(e) => {
                handleSmoothScroll(e, '#detalles')
                setIsMenuOpen(false)
              }}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-600"
            >
              Detalles
            </a>
            <a
              href="https://natnails.cloud"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-600"
            >
              Más Cursos
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
