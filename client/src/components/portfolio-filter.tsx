import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

interface PortfolioFilterProps {
  onFilterChange: (category: string) => void;
}

export function PortfolioFilter({ onFilterChange }: PortfolioFilterProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "infrastructure", label: "Infrastructure" }
  ];

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
    onFilterChange(category);
  };

  return (
    <div className="flex flex-wrap justify-center mb-12 space-x-4">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeFilter === category.id ? "default" : "outline"}
          className={`mb-2 px-6 py-2 rounded-full font-semibold transition duration-300 ${
            activeFilter === category.id
              ? "bg-[var(--ethiopia-brown)] text-white"
              : "text-[var(--ethiopia-brown)] border-[var(--ethiopia-brown)] hover:bg-[var(--ethiopia-brown)] hover:text-white"
          }`}
          onClick={() => handleFilterClick(category.id)}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}

export function PortfolioGrid({ filter }: { filter: string }) {
  const filteredItems = filter === "all" 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredItems.map((item) => (
        <div key={item.id} className="portfolio-item group cursor-pointer">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img 
              src={item.image} 
              alt={item.description}
              className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex items-center justify-center">
              <div className="text-white text-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm">{item.category} • {item.year}</p>
                <Button className="mt-4 bg-[var(--ethiopia-gold)] px-4 py-2 rounded-lg font-semibold text-black hover:bg-[var(--ethiopia-chocolate)]">
                  View Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
