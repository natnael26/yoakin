// Custom SVG illustrations for the construction website

export function ConstructionIllustration() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-auto animate-float"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="400" height="300" fill="#f8f9fa" />
      
      {/* Ground */}
      <rect x="0" y="220" width="400" height="80" fill="#e9ecef" />
      
      {/* Building structure */}
      <rect x="80" y="120" width="100" height="100" fill="var(--ethiopia-brown)" className="animate-slide-up" />
      <rect x="200" y="100" width="120" height="120" fill="var(--ethiopia-chocolate)" className="animate-slide-up delay-200" />
      
      {/* Windows */}
      <rect x="90" y="140" width="15" height="15" fill="#ffffff" />
      <rect x="110" y="140" width="15" height="15" fill="#ffffff" />
      <rect x="150" y="140" width="15" height="15" fill="#ffffff" />
      <rect x="90" y="170" width="15" height="15" fill="#ffffff" />
      <rect x="110" y="170" width="15" height="15" fill="#ffffff" />
      <rect x="150" y="170" width="15" height="15" fill="#ffffff" />
      
      <rect x="220" y="120" width="20" height="20" fill="#ffffff" />
      <rect x="250" y="120" width="20" height="20" fill="#ffffff" />
      <rect x="280" y="120" width="20" height="20" fill="#ffffff" />
      <rect x="220" y="150" width="20" height="20" fill="#ffffff" />
      <rect x="250" y="150" width="20" height="20" fill="#ffffff" />
      <rect x="280" y="150" width="20" height="20" fill="#ffffff" />
      
      {/* Crane */}
      <line x1="40" y1="220" x2="40" y2="60" stroke="var(--ethiopia-gold)" strokeWidth="3" className="animate-pulse" />
      <line x1="40" y1="60" x2="120" y2="60" stroke="var(--ethiopia-gold)" strokeWidth="3" />
      <line x1="120" y1="60" x2="100" y2="90" stroke="var(--ethiopia-gold)" strokeWidth="2" />
      
      {/* Construction workers (simplified) */}
      <circle cx="300" cy="210" r="8" fill="#fbbf24" />
      <rect x="296" y="210" width="8" height="15" fill="#3b82f6" />
      
      <circle cx="350" cy="210" r="8" fill="#fbbf24" />
      <rect x="346" y="210" width="8" height="15" fill="#ef4444" />
    </svg>
  );
}

export function ServicesIllustration() {
  return (
    <svg
      viewBox="0 0 300 200"
      className="w-full h-auto animate-bounce-slow"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tools and equipment */}
      <rect x="50" y="100" width="60" height="80" fill="var(--ethiopia-brown)" rx="5" />
      <rect x="65" y="115" width="30" height="50" fill="#ffffff" rx="2" />
      
      {/* Blueprints */}
      <rect x="140" y="80" width="80" height="60" fill="#ffffff" stroke="var(--ethiopia-chocolate)" strokeWidth="2" />
      <line x1="150" y1="95" x2="210" y2="95" stroke="var(--ethiopia-brown)" strokeWidth="1" />
      <line x1="150" y1="105" x2="190" y2="105" stroke="var(--ethiopia-brown)" strokeWidth="1" />
      <line x1="150" y1="115" x2="200" y2="115" stroke="var(--ethiopia-brown)" strokeWidth="1" />
      
      {/* Safety helmet */}
      <ellipse cx="250" cy="120" rx="25" ry="20" fill="var(--ethiopia-gold)" />
      <ellipse cx="250" cy="115" rx="20" ry="15" fill="#ffffff" />
    </svg>
  );
}

export function QualityIllustration() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-auto animate-spin-slow"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Quality badge */}
      <circle cx="100" cy="100" r="80" fill="var(--ethiopia-brown)" />
      <circle cx="100" cy="100" r="60" fill="var(--ethiopia-gold)" />
      <circle cx="100" cy="100" r="40" fill="#ffffff" />
      
      {/* Checkmark */}
      <path
        d="M75 100 L90 115 L125 80"
        stroke="var(--ethiopia-brown)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TeamIllustration() {
  return (
    <svg
      viewBox="0 0 300 150"
      className="w-full h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Team members */}
      <g className="animate-slide-right">
        <circle cx="60" cy="60" r="25" fill="var(--ethiopia-gold)" />
        <rect x="45" y="85" width="30" height="40" fill="var(--ethiopia-brown)" rx="5" />
      </g>
      
      <g className="animate-slide-right delay-200">
        <circle cx="150" cy="60" r="25" fill="var(--ethiopia-chocolate)" />
        <rect x="135" y="85" width="30" height="40" fill="var(--ethiopia-gold)" rx="5" />
      </g>
      
      <g className="animate-slide-right delay-400">
        <circle cx="240" cy="60" r="25" fill="var(--ethiopia-brown)" />
        <rect x="225" y="85" width="30" height="40" fill="var(--ethiopia-chocolate)" rx="5" />
      </g>
    </svg>
  );
}

