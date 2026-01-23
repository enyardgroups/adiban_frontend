import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Check if hovering over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Propeller Blades - 4-blade design with proper drone propeller wing shape */}
        <div className={`absolute inset-0 ${isHovering ? 'animate-spin' : 'animate-spin-slow'}`} style={{ transformOrigin: '50% 50%' }}>
          {/* Blade 1 - Top (0 degrees) */}
          <div className="absolute" style={{ 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%) translateY(-14px)',
            transformOrigin: 'center bottom'
          }}>
            <svg width="8" height="28" viewBox="0 0 8 28" className="drop-shadow-lg">
              <defs>
                <linearGradient id="bladeGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(221, 83%, 53%)" stopOpacity="1" />
                  <stop offset="50%" stopColor="hsl(189, 95%, 45%)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="hsl(189, 95%, 45%)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path 
                d="M 4 0 L 7 24 L 4 28 L 1 24 Z" 
                fill="url(#bladeGrad1)"
                style={{ filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.8))' }}
              />
            </svg>
          </div>
          
          {/* Blade 2 - Right (90 degrees) */}
          <div className="absolute" style={{ 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%) translateX(14px) rotate(90deg)',
            transformOrigin: 'left center'
          }}>
            <svg width="8" height="28" viewBox="0 0 8 28" className="drop-shadow-lg">
              <defs>
                <linearGradient id="bladeGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(221, 83%, 53%)" stopOpacity="1" />
                  <stop offset="50%" stopColor="hsl(189, 95%, 45%)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="hsl(189, 95%, 45%)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path 
                d="M 4 0 L 7 24 L 4 28 L 1 24 Z" 
                fill="url(#bladeGrad2)"
                style={{ filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.8))' }}
              />
            </svg>
          </div>
          
          {/* Blade 3 - Bottom (180 degrees) */}
          <div className="absolute" style={{ 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%) translateY(14px) rotate(180deg)',
            transformOrigin: 'center top'
          }}>
            <svg width="8" height="28" viewBox="0 0 8 28" className="drop-shadow-lg">
              <defs>
                <linearGradient id="bladeGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(221, 83%, 53%)" stopOpacity="1" />
                  <stop offset="50%" stopColor="hsl(189, 95%, 45%)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="hsl(189, 95%, 45%)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path 
                d="M 4 0 L 7 24 L 4 28 L 1 24 Z" 
                fill="url(#bladeGrad3)"
                style={{ filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.8))' }}
              />
            </svg>
          </div>
          
          {/* Blade 4 - Left (270 degrees) */}
          <div className="absolute" style={{ 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%) translateX(-14px) rotate(-90deg)',
            transformOrigin: 'right center'
          }}>
            <svg width="8" height="28" viewBox="0 0 8 28" className="drop-shadow-lg">
              <defs>
                <linearGradient id="bladeGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(221, 83%, 53%)" stopOpacity="1" />
                  <stop offset="50%" stopColor="hsl(189, 95%, 45%)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="hsl(189, 95%, 45%)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path 
                d="M 4 0 L 7 24 L 4 28 L 1 24 Z" 
                fill="url(#bladeGrad4)"
                style={{ filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.8))' }}
              />
            </svg>
          </div>
        </div>
        
        {/* Center Hub - Motor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-accent via-primary to-accent border-2 border-primary shadow-xl z-10"
             style={{ 
               boxShadow: '0 0 12px rgba(6, 182, 212, 0.8), inset 0 0 8px rgba(59, 130, 246, 0.4)',
               animation: 'pulse 2s ease-in-out infinite'
             }} />
      </div>
    </div>
  );
};

export default CustomCursor;
