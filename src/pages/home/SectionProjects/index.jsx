import { CardProject } from "../../../components/CardProject";
import { LinkNavigation } from "../../../components/LinkNavigation";
import { infosProjectsHomePage } from "../../../services/dataBase";
import { StyledProjects } from "./style";

export const SectionProjects = () => {
  return (
    <StyledProjects>
      <div>
        <h2>
          <span>#</span>Projetos
        </h2>
        <span></span>
        <LinkNavigation
          name={"Todos ~~>"}
          to="/projects"
          variant="InternalNoBoardGrey0"
        />
      </div>
      <div>
        <ul>
          {infosProjectsHomePage.map((infos, index) => {
            return <CardProject key={index} infos={infos} />;
          })}
        </ul>
      </div>
    </StyledProjects>
  );
};
