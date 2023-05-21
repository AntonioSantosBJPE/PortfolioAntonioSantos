import { LinkNavigation } from "../../../components/LinkNavigation";
import { StyledInitialInfos } from "./style";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const SectionInitialInfos = () => {
  return (
    <StyledInitialInfos>
      <div>
        <h1>
          Antonio <span>Santos</span>, Desenvolvedor <span>Full-stack</span>{" "}
        </h1>
        <h3>
          Bem-vindo ao meu site de portfólio! Sou um desenvolvedor full-stack
          com experiência em diversas tecnologias da web, como React,
          Typescript, CSS, HTML, Node e SQL e estou entusiasmado em compartilhar
          com você meu conhecimento e projetos neste espaço.
        </h3>
        <LinkNavigation
          name="Entre em contato!"
          to="#section__contact"
          variant="ExternalPrimary"
        />
      </div>

      <div>
        <motion.figure variants={container} initial="hidden" animate="visible">
          <motion.img
            src="/my-photo-perfil.png"
            alt="imagem perfil Antonio Santos"
            variants={item}
          />
          <motion.img src="/geometrics1.svg" alt="geometrics" variants={item} />
          <motion.img src="/geometrics2.svg" alt="geometrics" variants={item} />
        </motion.figure>
      </div>
    </StyledInitialInfos>
  );
};
