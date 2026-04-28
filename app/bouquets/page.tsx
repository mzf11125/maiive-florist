'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Search } from 'lucide-react'

const bouquets = [
  {
    id: 1,
    name: 'Cherry Blossom Dream',
    price: 85,
    category: 'Spring',
    description: 'Soft pink and white blossoms',
    color: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)',
  },
  {
    id: 2,
    name: 'Sunset Romance',
    price: 95,
    category: 'Summer',
    description: 'Warm hues of orange and gold',
    color: 'linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)',
  },
  {
    id: 3,
    name: 'Garden Paradise',
    price: 105,
    category: 'Mixed',
    description: 'Mixed seasonal flowers',
    color: 'linear-gradient(135deg, #e9d5ff 0%, #d8b4fe 100%)',
  },
  {
    id: 4,
    name: 'Pure Elegance',
    price: 75,
    category: 'Classic',
    description: 'Classic white roses',
    color: 'linear-gradient(135deg, #f3e8ff 0%, #ede9fe 100%)',
  },
  {
    id: 5,
    name: 'Tropical Vibes',
    price: 110,
    category: 'Summer',
    description: 'Exotic tropical flowers',
    color: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
  },
  {
    id: 6,
    name: 'Autumn Spice',
    price: 90,
    category: 'Fall',
    description: 'Rich autumn tones',
    color: 'linear-gradient(135deg, #fed7aa 0%, #fdbf6b 100%)',
  },
  {
    id: 7,
    name: 'Romantic Red',
    price: 100,
    category: 'Romance',
    description: 'Deep crimson roses',
    color: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
  },
  {
    id: 8,
    name: 'Winter Frost',
    price: 85,
    category: 'Winter',
    description: 'Cool silver and white tones',
    color: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
  },
]

const categories = ['All', 'Spring', 'Summer', 'Fall', 'Winter', 'Classic', 'Romance', 'Mixed']

export default function BouquetsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('name')

  const filtered = bouquets
    .filter((b) => selectedCategory === 'All' || b.category === selectedCategory)
    .filter((b) => b.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      return a.name.localeCompare(b.name)
    })

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 border-b border-border text-center">
          <h1 className="text-6xl sm:text-7xl font-serif font-semibold text-foreground mb-4">
            Our Collections
          </h1>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Discover our carefully curated selection of premium flower arrangements
          </p>
        </section>

        {/* Filters Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search bouquets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-secondary text-foreground border-border"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-secondary text-foreground border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-secondary text-foreground border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Sort by Name</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Results Count */}
            <p className="text-sm text-muted-foreground font-body">
              Showing {filtered.length} of {bouquets.length} bouquets
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filtered.map((bouquet) => (
                  <Link key={bouquet.id} href={`/bouquets/${bouquet.id}`}>
                    <Card className="group cursor-pointer h-full border-border elegant-transition hover:border-foreground/20 overflow-hidden">
                      <div
                        className="h-64 bg-gradient-to-br elegant-transition group-hover:scale-105"
                        style={{ backgroundImage: bouquet.color }}
                      />
                      <div className="p-6">
                        <h3 className="font-serif text-lg font-semibold text-foreground mb-2 line-clamp-2">
                          {bouquet.name}
                        </h3>
                        <p className="text-sm text-muted-foreground font-body mb-4 line-clamp-1">
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
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground font-body">
                  No bouquets found. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
