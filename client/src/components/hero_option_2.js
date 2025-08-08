"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Building2, Award, Users, HardHat } from "lucide-react"
import { Link } from "wouter"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"

export function Hero() {
  const [activeProject, setActiveProject] = useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const featuredProjects = [
    {
      title: "Addis Tower",
      description: "Modern office complex in the heart of Addis Ababa",
      image:
        "https://images.unsplash.com/photo-1590502593747-42a996133562?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    },
    {
      title: "Mekelle Heights",
      description: "Luxury residential development with panoramic views",
      image:
        "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    },
    {
      title: "Bahir Dar Bridge",
      description: "Award-winning infrastructure connecting communities",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % featuredProjects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [featuredProjects.length])

  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#stats")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const stats = [
    { icon: <Building2 className="h-8 w-8" />, value: "250+", label: "Projects Completed" },
    { icon: <Award className="h-8 w-8" />, value: "20+", label: "Years Experience" },
    { icon: <Users className="h-8 w-8" />, value: "500+", label: "Skilled Workers" },
  ]

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col lg:flex-row items-center overflow-hidden bg-black"
    >
      {/* Video Background with Fallback Image */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${isVideoLoaded ? "opacity-0" : "opacity-100"}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            }}
          />
        </div>
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`object-cover w-full h-full transition-opacity duration-1000 ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <source
            src="https://player.vimeo.com/external/370331493.hd.mp4?s=ce49c8c6d8e28a89298ffb4c53a2e842bdb11546&profile_id=175&oauth2_token_id=57447761"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full lg:w-1/2 text-white px-6 lg:pl-16 xl:pl-24 py-24 lg:py-0"
      >
        <div className="max-w-xl">
          {/* Geometric accent */}
          <div className="absolute top-1/4 -left-24 w-48 h-48 bg-[var(--ethiopia-gold)]/10 rounded-full blur-3xl" />

          {/* Blueprint lines animation */}
          <div className="relative mb-6">
            <div className="absolute -left-8 top-0 w-1 h-24 bg-[var(--ethiopia-gold)]/30" />
            <div className="absolute -left-8 top-0 w-16 h-1 bg-[var(--ethiopia-gold)]/30" />
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Building{" "}
              <span className="relative inline-block">
                <span className="text-[var(--ethiopia-gold)]">Ethiopia's</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-[var(--ethiopia-gold)]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>{" "}
              Future
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl mb-8 font-light text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Premier construction services with 20+ years of excellence in residential, commercial, and infrastructure
            projects across Ethiopia
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/portfolio">
              <Button
                size="lg"
                className="bg-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-chocolate)] text-white px-8 py-6 text-lg font-semibold transition duration-300 rounded-md flex items-center gap-2 group"
              >
                View Our Work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, repeatDelay: 1 }}
                  className="inline-block"
                >
                  →
                </motion.span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--ethiopia-brown)] px-8 py-6 text-lg font-semibold transition duration-300 rounded-md bg-transparent"
              >
                Get Quote
              </Button>
            </Link>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            className="mt-12 grid grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center items-center mb-2 text-[var(--ethiopia-gold)]">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Trusted by logos */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-sm text-gray-400 mb-3">Trusted by:</p>
            <div className="flex items-center gap-6">
              <div className="bg-white/10 h-8 w-24 rounded-md backdrop-blur-sm flex items-center justify-center">
                <div className="text-white text-xs font-semibold">ETHIOPIAN GOV</div>
              </div>
              <div className="bg-white/10 h-8 w-24 rounded-md backdrop-blur-sm flex items-center justify-center">
                <div className="text-white text-xs font-semibold">UNECA</div>
              </div>
              <div className="bg-white/10 h-8 w-24 rounded-md backdrop-blur-sm flex items-center justify-center">
                <div className="text-white text-xs font-semibold">WORLD BANK</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Project Showcase */}
      <motion.div
        className="relative z-10 w-full lg:w-1/2 h-[40vh] lg:h-screen flex items-center justify-center px-6 lg:px-16 py-12 lg:py-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="relative w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-2xl">
          {/* Project blueprint overlay */}
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10">
            <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Project images */}
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              {featuredProjects.map(
                (project, index) =>
                  activeProject === index && (
                    <motion.div
                      key={project.title}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>

          {/* Project info overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
            <AnimatePresence mode="wait">
              {featuredProjects.map(
                (project, index) =>
                  activeProject === index && (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300">{project.description}</p>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>

            {/* Project navigation dots */}
            <div className="flex gap-2 mt-4">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeProject === index ? "bg-[var(--ethiopia-gold)] w-6" : "bg-white/50"
                  }`}
                  aria-label={`View project ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* 3D construction icon */}
          <div className="absolute -top-6 -right-6 bg-[var(--ethiopia-gold)] rounded-full p-4 shadow-lg z-30 rotate-12 transform-gpu">
            <HardHat className="h-8 w-8 text-white" />
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        onClick={scrollToNextSection}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-light tracking-wider">SCROLL</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </motion.div>

      {/* Geometric accents */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[var(--ethiopia-gold)]/5 rounded-full blur-3xl" />
    </section>
  )
}
