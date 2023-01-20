import { CardProject } from "../../components/CardProject";
import { Footer } from "../../components/Footer";
import { infosProjectsPageProjects } from "../../services/dataBase";
import { StyledContainerProjects, StyledPageProjects } from "./style";

export const ProjectsPage = () => {
  return (
    <StyledContainerProjects>
      <StyledPageProjects>
        <div>
          <h2>
            <span>/</span>Projetos
          </h2>
        </div>
        <div>
          <ul>
            {infosProjectsPageProjects.map((infos, index) => {
              return <CardProject key={index} infos={infos} />;
            })}
          </ul>
        </div>
      </StyledPageProjects>
      <Footer />
    </StyledContainerProjects>
  );
};
