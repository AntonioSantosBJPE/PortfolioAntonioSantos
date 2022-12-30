import {
  StyledContainerHome,
  StyledInitialInfos,
  StyledProjects,
} from "./style";
import imgPerfil from "../../assets/my-photo-perfil.png";
import imgGeo1 from "../../assets/geometrics1.svg";
import imgGeo2 from "../../assets/geometrics2.svg";
import { Link } from "react-router-dom";

const caracterSpecialProjects = "Ver todos ~~>";

export const HomePage = () => {
  return (
    <StyledContainerHome>
      <StyledInitialInfos>
        <div>
          <h1>
            Antonio <span>Santos</span>, Desenvolvedor <span>Front-end</span>{" "}
          </h1>
          <h3>
            Sou desenvolvedor Front-end com foco em ReactJs, monitor e estudante
            do curso de Desenvolvimento Web Full Stack da Kenzie Academy Brazil.
          </h3>
        </div>

        <div>
          <figure>
            <img src={imgPerfil} alt="imagem perfil Antonio Santos" />
            <img src={imgGeo1} alt="" />
            <img src={imgGeo2} alt="" />
          </figure>
        </div>
      </StyledInitialInfos>

      <StyledProjects>
        <div>
          <h2>
            <span>#</span>Projetos
          </h2>
          <span></span>
          <Link to="/projects">{caracterSpecialProjects}</Link>
        </div>
        <div>
          <ul></ul>
        </div>
      </StyledProjects>
    </StyledContainerHome>
  );
};
