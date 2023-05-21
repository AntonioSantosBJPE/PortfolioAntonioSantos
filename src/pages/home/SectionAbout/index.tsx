import { LinkNavigation } from "../../../components/LinkNavigation";
import { StyledABout } from "./style";
import { motion } from "framer-motion";

export const SectionAbout = () => {
  return (
    <StyledABout>
      <div>
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ position: "relative" }}
        >
          <span>#</span>Sobre Mim
        </motion.h2>

        <span></span>
      </div>

      <div>
        <div>
          <p>
            Olá, meu nome é Antonio Santos!
            <br></br>
            <br></br>
            Sou um desenvolvedor full-stack com experiência em diversas
            tecnologias da web e estou entusiasmado em compartilhar com você meu
            conhecimento e projetos neste espaço.
            <br></br>
            <br></br>
            Com um sólido conjunto de habilidades, adquirido ao longo dos anos,
            estou apto a trabalhar em todas as etapas do ciclo de
            desenvolvimento de software. Desde o front-end até o back-end, estou
            familiarizado com uma ampla gama de tecnologias modernas e práticas
            recomendadas para criar aplicativos da web robustos e de alta
            qualidade.
          </p>
          <LinkNavigation
            name="Mais informações <~>"
            to="/about"
            variant="InternalPrimary"
          />
        </div>
        <figure>
          <img src="/geometricsSkills.svg" alt="" />
        </figure>
      </div>
    </StyledABout>
  );
};
