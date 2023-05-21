import { motion } from "framer-motion";
import { ReactNode } from "react";
import { pageVariantsTransitions } from "./style";

interface iPageTransitions {
  children: ReactNode;
}

export const PageTransitions = ({ children }: iPageTransitions) => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariantsTransitions}
    >
      {children}
    </motion.div>
  );
};
