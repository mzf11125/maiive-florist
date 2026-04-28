'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Home() {
  const featuredBouquets = [
    {
      id: 1,
      name: 'Cherry Blossom Dream',
      price: 85,
      image: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)',
      description: 'Soft pink and white blossoms',
    },
    {
      id: 2,
      name: 'Sunset Romance',
      price: 95,
      image: 'linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)',
      description: 'Warm hues of orange and gold',
    },
    {
      id: 3,
      name: 'Garden Paradise',
      price: 105,
      image: 'linear-gradient(135deg, #e9d5ff 0%, #d8b4fe 100%)',
      description: 'Mixed seasonal flowers',
    },
    {
      id: 4,
      name: 'Pure Elegance',
      price: 75,
      image: 'linear-gradient(135deg, #f3e8ff 0%, #ede9fe 100%)',
      description: 'Classic white roses',
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center border-b border-border">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 inline-block">
              <p className="text-sm font-body tracking-widest text-muted-foreground uppercase">
                Luxury Flower Arrangements
              </p>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-semibold text-foreground mb-8 text-balance leading-tight">
              Handcrafted Beauty
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-body mb-12 max-w-2xl mx-auto">
              Discover exquisite bouquets crafted with precision and passion. Each arrangement tells a story of elegance and sophistication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/bouquets">
                <Button className="px-8 py-6 text-base font-body bg-primary text-primary-foreground hover:bg-primary/90 elegant-transition rounded-sm">
                  Explore Collections
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="px-8 py-6 text-base font-body border-foreground text-foreground hover:bg-secondary rounded-sm">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl sm:text-6xl font-serif font-semibold text-foreground mb-4">
                Curated Collections
              </h2>
              <p className="text-muted-foreground font-body max-w-xl mx-auto">
                Explore our finest arrangements, each designed with attention to detail
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredBouquets.map((bouquet) => (
                <Link key={bouquet.id} href={`/bouquets/${bouquet.id}`}>
                  <Card className="group cursor-pointer h-full border-border elegant-transition hover:border-foreground/20 overflow-hidden">
                    <div
                      className="h-64 bg-gradient-to-br elegant-transition group-hover:scale-105"
                      style={{ backgroundImage: bouquet.image }}
                    />
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                        {bouquet.name}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body mb-4">
                        {bouquet.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-serif font-semibold text-foreground">
                          ${bouquet.price}
                        </span>
                        <span className="text-primary font-body text-sm font-medium">
                          View →
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-4xl font-serif font-semibold text-primary mb-3">
                  1000+
                </div>
                <p className="text-foreground font-body">
                  Happy Customers
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-semibold text-primary mb-3">
                  24h
                </div>
                <p className="text-foreground font-body">
                  Same Day Delivery
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-semibold text-primary mb-3">
                  100%
                </div>
                <p className="text-foreground font-body">
                  Fresh Guarantee
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl sm:text-6xl font-serif font-semibold text-foreground mb-6">
              Ready to Send Beauty?
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-8">
              Create the perfect gift for someone special. Browse our exclusive collections today.
            </p>
            <Link href="/bouquets">
              <Button className="px-10 py-6 text-base font-body bg-primary text-primary-foreground hover:bg-primary/90 elegant-transition rounded-sm">
                Start Shopping
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
