"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "wouter"
import { Truck, Wrench, Settings, Shield, Clock, DollarSign, Phone, Mail, MapPin, CheckCircle, ArrowRight, Star, Calendar, Users, Award, Fuel, Gauge, Weight } from 'lucide-react'

export default function Machinery() {
  const [activeCategory, setActiveCategory] = useState("excavators")

  const equipmentCategories = [
    {
      id: "excavators",
      name: "Excavators",
      icon: "🚜",
      description: "Heavy-duty excavators for all construction needs",
      count: "15+ Units"
    },
    {
      id: "bulldozers",
      name: "Bulldozers",
      icon: "🚛",
      description: "Powerful bulldozers for earthmoving projects",
      count: "8+ Units"
    },
    {
      id: "cranes",
      name: "Cranes",
      icon: "🏗️",
      description: "Mobile and tower cranes for lifting operations",
      count: "12+ Units"
    },
    {
      id: "trucks",
      name: "Dump Trucks",
      icon: "🚚",
      description: "Heavy-duty trucks for material transportation",
      count: "20+ Units"
    },
    {
      id: "loaders",
      name: "Wheel Loaders",
      icon: "🚜",
      description: "Front-end loaders for material handling",
      count: "10+ Units"
    },
    {
      id: "compactors",
      name: "Compactors",
      icon: "🛞",
      description: "Soil and asphalt compaction equipment",
      count: "6+ Units"
    }
  ]

  const equipmentInventory = {
    excavators: [
      {
        name: "CAT 320D Excavator",
        brand: "Caterpillar",
        year: "2020",
        hours: "2,500 hrs",
        price: "",
        rental: "",
        specs: {
          weight: "20.5 tons",
          engine: "122 HP",
          bucket: "1.2 m³"
        },
        image: "",
        condition: "Excellent",
        available: true
      },
      {
        name: "Komatsu PC200-8",
        brand: "Komatsu",
        year: "2019",
        hours: "3,200 hrs",
        price: "",
        rental: "",
        specs: {
          weight: "19.8 tons",
          engine: "148 HP",
          bucket: "1.0 m³"
        },
        image: "",
        condition: "Good",
        available: true
      },
      {
        name: "Volvo EC210B",
        brand: "Volvo",
        year: "2021",
        hours: "1,800 hrs",
        price: "",
        rental: "",
        specs: {
          weight: "21.2 tons",
          engine: "150 HP",
          bucket: "1.15 m³"
        },
        image: "",
        condition: "Like New",
        available: false
      }
    ],
    bulldozers: [
      {
        name: "CAT D6T Bulldozer",
        brand: "Caterpillar",
        year: "2020",
        hours: "2,800 hrs",
        price: "",
        rental: "",
        specs: {
          weight: "18.5 tons",
          engine: "215 HP",
          blade: "3.4 m³"
        },
        image: "",
        condition: "Excellent",
        available: true
      },
      {
        name: "Komatsu D65PX-17",
        brand: "Komatsu",
        year: "2019",
        hours: "3,500 hrs",
        price: "",
        rental: "",
        specs: {
          weight: "17.2 tons",
          engine: "190 HP",
          blade: "3.1 m³"
        },
        image: "",
        condition: "Good",
        available: true
      }
    ],
    cranes: [
      {
        name: "Liebherr LTM 1050",
        brand: "Liebherr",
        year: "2021",
        hours: "",
        price: "",
        rental: "",
        specs: {
          weight: "36 tons",
          engine: "367 HP",
          capacity: "50 tons"
        },
        image: "",
        condition: "Like New",
        available: true
      }
    ],
    trucks: [
      {
        name: "Volvo FMX 440",
        brand: "Volvo",
        year: "2020",
        hours: "45,000 km",
        price: "",
        rental: "",
        specs: {
          weight: "26 tons",
          engine: "440 HP",
          capacity: "20 m³"
        },
        image: "",
        condition: "Excellent",
        available: true
      }
    ],
    loaders: [
      {
        name: "CAT 950M Loader",
        brand: "Caterpillar",
        year: "2020",
        hours: "2,200 hrs",
        price: "",
        rental: "",
        specs: {
          weight: "16.8 tons",
          engine: "174 HP",
          bucket: "2.3 m³"
        },
        image: "",
        condition: "Excellent",
        available: true
      }
    ],
    compactors: [
      {
        name: "Bomag BW 213 D-5",
        brand: "Bomag",
        year: "2021",
        hours: "800 hrs",
        price: "",
        rental: "",
        specs: {
          weight: "13.2 tons",
          engine: "129 HP",
          width: "2.13 m"
        },
        image: "",
        condition: "Like New",
        available: true
      }
    ]
  }

  const services = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Equipment Sales",
      description: "New and used construction equipment from trusted brands",
      features: ["Quality Inspection", "Warranty Included", "Financing Available", "Trade-in Options"]
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Equipment Rental",
      description: "Daily, weekly, and monthly rental options for all equipment",
      features: ["Flexible Terms", "Operator Training", "Delivery Service", "24/7 Support"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Maintenance & Repair",
      description: "Professional maintenance and repair services for all brands",
      features: ["Certified Technicians", "Genuine Parts", "On-site Service", "Preventive Maintenance"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Operator Training",
      description: "Professional training programs for equipment operators",
      features: ["Certified Instructors", "Safety Training", "Hands-on Practice", "Certification"]
    }
  ]

  const currentInventory = equipmentInventory[activeCategory as keyof typeof equipmentInventory] || []

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[var(--ethiopia-brown)] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Truck className="h-4 w-4" />
                <span>Construction Equipment</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Quality Construction
                <span className="block text-[var(--ethiopia-brown)]">Equipment & Machinery</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Buy, rent, or lease construction equipment from Ethiopia's trusted dealer. We offer quality machinery, competitive prices, and reliable service for all your construction needs.
              </p>

              {/* Quick Stats */}
              

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#inventory">
                  <Button
                    size="lg"
                    className="bg-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-chocolate)] text-white px-8 py-4 font-semibold group"
                  >
                    View Equipment
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[var(--ethiopia-brown)] text-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-brown)] hover:text-white px-8 py-4 font-semibold bg-transparent"
                  >
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/images/sino.png"
                    alt="Excavator"
                    className="rounded-xl shadow-lg w-full h-40 object-cover"
                  />
                  <img
                    src="/images/grader_1.png"
                    alt="Bulldozer"
                    className="rounded-xl shadow-lg w-full h-32 object-cover"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="/images/loader.png"
                    alt="Crane"
                    className="rounded-xl shadow-lg w-full h-32 object-cover"
                  />
                  <img
                    src="/images/pick_up_1.png"
                    alt="Loader"
                    className="rounded-xl shadow-lg w-full h-40 object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Price Tag */}
             
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Complete equipment solutions for your construction projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-[var(--ethiopia-brown)] mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Equipment Categories</h2>
            <p className="text-xl text-gray-600">Browse our extensive inventory by category</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentCategories.map((category, index) => (
              <div
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`cursor-pointer p-6 rounded-xl transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[var(--ethiopia-brown)] text-white shadow-lg scale-105'
                    : 'bg-white hover:shadow-md hover:scale-102'
                }`}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className={`mb-3 ${activeCategory === category.id ? 'text-gray-200' : 'text-gray-600'}`}>
                  {category.description}
                </p>
                <div className={`text-sm font-semibold ${
                  activeCategory === category.id ? 'text-[var(--ethiopia-gold)]' : 'text-[var(--ethiopia-brown)]'
                }`}>
                  {category.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Inventory */}
      <section id="inventory" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available {equipmentCategories.find(cat => cat.id === activeCategory)?.name}
            </h2>
            <p className="text-xl text-gray-600">Quality equipment ready for sale or rent</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentInventory.map((equipment, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Equipment Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={equipment.image || "/placeholder.svg"}
                    alt={equipment.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      equipment.condition === 'Like New' ? 'bg-green-100 text-green-800' :
                      equipment.condition === 'Excellent' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {equipment.condition}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      equipment.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {equipment.available ? 'Available' : 'Rented'}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-[var(--ethiopia-gold)] text-white px-3 py-1 rounded-full text-sm font-bold">
                    {equipment.year}
                  </div>
                </div>

                {/* Equipment Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{equipment.name}</h3>
                    <span className="text-sm text-gray-500">{equipment.brand}</span>
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-4">{equipment.hours}</div>

                  {/* Specifications */}
                  <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <Weight className="h-4 w-4 mx-auto mb-1 text-gray-600" />
                      <div className="font-semibold text-gray-900">{equipment.specs.weight}</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <Gauge className="h-4 w-4 mx-auto mb-1 text-gray-600" />
                      <div className="font-semibold text-gray-900">{equipment.specs.engine}</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <Settings className="h-4 w-4 mx-auto mb-1 text-gray-600" />
                      <div className="font-semibold text-gray-900">
                    
                      </div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-sm text-gray-600">Purchase Price</div>
                        <div className="text-xl font-bold text-[var(--ethiopia-brown)]">{equipment.price}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Daily Rental</div>
                        <div className="text-lg font-bold text-[var(--ethiopia-gold)]">{equipment.rental}</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-chocolate)] text-white"
                        disabled={!equipment.available}
                      >
                        {equipment.available ? 'Inquire' : 'Not Available'}
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1 border-[var(--ethiopia-brown)] text-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-brown)] hover:text-white"
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {currentInventory.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🚜</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Equipment Available</h3>
              <p className="text-gray-600">Check back soon or contact us for special requests.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Yoakin Equipment?</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: <Shield className="h-6 w-6" />,
                    title: "Quality Guarantee",
                    description: "All equipment thoroughly inspected and certified"
                  },
                  {
                    icon: <DollarSign className="h-6 w-6" />,
                    title: "Competitive Pricing",
                    description: "Best prices in Ethiopia with flexible payment options"
                  },
                  {
                    icon: <Wrench className="h-6 w-6" />,
                    title: "Full Service Support",
                    description: "Maintenance, repairs, and parts readily available"
                  },
                  {
                    icon: <Clock className="h-6 w-6" />,
                    title: "Quick Delivery",
                    description: "Fast delivery and setup across Ethiopia"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-[var(--ethiopia-brown)] mt-1">{benefit.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/grader_1.png"
                alt="Equipment yard"
                className="rounded-xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="text-2xl font-bold text-[var(--ethiopia-brown)]">10</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[var(--ethiopia-brown)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-200">Contact us for equipment sales, rentals, or service</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Phone className="h-8 w-8" />,
                title: "Call Us",
                info: "+251 11 XXX XXXX",
                description: "Speak with our equipment specialists"
              },
              {
                icon: <Mail className="h-8 w-8" />,
                title: "Email Us",
                info: "equipment@yoakinconstruction.com",
                description: "Get detailed quotes and information"
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Visit Our Yard",
                info: "Bole Road, Addis Ababa",
                description: "See equipment in person"
              }
            ].map((contact, index) => (
              <div key={index} className="text-center">
                <div className="text-[var(--ethiopia-gold)] mb-4 flex justify-center">{contact.icon}</div>
                <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                <div className="text-[var(--ethiopia-gold)] font-semibold mb-2">{contact.info}</div>
                <p className="text-gray-200">{contact.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[var(--ethiopia-gold)] hover:bg-[var(--ethiopia-gold)]/90 text-[var(--ethiopia-brown)] px-8 py-4 text-lg font-semibold"
              >
                Contact Equipment Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
