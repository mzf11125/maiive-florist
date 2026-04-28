'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Field, FieldLabel } from '@/components/ui/field'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '(555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@maiive.florist',
      link: 'mailto:hello@maiive.florist',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Flower Street, Garden City, GC 12345',
      link: '#',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon-Fri 9am-6pm, Sat-Sun 10am-4pm',
      link: '#',
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-rose-50 to-pink-50 px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-foreground mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, idx) => {
                    const Icon = info.icon
                    return (
                      <div key={idx}>
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-6 h-6 text-rose-600" />
                          <h3 className="font-semibold text-foreground">{info.label}</h3>
                        </div>
                        <a
                          href={info.link}
                          className="ml-9 text-muted-foreground hover:text-rose-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    )
                  })}
                </div>

                {/* Delivery Info */}
                <div className="mt-12 pt-8 border-t">
                  <h3 className="font-semibold text-foreground mb-4">Delivery Area</h3>
                  <p className="text-muted-foreground text-sm">
                    We deliver throughout the city and surrounding areas. Check if your area is covered during checkout.
                  </p>
                </div>

                {/* Custom Orders */}
                <div className="mt-8 bg-rose-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Custom Orders</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Planning a special event? We offer custom arrangements for weddings, corporate events, and more.
                  </p>
                  <p className="text-sm text-rose-600 font-semibold">Contact us to discuss your vision!</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-foreground mb-8">Send us a Message</h2>
                {submitted ? (
                  <Card className="p-8 bg-green-50 border-green-200">
                    <p className="text-green-800 text-center font-semibold">
                      ✓ Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                    </p>
                  </Card>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel htmlFor="name">Name</FieldLabel>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="mt-2"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="mt-2"
                        />
                      </Field>
                    </div>

                    <Field>
                      <FieldLabel htmlFor="subject">Subject</FieldLabel>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                        className="mt-2"
                      />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="message">Message</FieldLabel>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more..."
                        required
                        rows={6}
                        className="mt-2"
                      />
                    </Field>

                    <Button
                      type="submit"
                      className="w-full bg-rose-600 hover:bg-rose-700 text-white py-6 text-lg"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="border-t pt-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">How quickly can you deliver?</h3>
                  <p className="text-muted-foreground">
                    We offer same-day delivery for orders placed before 2pm on weekdays and 12pm on weekends.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Can I request specific flowers?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! Contact us with your preferences, and our florists will create a custom arrangement.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Do you offer subscriptions?</h3>
                  <p className="text-muted-foreground">
                    Yes! Our weekly and monthly subscription services deliver fresh bouquets right to your door.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">What&apos;s your return policy?</h3>
                  <p className="text-muted-foreground">
                    We guarantee fresh flowers. If you&apos;re not satisfied, contact us within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
