import { useEffect, useRef, useState } from "react";

export default function MouseSpotlight() {
  const spotlightRef = useRef(null);
  const textGlowRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    // Detect touch devices
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const handleMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          const { x, y } = posRef.current;

          if (spotlightRef.current) {
            spotlightRef.current.style.transform = `translate(${x - 400}px, ${y - 400}px)`;
          }
          if (textGlowRef.current) {
            textGlowRef.current.style.transform = `translate(${x - 300}px, ${y - 300}px)`;
          }

          rafRef.current = null;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Main spotlight glow */}
      <div
        ref={spotlightRef}
        className="mouse-spotlight"
        aria-hidden="true"
      />
      {/* Text illumination layer — mix-blend-mode: screen brightens nearby text */}
      <div
        ref={textGlowRef}
        className="mouse-text-glow"
        aria-hidden="true"
      />
    </>
  );
}
