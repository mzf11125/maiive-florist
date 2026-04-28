'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Trash2, ArrowLeft } from 'lucide-react'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Cherry Blossom Dream',
      price: 85,
      quantity: 1,
    },
  ])

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 10
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id)
      return
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Page Header */}
        <div className="px-4 sm:px-6 lg:px-8 py-16 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-6xl font-serif font-semibold text-foreground mb-4">
              Your Cart
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              Review your selections before proceeding to checkout
            </p>
          </div>
        </div>

        {/* Cart Content */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {cartItems.length > 0 ? (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <Card
                      key={item.id}
                      className="p-6 border-border hover:border-foreground/20 elegant-transition"
                    >
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex-1">
                          <Link
                            href={`/bouquets/${item.id}`}
                            className="text-lg font-serif font-semibold text-foreground hover:text-primary elegant-transition"
                          >
                            {item.name}
                          </Link>
                          <p className="text-muted-foreground font-body text-sm mt-1">
                            Premium arrangement
                          </p>
                        </div>

                        <div className="text-right">
                          <div className="text-2xl font-serif font-semibold text-foreground mb-4">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center justify-end border border-border rounded-sm">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-2 text-foreground hover:bg-secondary elegant-transition"
                            >
                              −
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))
                              }
                              className="w-12 text-center border-l border-r border-border bg-background text-foreground outline-none text-sm"
                              min="1"
                            />
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-2 text-foreground hover:bg-secondary elegant-transition"
                            >
                              +
                            </button>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="mt-4 text-sm text-destructive hover:text-destructive/80 elegant-transition flex items-center justify-end gap-2 w-full"
                          >
                            <Trash2 className="w-4 h-4" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="p-12 text-center border-border">
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                    Your cart is empty
                  </h3>
                  <p className="text-muted-foreground font-body mb-8">
                    Explore our beautiful collections and add your favorites.
                  </p>
                  <Link href="/bouquets">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 elegant-transition">
                      Continue Shopping
                    </Button>
                  </Link>
                </Card>
              )}
            </div>

            {/* Order Summary */}
            {cartItems.length > 0 && (
              <div>
                <Card className="p-8 border-border sticky top-24">
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between text-muted-foreground font-body">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground font-body">
                      <span>Shipping</span>
                      <span className={shipping === 0 ? 'text-primary' : ''}>
                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-muted-foreground font-body">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex justify-between items-center">
                      <span className="font-serif font-semibold text-foreground">Total</span>
                      <span className="text-3xl font-serif font-semibold text-foreground">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                    {shipping === 0 && (
                      <p className="text-xs text-primary font-body mt-2">
                        Free shipping applied!
                      </p>
                    )}
                  </div>

                  <Link href="/checkout">
                    <Button className="w-full px-8 py-6 text-base font-body bg-primary text-primary-foreground hover:bg-primary/90 elegant-transition rounded-sm mb-4">
                      Proceed to Checkout
                    </Button>
                  </Link>

                  <Link href="/bouquets">
                    <Button
                      variant="outline"
                      className="w-full border-foreground text-foreground hover:bg-secondary elegant-transition rounded-sm"
                    >
                      Continue Shopping
                    </Button>
                  </Link>

                  {/* Info */}
                  <div className="mt-8 pt-8 border-t border-border space-y-3 text-xs font-body text-muted-foreground">
                    <p>✓ Secure checkout</p>
                    <p>✓ Same-day delivery available</p>
                    <p>✓ 100% fresh guarantee</p>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
