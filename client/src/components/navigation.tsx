import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Building, Menu } from "lucide-react";

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" }
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Building className="h-8 w-8 text-[var(--ethiopia-brown)] mr-2" />
            <span className="text-2xl font-bold text-[var(--ethiopia-brown)]">
              Habesha Construction
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.slice(0, -1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition duration-300 ${
                    isActive(item.href)
                      ? "text-[var(--ethiopia-brown)]"
                      : "text-gray-700 hover:text-[var(--ethiopia-brown)]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact">
                <Button className="bg-[var(--ethiopia-brown)] text-white hover:bg-[var(--ethiopia-chocolate)]">
                  Contact
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="mt-6 space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-3 py-2 text-base font-medium ${
                        isActive(item.href)
                          ? "text-[var(--ethiopia-brown)]"
                          : "text-gray-700 hover:text-[var(--ethiopia-brown)]"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
