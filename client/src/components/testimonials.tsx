import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="py-20 bg-[var(--ethiopia-beige)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client <span className="text-[var(--ethiopia-brown)]">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600">What our clients say about working with us</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-8 relative animate-fade-in-up hover-lift" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="text-[var(--ethiopia-gold)] text-4xl mb-4">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="text-gray-700 mb-6 italic">
                {testimonial.text}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[var(--ethiopia-brown)] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
