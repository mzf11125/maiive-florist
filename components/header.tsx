'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, ShoppingCart } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { label: 'Bouquets', href: '/bouquets' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-serif font-semibold text-foreground tracking-tight">
              maiive
            </div>
            <div className="text-xs font-body tracking-widest text-muted-foreground uppercase">
              florist
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-body text-foreground hover:text-primary elegant-transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-foreground hover:text-primary hover:bg-secondary/50 elegant-transition"
              >
                <ShoppingCart className="w-5 h-5" />
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-foreground hover:text-primary elegant-transition"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 border-t border-border">
            <div className="space-y-4 pt-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm font-body text-foreground hover:text-primary elegant-transition py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
