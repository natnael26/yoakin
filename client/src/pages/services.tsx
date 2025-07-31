import { SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-[var(--ethiopia-brown)]">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction solutions tailored to meet your unique needs and exceed your expectations
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{service.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href="/contact">
                    <Button 
                      variant="link" 
                      className="text-[var(--ethiopia-brown)] hover:text-[var(--ethiopia-chocolate)] p-0 font-semibold"
                    >
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[var(--ethiopia-beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we bring your construction vision to life</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We meet with you to understand your needs, budget, and timeline"
              },
              {
                step: "02", 
                title: "Planning",
                description: "Our team creates detailed plans and designs for your project"
              },
              {
                step: "03",
                title: "Construction",
                description: "We execute the project with precision and attention to detail"
              },
              {
                step: "04",
                title: "Completion",
                description: "Final inspection and handover of your completed project"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-[var(--ethiopia-brown)] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--ethiopia-brown)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">Get in touch with our team for a free consultation</p>
          <Link href="/contact">
            <Button 
              size="lg"
              className="bg-[var(--ethiopia-gold)] text-black hover:bg-[var(--ethiopia-chocolate)] hover:text-white px-8 py-4 text-lg font-semibold"
            >
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
