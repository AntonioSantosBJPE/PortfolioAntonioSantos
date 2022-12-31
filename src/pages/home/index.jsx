import {
  StyledContainerHome,
  StyledInitialInfos,
  StyledProjects,
  StyledSkills,
} from "./style";
import { Link } from "react-router-dom";
import { infosProjectsHomePage } from "../../services/dataBase.js";
import { CardProject } from "../../components/CardProject";

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
            <img
              src="../../../public/my-photo-perfil.png"
              alt="imagem perfil Antonio Santos"
            />
            <img src="../../../public/geometrics1.svg" alt="" />
            <img src="../../../public/geometrics2.svg" alt="" />
          </figure>
        </div>
      </StyledInitialInfos>

      <StyledProjects>
        <div>
          <h2>
            <span>#</span>Projetos
          </h2>
          <span></span>
          <Link to="/projects">{"Todos ~~>"}</Link>
        </div>
        <div>
          <ul>
            {infosProjectsHomePage.map((infos, index) => {
              return <CardProject key={index} infos={infos} />;
            })}
          </ul>
        </div>
      </StyledProjects>

      <StyledSkills>
        <div>
          <h2>
            <span>#</span>Habilidades
          </h2>
          <span></span>
        </div>

        <div>
          <figure>
            <img src="../../../public/geometricsSkills.svg" alt="" />
          </figure>
          <ul>
            <li>
              <div>
                <h3>Linguagens</h3>
              </div>
              <div>
                <h4>JavaScript, TypeScript</h4>
              </div>
            </li>
            <li>
              <div>
                <h3>Frameworks</h3>
              </div>
              <div>
                <h4>React</h4>
              </div>
            </li>
            <li>
              <div>
                <h3>Outros</h3>
              </div>
              <div>
                <h4>HTML, CSS, Styled-components</h4>
              </div>
            </li>
            <li>
              <div>
                <h3>Ferramentas</h3>
              </div>
              <div>
                <h4>VSCode, Figma, Git, GitHub</h4>
              </div>
            </li>
          </ul>
        </div>
      </StyledSkills>
    </StyledContainerHome>
  );
};
