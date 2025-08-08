"use client"

import { Button } from "@/components/ui/button"
import { Link } from "wouter"
import {
  MapPin,
  Clock,
  Users,
  Award,
  Heart,
  Shield,
  Briefcase,
  GraduationCap,
  DollarSign,
  Calendar,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react"

export default function Careers() {
  const openPositions = [
    {
      title: "Site Manager",
      department: "Construction",
      location: "Addis Ababa",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead construction sites and manage project teams to ensure quality and timely delivery.",
    },
    {
      title: "Civil Engineer",
      department: "Engineering",
      location: "Addis Ababa",
      type: "Full-time",
      experience: "3+ years",
      description: "Design and oversee construction projects, ensuring structural integrity and compliance.",
    },
    {
      title: "Architect",
      department: "Design",
      location: "Addis Ababa",
      type: "Full-time",
      experience: "4+ years",
      description: "Create innovative architectural designs for residential and commercial projects.",
    },
    {
      title: "Project Coordinator",
      department: "Management",
      location: "Mekelle",
      type: "Full-time",
      experience: "2+ years",
      description: "Coordinate project activities and ensure smooth communication between teams.",
    },
    {
      title: "Safety Officer",
      department: "Safety",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "3+ years",
      description: "Implement and monitor safety protocols across all construction sites.",
    },
    {
      title: "Quantity Surveyor",
      department: "Finance",
      location: "Addis Ababa",
      type: "Full-time",
      experience: "4+ years",
      description: "Manage project costs, prepare estimates, and handle contract administration.",
    },
  ]

  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Competitive Salary",
      description: "Market-leading compensation packages with performance bonuses",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Health Insurance",
      description: "Comprehensive medical coverage for you and your family",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Professional Development",
      description: "Training programs and certification support for career growth",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Paid Time Off",
      description: "Generous vacation days and flexible work arrangements",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Recognition Programs",
      description: "Employee of the month and annual achievement awards",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Work-Life Balance",
      description: "Flexible schedules and family-friendly policies",
    },
  ]

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your career with Ethiopia's leading construction company. We're always looking for talented
            individuals to join our growing team.
          </p>
        </div>

        {/* Company Culture Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 leading-relaxed">
                At Yoakin Construction, we believe our people are our greatest asset. We foster a collaborative
                environment where innovation thrives and every team member contributes to our success.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With over 20 years of experience in the construction industry, we offer unparalleled opportunities for
                professional growth and career advancement in a dynamic and challenging environment.
              </p>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Users className="h-6 w-6" />, number: "500+", label: "Team Members" },
                { icon: <Award className="h-6 w-6" />, number: "20+", label: "Years Experience" },
                { icon: <Briefcase className="h-6 w-6" />, number: "500+", label: "Projects Completed" },
                { icon: <MapPin className="h-6 w-6" />, number: "15", label: "Cities Covered" },
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-[var(--ethiopia-brown)] mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Construction team at work"
              className="rounded-2xl shadow-xl w-full h-80 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-[var(--ethiopia-gold)] rounded-2xl p-6 text-white shadow-xl">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm">Employee Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Employee Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-[var(--ethiopia-brown)] mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Current Openings</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                      <span className="bg-[var(--ethiopia-brown)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {position.department}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">{position.description}</p>

                    <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        <span>{position.experience}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <Button className="bg-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-chocolate)] text-white px-6 py-3 font-semibold group">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Process</h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Submit Application",
                  description: "Send your CV and cover letter to our HR department",
                },
                {
                  step: "2",
                  title: "Initial Review",
                  description: "Our team reviews your application and qualifications",
                },
                {
                  step: "3",
                  title: "Interview Process",
                  description: "Technical and behavioral interviews with our hiring team",
                },
                {
                  step: "4",
                  title: "Final Decision",
                  description: "Reference checks and job offer for successful candidates",
                },
              ].map((process, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-[var(--ethiopia-brown)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Professional team meeting"
              className="rounded-2xl shadow-xl w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Apply?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't see a position that matches your skills? We're always interested in hearing from talented
            professionals. Send us your CV and we'll keep you in mind for future opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-center justify-center gap-3">
              <Mail className="h-6 w-6 text-[var(--ethiopia-brown)]" />
              <div>
                <div className="font-semibold text-gray-900">Email Applications</div>
                <div className="text-gray-600">careers@yoakinconstruction.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-6 w-6 text-[var(--ethiopia-brown)]" />
              <div>
                <div className="font-semibold text-gray-900">HR Department</div>
                <div className="text-gray-600">+251 11 XXX XXXX</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-chocolate)] text-white px-8 py-4 font-semibold"
            >
              Send Your CV
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[var(--ethiopia-brown)] text-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-brown)] hover:text-white px-8 py-4 font-semibold bg-transparent"
              >
                Contact HR
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
