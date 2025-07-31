import { useState } from "react";
import { PortfolioFilter, PortfolioGrid } from "@/components/portfolio-filter";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-[var(--ethiopia-brown)]">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our finest work across Ethiopia - from modern residences to landmark commercial projects
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioFilter onFilterChange={setFilter} />
          <PortfolioGrid filter={filter} />
          
          <div className="text-center mt-12">
            <Button className="bg-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-chocolate)] text-white px-8 py-3 font-semibold">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-[var(--ethiopia-beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Project</h2>
              <h3 className="text-2xl font-semibold text-[var(--ethiopia-brown)] mb-4">Addis Business Center</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our flagship commercial project in the heart of Addis Ababa. This 15-story office complex features modern amenities, sustainable design elements, and state-of-the-art infrastructure.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900">Project Type</h4>
                  <p className="text-gray-600">Commercial Office Building</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Completion Date</h4>
                  <p className="text-gray-600">March 2023</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Building Area</h4>
                  <p className="text-gray-600">25,000 sq m</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Floors</h4>
                  <p className="text-gray-600">15 Floors</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Addis Business Center" 
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
