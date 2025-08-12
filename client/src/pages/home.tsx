import { Hero } from "@/components/hero";
import {TeamPreview} from "@/components/team-preview";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Star, Award, Users, Building2, Wrench, Shield } from "lucide-react";
import { ConstructionIllustration, QualityIllustration, TeamMemberIllustration } from "@/components/illustrations";
import { SEOHead } from '@/components/SEOHead';
export default function Home() {
  const services = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Commercial Construction",
      description: "Modern office buildings, shopping centers, and commercial complexes"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Residential Projects",
      description: "Beautiful homes, apartments, and residential communities"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with expert renovation services"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Project Management",
      description: "End-to-end project management for complex construction"
    }
  ];

  const achievements = [
    { icon: <Building2 className="h-6 w-6" />, text: "Building Contractor /GC-1/" },
    { icon: <Award className="h-6 w-6" />, text: "Electro mecanical work special contractor/EMSC-2/" },
    { icon: <Star className="h-6 w-6" />, text: "Water Work Contractor/wwc-1/ " },
   
    { icon: <Users className="h-6 w-6" />, text: "50+ Expert Team Members" }
  ];

  return (
    <>
    <SEOHead
        title="Yoakin Construction"
        description="Premier construction services delivering exceptional residential, commercial, and infrastructure projects across Ethiopia"
        url="https://yoakinconstruction.com/"
      />
    
    <div className="min-h-screen">
      <Hero />
      <Stats />
      
      {/* Modern About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[var(--ethiopia-beige)] text-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-brown)] hover:text-white">
              About Yoakin Construction
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Building Ethiopia's <span className="text-[var(--ethiopia-brown)]">Future</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
              For over a decade, we've been transforming Ethiopia's landscape with innovative construction solutions that honor our heritage while embracing the future.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[var(--ethiopia-brown)] text-white p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Ethiopian Excellence</h4>
                    <p className="text-gray-600">Deep understanding of local conditions, materials, and cultural requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[var(--ethiopia-brown)] text-white p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Resources & Supply</h4>
<p className="text-gray-600">
  Concrete production , wholesale construction materials , and real estate development with sisters company yoakin trading.
</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[var(--ethiopia-brown)] text-white p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Sustainable Building</h4>
                    <p className="text-gray-600">Environmentally conscious construction that respects our natural heritage</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover-lift animate-fade-in-up"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="text-[var(--ethiopia-brown)]">{achievement.icon}</div>
                    <span className="text-sm font-medium text-gray-700">{achievement.text}</span>
                    
                  </div>
                 
                ))}
              </div>

              <div className="flex space-x-4">
                <Link href="/about">
                  <Button className="bg-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-chocolate)] text-white px-6 py-3 font-semibold hover-lift group">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" className="border-2 border-[var(--ethiopia-brown)] text-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-brown)] hover:text-white px-6 py-3 font-semibold">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up delay-400">
              <div className="bg-gradient-to-br from-[var(--ethiopia-beige)] to-white p-8 rounded-2xl shadow-2xl">
                <ConstructionIllustration />
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[var(--ethiopia-gold)] to-[var(--ethiopia-chocolate)] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-[var(--ethiopia-chocolate)] to-[var(--ethiopia-brown)] rounded-full opacity-30 animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Modern Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[var(--ethiopia-brown)] text-white">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Comprehensive <span className="text-[var(--ethiopia-brown)]">Construction Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
              From concept to completion, we deliver excellence across all construction disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover-lift animate-fade-in-up bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--ethiopia-brown)] to-[var(--ethiopia-chocolate)] text-white rounded-2xl flex items-center justify-center mx-auto mb-4 hover-scale">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up delay-600">
            <Link href="/services">
              <Button 
                size="lg"
                className="bg-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-chocolate)] text-white px-8 py-4 font-semibold hover-lift group"
              >
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-gradient-to-br from-[var(--ethiopia-beige)] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[var(--ethiopia-chocolate)] text-white">
              Our Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Meet Our <span className="text-[var(--ethiopia-brown)]">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Skilled professionals dedicated to bringing your construction vision to life
            </p>
          </div>
          
          <TeamPreview/>
        
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-[var(--ethiopia-brown)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Ready to Start Your <span className="text-[var(--ethiopia-gold)]">Dream Project</span>?
          </h2>
          <p className="text-xl mb-8 animate-fade-in-up delay-200 max-w-3xl mx-auto">
            Let's discuss how we can bring your construction vision to life with our expertise and dedication to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-[var(--ethiopia-gold)] text-black hover:bg-white hover:text-[var(--ethiopia-brown)] px-8 py-4 text-lg font-semibold hover-lift group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--ethiopia-brown)] px-8 py-4 text-lg font-semibold"
              >
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>

    </>
  );
}
