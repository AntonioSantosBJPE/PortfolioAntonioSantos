export const pageVariantsTransitions = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  enter: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
