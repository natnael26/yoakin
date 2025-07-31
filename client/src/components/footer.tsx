import { Building } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4 text-[var(--ethiopia-gold)] flex items-center">
              <Building className="h-8 w-8 mr-2" />
              Habesha Construction
            </div>
            <p className="text-gray-400 mb-4">
              Building Ethiopia's future with excellence, integrity, and innovation for over 20 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[var(--ethiopia-gold)] transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--ethiopia-gold)] transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--ethiopia-gold)] transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--ethiopia-gold)] transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services" className="hover:text-[var(--ethiopia-gold)] transition duration-300">Residential Construction</Link></li>
              <li><Link href="/services" className="hover:text-[var(--ethiopia-gold)] transition duration-300">Commercial Projects</Link></li>
              <li><Link href="/services" className="hover:text-[var(--ethiopia-gold)] transition duration-300">Infrastructure</Link></li>
              <li><Link href="/services" className="hover:text-[var(--ethiopia-gold)] transition duration-300">Industrial Construction</Link></li>
              <li><Link href="/services" className="hover:text-[var(--ethiopia-gold)] transition duration-300">Renovation & Restoration</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-[var(--ethiopia-gold)] transition duration-300">About Us</Link></li>
              <li><Link href="/team" className="hover:text-[var(--ethiopia-gold)] transition duration-300">Our Team</Link></li>
              <li><a href="#" className="hover:text-[var(--ethiopia-gold)] transition duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-[var(--ethiopia-gold)] transition duration-300">News & Updates</a></li>
              <li><Link href="/contact" className="hover:text-[var(--ethiopia-gold)] transition duration-300">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>
                <i className="fas fa-map-marker-alt mr-2"></i>
                Bole Road, Addis Ababa, Ethiopia
              </p>
              <p>
                <i className="fas fa-phone mr-2"></i>
                +251 11 XXX XXXX
              </p>
              <p>
                <i className="fas fa-envelope mr-2"></i>
                info@habeshaconstruction.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Habesha Construction. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
