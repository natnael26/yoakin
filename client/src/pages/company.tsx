"use client"

import { Building2, Users, Award, MapPin, Calendar, TrendingUp, Globe, Heart } from 'lucide-react'
import { SEOHead } from '@/components/SEOHead';
export default function Company() {
  const milestones = [
    {
      year: "2015",
      title: "Foundation",
      description: "Yoakin Construction was founded by Aklilebirhan Ababu",
      icon: <Building2 className="h-8 w-8" />,
      color: "bg-blue-500",
      achievements: ["", "First office in Addis Ababa", "Initial capital"],
    },
    {
      year: "2015",
      title: "First Major Project",
      description: "Completed our first residential complex in Addis Ababa, establishing our reputation for quality construction.",
      icon: <Award className="h-8 w-8" />,
      color: "bg-green-500",
      achievements: ["50-unit residential complex", "On-time delivery", "100% client satisfaction"],
    },
    {
      year: "2019",
      title: "Regional Expansion",
      description: "Expanded operations to Kombolcha, marking our growth beyond the capital city.",
      icon: <MapPin className="h-8 w-8" />,
      color: "bg-purple-500",
      achievements: ["", "", "First infrastructure project"],
    },
    {
      year: "2020",
      title: "Commercial Breakthrough",
      description: "Secured our first major commercial project - Ayat Real Estate, a landmark in Addis Ababa.",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "bg-orange-500",
      achievements: ["First high-rise building", "Advanced construction techniques", "International recognition"],
    },
    {
      year: "2024",
      title: "Ayat Partnerships",
      description: "",
      icon: <Globe className="h-8 w-8" />,
      color: "bg-indigo-500",
      achievements: ["", "", "Bridge building expertise"],
    },
  ]

  const companyValues = [
    {
      title: "Innovation",
      description: "Continuously adopting new technologies and methods to improve our construction processes and deliver better results for our clients.",
      icon: "💡",
    },
    {
      title: "Quality",
      description: "Maintaining the highest standards in every project, from initial planning to final delivery, ensuring lasting value for our clients.",
      icon: "⭐",
    },
    {
      title: "Community",
      description: "Contributing to Ethiopia's development by creating jobs, supporting local suppliers, and building infrastructure that serves communities.",
      icon: "🤝",
    },
    {
      title: "Sustainability",
      description: "Implementing environmentally responsible practices and promoting green building solutions for a sustainable future.",
      icon: "🌱",
    },
  ]

  const keyFigures = [
    {
      name: "Yohannes Tadesse",
      position: "Founder & CEO",
      description: "Civil engineer with 25+ years of experience in construction and project management.",
      icon: "👨‍💼",
    },
    {
      name: "Almaz Bekele",
      position: "Chief Operations Officer",
      description: "Architect and operations expert overseeing all construction projects and quality control.",
      icon: "👩‍💼",
    },
    {
      name: "Dawit Haile",
      position: "Chief Financial Officer",
      description: "Financial strategist managing company growth and investment in new technologies.",
      icon: "👨‍💼",
    },
  ]

  return (
    <>
     <SEOHead
        title="Company|Yoakin Construction"
        description="building ethiopias future"
        url="https://yoakinconstruction.com/company"
      />
   
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
              Our Story
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            A decade of building excellence, innovation, and contributing to Ethiopia's development through quality construction.
          </p>
        </div>

        {/* Company Overview */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="border-b-4 border-blue-500 pb-2">Building Ethiopia's Future</span>
                </h2>
                
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p className="text-gray-800">
                    <span className="font-semibold text-blue-600">Yoakin Construction and Trading</span> is one of Ethiopia's fastest growing premier grade one general and water works construction firms, recognized for its expertise in a diverse range of building projects including residential, commercial, and institutional developments.
                  </p>
                  
                  <p>
                    Founded in 2008 E.C. (Class 7 BC) by owner & General Manager <span className="font-medium">Mr. Aklileberhan Ababu</span>, the company has rapidly evolved to become a trusted leader in the Ethiopian construction industry, known for its unwavering commitment to quality and excellence.
                  </p>
                  
                  <p>
                    Over the years, Yoakin Construction & Trading has consistently delivered high-caliber construction services that meet the evolving needs of clients across the country. The firm is dedicated to sustainable construction practices, ensuring projects meet the highest standards of safety and durability while aligning with environmental responsibilities.
                  </p>
                  
                  <p>
                    With a strong track record of completing numerous large-scale projects, we've built a reputation for efficiency, quality craftsmanship, and client satisfaction. Our skilled professionals bring expertise and innovation to every project, from initial planning to final execution.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                {/* Company Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center transform transition-all hover:scale-105">
                    <div className="text-4xl mb-2">🏗️</div>
                    <div className="text-3xl font-bold">200+</div>
                    <div className="text-sm opacity-90 mt-1">Projects Completed</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white text-center transform transition-all hover:scale-105">
                    <div className="text-4xl mb-2">👥</div>
                    <div className="text-3xl font-bold">100+</div>
                    <div className="text-sm opacity-90 mt-1">Dedicated Employees</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center transform transition-all hover:scale-105">
                    <div className="text-4xl mb-2">📅</div>
                    <div className="text-3xl font-bold">10+</div>
                    <div className="text-sm opacity-90 mt-1">Years Experience</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white text-center transform transition-all hover:scale-105">
                    <div className="text-4xl mb-2">🏙️</div>
                    <div className="text-3xl font-bold">15</div>
                    <div className="text-sm opacity-90 mt-1">Cities Served</div>
                  </div>
                </div>
                
                {/* Additional Business Areas */}
                <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">Additional Business Areas</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Vehicle and construction machinery imports</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Concrete production with own batching plant</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Wholesale trade in construction materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Real estate development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Sister Companies */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Sister Companies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="font-medium text-blue-700">Eyoram Trading PLC</div>
                  <div className="text-sm text-gray-600">Construction materials</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="font-medium text-green-700">Ooeb One Member PLC</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="font-medium text-purple-700">Beay One Member PLC</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="font-medium text-orange-700">Mubas One Member PLC</div>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <div className="font-medium text-indigo-700">Ammey One Member PLC</div>
                </div>
              </div>
            </div>
            
            {/* Future Plans */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Future Ventures</h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="text-yellow-500 text-2xl mr-4">🚀</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Expanding into New Sectors</h4>
                    <p className="text-gray-700">
                      We're actively investing in mining operations in the Amhara region (10,000 m² area) and developing data networking infrastructure to support Ethiopia's digital transformation strategy and increasing internet penetration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Our Journey Through Time
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-12"></div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-green-500 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-8">
                    {/* Timeline Dot */}
                    <div className="hidden md:flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-4 border-blue-500 flex-shrink-0 relative z-10">
                      <div className={`${milestone.color} text-white p-2 rounded-full`}>
                        {milestone.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                          <h3 className="text-2xl font-bold text-gray-900">{milestone.title}</h3>
                        </div>
                        <div className="md:hidden flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border-4 border-blue-500 mt-4">
                          <div className={`${milestone.color} text-white p-1 rounded-full`}>
                            {milestone.icon}
                          </div>
                        </div>
                      </div>
                      
                      {milestone.description && (
                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">{milestone.description}</p>
                      )}
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        {milestone.achievements.map((achievement, achievementIndex) => (
                          achievement && (
                            <div key={achievementIndex} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-700">{achievement}</span>
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
       

        {/* Leadership Team */}
        

        {/* Future Vision */}
       
      </div>
    </div>

    </>
  )
}