export function ProcessIllustration() {
  return (
    <svg
      viewBox="0 0 400 100"
      className="w-full h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Process steps */}
      <circle cx="50" cy="50" r="30" fill="var(--ethiopia-brown)" className="animate-pulse" />
      <text x="50" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
      
      <line x1="80" y1="50" x2="120" y2="50" stroke="var(--ethiopia-gold)" strokeWidth="3" className="animate-draw-line" />
      
      <circle cx="150" cy="50" r="30" fill="var(--ethiopia-chocolate)" className="animate-pulse delay-200" />
      <text x="150" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">2</text>
      
      <line x1="180" y1="50" x2="220" y2="50" stroke="var(--ethiopia-gold)" strokeWidth="3" className="animate-draw-line delay-200" />
      
      <circle cx="250" cy="50" r="30" fill="var(--ethiopia-brown)" className="animate-pulse delay-400" />
      <text x="250" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">3</text>
      
      <line x1="280" y1="50" x2="320" y2="50" stroke="var(--ethiopia-gold)" strokeWidth="3" className="animate-draw-line delay-400" />
      
      <circle cx="350" cy="50" r="30" fill="var(--ethiopia-chocolate)" className="animate-pulse delay-600" />
      <text x="350" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">4</text>
    </svg>
  );
}

// Human figure illustrations for team members
export function TeamMemberIllustration({ type = "default" }: { type?: string }) {
  const getColors = () => {
    switch (type) {
      case "founder":
        return { skin: "#D4A574", shirt: "var(--ethiopia-brown)", helmet: "var(--ethiopia-gold)" };
      case "engineer":
        return { skin: "#8B4513", shirt: "#3b82f6", helmet: "#ffffff" };
      case "manager":
        return { skin: "#C19A6B", shirt: "var(--ethiopia-chocolate)", helmet: "var(--ethiopia-gold)" };
      case "architect":
        return { skin: "#D2B48C", shirt: "#10b981", helmet: "#ffffff" };
      case "supervisor":
        return { skin: "#A0522D", shirt: "#ef4444", helmet: "var(--ethiopia-gold)" };
      case "finance":
        return { skin: "#DEB887", shirt: "#8b5cf6", helmet: "#ffffff" };
      default:
        return { skin: "#D4A574", shirt: "var(--ethiopia-brown)", helmet: "var(--ethiopia-gold)" };
    }
  };

  const colors = getColors();

  return (
    <svg
      viewBox="0 0 100 120"
      className="w-full h-auto animate-float"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head */}
      <circle cx="50" cy="25" r="12" fill={colors.skin} />
      
      {/* Body */}
      <rect x="42" y="35" width="16" height="25" fill={colors.shirt} rx="3" />
      
      {/* Arms */}
      <rect x="35" y="40" width="6" height="15" fill={colors.shirt} rx="3" />
      <rect x="59" y="40" width="6" height="15" fill={colors.shirt} rx="3" />
      
      {/* Legs */}
      <rect x="44" y="60" width="5" height="20" fill="#2c3e50" rx="2" />
      <rect x="51" y="60" width="5" height="20" fill="#2c3e50" rx="2" />
      
      {/* Safety helmet */}
      <ellipse cx="50" cy="20" rx="14" ry="8" fill={colors.helmet} />
      <ellipse cx="50" cy="18" rx="12" ry="6" fill="#ffffff" opacity="0.3" />
      
      {/* Tools/Badge */}
      <rect x="46" y="42" width="8" height="4" fill="var(--ethiopia-gold)" rx="1" />
    </svg>
  );
}

export function ContactIllustration() {
  return (
    <svg
      viewBox="0 0 300 200"
      className="w-full h-auto animate-bounce-slow"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Office building */}
      <rect x="50" y="80" width="80" height="100" fill="var(--ethiopia-brown)" rx="5" />
      
      {/* Windows */}
      <rect x="60" y="100" width="12" height="12" fill="#ffffff" />
      <rect x="78" y="100" width="12" height="12" fill="#ffffff" />
      <rect x="96" y="100" width="12" height="12" fill="#ffffff" />
      <rect x="114" y="100" width="12" height="12" fill="#ffffff" />
      
      <rect x="60" y="120" width="12" height="12" fill="#ffffff" />
      <rect x="78" y="120" width="12" height="12" fill="#ffffff" />
      <rect x="96" y="120" width="12" height="12" fill="#ffffff" />
      <rect x="114" y="120" width="12" height="12" fill="#ffffff" />
      
      {/* Door */}
      <rect x="85" y="150" width="15" height="30" fill="var(--ethiopia-chocolate)" rx="2" />
      
      {/* People approaching */}
      <g className="animate-slide-right">
        <circle cx="180" cy="140" r="8" fill="#D4A574" />
        <rect x="176" y="148" width="8" height="15" fill="#3b82f6" />
        <rect x="174" y="163" width="4" height="12" fill="#2c3e50" />
        <rect x="180" y="163" width="4" height="12" fill="#2c3e50" />
      </g>
      
      <g className="animate-slide-right delay-200">
        <circle cx="210" cy="145" r="8" fill="#8B4513" />
        <rect x="206" y="153" width="8" height="15" fill="var(--ethiopia-brown)" />
        <rect x="204" y="168" width="4" height="12" fill="#2c3e50" />
        <rect x="210" y="168" width="4" height="12" fill="#2c3e50" />
      </g>
      
      {/* Communication symbols */}
      <circle cx="200" cy="50" r="20" fill="var(--ethiopia-gold)" opacity="0.3" className="animate-pulse" />
      <circle cx="200" cy="50" r="15" fill="var(--ethiopia-gold)" opacity="0.5" className="animate-pulse delay-200" />
      <circle cx="200" cy="50" r="8" fill="var(--ethiopia-gold)" className="animate-pulse delay-400" />
    </svg>
  );
}