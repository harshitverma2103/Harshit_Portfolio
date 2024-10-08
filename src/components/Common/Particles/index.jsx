import React, { useEffect } from "react";
import { gsap } from "gsap";

const generateUniqueId = () => {
  return `particle-${Math.random().toString(36).substr(2, 9)}`;
};

const ParticleEffect = () => {
  const particlesToCreate = 35;
  const particlesToCreateOnHover = 3;
  const particleSize = 8;
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

    const createParticlesPeriodically = () => {
      for (let i = 0; i < particlesToCreate; i++) {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        createParticle(randomX, randomY);
      }
    };

    const handleMouseMove = (event) => {
      for (let i = 0; i < particlesToCreateOnHover; i++) {
        createParticle(event.clientX, event.clientY);
      }
    };

    const particleInterval = setInterval(createParticlesPeriodically, 1000);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(particleInterval);
      window.removeEventListener("mousemove", handleMouseMove);
      particleContainer.remove();
    };
  }, []);

  return null;
};

export default ParticleEffect;
