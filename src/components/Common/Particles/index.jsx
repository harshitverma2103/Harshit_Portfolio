import React, { useEffect } from "react";
import { gsap } from "gsap";

const generateUniqueId = () => {
  return `particle-${Math.random().toString(36).substr(2, 9)}`;
};

const ParticleEffect = () => {
  const particlesToCreate = 10;
  const particleSize = 5;
  const particleColor = "#61dafb";

  useEffect(() => {
    const particleContainer = document.createElement("div");
    particleContainer.style.position = "fixed";
    particleContainer.style.top = 0;
    particleContainer.style.left = 0;
    particleContainer.style.pointerEvents = "none";
    particleContainer.style.zIndex = "2";
    document.body.appendChild(particleContainer);

    const createParticle = (x, y) => {
      const particleId = generateUniqueId();
      const particle = document.createElement("div");
      particle.style.position = "absolute";
      particle.style.width = `${particleSize}px`;
      particle.style.height = `${particleSize}px`;
      particle.style.borderRadius = "50%";
      particle.style.background = particleColor;

      const boundedX = Math.min(
        Math.max(x - particleSize / 2, 0),
        window.innerWidth - particleSize
      );
      const boundedY = Math.min(
        Math.max(y - particleSize / 2, 0),
        window.innerHeight - particleSize
      );

      particle.style.left = `${boundedX}px`;
      particle.style.top = `${boundedY}px`;
      particle.setAttribute("id", particleId);

      particleContainer.appendChild(particle);

      const randomX = (Math.random() - 0.5) * 150;
      const randomY = (Math.random() - 0.5) * 300;

      gsap.to(particle, {
        duration: 2,
        x: `+=${randomX}`,
        y: `+=${randomY}`,
        opacity: 0,
        ease: "power2.out",
        onComplete: () => particle.remove(),
      });
    };

    const handleMouseMove = (event) => {
      for (let i = 0; i < particlesToCreate; i++) {
        createParticle(event.clientX, event.clientY);
      }
    };

    const handleScroll = () => {
      const x = window.scrollX + window.innerWidth / 2;
      const y = window.scrollY + window.innerHeight / 2;
      for (let i = 0; i < particlesToCreate; i++) {
        createParticle(x, y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      particleContainer.remove();
    };
  }, []);

  return null;
};

export default ParticleEffect;
