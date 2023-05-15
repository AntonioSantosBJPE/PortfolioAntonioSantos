import { LinkNavigation } from "../../../components/LinkNavigation";
import { StyledInitialInfos } from "./style";

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
        <figure>
          <img src="/my-photo-perfil.png" alt="imagem perfil Antonio Santos" />
          <img src="/geometrics1.svg" alt="" />
          <img src="/geometrics2.svg" alt="" />
        </figure>
      </div>
    </StyledInitialInfos>
  );
};
