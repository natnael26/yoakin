"use client"

import { motion } from "framer-motion"
import { Users, Award, Clock, Shield } from "lucide-react"
import teamImage from "/team_3.png"
import { SEOHead } from '@/components/SEOHead';
export default function About() {
  const teamFeatures = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "50+ skilled professionals with decades of combined experience",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certified Professionals",
      description: "All team members hold relevant certifications in their fields",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Proven Experience",
      description: "Average of 10+ years experience per team member",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety Certified",
      description: "100% of our team is safety trained and certified",
      color: "from-orange-500 to-red-400",
    },
  ]

  const teamMembers = [
    {
      name: "AklileBirhan Ababu",
      role: "Founder & CEO",
      expertise: "Structural Engineering",
      experience: "20+ years",
      image: "images/ceo.jpg"
    },
    {
      name: "Bereket Ababu",
      role: "Deput General Manager",
      expertise: "Sustainable Design",
      experience: "15+ years",
      image: "images/deput_gm.jpg"
    },
    {
      name: "",
      role: "Finance and adminstration head",
      expertise: "Project Management",
      experience: "18+ years",
      image: "/team-member3.jpg"
    },
    {
      name: "",
      role: "Engineering Head",
      expertise: "Civil Engineering",
      experience: "12+ years",
      image: "images/eng_head.jpg"
    },
  ]

  return (
    <>
     <SEOHead
        title="About|Yoakin Construction"
        description="decades of hard work and dedications"
        url="https://yoakinconstruction.com/about"
      />
    
   
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[var(--ethiopia-brown)] via-[var(--ethiopia-chocolate)] to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fillOpacity='1' fillRule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Meet Our{" "}
              <span className="text-[var(--ethiopia-gold)] relative">
                Team
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-2 bg-[var(--ethiopia-gold)]/30"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </span>
            </h1>
            <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              The talented professionals behind Yoakin Construction's success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Features */}
      <section className="py-24 bg-gradient-to-br from-[var(--ethiopia-beige)] via-white to-[var(--ethiopia-beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Team Strengths</h2>
            <p className="text-xl text-gray-600">What makes our team exceptional</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 group-hover:shadow-2xl h-full">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      className="relative rounded-3xl overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Main image with improved overlay */}
      <div className="relative">
        <img
          src={teamImage}
          alt="Yoakin Construction Team"
          className="w-full h-auto object-cover"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/70 to-black/60 " />
        
        {/* Subtle pattern overlay (smaller and more transparent) */}
      
      </div>
      
      {/* Text content */}
      <div className="absolute bottom-8 left-8 text-white z-10">
        <h3 className="text-3xl font-bold">Our Dedicated Team</h3>
        <p className="text-lg mt-2 max-w-lg">50+ professionals working together to build Ethiopia's future</p>
      </div>
    </motion.div>
  </div>
</section>

      {/* Team Members */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-[var(--ethiopia-brown)] to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-300">The experienced professionals guiding our company</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  {teamMembers.map((member, index) => (
    <motion.div
      key={index}
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl h-full flex flex-col">
        {/* Image container with aspect ratio and proper scaling */}
        <div className="relative pt-[120%] overflow-hidden"> {/* 1:1 aspect ratio */}
          <img 
            src={member.image} 
            alt={member.name}
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
          />
        </div>
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
          <p className="text-[var(--ethiopia-gold)] font-medium">{member.role}</p>
          <div className="mt-4 space-y-2">
            
           
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 bg-gradient-to-br from-[var(--ethiopia-gold)] to-[var(--ethiopia-brown)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              We're always looking for talented professionals to join our growing team. 
              Be part of Ethiopia's premier construction company.
            </p>
            <motion.button
              className="bg-white text-[var(--ethiopia-brown)] px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Career Opportunities
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>

    </>
  )
}