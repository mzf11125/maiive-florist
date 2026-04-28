'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Field, FieldLabel } from '@/components/ui/field'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { CheckCircle2, ArrowLeft } from 'lucide-react'

interface OrderItem {
  id: number
  name: string
  price: number
  quantity: number
}

export default function CheckoutPage() {
  const [orderComplete, setOrderComplete] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  })

  const cartItems: OrderItem[] = [
    {
      id: 1,
      name: 'Cherry Blossom Dream',
      price: 85,
      quantity: 1,
    },
  ]

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 10
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePlaceOrder = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.zip
    ) {
      alert('Please fill in all required fields')
      return
    }

    if (paymentMethod === 'card') {
      if (!formData.cardName || !formData.cardNumber || !formData.expiry || !formData.cvc) {
        alert('Please fill in all payment information')
        return
      }
    }

    console.log('Order placed:', formData)
    setOrderComplete(true)
  }

  if (orderComplete) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="max-w-md text-center py-20">
            <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-serif font-semibold text-foreground mb-4">
              Order Confirmed
            </h1>
            <p className="text-lg text-muted-foreground font-body mb-2">
              Thank you for your purchase!
            </p>
            <p className="text-muted-foreground font-body mb-8">
              Your bouquet will be delivered soon. You&apos;ll receive a confirmation email shortly.
            </p>
            <div className="space-y-3">
              <Link href="/bouquets">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 elegant-transition">
                  Continue Shopping
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="w-full border-foreground text-foreground hover:bg-secondary">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Page Header */}
        <div className="px-4 sm:px-6 lg:px-8 py-16 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <Link href="/cart" className="flex items-center gap-2 text-sm text-muted-foreground font-body hover:text-foreground elegant-transition mb-6 w-fit">
              <ArrowLeft className="w-4 h-4" />
              Back to Cart
            </Link>
            <h1 className="text-6xl font-serif font-semibold text-foreground">
              Checkout
            </h1>
          </div>
        </div>

        {/* Checkout Content */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form Section */}
            <div className="lg:col-span-2 space-y-8">
              {/* Shipping Information */}
              <Card className="p-8 border-border">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel>First Name *</FieldLabel>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className="bg-secondary border-border text-foreground"
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Last Name *</FieldLabel>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="bg-secondary border-border text-foreground"
                    />
                  </Field>
                  <Field className="md:col-span-2">
                    <FieldLabel>Email *</FieldLabel>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="bg-secondary border-border text-foreground"
                    />
                  </Field>
                  <Field className="md:col-span-2">
                    <FieldLabel>Phone *</FieldLabel>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      className="bg-secondary border-border text-foreground"
                    />
                  </Field>
                  <Field className="md:col-span-2">
                    <FieldLabel>Address *</FieldLabel>
                    <Input
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main St"
                      className="bg-secondary border-border text-foreground"
                    />
                  </Field>
                  <Field>
                    <FieldLabel>City *</FieldLabel>
                    <Input
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="San Francisco"
                      className="bg-secondary border-border text-foreground"
                    />
                  </Field>
                  <Field>
                    <FieldLabel>State *</FieldLabel>
                    <Input
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="CA"
                      className="bg-secondary border-border text-foreground"
                    />
                  </Field>
                  <Field>
                    <FieldLabel>ZIP Code *</FieldLabel>
                    <Input
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      placeholder="94102"
                      className="bg-secondary border-border text-foreground"
                    />
                  </Field>
                </div>
              </Card>

              {/* Payment Information */}
              <Card className="p-8 border-border">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                  Payment Method
                </h2>
                <div className="space-y-4">
                  <label className="flex items-center p-4 border border-border rounded-sm cursor-pointer elegant-transition hover:bg-secondary" htmlFor="card">
                    <input
                      id="card"
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-primary"
                    />
                    <span className="ml-3 font-body text-foreground">Credit Card</span>
                  </label>
                  <label className="flex items-center p-4 border border-border rounded-sm cursor-pointer elegant-transition hover:bg-secondary" htmlFor="paypal">
                    <input
                      id="paypal"
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-primary"
                    />
                    <span className="ml-3 font-body text-foreground">PayPal</span>
                  </label>
                </div>

                {paymentMethod === 'card' && (
                  <div className="mt-6 space-y-4">
                    <Field>
                      <FieldLabel>Cardholder Name *</FieldLabel>
                      <Input
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="bg-secondary border-border text-foreground"
                      />
                    </Field>
                    <Field>
                      <FieldLabel>Card Number *</FieldLabel>
                      <Input
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        className="bg-secondary border-border text-foreground"
                      />
                    </Field>
                    <div className="grid grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel>Expiry *</FieldLabel>
                        <Input
                          name="expiry"
                          value={formData.expiry}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className="bg-secondary border-border text-foreground"
                        />
                      </Field>
                      <Field>
                        <FieldLabel>CVC *</FieldLabel>
                        <Input
                          name="cvc"
                          value={formData.cvc}
                          onChange={handleInputChange}
                          placeholder="123"
                          className="bg-secondary border-border text-foreground"
                        />
                      </Field>
                    </div>
                  </div>
                )}
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="p-8 border-border sticky top-24">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-8 pb-8 border-b border-border">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between font-body text-muted-foreground">
                      <span>{item.name} x {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mb-8 pb-8 border-b border-border">
                  <div className="flex justify-between font-body text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-body text-muted-foreground">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? 'text-primary' : ''}>
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between font-body text-muted-foreground">
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
                </div>

                <Button
                  onClick={handlePlaceOrder}
                  className="w-full px-8 py-6 text-base font-body bg-primary text-primary-foreground hover:bg-primary/90 elegant-transition rounded-sm"
                >
                  Place Order
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
