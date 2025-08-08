import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";



export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#stats');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: "url('/hero_background.png')",
          transform: `translateY(${scrollY * 0.5}px) scale(1.1)`
        }}
      >
        {/* Multi-layer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ethiopia-brown)]/20 via-transparent to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[var(--ethiopia-gold)]/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Interactive Cursor Glow */}
      <div 
        className="absolute pointer-events-none transition-opacity duration-300 opacity-30"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          background: 'radial-gradient(circle, var(--ethiopia-gold) 0%, transparent 70%)',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}
      />
      
      {/* Main Content with Glassmorphism */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        {/* Glassmorphism Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--ethiopia-gold)]/20 border border-[var(--ethiopia-gold)]/30 mb-6 animate-slide-down">
            <Sparkles className="w-4 h-4 text-[var(--ethiopia-gold)]" />
            <span className="text-sm font-medium text-[var(--ethiopia-gold)]">10+ Years of Excellence</span>
          </div>

          {/* Main Heading with Staggered Animation */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block animate-slide-up opacity-0 animation-delay-100">
            Innovative Structures,
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--ethiopia-gold)] via-yellow-400 to-[var(--ethiopia-gold)] animate-slide-up opacity-0 animation-delay-200 animate-pulse-slow">
            Enduring 
            </span>
            <span className="block animate-slide-up opacity-0 animation-delay-300">
            Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fade-in-up opacity-0 animation-delay-500">
            Premier construction services delivering exceptional residential, commercial, and infrastructure projects across Ethiopia with unmatched quality and innovation
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up opacity-0 animation-delay-700">
            <Link href="/portfolio">
              <Button 
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-[var(--ethiopia-brown)] to-[var(--ethiopia-gold)] hover:from-[var(--ethiopia-gold)] hover:to-[var(--ethiopia-brown)] text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-[var(--ethiopia-gold)]/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Our Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--ethiopia-gold)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button 
                variant="outline"
                size="lg"
                className="group relative overflow-hidden border-2 border-white/30 text-white hover:bg-white hover:text-[var(--ethiopia-brown)] px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm bg-white/5 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us
                  <div className="w-2 h-2 bg-[var(--ethiopia-gold)] rounded-full group-hover:bg-[var(--ethiopia-brown)] transition-colors duration-300" />
                </span>
              </Button>
            </Link>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10 animate-fade-in-up opacity-0 animation-delay-900">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[var(--ethiopia-gold)] mb-1">150+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[var(--ethiopia-gold)] mb-1">10+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[var(--ethiopia-gold)] mb-1">100%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up opacity-0 animation-delay-1000">
        <div 
          className="flex flex-col items-center cursor-pointer group"
          onClick={scrollToNextSection}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center mb-2 group-hover:border-[var(--ethiopia-gold)] transition-colors duration-300">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce group-hover:bg-[var(--ethiopia-gold)] transition-colors duration-300" />
          </div>
          <ChevronDown className="h-6 w-6 text-white/70 animate-bounce group-hover:text-[var(--ethiopia-gold)] transition-colors duration-300" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-[var(--ethiopia-gold)]/20 rounded-full animate-spin-slow" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-[var(--ethiopia-gold)]/30 rounded-full animate-pulse" />
    </section>
  );
}