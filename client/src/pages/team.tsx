import { TeamSection } from "@/components/team-section";
import { TeamIllustration } from "@/components/illustrations";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Award, Target, Heart } from "lucide-react";

export default function Team() {
  const teamValues = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "We work together as one unified team, combining our diverse skills and expertise."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "Every team member is committed to delivering the highest quality work."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Focus",
      description: "We stay focused on our clients' goals and project objectives."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion",
      description: "Our love for construction and building drives everything we do."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Our <span className="text-[var(--ethiopia-brown)]">Professional Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Meet the skilled professionals who make Habesha Construction a leader in Ethiopian construction industry
            </p>
          </div>
          
          <div className="flex justify-center animate-fade-in-up delay-400">
            <div className="bg-gradient-to-br from-[var(--ethiopia-beige)] to-white p-8 rounded-xl shadow-lg">
              <TeamIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Our Team Values
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">
              The principles that guide our team every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up hover-lift"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="bg-[var(--ethiopia-brown)] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Team Section */}
      <TeamSection />

      {/* Join Our Team CTA */}
      <section className="py-20 bg-[var(--ethiopia-brown)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Join Our Growing Team</h2>
          <p className="text-xl mb-8 animate-fade-in-up delay-200">
            Are you passionate about construction and looking for a rewarding career? We're always looking for talented professionals.
          </p>
          <div className="space-x-4 animate-fade-in-up delay-400">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-[var(--ethiopia-gold)] text-black hover:bg-[var(--ethiopia-chocolate)] hover:text-white px-8 py-4 text-lg font-semibold hover-lift"
              >
                View Open Positions
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--ethiopia-brown)] px-8 py-4 text-lg font-semibold"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}