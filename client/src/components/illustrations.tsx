// Custom SVG illustrations for the construction website

export function ConstructionIllustration() {
  return (
    <svg
      viewBox="0 0 800 500"
      className="w-full h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sky Background */}
      <rect width="800" height="500" fill="#E6F0FD" />
      
      {/* Construction Site Ground */}
      <rect x="0" y="400" width="800" height="100" fill="#D4D4D8" />
      <path d="M0 400 Q200 390 400 410 Q600 430 800 400" fill="#A1A1AA" />
      
      {/* Main Building Structure (Clear Progress) */}
      <rect x="150" y="250" width="200" height="150" fill="#FECACA" stroke="#B91C1C" strokeWidth="2" />
      <rect x="150" y="250" width="200" height="50" fill="#FEE2E2" /> {/* Completed portion */}
      
      {/* Visible Construction Elements */}
      <g>
        {/* Steel Beams */}
        <rect x="160" y="300" width="180" height="10" fill="#6B7280" />
        <rect x="240" y="200" width="10" height="100" fill="#6B7280" />
        
        {/* Crane */}
        <rect x="500" y="150" width="15" height="250" fill="#4B5563" />
        <rect x="450" y="150" width="120" height="10" fill="#4B5563" />
        <rect x="450" y="150" width="30" height="5" fill="#1F2937" /> {/* Counterweight */}
        <circle cx="570" cy="155" r="8" fill="#F59E0B" /> {/* Cable hook */}
      </g>
      
      {/* Construction Vehicles (Clearly Recognizable) */}
      <g>
        {/* Excavator */}
        <rect x="50" y="380" width="80" height="30" fill="#DC2626" rx="3" />
        <circle cx="70" cy="410" r="15" fill="#1F2937" />
        <circle cx="110" cy="410" r="15" fill="#1F2937" />
        <rect x="60" y="370" width="40" height="15" fill="#F59E0B" rx="2" /> {/* Cabin */}
        <rect x="30" y="375" width="30" height="10" fill="#9CA3AF" transform="rotate(30 30 375)" /> {/* Arm */}
        
        {/* Cement Mixer */}
        <rect x="650" y="380" width="70" height="30" fill="#2563EB" rx="3" />
        <circle cx="670" cy="410" r="15" fill="#1F2937" />
        <circle cx="710" cy="410" r="15" fill="#1F2937" />
        <circle cx="685" cy="390" r="20" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" /> {/* Mixer drum */}
      </g>
      
      {/* Workers (Clear Silhouettes) */}
      <g>
        {/* Worker Operating */}
        <circle cx="300" cy="370" r="10" fill="#FBBF24" /> {/* Head */}
        <rect x="295" y="370" width="10" height="20" fill="#3B82F6" /> {/* Body */}
        <path d="M300 390 L280 410" stroke="#1F2937" strokeWidth="2" /> {/* Legs */}
        <path d="M300 390 L320 410" stroke="#1F2937" strokeWidth="2" />
        <path d="M300 380 L270 375" stroke="#1F2937" strokeWidth="2" /> {/* Arms */}
        
        {/* Worker with Hardhat */}
        <circle cx="350" cy="370" r="10" fill="#FBBF24" />
        <path d="M340 365 L360 365 L355 375 L345 375 Z" fill="#F59E0B" /> {/* Hardhat */}
        <rect x="345" y="370" width="10" height="20" fill="#EF4444" />
      </g>
      
      {/* Construction Materials */}
      <g>
        <rect x="200" y="420" width="30" height="15" fill="#A8A29E" rx="2" /> {/* Cement bag */}
        <rect x="250" y="420" width="40" height="20" fill="#57534E" rx="2" /> {/* Steel pile */}
        <rect x="550" y="420" width="50" height="10" fill="#78716C" /> {/* Wood planks */}
      </g>
      
      {/* Progress Indicators */}
      <rect x="100" y="230" width="600" height="10" fill="#E5E7EB" rx="5" />
      <rect x="100" y="230" width="300" height="10" fill="#10B981" rx="5" /> {/* Progress bar */}
      <text x="400" y="225" fill="#1F2937" textAnchor="middle" fontSize="14" fontWeight="bold">
        CONSTRUCTION PROGRESS: 50%
      </text>
      
      {/* Company Identification */}
      <text x="400" y="50" fill="#1E40AF" textAnchor="middle" fontSize="24" fontWeight="bold">
      Building the Future
      </text>
      <text x="400" y="80" fill="#4B5563" textAnchor="middle" fontSize="14">
       
      </text>
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