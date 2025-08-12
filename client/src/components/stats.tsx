"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "wouter"

export function Stats() {
  const [activeProject, setActiveProject] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const projects = [
    {
      id: 0,
      title: "Finishing Work CCE Mall Apartments,Ayat Share Company",
      location: "Addis Ababa",
      year: "2023",
      images: [
        "images/ayat_1.png",
        "images/ayat_3.jpg",
        "images/ayat_5.jpg",
      ],
    },
    {
      id: 1,
      title: "Structural work residential apartments Ayat Real Estate",
      location: "Addis Ababa",
      year: "2023",
      images: [
        "images/ayat_4.jpg",
        "images/ayat_2.png",
        "images/ayat_13.jpg",
      ],
    },
    {
      id: 2,
      title: "2B+G+15 and 2B+G+6 Apartment Complexes",
      location: "Addis Ababa",
      year: "2022",
      images: [
        "images/ayat_15.jpg",
        "images/ayat_16.jpg",
        "images/ayat_17.jpg",
      ],
    },
    {
      id: 3,
      title: "Retaning walls and stone pitching",
      location: "Kombolcha",
      year: "2022",
      images: [
        "images/kom_5.jpg",
        "images/kom_4.jpg",
        "images/kom_6.png",
      ],
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, projects.length])

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length)
    setIsAutoPlaying(false)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
    setIsAutoPlaying(false)
  }

  return (
    <section id="showcase" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Image Gallery - Takes up 2/3 of the space */}
          <div className="lg:col-span-2 relative">
            <AnimatePresence mode="wait">
              {projects.map(
                (project, index) =>
                  activeProject === index && (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      {/* Main large image */}
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
                        <motion.img
                          src={project.images[0] || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-96 object-cover"
                          initial={{ scale: 1.1 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.8 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>

                      {/* Small images grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {project.images.slice(1).map((image, imgIndex) => (
                          <motion.div
                            key={imgIndex}
                            className="relative rounded-xl overflow-hidden shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 + imgIndex * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <img
                              src={image || "/placeholder.svg"}
                              alt={`${project.title} view ${imgIndex + 2}`}
                              className="w-full h-40 object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[var(--ethiopia-brown)] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[var(--ethiopia-brown)] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>

          {/* Content - Takes up 1/3 of the space */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-24"
            >
              <div className="mb-8">
                <span className="text-[var(--ethiopia-gold)] font-semibold text-lg">Our Latest Work</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--ethiopia-brown)] mt-2 mb-6">
                  Featured Projects
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Discover our most recent construction achievements across Ethiopia
                </p>
              </div>

              {/* Project Info */}
              <AnimatePresence mode="wait">
                {projects.map(
                  (project, index) =>
                    activeProject === index && (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                      >
                        <h3 className="text-2xl font-bold text-[var(--ethiopia-brown)] mb-3">{project.title}</h3>
                        <div className="space-y-2 mb-6">
                          <div className="flex items-center gap-3">
                            <span className="text-gray-500 font-medium">Location:</span>
                            <span className="text-gray-700">{project.location}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-500 font-medium">Completed:</span>
                            <span className="text-gray-700">{project.year}</span>
                          </div>
                        </div>
                      </motion.div>
                    ),
                )}
              </AnimatePresence>

              {/* Project Navigation Dots */}
              <div className="flex gap-3 mb-8">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveProject(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      activeProject === index ? "w-8 bg-[var(--ethiopia-gold)]" : "w-3 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              {/* CTA Button */}
              <Link href="/portfolio">
                <Button
                  size="lg"
                  className="w-full bg-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-chocolate)] text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              {/* Contact CTA */}
              <div className="mt-6 p-6 bg-gray-50 rounded-xl">
                <p className="text-gray-600 mb-4">Ready to start your project?</p>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full border-[var(--ethiopia-brown)] text-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-brown)] hover:text-white bg-transparent"
                  >
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
