import ReactParticle from "react-particles-js";

interface ParticleProps {
  qtd: number;
}

export function Particle({ qtd }: ParticleProps) {
  const objectImages = [];

  for (let i = 0; i < qtd; i++) {
    objectImages.push({
      src: "/assets/logo.svg",
      height: 20,
      width: 20,
    });
  }

  return (
    <ReactParticle
      width="100vw"
      height="100vh"
      params={{
        particles: {
          number: {
            value: 350,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.02,
          },

          move: {
            direction: "right",
            speed: 0.5,
          },

          color: {
            value: "#97266D",
          },

          size: {
            value: 3,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 1,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    ></ReactParticle>
  );
}
