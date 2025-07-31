import { CheckCircle, Users, Award, Clock, Shield } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "50+ skilled professionals with decades of combined experience"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Standards",
      description: "ISO certified and adhering to international construction standards"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Timely Delivery",
      description: "98% of our projects completed on or ahead of schedule"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety First",
      description: "Zero-accident policy with comprehensive safety protocols"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-[var(--ethiopia-brown)]">Habesha Construction</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over two decades of building excellence across Ethiopia
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2003 by a group of Ethiopian engineers and architects who envisioned transforming the country's construction landscape. What started as a small team with big dreams has grown into one of Ethiopia's most trusted construction companies.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our journey began with residential projects in Addis Ababa, but our commitment to excellence and innovation quickly earned us recognition. Today, we've expanded our expertise to encompass commercial buildings, infrastructure projects, and industrial facilities across the nation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We take pride in being more than just builders – we're partners in Ethiopia's development, creating structures that serve communities and contribute to the country's growth.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Ethiopian construction site" 
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[var(--ethiopia-beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">What sets us apart in the construction industry</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-[var(--ethiopia-brown)] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To deliver exceptional construction services that exceed client expectations while contributing to Ethiopia's sustainable development. We are committed to building structures that stand the test of time and serve communities for generations.
              </p>
            </div>
            
            <div className="bg-[var(--ethiopia-brown)] p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To be Ethiopia's leading construction company, recognized for innovation, quality, and integrity. We envision a future where our projects contribute significantly to the nation's infrastructure and economic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for the highest quality in every project, from planning to completion."
              },
              {
                title: "Integrity",
                description: "We conduct business with honesty, transparency, and ethical practices."
              },
              {
                title: "Innovation", 
                description: "We embrace new technologies and methods to improve our construction processes."
              },
              {
                title: "Sustainability",
                description: "We are committed to environmentally responsible construction practices."
              },
              {
                title: "Safety",
                description: "We prioritize the safety of our workers and the communities we serve."
              },
              {
                title: "Community",
                description: "We contribute to local development and support Ethiopian communities."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
