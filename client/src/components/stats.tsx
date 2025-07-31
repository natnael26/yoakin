import { STATS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/animated-counter";

export function Stats() {
  return (
    <section id="stats" className="py-16 bg-[var(--ethiopia-beige)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center animate-scale-in hover-lift" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="text-4xl md:text-5xl font-bold text-[var(--ethiopia-brown)] mb-2 hover-scale">
                <AnimatedCounter 
                  end={parseInt(stat.value.replace(/\D/g, ''))} 
                  suffix={stat.value.includes('+') ? '+' : ''}
                />
              </div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
