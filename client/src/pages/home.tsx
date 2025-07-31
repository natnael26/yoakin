import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-[var(--ethiopia-brown)]">Habesha Construction</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2003, Habesha Construction has been at the forefront of Ethiopia's development, delivering exceptional construction projects that blend traditional craftsmanship with modern engineering excellence.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our team of experienced professionals is committed to building not just structures, but lasting relationships with our clients. We take pride in our deep understanding of local conditions and international standards.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  "Licensed & Insured",
                  "Quality Guaranteed", 
                  "On-Time Delivery",
                  "Local Expertise"
                ].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[var(--ethiopia-brown)] mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button className="bg-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-chocolate)] text-white px-8 py-3 font-semibold">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Construction team working on project" 
                className="rounded-xl shadow-xl w-full h-auto"
              />
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[var(--ethiopia-gold)] rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-[var(--ethiopia-chocolate)] rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
