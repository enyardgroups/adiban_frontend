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
      {/* Normal system cursor remains; this is only a blue animated accent */}
      <div className="relative w-12 h-12">
        {/* Outer glow ring */}
        <div
          className={[
            "absolute inset-0 rounded-full",
            "border border-primary/50",
            "blur-[0.2px]",
            "transition-transform duration-150",
          ].join(" ")}
          style={{
            transform: isHovering ? "scale(1.15)" : "scale(1)",
            boxShadow:
              "0 0 16px rgba(59,130,246,0.35), 0 0 28px rgba(6,182,212,0.25)",
            animation: "pulse 1.6s ease-in-out infinite",
          }}
        />

        {/* Soft fill glow */}
        <div
          className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/10"
          style={{
            boxShadow: "0 0 22px rgba(59,130,246,0.25)",
          }}
        />

        {/* Center dot */}
        <div
          className="absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
          style={{
            boxShadow: "0 0 10px rgba(59,130,246,0.55)",
          }}
        />
      </div>
    </div>
  );
};

export default CustomCursor;
