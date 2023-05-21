import { motion } from "framer-motion";
import * as style from "./style";

export const PhotoPerfilAnimation = () => {
  return (
    <motion.figure
      variants={style.variantContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        src="/my-photo-perfil.png"
        alt="imagem perfil Antonio Santos"
        variants={style.variantItem}
      />
      <motion.img
        src="/geometrics1.svg"
        alt="geometrics"
        variants={style.variantItem}
      />
      <motion.img
        src="/geometrics2.svg"
        alt="geometrics"
        variants={style.variantItem}
      />
    </motion.figure>
  );
};
