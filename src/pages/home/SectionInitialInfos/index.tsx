import { LinkNavigation } from "../../../components/LinkNavigation";
import { StyledInitialInfos } from "./style";
import { PhotoPerfilAnimation } from "../../../components/Animations/PhotoPerfilAnimation";

export const SectionInitialInfos = () => {
  return (
    <StyledInitialInfos>
      <div>
        <h1>
          Antonio <span>Santos</span>, Desenvolvedor <span>Full-stack</span>
        </h1>
        <h3>
          Bem-vindo ao meu site de portfólio! Sou um desenvolvedor full-stack
          com experiência em diversas tecnologias da web, como React,
          Typescript, CSS, HTML, Node e Python, e estou entusiasmado em
          compartilhar com você meu conhecimento e projetos neste espaço.
        </h3>
        <LinkNavigation
          name="Entre em contato!"
          to="#section__contact"
          variant="ExternalPrimary"
        />
      </div>

      <div>
        <PhotoPerfilAnimation />
      </div>
    </StyledInitialInfos>
  );
};
