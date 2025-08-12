"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "wouter"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import logo from "/logo_big.png";

export function Navigation() {
  const [location] = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const dropdownRefs = useRef<{[key: string]: HTMLDivElement | null}>({})

  const navItems = [
    { 
      href: "/", 
      label: "Home" 
    },
    { 
      href: "/about", 
      label: "About",
      subItems: [
        { href: "/about/company", label: "Our Company" },
        { href: "/about", label: "Our Team" },
        { href: "/about/values", label: "Our Mission,Vision & Values" }
      ]
    },
    { 
      href: "/services", 
      label: "Services",
      subItems: [
        { href: "/services", label: "Construction" },
        { href: "/services/it", label: "IT infrastructure" },
      
        { href: "/services/machinery", label: "Machinery and equipment supply" },
        { href: "#design", label: "Design & Planning" },
       
      
      ]
    },
    { 
      href: "/portfolio", 
      label: "Projects",
      subItems: [
        { href: "/portfolio", label: "Residential" },
        { href: "/portfolio", label: "Commercial" },
        { href: "/portfolio", label: "Infrastructure" }
      ]
    },
    { 
      href: "/careers", 
      label: "Careers" 
    },
  ]

  const isActive = (href: string) => (href === "/" ? location === "/" : location.startsWith(href))

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown(label)
  }

  const handleMouseLeave = (label: string) => {
    timeoutRef.current = setTimeout(() => {
      if (activeDropdown === label) {
        setActiveDropdown(null)
      }
    }, 200) // 200ms delay before closing
  }

  return (
    <nav
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-3" : "bg-white py-5",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="h-16 sm:h-16 w-auto object-contain"
            />
            <span className="hidden sm:inline text-xl font-semibold text-[var(--ethiopia-brown)] tracking-tight">
              Yoakin 
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.href}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={() => handleMouseLeave(item.label)}
              >
                <Link href={item.href} className="relative">
                  <div className="flex items-center">
                    <span
                      className={cn(
                        "text-base font-medium transition-colors duration-200",
                        isActive(item.href) ? "text-primary" : "text-gray-700 hover:text-primary",
                      )}
                    >
                      {item.label}
                    </span>
                    {item.subItems && (
                      <ChevronDown className={cn(
                        "ml-1 h-4 w-4 transition-transform",
                        activeDropdown === item.label ? "rotate-180" : ""
                      )}/>
                    )}
                  </div>

                  {/* Animated underline */}
                  <span className="absolute -bottom-1 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300 ease-in-out" />

                  {/* Active indicator */}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 h-0.5 bg-primary w-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.subItems && (
                  <div 
                    ref={el => dropdownRefs.current[item.label] = el}
                    className={cn(
                      "absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 transition-all duration-200 origin-top",
                      activeDropdown === item.label 
                        ? "opacity-100 scale-y-100 pointer-events-auto" 
                        : "opacity-0 scale-y-95 pointer-events-none"
                    )}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={() => handleMouseLeave(item.label)}
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={cn(
                          "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                          isActive(subItem.href) ? "bg-gray-100" : ""
                        )}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Button className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:shadow-md">
              <Link href='/contact'>Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Menu
                    className={cn(
                      "h-6 w-6 absolute transition-all duration-300",
                      isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0",
                    )}
                  />
                  <X
                    className={cn(
                      "h-6 w-6 absolute transition-all duration-300",
                      isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90",
                    )}
                  />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <div key={item.href}>
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={() => {
                            if (!item.subItems) setIsOpen(false)
                          }}
                          className={cn(
                            "text-lg font-medium transition-colors",
                            isActive(item.href) ? "text-primary" : "text-gray-700 hover:text-primary",
                          )}
                        >
                          {item.label}
                        </Link>
                        {item.subItems && (
                          <button 
                            onClick={() => setActiveDropdown(
                              activeDropdown === item.label ? null : item.label
                            )}
                            className="p-1"
                          >
                            <ChevronDown className={cn(
                              "h-5 w-5 transition-transform",
                              activeDropdown === item.label ? "rotate-180" : ""
                            )}/>
                          </button>
                        )}
                      </div>
                      
                      {/* Mobile Dropdown */}
                      {item.subItems && (
                        <div 
                          className={cn(
                            "ml-4 mt-2 space-y-2 transition-all duration-200 overflow-hidden",
                            activeDropdown === item.label ? "max-h-96" : "max-h-0"
                          )}
                        >
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "block py-2 text-base",
                                isActive(subItem.href) ? "text-primary" : "text-gray-600 hover:text-primary",
                              )}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  <Button
                    className="bg-primary hover:bg-primary/90 text-white w-full mt-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href='/contact'>Contact Us</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}