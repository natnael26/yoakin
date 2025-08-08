"use client"

import { motion } from "framer-motion"
import { Target, Heart, Lightbulb, Leaf, HardHat, Building, Shield, Users, Award, Clock } from "lucide-react"

export default function Values() {
  const coreValues = [
    {
      icon: <Target className="h-12 w-12" />,
      title: "Client Satisfaction",
      description: "We strive for the highest quality in every project, from planning to completion.",
      color: "bg-blue-500",
      highlight: "text-blue-400"
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Professional Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices.",
      color: "bg-red-500",
      highlight: "text-red-400"
    },
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: "Dedication to Development",
      description: "We embrace new technologies and methods to improve our construction processes.",
      color: "bg-yellow-500",
      highlight: "text-yellow-400"
    },
    {
      icon: <Leaf className="h-12 w-12" />,
      title: "Job Quality",
      description: "We are committed to environmentally responsible construction practices.",
      color: "bg-green-500",
      highlight: "text-green-400"
    },
    {
      icon: <HardHat className="h-12 w-12" />,
      title: "Safety",
      description: "We prioritize the safety of our workers and the communities we serve.",
      color: "bg-orange-500",
      highlight: "text-orange-400"
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Honesty",
      description: "We contribute to local development and support Ethiopian communities.",
      color: "bg-purple-500",
      highlight: "text-purple-400"
    },
  ]

  const operationalValues = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "Rigorous quality control at every project phase",
      color: "from-blue-500 to-cyan-400",
      highlight: "text-blue-400"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Teamwork",
      description: "Collaborative approach across all departments",
      color: "from-purple-500 to-pink-400",
      highlight: "text-purple-400"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Professionalism",
      description: "Certified experts delivering exceptional results",
      color: "from-green-500 to-emerald-400",
      highlight: "text-green-400"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Reliability",
      description: "Consistent on-time project delivery",
      color: "from-orange-500 to-red-400",
      highlight: "text-orange-400"
    }
  ]

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fillOpacity='1' fillRule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-yellow-400">Core</span> Values
            </h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              The foundation of Yoakin Construction's culture and operations
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>Investing the technical & professional as well as financial resources of our staff within the country.</p>
                  <p>Achieving outstanding quality performances to the satisfaction of our clients and customers.</p>
                  <p>We value the importance of our relationships and will continue to remain fair & true in our dealings with all employees, customers & subcontractors.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative bg-gradient-to-br from-yellow-500 to-yellow-600 p-8 rounded-3xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-[length:100px_100px]"></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white">Our Vision</h3>
                </div>
                <div className="space-y-4 text-yellow-100 text-lg leading-relaxed">
                  <p>To establish Yoakin Construction & Trading as a premier cross-border, multi-functional construction company.</p>
                  <p>To play a pivotal role in Ethiopia's economic and social development.</p>
                  <p>To be recognized as a leader in fostering community well-being and environmental stewardship.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="relative inline-block">
                Our Core Values
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision and action at Yoakin Construction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 border border-gray-100">
                  <div className={`${value.color} h-48 flex items-center justify-center`}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {value.icon}
                    </motion.div>
                  </div>
                  <div className="p-8">
                    <h3 className={`text-2xl font-bold text-gray-900 mb-4 ${value.highlight}`}>{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Operational Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we deliver on our promises every day
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {operationalValues.map((value, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-full bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 border border-gray-100">
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-6`}>
                      {value.icon}
                    </div>
                    <h3 className={`text-xl font-bold text-gray-900 mb-4 ${value.highlight}`}>{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Commitment
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At Yoakin Construction, our values aren't just words - they're the blueprint for how we operate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality & Safety",
                description: "Delivering projects that exceed quality and safety standards",
                icon: "🛡️"
              },
              {
                title: "Employee Growth",
                description: "Investing in our employees' growth and development",
                icon: "📈"
              },
              {
                title: "Sustainability",
                description: "Using sustainable materials and practices",
                icon: "🌿"
              },
              {
                title: "Community Support",
                description: "Supporting local communities through our work",
                icon: "🤝"
              },
              {
                title: "Transparency",
                description: "Maintaining clear communication with all stakeholders",
                icon: "💬"
              },
              {
                title: "Innovation",
                description: "Continuously improving through technology and new methods",
                icon: "💡"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-full bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 group-hover:-translate-y-2">
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}