import { CardSkills } from "../../../components/CardSkills";
import { infosSkills } from "../../../services/dataBase";
import { StyledSkills } from "./style";
import { TitlesSectionsAnimations } from "../../../components/Animations/TitlesSectionsAnimations";

export const SectionSkills = () => {
  return (
    <>
      <StyledSkills>
        <div>
          <TitlesSectionsAnimations title="Habilidades" />
          <span></span>
        </div>

        <div>
          <figure>
            <img src="/geometricsSkills.svg" alt="" />
          </figure>
          <ul>
            {infosSkills.map((infos, index) => {
              return <CardSkills key={index} infos={infos} />;
            })}
          </ul>
        </div>
      </StyledSkills>
    </>
  );
};
