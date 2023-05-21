import { LinkNavigation } from "../../../components/LinkNavigation";
import { StyledABout } from "./style";
import { TitlesSectionsAnimations } from "../../../components/Animations/TitlesSectionsAnimations";

export const SectionAbout = () => {
  return (
    <StyledABout>
      <div>
        <TitlesSectionsAnimations title="Sobre Mim" />
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
