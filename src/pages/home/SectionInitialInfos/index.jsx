import { LinkNavigation } from "../../../components/LinkNavigation";
import { StyledInitialInfos } from "./style";

export const SectionInitialInfos = () => {
  return (
    <StyledInitialInfos>
      <div>
        <h1>
          Antonio <span>Santos</span>, Desenvolvedor <span>Front-end</span>{" "}
        </h1>
        <h3>
          Sou desenvolvedor Front-end com foco em ReactJs, TypeScript,
          JavaScript, CSS e HTML.
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
