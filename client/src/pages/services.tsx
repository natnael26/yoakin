"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "wouter"
import {
  Home,
  Building2,
  Factory,
  BracketsIcon as Bridge,
  Wrench,
  Users,
  ArrowRight,
  CheckCircle,
  Clock,
  Award,
  Shield,
} from "lucide-react"

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 1,
      icon: <Home className="h-12 w-12" />,
      title: "Residential Construction",
      description:
        "Custom homes, apartments, and residential complexes built to the highest standards with modern amenities and sustainable practices.",
      image:
        "images/home_1.png",
      features: ["Custom Design", "Quality Materials", "Energy Efficient", "Modern Amenities"],
      projects: "150+ Projects",
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-500",
    },
    {
      id: 2,
      icon: <Building2 className="h-12 w-12" />,
      title: "Commercial Buildings",
      description:
        "Office complexes, retail spaces, and commercial developments designed for functionality and aesthetic appeal.",
      image:
        "images/ayat_15.jpg",
      features: ["Modern Architecture", "Smart Systems", "", "Flexible Spaces"],
      projects: "80+ Projects",
      color: "from-purple-500 to-pink-400",
      bgColor: "bg-purple-500",
    },
    {
      id: 3,
      icon: <Factory className="h-12 w-12" />,
      title: "Industrial Facilities",
      description:
        "Manufacturing plants, warehouses, and industrial infrastructure solutions built for efficiency and safety.",
      image:
        "images/yoakin_3.png",
      features: ["Heavy Construction", "Safety Standards", "Industrial Grade", "Scalable Design"],
      projects: "45+ Projects",
      color: "from-orange-500 to-red-400",
      bgColor: "bg-orange-500",
    },
    {
      id: 4,
      icon: <Bridge className="h-12 w-12" />,
      title: "Infrastructure Projects",
      description: "Roads, bridges, and public infrastructure connecting communities and supporting economic growth.",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: ["Public Works", "Durable Design", "Community Impact", "Government Standards"],
      projects: "25+ Projects",
      color: "from-green-500 to-emerald-400",
      bgColor: "bg-green-500",
    },
    {
      id: 5,
      icon: <Wrench className="h-12 w-12" />,
      title: "Renovation & Restoration",
      description: "Breathing new life into existing structures with modern upgrades and historical preservation.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: ["Heritage Preservation", "Modern Upgrades", "Structural Repair", "Code Compliance"],
      projects: "60+ Projects",
      color: "from-teal-500 to-blue-400",
      bgColor: "bg-teal-500",
    },
    {
      id: 6,
      icon: <Users className="h-12 w-12" />,
      title: "Project Management",
      description: "Comprehensive project management services ensuring timely delivery and quality control.",
      image:
        "/team_5.jpg",
      features: ["Timeline Management", "Quality Control", "Budget Oversight", "Risk Management"],
      projects: "200+ Projects",
      color: "from-indigo-500 to-purple-400",
      bgColor: "bg-indigo-500",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Planning",
      description: "We meet with you to understand your vision, requirements, and budget constraints",
      icon: <Users className="h-8 w-8" />,
      color: "bg-blue-500",
    },
    {
      step: "02",
      title: "Design & Engineering",
      description: "Our expert team creates detailed architectural plans and engineering specifications",
      icon: <Building2 className="h-8 w-8" />,
      color: "bg-green-500",
    },
    {
      step: "03",
      title: "Construction & Execution",
      description: "We execute the project with precision, maintaining quality and safety standards",
      icon: <Wrench className="h-8 w-8" />,
      color: "bg-orange-500",
    },
    {
      step: "04",
      title: "Quality Assurance & Handover",
      description: "Final inspection, quality checks, and project handover with full documentation",
      icon: <CheckCircle className="h-8 w-8" />,
      color: "bg-purple-500",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--ethiopia-beige)] via-white to-gray-100 overflow-hidden">
        {/* Construction Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fillOpacity='0.4' fillRule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[var(--ethiopia-brown)] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Building2 className="h-4 w-4" />
                <span>Professional Services</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Building
                <span className="block text-[var(--ethiopia-brown)]">Excellence</span>
                <span className="block text-[var(--ethiopia-gold)]">Together</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From residential dreams to commercial landmarks, we deliver comprehensive construction solutions that
                exceed expectations and stand the test of time.
              </p>

              {/* Service Categories Preview */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: <Home className="h-6 w-6" />, label: "Residential", count: "150+" },
                  { icon: <Building2 className="h-6 w-6" />, label: "Commercial", count: "80+" },
                  { icon: <Factory className="h-6 w-6" />, label: "Industrial", count: "45+" },
                ].map((category, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-[var(--ethiopia-brown)] mb-2">{category.icon}</div>
                    <div className="text-2xl font-bold text-gray-900">{category.count}</div>
                    <div className="text-sm text-gray-600">{category.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#services">
                  <Button
                    size="lg"
                    className="bg-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-chocolate)] text-white px-8 py-4 font-semibold group"
                  >
                    Explore Services
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[var(--ethiopia-brown)] text-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-brown)] hover:text-white px-8 py-4 font-semibold bg-transparent"
                  >
                    Get Consultation
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              {/* Main Service Icons Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Home className="h-16 w-16" />, title: "Residential", color: "bg-blue-500", delay: "0s" },
                  {
                    icon: <Building2 className="h-16 w-16" />,
                    title: "Commercial",
                    color: "bg-purple-500",
                    delay: "0.2s",
                  },
                  {
                    icon: <Factory className="h-16 w-16" />,
                    title: "Industrial",
                    color: "bg-orange-500",
                    delay: "0.4s",
                  },
                  {
                    icon: <Bridge className="h-16 w-16" />,
                    title: "Infrastructure",
                    color: "bg-green-500",
                    delay: "0.6s",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    style={{ animationDelay: service.delay }}
                  >
                    <div
                      className={`${service.color} text-white p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--ethiopia-gold)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>

              {/* Floating Construction Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-[var(--ethiopia-gold)]/20 rounded-full blur-xl animate-pulse" />
              <div
                className="absolute -bottom-8 -right-8 w-20 h-20 bg-[var(--ethiopia-brown)]/20 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              />

              {/* Blueprint Lines */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--ethiopia-gold)]/30 to-transparent" />
              <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[var(--ethiopia-gold)]/30 to-transparent" />
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="mt-20 bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "200+", label: "Projects Completed", icon: <Award className="h-6 w-6" /> },
                { number: "10+", label: "Years Experience", icon: <Clock className="h-6 w-6" /> },
                { number: "6", label: "Service Categories", icon: <Building2 className="h-6 w-6" /> },
                { number: "100%", label: "Quality Guaranteed", icon: <Shield className="h-6 w-6" /> },
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-[var(--ethiopia-brown)] mb-2 flex justify-center group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--ethiopia-gold)] font-semibold text-lg">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">Complete Construction Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we deliver excellence in every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                onMouseEnter={() => setActiveService(index)}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Project Count Badge */}
                  <div className="absolute top-4 right-4 bg-[var(--ethiopia-gold)] text-white px-3 py-1 rounded-full text-sm font-bold">
                    {service.projects}
                  </div>

                  {/* Icon Overlay */}
                  <div
                    className={`absolute top-4 left-4 ${service.bgColor} text-white p-3 rounded-2xl group-hover:scale-110 transition-transform`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[var(--ethiopia-brown)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[var(--ethiopia-gold)]" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href="/contact">
                    <Button className="w-full bg-gradient-to-r from-[var(--ethiopia-brown)] to-[var(--ethiopia-chocolate)] hover:from-[var(--ethiopia-chocolate)] hover:to-[var(--ethiopia-brown)] text-white font-semibold group/btn">
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-[var(--ethiopia-beige)] via-white to-[var(--ethiopia-beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--ethiopia-gold)] font-semibold text-lg">Our Methodology</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven process that ensures quality, efficiency, and client satisfaction
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {processSteps.map((process, index) => (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[var(--ethiopia-gold)] to-transparent z-0" />
                )}

                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 z-10">
                  {/* Step Number */}
                  <div
                    className={`${process.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:scale-110 transition-transform`}
                  >
                    {process.step}
                  </div>

                  {/* Icon */}
                  <div className="text-[var(--ethiopia-brown)] mb-4 flex justify-center">{process.icon}</div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{process.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Process Illustration */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Process?</h3>
                <div className="space-y-4">
                  {[
                    "Transparent communication at every stage",
                    "Regular progress updates and reporting",
                    "Quality checkpoints throughout construction",
                    "On-time delivery with budget adherence",
                    "Post-completion support and warranty",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-[var(--ethiopia-gold)]" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="images/yoakin_2.png"
                  alt="Construction process"
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-[var(--ethiopia-gold)] rounded-2xl p-6 text-white shadow-xl">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-[var(--ethiopia-brown)] to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Get in touch with our expert team for a free consultation and detailed project quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[var(--ethiopia-gold)] hover:bg-[var(--ethiopia-gold)]/90 text-white px-8 py-4 text-lg font-semibold group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--ethiopia-brown)] px-8 py-4 text-lg font-semibold bg-transparent"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
