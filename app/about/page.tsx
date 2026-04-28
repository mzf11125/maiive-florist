'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Award, Users, Leaf } from 'lucide-react'

export default function AboutPage() {
  const team = [
    {
      name: 'Sofia Martinez',
      role: 'Founder & Lead Florist',
      bio: 'With 15 years of floral design experience, Sofia brings passion and artistry to every arrangement.',
    },
    {
      name: 'James Chen',
      role: 'Head of Operations',
      bio: 'Ensuring every bouquet arrives fresh and beautiful, James manages our delivery and quality standards.',
    },
    {
      name: 'Emma Wilson',
      role: 'Creative Director',
      bio: 'Emma designs our seasonal collections and keeps maiive at the forefront of floral trends.',
    },
  ]

  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We source flowers responsibly and use eco-friendly packaging for all our arrangements.',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Only the finest, freshest flowers make it into our bouquets. Every arrangement is a masterpiece.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We go above and beyond to make every order special.',
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-rose-50 to-pink-50 px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-4">About maiive.florist</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Crafting beautiful moments, one bouquet at a time since March, 2026.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                maiive.florist was founded on a simple belief: flowers have the power to transform moments into memories. What started as a small florist shop has grown into a thriving floral design studio serving our community with passion and creativity.
              </p>
              <p>
                Our founder, Sofia Martinez, started arranging flowers as a hobby while working in corporate finance. But her passion for floral design soon became undeniable. In March 2026, she took the leap and opened maiive.florist, combining her eye for beauty with her business acumen.
              </p>
              <p>
                Today, we pride ourselves on creating stunning arrangements that celebrate life&apos;s important moments. Whether it&apos;s a romantic anniversary, a joyful celebration, or a gesture of sympathy, our team is dedicated to crafting bouquets that convey your emotions beautifully.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-rose-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, idx) => {
                const Icon = value.icon
                return (
                  <Card key={idx} className="p-8 border-0 text-center">
                    <Icon className="w-12 h-12 text-rose-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <Card key={idx} className="p-8 border-0 text-center bg-rose-50">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-rose-200 to-pink-200 mx-auto mb-4 flex items-center justify-center text-rose-600 font-bold text-3xl">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-rose-600 font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-rose-600 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold mb-2">5000+</p>
                <p className="text-rose-100">Happy Customers</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">10,000+</p>
                <p className="text-rose-100">Bouquets Created</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">6 Years</p>
                <p className="text-rose-100">In Business</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-rose-100">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Order?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our beautiful collection of fresh flower bouquets and find the perfect arrangement for your occasion.
            </p>
            <Link href="/bouquets">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white">
                Shop Our Collections
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
