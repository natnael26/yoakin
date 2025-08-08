"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, HardHat, Briefcase, Ruler, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "wouter"

export function TeamPreview() {
  const [hoveredRole, setHoveredRole] = useState<number | null>(null)

  const teamRoles = [
    {
      icon: <HardHat className="h-16 w-16" />,
      title: "Site Managers",
      count: "5+",
      description: "Leading construction sites",
      color: "bg-blue-500",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
    },
    {
      icon: <Briefcase className="h-16 w-16" />,
      title: "Engineers",
      count: "20+",
      description: "Structural & civil experts",
      color: "bg-ethiopia-chocolate",
      image:
        "images/yoakin_1.png",
    },
    {
      icon: <Ruler className="h-16 w-16" />,
      title: "Architects",
      count: "4+",
      description: "Creative design minds",
      color: "bg-ethiopia-gold",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
    },
    {
      icon: <Wrench className="h-16 w-16" />,
      title: "Craftsmen",
      count: "200+",
      description: "Skilled trade workers",
      color: "bg-orange-500",
      image:
        "/team_4.jpg",
    },
  ]

  return (
    <section className="py-4 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
       

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamRoles.map((role, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredRole(index)}
              onMouseLeave={() => setHoveredRole(null)}
            >
              {/* Card */}
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={role.image || "/placeholder.svg"}
                    alt={role.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Icon Background */}
                <div
                  className={`absolute top-6 left-6 ${role.color} rounded-2xl p-4 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                >
                  {role.icon}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-4xl font-bold mb-1">{role.count}</div>
                  <h3 className="text-xl font-bold mb-2">{role.title}</h3>
                  <p className="text-gray-200 text-sm">{role.description}</p>
                </div>

                {/* Hover Overlay */}
                <AnimatePresence>
                  {hoveredRole === index && (
                    <motion.div
                      className="absolute inset-0 bg-[var(--ethiopia-brown)]/90 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center text-white">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {role.icon}
                        </motion.div>
                        <motion.p
                          className="mt-4 text-lg font-semibold"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          Meet Our {role.title}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Company Culture */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="images/team_1.png"
                alt="Construction site overview"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[var(--ethiopia-brown)]">200+</div>
                <div className="text-gray-600 font-medium">Team Members</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Our Team Makes the Difference</h3>
            <div className="space-y-4 mb-8">
              {[
                "10+ years of combined experience",
                "Certified professionals in every field",
                "Continuous training and development",
                "Safety-first culture and practices",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="w-2 h-2 bg-[var(--ethiopia-gold)] rounded-full" />
                  <span className="text-gray-700">{point}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/team">
                <Button
                  size="lg"
                  className="bg-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-chocolate)] text-white px-8 py-4 font-semibold group"
                >
                  Meet Full Team
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
             
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
