import { motion } from "framer-motion";
import { ReactNode } from "react";

interface iPageTransitions {
  title: string;
}

export const TitlesSectionsAnimations = ({ title }: iPageTransitions) => {
  return (
    <motion.h2
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{ position: "relative" }}
    >
      <span>#</span>
      {title}
    </motion.h2>
  );
};
