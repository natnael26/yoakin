"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Building2, Home, Factory, BracketsIcon as Bridge, Eye, ArrowRight } from "lucide-react"

interface PortfolioFilterProps {
  onFilterChange: (filter: string) => void
}

export function PortfolioFilter({ onFilterChange }: PortfolioFilterProps) {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All Projects", icon: <Building2 className="h-5 w-5" /> },
    { id: "residential", label: "Residential", icon: <Home className="h-5 w-5" /> },
    { id: "commercial", label: "Commercial", icon: <Building2 className="h-5 w-5" /> },
    { id: "industrial", label: "Industrial", icon: <Factory className="h-5 w-5" /> },
    { id: "infrastructure", label: "Infrastructure", icon: <Bridge className="h-5 w-5" /> },
  ]

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId)
    onFilterChange(filterId)
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          onClick={() => handleFilterChange(filter.id)}
          variant={activeFilter === filter.id ? "default" : "outline"}
          className={`px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 ${
            activeFilter === filter.id
              ? "bg-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-chocolate)] text-white shadow-lg"
              : "border-[var(--ethiopia-brown)] text-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-brown)] hover:text-white bg-transparent"
          }`}
        >
          <span className="flex items-center gap-2">
            {filter.icon}
            {filter.label}
          </span>
        </Button>
      ))}
    </div>
  )
}

interface PortfolioGridProps {
  filter: string
}

export function PortfolioGrid({ filter }: PortfolioGridProps) {
  const projects = [
    {
      id: 1,
      title: "2B+G+15 and 2B+G+6 Apartment Complexes",
      category: "commercial",
      location: "Addis Ababa",
      year: "2023",
      image:
        "images/ayat_11.jpg",
    },
    {
      id: 2,
      title: "Apartment Blocks (3B+G+16)",
      category: "commercial",
      location: "addis ababa",
      year: "2023",
      image:
        "images/ayat_15.jpg",
    },
    {
      id: 3,
      title: "Ayat Real estate Mall",
      category: "commercial",
      location: "addis ababa",
      year: "2022",
      image:
        "images/ayat_2.png",
    },
    {
      id: 4,
      title: "kombolcha hara railway",
      category: "infrastructure",
      location: "kombolcha",
      year: "2022",
      image:
        "images/kom_4.jpg",
    },
    {
      id: 5,
      title: "Ayat shopping Mall",
      category: "commercial",
      location: "addis ababa",
      year: "2023",
      image:
        "images/ayat_14.jpg",
    },
    {
      id: 6,
      title: "tedat construction plc",
      category: "residential",
      location: "addis ababa",
      year: "2022",
      image:
        "images/home_1.png",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project) => (
        <div
          key={project.id}
          className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300"
        >
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[var(--ethiopia-brown)]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button
                size="lg"
                className="bg-white text-[var(--ethiopia-brown)] hover:bg-gray-100 font-semibold group/btn"
              >
                <Eye className="mr-2 h-5 w-5" />
                View Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4 bg-[var(--ethiopia-gold)] text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
              {project.category}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--ethiopia-brown)] transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center justify-between text-gray-600">
              <span className="flex items-center gap-1">
                <Building2 className="h-4 w-4" />
                {project.location}
              </span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
