'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Star, Heart, ArrowLeft, Truck, RefreshCw, Share2 } from 'lucide-react'

const bouquets = [
  {
    id: 1,
    name: 'Cherry Blossom Dream',
    price: 85,
    category: 'Spring',
    description: 'Soft pink and white blossoms',
    color: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)',
    fullDescription: 'This elegant arrangement features delicate cherry blossoms in soft pink and white tones. Perfect for spring celebrations and romantic occasions.',
    flowers: ['Cherry Blossoms', 'White Roses', 'Eucalyptus'],
    height: '14 inches',
    vase: 'Crystal Vase',
    rating: 4.8,
    reviews: 127,
  },
  {
    id: 2,
    name: 'Sunset Romance',
    price: 95,
    category: 'Summer',
    description: 'Warm hues of orange and gold',
    color: 'linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)',
    fullDescription: 'A breathtaking blend of sunset tones featuring orange roses, gold carnations, and warm sunflowers.',
    flowers: ['Orange Roses', 'Gold Carnations', 'Sunflowers'],
    height: '16 inches',
    vase: 'Amber Glass Vase',
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 3,
    name: 'Garden Paradise',
    price: 105,
    category: 'Mixed',
    description: 'Mixed seasonal flowers',
    color: 'linear-gradient(135deg, #e9d5ff 0%, #d8b4fe 100%)',
    fullDescription: 'A stunning mix of seasonal blooms creating a vibrant garden feel. Perfect for celebrating life\'s beautiful moments.',
    flowers: ['Mixed Roses', 'Lisianthus', 'Greenery'],
    height: '18 inches',
    vase: 'White Ceramic Vase',
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 4,
    name: 'Pure Elegance',
    price: 75,
    category: 'Classic',
    description: 'Classic white roses',
    color: 'linear-gradient(135deg, #f3e8ff 0%, #ede9fe 100%)',
    fullDescription: 'Timeless beauty in white. This sophisticated arrangement of premium white roses is ideal for weddings and formal events.',
    flowers: ['White Roses', 'White Ranunculus', 'Eucalyptus'],
    height: '14 inches',
    vase: 'Crystal Vase',
    rating: 5.0,
    reviews: 234,
  },
  {
    id: 5,
    name: 'Tropical Vibes',
    price: 110,
    category: 'Summer',
    description: 'Exotic tropical flowers',
    color: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
    fullDescription: 'Escape to paradise with this exotic tropical arrangement featuring vibrant anthuriums and exotic greenery.',
    flowers: ['Anthuriums', 'Birds of Paradise', 'Monstera'],
    height: '20 inches',
    vase: 'Tall Glass Vase',
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 6,
    name: 'Autumn Spice',
    price: 90,
    category: 'Fall',
    description: 'Rich autumn tones',
    color: 'linear-gradient(135deg, #fed7aa 0%, #fdbf6b 100%)',
    fullDescription: 'Warm and inviting fall colors with burnt orange, deep red, and golden yellows.',
    flowers: ['Burnt Orange Roses', 'Red Dahlias', 'Golden Mums'],
    height: '15 inches',
    vase: 'Terracotta Vase',
    rating: 4.6,
    reviews: 112,
  },
  {
    id: 7,
    name: 'Romantic Red',
    price: 100,
    category: 'Romance',
    description: 'Deep crimson roses',
    color: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
    fullDescription: 'The ultimate expression of love. Premium crimson roses arranged to perfection.',
    flowers: ['Red Roses', 'Red Carnations', 'White Filler'],
    height: '17 inches',
    vase: 'Red Ceramic Vase',
    rating: 4.9,
    reviews: 276,
  },
  {
    id: 8,
    name: 'Winter Frost',
    price: 85,
    category: 'Winter',
    description: 'Cool silver and white tones',
    color: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
    fullDescription: 'Elegant winter whites with touches of silver and blue-toned foliage.',
    flowers: ['White Roses', 'Blue Thistle', 'Silver Eucalyptus'],
    height: '16 inches',
    vase: 'Silver Vase',
    rating: 4.7,
    reviews: 145,
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const bouquet = bouquets.find((b) => b.id === parseInt(params.id))

  if (!bouquet) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-semibold text-foreground mb-4">
              Bouquet not found
            </h1>
            <Link href="/bouquets">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Back to Collections
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${bouquet.name} to cart`)
  }

  const relatedBouquets = bouquets
    .filter((b) => b.category === bouquet.category && b.id !== bouquet.id)
    .slice(0, 3)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="px-4 sm:px-6 lg:px-8 py-6 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <Link href="/bouquets" className="flex items-center gap-2 text-sm text-muted-foreground font-body hover:text-foreground elegant-transition w-fit">
              <ArrowLeft className="w-4 h-4" />
              Back to Collections
            </Link>
          </div>
        </div>

        {/* Product Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image */}
            <div>
              <div
                className="h-96 rounded-sm elegant-transition"
                style={{ backgroundImage: bouquet.color }}
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <p className="text-sm font-body tracking-widest text-muted-foreground uppercase mb-3">
                    {bouquet.category}
                  </p>
                  <h1 className="text-5xl font-serif font-semibold text-foreground mb-4">
                    {bouquet.name}
                  </h1>

                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(bouquet.rating)
                              ? 'fill-primary text-primary'
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-body text-muted-foreground">
                      {bouquet.rating} ({bouquet.reviews} reviews)
                    </span>
                  </div>
                </div>

                <p className="text-lg font-body text-muted-foreground mb-8 leading-relaxed">
                  {bouquet.fullDescription}
                </p>

                {/* Specifications */}
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-xs font-body tracking-widest text-muted-foreground uppercase mb-2">
                      Flowers Included
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {bouquet.flowers.map((flower) => (
                        <span
                          key={flower}
                          className="px-3 py-1 bg-secondary text-foreground text-sm font-body rounded-sm"
                        >
                          {flower}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-xs font-body tracking-widest text-muted-foreground uppercase mb-1">
                        Height
                      </p>
                      <p className="font-body text-foreground">{bouquet.height}</p>
                    </div>
                    <div>
                      <p className="text-xs font-body tracking-widest text-muted-foreground uppercase mb-1">
                        Vase Type
                      </p>
                      <p className="font-body text-foreground">{bouquet.vase}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div>
                <div className="mb-8 pb-8 border-t border-border pt-8">
                  <div className="text-4xl font-serif font-semibold text-foreground mb-6">
                    ${bouquet.price}
                  </div>

                  <div className="space-y-4">
                    {/* Quantity */}
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-body text-muted-foreground uppercase tracking-widest">
                        Quantity
                      </span>
                      <div className="flex items-center border border-border rounded-sm">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-3 py-2 text-foreground hover:bg-secondary elegant-transition"
                        >
                          −
                        </button>
                        <input
                          type="number"
                          value={quantity}
                          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                          className="w-12 text-center border-l border-r border-border bg-background text-foreground outline-none"
                          min="1"
                        />
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-3 py-2 text-foreground hover:bg-secondary elegant-transition"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                      <Button
                        onClick={handleAddToCart}
                        className="flex-1 px-8 py-6 text-base font-body bg-primary text-primary-foreground hover:bg-primary/90 elegant-transition rounded-sm"
                      >
                        Add to Cart
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setIsWishlisted(!isWishlisted)}
                        className="px-6 border-foreground text-foreground hover:bg-secondary elegant-transition rounded-sm"
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            isWishlisted ? 'fill-current' : ''
                          }`}
                        />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="space-y-3 text-sm font-body text-muted-foreground">
                  <p>✓ Free shipping on orders over $50</p>
                  <p>✓ Same-day delivery available</p>
                  <p>✓ 100% fresh guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedBouquets.length > 0 && (
          <section className="px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-serif font-semibold text-foreground mb-12">
                Similar Arrangements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBouquets.map((related) => (
                  <Link key={related.id} href={`/bouquets/${related.id}`}>
                    <Card className="group cursor-pointer h-full border-border elegant-transition hover:border-foreground/20 overflow-hidden">
                      <div
                        className="h-64 bg-gradient-to-br elegant-transition group-hover:scale-105"
                        style={{ backgroundImage: related.color }}
                      />
                      <div className="p-6">
                        <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                          {related.name}
                        </h3>
                        <p className="text-sm text-muted-foreground font-body mb-4">
                          {related.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-serif font-semibold text-foreground">
                            ${related.price}
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
        )}
      </main>
      <Footer />
    </>
  )
}
