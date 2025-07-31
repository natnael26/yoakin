import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";

export function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#stats');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
          Building <span className="text-[var(--ethiopia-gold)] animate-pulse">Ethiopia's</span> Future
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in-up delay-200">
          Premier construction services with 20+ years of excellence in residential, commercial, and infrastructure projects across Ethiopia
        </p>
        <div className="space-x-4 animate-fade-in-up delay-400">
          <Link href="/portfolio">
            <Button 
              size="lg"
              className="bg-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-chocolate)] text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition duration-300"
            >
              View Our Work
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--ethiopia-brown)] px-8 py-4 text-lg font-semibold transition duration-300"
            >
              Get Quote
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer">
        <ChevronDown 
          className="h-8 w-8" 
          onClick={scrollToNextSection}
        />
      </div>
    </section>
  );
}
