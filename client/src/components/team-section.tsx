import { TEAM_MEMBERS } from "@/lib/constants";
import { TeamMemberIllustration } from "@/components/illustrations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Meet Our <span className="text-[var(--ethiopia-brown)]">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Our experienced professionals bring decades of expertise to every project, ensuring quality and excellence in Ethiopian construction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <Card 
              key={member.id} 
              className="hover-lift animate-fade-in-up bg-white shadow-lg rounded-xl overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[var(--ethiopia-beige)] to-white rounded-full p-2">
                    <TeamMemberIllustration type={member.image} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[var(--ethiopia-brown)] font-semibold">{member.position}</p>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>

                <div className="space-y-3 mb-4">
                 
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Experience</h4>
                    <p className="text-xs text-gray-600">{member.experience}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty) => (
                      <Badge 
                        key={specialty} 
                        variant="secondary" 
                        className="text-xs bg-[var(--ethiopia-beige)] text-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-brown)] hover:text-white"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up delay-600">
          <p className="text-lg text-gray-600 mb-6">
            Want to work with our experienced team on your next project?
          </p>
          <Link href="/contact">
            <Button 
              size="lg"
              className="bg-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-chocolate)] text-white px-8 py-3 font-semibold hover-lift"
            >
              Start Your Project Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}