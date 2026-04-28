'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <h2 className="text-xl font-serif font-semibold text-foreground">
                maiive
              </h2>
              <p className="text-xs font-body tracking-widest text-muted-foreground uppercase mt-1">
                florist
              </p>
            </div>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              Crafting beautiful moments with fresh, handcrafted flower arrangements for life's most precious occasions.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-6">Explore</h3>
            <ul className="space-y-3 text-sm font-body">
              <li>
                <Link href="/bouquets" className="text-muted-foreground hover:text-foreground elegant-transition">
                  Bouquets
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground elegant-transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground elegant-transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-6">Information</h3>
            <ul className="space-y-3 text-sm font-body">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground elegant-transition">
                  Delivery Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground elegant-transition">
                  Care Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground elegant-transition">
                  Returns Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-6">Get in Touch</h3>
            <div className="space-y-2 text-sm font-body text-muted-foreground">
              <p>
                <a href="tel:+15551234567" className="hover:text-foreground elegant-transition">
                  +1 (555) 123-4567
                </a>
              </p>
              <p>
                <a href="mailto:hello@maiive.florist" className="hover:text-foreground elegant-transition">
                  hello@maiive.florist
                </a>
              </p>
              <p className="pt-2">
                <span className="block">Mon–Fri: 9am–6pm</span>
                <span className="block">Sat–Sun: 10am–4pm</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-xs font-body text-muted-foreground">
          <p>
            &copy; {currentYear} maiive.florist. All rights reserved. Handcrafted with care.
          </p>
          <p className="mt-2 text-primary font-medium">Created by her future husband</p>
        </div>
      </div>
    </footer>
  )
}
