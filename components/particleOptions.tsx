export default {
  background: {
    color: {
      value: "#000fff",
    },
    opacity: 0,
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: ["#73EEDC", "#73C2BE", "#776885", "#5F1A37", "#04030F"],
    },
    move: {
      enable: true,
      outMode: "bounce" as const,
      random: false,
      speed: 2,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 15,
    },
  },
  fullScreen: {
    enable: false,
  },
  detectRetina: true,
};
