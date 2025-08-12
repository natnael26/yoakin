"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Sparkles, ArrowRight, Play } from 'lucide-react'
import { Link } from "wouter"
import { useEffect, useState } from "react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Array of background images
  const backgroundImages = [
    'images/hero_background_3.jpg', // Your current construction site image
    'images/ayat_14.jpg', // Construction site overview
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080', // Construction workers
    'images/ayat_7.jpg', // Industrial construction
    'images/hero_background_5.png', // Modern building construction
  ]

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Image slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      )
    }, 60000) // Change image every 6 seconds

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#stats')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <h1 className="sr-only">Yoakin Construction – Grade One Contractor in Ethiopia</h1>
      {/* Enhanced Background with Image Slideshow */}
      <div className="absolute inset-0">
        {/* Multiple Background Images for Smooth Transition */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-2000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              transform: `translateY(${scrollY * 0.3}px) scale(${index === currentImageIndex ? 1.05 : 1.02})`,
              transitionProperty: 'opacity, transform',
              transitionDuration: '2000ms, 1000ms',
            }}
          />
        ))}
        
        {/* Enhanced Gradient Overlays for Construction Site */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/70 to-black/60 transition-opacity duration-2000" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ethiopia-brown)]/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/20" />
      </div>

      {/* Construction Dust Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${
              i % 3 === 0 ? 'w-3 h-3 bg-orange-400/20' :
              i % 3 === 1 ? 'w-2 h-2 bg-yellow-500/30' :
              'w-1 h-1 bg-white/25'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${3 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Interactive Cursor Effect */}
      <div 
        className="absolute pointer-events-none transition-all duration-500 opacity-15 mix-blend-screen"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          background: `radial-gradient(circle, var(--ethiopia-gold) 0%, transparent 70%)`,
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4 mt-1">
        
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--ethiopia-gold)]/20 border border-[var(--ethiopia-gold)]/30 mb-6 animate-slide-down">
          <Sparkles className="w-4 h-4 text-[var(--ethiopia-gold)]" />
          <span className="text-sm font-medium text-[var(--ethiopia-gold)]">10+ Years of Excellence</span>
        </div>
        
        {/* Main Heading with Staggered Animation */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="block animate-slide-up opacity-0 animation-delay-100">
          Innovative Structures,
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--ethiopia-gold)] via-yellow-400 to-[var(--ethiopia-gold)] animate-slide-up opacity-0 animation-delay-200 animate-pulse-slow">
          Enduring 
          </span>
          <span className="block animate-slide-up opacity-0 animation-delay-300">
          Solutions
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fade-in-up opacity-0 animation-delay-500">
          Premier construction services delivering exceptional residential, commercial, and infrastructure projects across Ethiopia with unmatched quality and innovation
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up opacity-0 animation-delay-700">
          <Link href="/portfolio">
            <Button 
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-[var(--ethiopia-brown)] to-[var(--ethiopia-gold)] hover:from-[var(--ethiopia-gold)] hover:to-[var(--ethiopia-brown)] text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-[var(--ethiopia-gold)]/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--ethiopia-gold)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </Link>
          
          <Link href="/contact">
            <Button 
              variant="outline"
              size="lg"
              className="group relative overflow-hidden border-2 border-white/30 text-white hover:bg-white hover:text-[var(--ethiopia-brown)] px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm bg-white/5 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Us
                <div className="w-2 h-2 bg-[var(--ethiopia-gold)] rounded-full group-hover:bg-[var(--ethiopia-brown)] transition-colors duration-300" />
              </span>
            </Button>
          </Link>
        </div>
        
        {/* Stats Preview */}
        <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10 animate-fade-in-up opacity-0 animation-delay-900">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[var(--ethiopia-gold)] mb-1">150+</div>
            <div className="text-sm text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[var(--ethiopia-gold)] mb-1">10+</div>
            <div className="text-sm text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[var(--ethiopia-gold)] mb-1">100%</div>
            <div className="text-sm text-gray-300">Client Satisfaction</div>
          </div>
        </div>

        {/* Image Indicators */}
       
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-1500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div 
          className="flex flex-col items-center cursor-pointer group"
          onClick={scrollToNextSection}
        >
          <div className="relative">
            <div className="w-8 h-12 border-2 border-white/70 rounded-full flex justify-center mb-3 group-hover:border-[var(--ethiopia-gold)] transition-all duration-300 bg-black/30 shadow-lg">
              <div className="w-1.5 h-4 bg-gradient-to-b from-[var(--ethiopia-gold)] to-white/70 rounded-full mt-2 animate-bounce group-hover:from-yellow-300 group-hover:to-[var(--ethiopia-gold)] transition-all duration-300" />
            </div>
            <div className="absolute -inset-2 bg-[var(--ethiopia-gold)]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping" />
          </div>
          <ChevronDown className="h-6 w-6 text-white/80 animate-bounce group-hover:text-[var(--ethiopia-gold)] group-hover:scale-110 transition-all duration-300 drop-shadow-md" />
          <span className="text-xs text-white/70 mt-2 group-hover:text-[var(--ethiopia-gold)] transition-colors duration-300 font-semibold tracking-wider drop-shadow-sm">
            SCROLL TO EXPLORE
          </span>
        </div>
      </div>

      {/* Construction-themed Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 border-2 border-orange-400/40 rounded-full animate-spin-slow opacity-60" />
      <div className="absolute top-32 left-16 w-4 h-4 bg-yellow-500/60 rounded-full animate-pulse" />
      <div className="absolute bottom-32 right-16 w-20 h-20 border border-white/30 rounded-full animate-pulse opacity-50" />
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-bounce opacity-70" />
      
      {/* Construction Site Inspired Geometric Shapes */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-tr from-yellow-500/8 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  )
}
