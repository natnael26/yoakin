"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "wouter"
import { Server, Wifi, Shield, Cloud, Network, Database, Monitor, Smartphone, Router, Cable, Settings, Lock, Zap, CheckCircle, ArrowRight, Building2, Users, Clock, Award } from 'lucide-react'

export default function It() {
  const [activeService, setActiveService] = useState(0)

  const itServices = [
    {
      id: 1,
      icon: <Network className="h-12 w-12" />,
      title: "Network Infrastructure",
      description: "Complete network design, installation, and management solutions for businesses of all sizes.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: ["LAN/WAN Setup", "Fiber Optic Cabling", "Network Security", "24/7 Monitoring"],
      projects: "50+ Networks",
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-500",
    },
    {
      id: 2,
      icon: <Wifi className="h-12 w-12" />,
      title: "Wireless Solutions",
      description: "Enterprise-grade WiFi networks and wireless infrastructure for seamless connectivity.",
      image: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: ["WiFi 6 Technology", "Mesh Networks", "Guest Access", "Coverage Optimization"],
      projects: "80+ Installations",
      color: "from-green-500 to-emerald-400",
      bgColor: "bg-green-500",
    },
    {
      id: 3,
      icon: <Server className="h-12 w-12" />,
      title: "Server & Data Center",
      description: "Server installation, virtualization, and data center setup for optimal performance.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: ["Server Virtualization", "Backup Solutions", "Disaster Recovery", "Cloud Migration"],
      projects: "30+ Data Centers",
      color: "from-purple-500 to-pink-400",
      bgColor: "bg-purple-500",
    },
    {
      id: 4,
      icon: <Shield className="h-12 w-12" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and infrastructure.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: ["Firewall Management", "Threat Detection", "Security Audits", "Compliance Support"],
      projects: "100+ Secured",
      color: "from-red-500 to-orange-400",
      bgColor: "bg-red-500",
    },
    {
      id: 5,
      icon: <Cloud className="h-12 w-12" />,
      title: "Cloud Services",
      description: "Cloud migration, management, and optimization services for modern businesses.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: ["Cloud Migration", "Hybrid Solutions", "Cost Optimization", "Multi-Cloud Management"],
      projects: "40+ Migrations",
      color: "from-indigo-500 to-purple-400",
      bgColor: "bg-indigo-500",
    },
    {
      id: 6,
      icon: <Settings className="h-12 w-12" />,
      title: "IT Support & Maintenance",
      description: "Ongoing IT support, maintenance, and helpdesk services to keep your systems running.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: ["24/7 Support", "Remote Monitoring", "Preventive Maintenance", "Help Desk"],
      projects: "200+ Clients",
      color: "from-teal-500 to-blue-400",
      bgColor: "bg-teal-500",
    },
  ]

  const techStack = [
    { name: "Cisco", logo: "🔷", category: "Networking" },
    { name: "Microsoft", logo: "🟦", category: "Cloud & Software" },
    { name: "VMware", logo: "🔶", category: "Virtualization" },
    { name: "AWS", logo: "🟠", category: "Cloud Services" },
    { name: "HP Enterprise", logo: "⚪", category: "Infrastructure" },
    
  ]

  const processSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Comprehensive analysis of your current IT infrastructure and business requirements",
      icon: <Monitor className="h-8 w-8" />,
      color: "bg-blue-500",
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Custom IT solution design tailored to your specific needs and future growth",
      icon: <Network className="h-8 w-8" />,
      color: "bg-green-500",
    },
    {
      step: "03",
      title: "Implementation & Deployment",
      description: "Professional installation and configuration with minimal business disruption",
      icon: <Settings className="h-8 w-8" />,
      color: "bg-orange-500",
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Thorough testing and performance optimization to ensure optimal functionality",
      icon: <CheckCircle className="h-8 w-8" />,
      color: "bg-purple-500",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Network className="h-4 w-4" />
                <span>IT Infrastructure Solutions</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Building
                <span className="block text-blue-400">Digital</span>
                <span className="block text-cyan-400">Foundations</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                As a growing startup in the construction industry, we're expanding our expertise to include comprehensive IT infrastructure and data networking solutions for modern businesses.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: <Server className="h-6 w-6" />, label: "Projects", count: "5+" },
                  { icon: <Users className="h-6 w-6" />, label: "Clients", count: "10+" },
                  { icon: <Award className="h-6 w-6" />, label: "Uptime", count: "99.9%" },
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-cyan-400 mb-2 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl font-bold">{stat.count}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#services">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold group"
                  >
                    Explore Services
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 font-semibold bg-transparent"
                  >
                    Get Consultation
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Visual - Network Diagram */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Router className="h-16 w-16" />, title: "Network", color: "bg-blue-600", delay: "0s" },
                  { icon: <Wifi className="h-16 w-16" />, title: "Wireless", color: "bg-green-600", delay: "0.2s" },
                  { icon: <Server className="h-16 w-16" />, title: "Servers", color: "bg-purple-600", delay: "0.4s" },
                  { icon: <Shield className="h-16 w-16" />, title: "Security", color: "bg-red-600", delay: "0.6s" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2"
                    style={{ animationDelay: item.delay }}
                  >
                    <div className={`${item.color} text-white p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>

              {/* Connection Lines */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
              <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* About Our IT Division */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-lg">Our IT Division</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">Expanding Beyond Construction</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  While Yoakin Construction has built its reputation on physical infrastructure, we recognize that modern businesses need robust digital infrastructure to thrive. Our IT division represents our commitment to comprehensive solutions.
                </p>
                <p>
                  Leveraging our project management expertise and attention to detail from construction, we apply the same principles to IT infrastructure - building reliable, scalable, and secure digital foundations for businesses.
                </p>
                <p>
                  As a startup in the IT space, we bring fresh perspectives, competitive pricing, and personalized service that larger IT companies often can't match.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="mt-8 space-y-4">
                {[
                  "Construction-grade project management approach",
                  "Competitive startup pricing with enterprise quality",
                  "Personalized service and direct access to decision makers",
                  "Integrated solutions combining physical and digital infrastructure",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Tech Stack Visualization */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Technology Partners</h3>
                <div className="grid grid-cols-2 gap-4">
                  {techStack.map((tech, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="text-2xl">{tech.logo}</div>
                      <div>
                        <div className="font-semibold text-gray-900">{tech.name}</div>
                        <div className="text-sm text-gray-600">{tech.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg">Our IT Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">Complete IT Infrastructure Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From network design to cybersecurity, we provide end-to-end IT solutions for growing businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
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
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {service.projects}
                  </div>

                  {/* Icon Overlay */}
                  <div className={`absolute top-4 left-4 ${service.bgColor} text-white p-3 rounded-2xl group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href="/contact">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold group/btn">
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

      {/* Implementation Process */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">How We Deliver IT Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach ensuring successful IT infrastructure deployment
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {processSteps.map((process, index) => (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent z-0" />
                )}

                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 z-10">
                  {/* Step Number */}
                  <div className={`${process.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:scale-110 transition-transform`}>
                    {process.step}
                  </div>

                  {/* Icon */}
                  <div className="text-blue-600 mb-4 flex justify-center">{process.icon}</div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{process.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🚀</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Upgrade Your IT Infrastructure?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let our startup energy and construction-grade project management transform your digital infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold group"
              >
                Get Free Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
