"use client"

import { useState } from "react"
import { PortfolioFilter, PortfolioGrid } from "@/components/portfolio-filter"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin, Ruler, Building } from "lucide-react"
import { SEOHead } from '@/components/SEOHead';
export default function Portfolio() {
  const [filter, setFilter] = useState("all")

  return (
    <>
    <SEOHead
       title="Construction in Addis Ababa | Yoakin Grade One Contractors"
       description="Certified building contractors in Bole, Kazanchis,ayat and Addis Ababa."
       url="https://yoakinconstruction.com/porfolio"
     />
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-[var(--ethiopia-brown)] to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our{" "}
              <span className="text-[var(--ethiopia-gold)] relative">
                Projects
                <span className="absolute bottom-0 left-0 w-full h-2 bg-[var(--ethiopia-gold)]/30" />
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-16">
              Showcasing our finest work across Ethiopia - from modern residences to landmark commercial projects
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "100+", label: "Projects Completed" },
                { number: "10+", label: "Years Experience" },
                { number: "15", label: "Cities Covered" },
                { number: "98%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--ethiopia-gold)] mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioFilter onFilterChange={setFilter} />
          <PortfolioGrid filter={filter} />

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[var(--ethiopia-brown)] to-[var(--ethiopia-chocolate)] hover:from-[var(--ethiopia-chocolate)] hover:to-[var(--ethiopia-brown)] text-white px-12 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Load More Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-24 bg-gradient-to-br from-[var(--ethiopia-beige)] via-white to-[var(--ethiopia-beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <span className="text-[var(--ethiopia-gold)] font-semibold text-lg">Featured Project</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Addis Business Center</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our flagship commercial project in the heart of Addis Ababa. This 15-story office complex features
                  modern amenities, sustainable design elements, and state-of-the-art infrastructure.
                </p>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: <Building className="h-6 w-6" />, label: "Project Type", value: "Commercial Office" },
                  { icon: <Calendar className="h-6 w-6" />, label: "Completed", value: "March 2023" },
                  { icon: <Ruler className="h-6 w-6" />, label: "Building Area", value: "25,000 sq m" },
                  { icon: <MapPin className="h-6 w-6" />, label: "Location", value: "Addis Ababa" },
                ].map((detail, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-md hover:-translate-y-1 transition-transform"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-[var(--ethiopia-brown)]">{detail.icon}</div>
                      <h4 className="font-semibold text-gray-900 text-sm">{detail.label}</h4>
                    </div>
                    <p className="text-gray-700 font-medium">{detail.value}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                size="lg"
                className="bg-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-chocolate)] text-white px-8 py-4 font-semibold group"
              >
                View Project Details
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Addis Business Center"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-[var(--ethiopia-gold)] text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  Featured
                </div>
              </div>

              {/* Additional Images */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
                ].map((image, index) => (
                  <div
                    key={index}
                    className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Project view ${index + 1}`}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-[var(--ethiopia-gold)]/20 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-[var(--ethiopia-brown)]/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-[var(--ethiopia-brown)] to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Let's discuss how we can bring your construction vision to life with the same excellence showcased in our
            portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[var(--ethiopia-gold)] hover:bg-[var(--ethiopia-gold)]/90 text-white px-8 py-4 font-semibold group"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--ethiopia-brown)] px-8 py-4 font-semibold bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>

    </>
  )
}
